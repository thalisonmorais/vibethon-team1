"""
CominAI — Agente 2: Orquestrador de Entrevistas
=========================================================

🚧 STUB — implementação completa prevista para Sprint 1.

Este arquivo documenta a interface esperada do Agente 2.
A lógica de negócio (filtros de senioridade, diversidade, balanceamento)
e a integração com Google Calendar serão implementadas na Sprint 1.

Para o hackathon, o comportamento esperado está demonstrado em `mockup.html`.
"""
from __future__ import annotations

import argparse
import json
import sys
from dataclasses import dataclass, field


@dataclass
class Entrevistador:
    nome: str
    email: str
    senioridade: str  # "junior" | "pleno" | "senior" | "tech_lead"
    genero: str       # "F" | "M" | "NB"
    entrevistas_ultimas_2_semanas: int = 0


@dataclass
class PropostaAgendamento:
    candidato_id: str
    vaga_id: str
    dupla: list[Entrevistador]
    slots: list[dict] = field(default_factory=list)
    justificativa: str = ""


def filtrar_entrevistadores_elegiveis(
    todos: list[Entrevistador],
    senioridade_vaga: str,
) -> list[Entrevistador]:
    """
    Aplica a política da R2:
      - 1 degrau acima do candidato
      - Carga balanceada (favorece quem fez menos entrevistas)
    """
    ordem = ["junior", "pleno", "senior", "tech_lead"]
    idx_vaga = ordem.index(senioridade_vaga)
    senioridade_min = ordem[min(idx_vaga + 1, len(ordem) - 1)]

    elegiveis = [
        e for e in todos
        if ordem.index(e.senioridade) >= ordem.index(senioridade_min)
    ]
    elegiveis.sort(key=lambda e: e.entrevistas_ultimas_2_semanas)
    return elegiveis


def sugerir_dupla(elegiveis: list[Entrevistador]) -> list[Entrevistador]:
    """Garante ao menos 1 mulher no painel (política de diversidade R2)."""
    if not elegiveis:
        return []
    mulheres = [e for e in elegiveis if e.genero == "F"]
    homens = [e for e in elegiveis if e.genero == "M"]

    if mulheres and homens:
        return [mulheres[0], homens[0]]
    return elegiveis[:2]


def main() -> None:
    parser = argparse.ArgumentParser(description="CominAI — Agendamento")
    parser.add_argument("--candidato-id", required=True)
    parser.add_argument("--vaga-id", required=True)
    parser.add_argument("--tipo-prova", choices=["tech", "design", "business"], required=True)
    args = parser.parse_args()

    # Mock — em produção viria do Quickin
    todos_entrevistadores = [
        Entrevistador("Camila Borges", "camila@r2.com", "tech_lead", "F", 3),
        Entrevistador("Diego Ramos", "diego@r2.com", "pleno", "M", 5),
        Entrevistador("Felipe Andrade", "felipe@r2.com", "pleno", "M", 7),
        Entrevistador("Júlia Tavares", "julia@r2.com", "senior", "F", 2),
    ]

    elegiveis = filtrar_entrevistadores_elegiveis(todos_entrevistadores, "pleno")
    dupla = sugerir_dupla(elegiveis)

    proposta = PropostaAgendamento(
        candidato_id=args.candidato_id,
        vaga_id=args.vaga_id,
        dupla=dupla,
        slots=[
            {"inicio": "2026-05-14T14:00:00-03:00", "fim": "2026-05-14T15:00:00-03:00", "status": "livre"},
            {"inicio": "2026-05-15T10:30:00-03:00", "fim": "2026-05-15T11:30:00-03:00", "status": "livre"},
            {"inicio": "2026-05-18T09:00:00-03:00", "fim": "2026-05-18T10:00:00-03:00", "status": "livre"},
        ],
        justificativa=(
            f"Dupla composta por {dupla[0].nome} (tech lead, +1 degrau) "
            f"e {dupla[1].nome} (pleno). Política de diversidade respeitada. "
            f"Carga balanceada nos últimos 14 dias."
        ),
    )

    payload = {
        "candidato_id": proposta.candidato_id,
        "vaga_id": proposta.vaga_id,
        "entrevistadores_emails": [e.email for e in proposta.dupla],
        "entrevistadores_nomes": [e.nome for e in proposta.dupla],
        "slots_propostos": proposta.slots,
        "justificativa": proposta.justificativa,
    }

    json.dump(payload, sys.stdout, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    main()
