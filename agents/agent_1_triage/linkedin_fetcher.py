"""
Carregamento do perfil de LinkedIn do candidato.

Em produção, este módulo deveria:
  1) Receber a URL do perfil submetida na candidatura;
  2) Chamar Proxycurl (https://nubela.co/proxycurl) ou similar para extrair
     dados estruturados (headline, experiências, formação, recomendações);
  3) Retornar uma string normalizada para o prompt do agente.

Para o protótipo do hackathon, aceitamos:
  - .txt com texto colado do perfil (ou PDF exportado pela função
    "Save to PDF" nativa do LinkedIn)
  - .pdf com o mesmo conteúdo

Se quiser plugar Proxycurl, defina PROXYCURL_API_KEY no ambiente e
descomente o bloco `fetch_via_proxycurl`.
"""
from __future__ import annotations

import os
from pathlib import Path


def load_linkedin_profile(source: str | Path | None) -> str:
    """Carrega o perfil do LinkedIn a partir de arquivo (txt/pdf) ou URL."""
    if source is None or source == "":
        return ""

    src_str = str(source)

    # Heurística: se parece URL, tenta o caminho via API
    if src_str.startswith("http"):
        return fetch_via_proxycurl(src_str)

    path = Path(src_str)
    if not path.exists():
        return ""

    suffix = path.suffix.lower()
    if suffix == ".txt":
        return path.read_text(encoding="utf-8")
    if suffix == ".pdf":
        # Reusa o parser de PDF do CV
        from cv_parser import _extract_from_pdf

        return _extract_from_pdf(path)

    return ""


def fetch_via_proxycurl(linkedin_url: str) -> str:
    """
    Stub para integração com Proxycurl em produção.

    A implementação real seria algo como:

        import requests
        api_key = os.environ["PROXYCURL_API_KEY"]
        r = requests.get(
            "https://nubela.co/proxycurl/api/v2/linkedin",
            headers={"Authorization": f"Bearer {api_key}"},
            params={"url": linkedin_url, "use_cache": "if-present"},
            timeout=30,
        )
        r.raise_for_status()
        data = r.json()
        return _format_proxycurl_profile(data)
    """
    api_key = os.environ.get("PROXYCURL_API_KEY")
    if not api_key:
        return (
            f"[Perfil de LinkedIn solicitado: {linkedin_url}]\n"
            "[Proxycurl não configurado — usando fallback de texto colado.]\n"
            "[Em produção, defina PROXYCURL_API_KEY para fetch automático.]"
        )

    # Implementação real omitida no protótipo — ver docstring acima.
    raise NotImplementedError(
        "Plugue Proxycurl aqui em produção. Ver docstring."
    )
