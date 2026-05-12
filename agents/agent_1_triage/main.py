"""
CominAI — Agente 1: Triagem Inteligente de Candidatos
================================================================

Recebe a descrição de uma vaga, o CV (PDF) e dados do LinkedIn de um candidato
e devolve um JSON estruturado com:
  - score de aderência (0-100)
  - pontos fortes
  - gaps
  - sinais qualitativos
  - perguntas extras personalizadas para a ligação
  - recomendação final

Uso:
  python main.py --vaga <txt> --cv <pdf> --linkedin <txt|pdf>
  python main.py --batch <dir>

O diretório de batch deve conter:
  - vaga.txt
  - candidatos/<nome>/cv.pdf
  - candidatos/<nome>/linkedin.txt
"""
from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path
from typing import Any

from anthropic import Anthropic

from cv_parser import extract_text_from_cv
from linkedin_fetcher import load_linkedin_profile
from prompts import build_triage_prompt, SYSTEM_PROMPT


MODEL = "claude-sonnet-4-5"


def triage_candidate(
    client: Anthropic,
    vaga_text: str,
    cv_text: str,
    linkedin_text: str,
    candidate_name: str = "Candidato",
) -> dict[str, Any]:
    """Roda a triagem em um único candidato e devolve o JSON estruturado."""
    prompt = build_triage_prompt(
        vaga_text=vaga_text,
        cv_text=cv_text,
        linkedin_text=linkedin_text,
        candidate_name=candidate_name,
    )

    response = client.messages.create(
        model=MODEL,
        max_tokens=4096,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": prompt}],
    )

    raw_text = response.content[0].text.strip()

    # O prompt pede saída em JSON. Removemos cercas de markdown se vierem.
    if raw_text.startswith("```"):
        raw_text = raw_text.split("```")[1]
        if raw_text.startswith("json"):
            raw_text = raw_text[4:]
        raw_text = raw_text.strip()

    try:
        result = json.loads(raw_text)
    except json.JSONDecodeError as e:
        print(f"⚠️  Falha ao parsear JSON do modelo: {e}", file=sys.stderr)
        print("Resposta crua:\n", raw_text, file=sys.stderr)
        result = {"erro_parse": True, "raw": raw_text}

    result["candidato"] = candidate_name
    return result


def run_single(args: argparse.Namespace, client: Anthropic) -> None:
    vaga_text = Path(args.vaga).read_text(encoding="utf-8")
    cv_text = extract_text_from_cv(args.cv)
    linkedin_text = load_linkedin_profile(args.linkedin)
    candidate_name = Path(args.cv).stem

    result = triage_candidate(
        client=client,
        vaga_text=vaga_text,
        cv_text=cv_text,
        linkedin_text=linkedin_text,
        candidate_name=candidate_name,
    )

    print(json.dumps(result, indent=2, ensure_ascii=False))


def run_batch(args: argparse.Namespace, client: Anthropic) -> None:
    base = Path(args.batch)
    vaga_path = base / "vaga.txt"
    if not vaga_path.exists():
        print(f"❌ Não achei {vaga_path}", file=sys.stderr)
        sys.exit(1)

    vaga_text = vaga_path.read_text(encoding="utf-8")
    candidatos_dir = base / "candidatos"

    if not candidatos_dir.exists():
        print(f"❌ Não achei {candidatos_dir}", file=sys.stderr)
        sys.exit(1)

    rankings: list[dict[str, Any]] = []

    for cand_dir in sorted(candidatos_dir.iterdir()):
        if not cand_dir.is_dir():
            continue

        cv_files = list(cand_dir.glob("cv.*"))
        linkedin_files = list(cand_dir.glob("linkedin.*"))

        if not cv_files:
            print(f"⏭️  {cand_dir.name}: sem CV, pulando")
            continue

        cv_text = extract_text_from_cv(cv_files[0])
        linkedin_text = (
            load_linkedin_profile(linkedin_files[0]) if linkedin_files else ""
        )

        print(f"🔎 Avaliando {cand_dir.name}...", file=sys.stderr)
        result = triage_candidate(
            client=client,
            vaga_text=vaga_text,
            cv_text=cv_text,
            linkedin_text=linkedin_text,
            candidate_name=cand_dir.name,
        )
        rankings.append(result)

    # Ordena por score desc
    rankings.sort(key=lambda x: x.get("score", 0), reverse=True)

    print(json.dumps(rankings, indent=2, ensure_ascii=False))

    # Salva relatório também em arquivo
    out_path = base / "ranking.json"
    out_path.write_text(
        json.dumps(rankings, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    print(f"\n✅ Ranking salvo em {out_path}", file=sys.stderr)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="CominAI — Triagem de candidatos com Claude"
    )
    parser.add_argument("--vaga", help="Caminho do .txt com a descrição da vaga")
    parser.add_argument("--cv", help="Caminho do PDF do CV")
    parser.add_argument(
        "--linkedin",
        help="Caminho do .txt/.pdf com o perfil do LinkedIn (exportado)",
    )
    parser.add_argument(
        "--batch",
        help="Diretório com vaga.txt e candidatos/<nome>/ contendo cv.pdf e linkedin.txt",
    )
    args = parser.parse_args()

    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print(
            "❌ Defina a variável de ambiente ANTHROPIC_API_KEY",
            file=sys.stderr,
        )
        sys.exit(1)

    client = Anthropic(api_key=api_key)

    if args.batch:
        run_batch(args, client)
    elif args.vaga and args.cv:
        run_single(args, client)
    else:
        parser.print_help()
        sys.exit(1)


if __name__ == "__main__":
    main()
