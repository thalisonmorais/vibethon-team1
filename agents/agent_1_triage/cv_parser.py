"""
Parser de CV. Aceita PDF (pypdf) e .txt como fallback.
Para escala em produção, recomenda-se usar `unstructured` ou OCR (Tesseract)
para PDFs escaneados.
"""
from __future__ import annotations

from pathlib import Path


def extract_text_from_cv(cv_path: str | Path) -> str:
    """Lê um CV em PDF ou TXT e devolve o texto extraído."""
    path = Path(cv_path)

    if not path.exists():
        raise FileNotFoundError(f"CV não encontrado: {path}")

    suffix = path.suffix.lower()

    if suffix == ".txt":
        return path.read_text(encoding="utf-8")

    if suffix == ".pdf":
        return _extract_from_pdf(path)

    raise ValueError(
        f"Formato de CV não suportado: {suffix}. Use PDF ou TXT."
    )


def _extract_from_pdf(path: Path) -> str:
    try:
        from pypdf import PdfReader
    except ImportError as e:
        raise ImportError(
            "pypdf não instalado. Rode: pip install pypdf"
        ) from e

    reader = PdfReader(str(path))
    chunks: list[str] = []
    for page in reader.pages:
        text = page.extract_text() or ""
        chunks.append(text)

    full = "\n".join(chunks).strip()

    if not full:
        return (
            "[PDF aparentemente é uma imagem escaneada. "
            "Em produção, plugar OCR (Tesseract) aqui.]"
        )

    return full
