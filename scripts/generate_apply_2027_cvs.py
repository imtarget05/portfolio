"""Generate three track CVs and a JD-specific Bosch draft for Q1/2027.

Run: python3 scripts/generate_apply_2027_cvs.py
The repository's docs/apply-2027-evidence.md is the claim provenance ledger.
"""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
FONT_DIR = Path("/System/Library/Fonts/Supplemental")
pdfmetrics.registerFont(TTFont("ArialCV", str(FONT_DIR / "Arial.ttf")))
pdfmetrics.registerFont(TTFont("ArialCV-Bold", str(FONT_DIR / "Arial Bold.ttf")))
pdfmetrics.registerFontFamily("ArialCV", normal="ArialCV", bold="ArialCV-Bold")

PAGE_W, PAGE_H = 595.28, 841.89  # A4 points
MARGIN = 42
INK = colors.HexColor("#172235")
MUTED = colors.HexColor("#4f5d70")
ACCENT = colors.HexColor("#135c8b")

COMMON = {
    "name": "Mai Nguyen Binh Tan",
    "contact": "Ho Chi Minh City, Vietnam  |  tanmainguyenbinh@gmail.com",
    "links": "github.com/imtarget05  |  linkedin.com/in/mainguyenbinhtan2005",
    "experience": "Fullstack Intern · ERA Group · 3 months — Contributed to frontend and backend features, API integration, and UI components using React, Next.js, Node.js, and PostgreSQL.",
    "education": "University of Information Technology (UIT) · 2023–2027",
}

VARIANTS = {
    "bosch-q1-2027-fullstack-intern": {
        "title": "FULLSTACK ENGINEER INTERN — BOSCH Q1 2027",
        "summary": "Final-year UIT student applying for Bosch's Q1 2027 Fullstack Engineer Internship. Developed Java and Python services with database-backed tests, and contributed to React/Next.js and Node.js features during a fullstack internship.",
        "skills": "Java 17, Spring Boot, SQL, PostgreSQL, MySQL, REST APIs, React, Next.js, Node.js, Python, Docker, GitHub Actions",
        "projects": [
            ("FlashSale-Backend", "github.com/imtarget05/FlashSale-Backend/tree/baf2aa16", "Duplicate and concurrent payment requests required consistent results. Implemented PostgreSQL idempotency and a RabbitMQ outbox; Java CI passed unit and Testcontainers integration checks on the cited commit. The payment provider is simulated."),
            ("retail-finance-core-platform", "github.com/imtarget05/retail-finance-core-platform/tree/7cc7069f", "Ledger retries and partner mismatches required traceable handling. Built Java/MySQL transaction and Python reconciliation examples; main CI passed MySQL 8 integration, a disposable Compose API demo, and reconciliation tests on the cited commit."),
            ("QuanLyKho", "github.com/imtarget05/QuanLyKho/tree/582f4cbf", "Inventory changes required approval and auditability. Built a FastAPI maker/checker workflow with PostgreSQL migrations; main CI passed on the cited commit."),
        ],
    },
    "backend-java": {
        "title": "BACKEND JAVA / FINTECH SOFTWARE ENGINEER",
        "summary": "Early-career engineer focused on reliable transaction APIs, idempotency, and testable distributed workflows. Seeking Junior Backend roles in banking, fintech, and enterprise software.",
        "skills": "Java 17, Spring Boot, REST APIs, PostgreSQL, Redis, RabbitMQ, Docker, GitHub Actions, Python",
        "projects": [
            ("FlashSale-Backend", "github.com/imtarget05/FlashSale-Backend", "Built a payment-service portfolio with PostgreSQL idempotency, RabbitMQ transactional outbox, Redis fallback, and JWT/OIDC boundaries. Unit and Testcontainers integration checks pass in GitHub CI; payment provider defaults to a simulator."),
            ("retail-finance-core-platform", "github.com/imtarget05/retail-finance-core-platform", "Implemented a finance transaction and reconciliation example with Java and Python services. Backend CI and CodeQL pass on main; use this project to explain ledger consistency and exception handling."),
            ("QuanLyKho", "github.com/imtarget05/QuanLyKho", "Built a FastAPI inventory workflow with PostgreSQL migrations and maker/checker approvals. Main CI passes; recent banking extensions on a feature branch require separate verification."),
        ],
    },
    "platform-sre": {
        "title": "PLATFORM / SRE ENGINEER",
        "summary": "Early-career engineer focused on deployment safety, observability, and recovery. Seeking Junior Platform, Cloud, and SRE roles where failures can be measured and rehearsed.",
        "skills": "Azure, AKS, Kubernetes, Terraform, Argo CD, GitHub Actions, Docker, Prometheus, Python",
        "projects": [
            ("AKS-SRE-Platform", "github.com/imtarget05/AKS-SRE-Platform/tree/b5b17d45", "Built GitOps deployment, static policy admission (121 objects passed), and canary rollback automation. Main PR gate, GitOps validation, and SBOM checks pass; decoupled probes prevent cascading restart loops."),
            ("FlashSale-Backend", "github.com/imtarget05/FlashSale-Backend/tree/baf2aa16", "Added deployment and CI configuration for a Java payment service. Pull-request CI covers unit, integration, Docker build, manifests, and Sonar; cloud deployment is not claimed as verified."),
            ("IncidentIQ", "github.com/imtarget05/incidentiq", "Developed a tenant-aware incident retrieval platform with ETL and tool boundaries. A preview deployment succeeded; production reliability and live retrieval quality still require evidence."),
        ],
    },
    "ai-engineer": {
        "title": "AI ENGINEER / RAG SOFTWARE ENGINEER",
        "summary": "Early-career engineer building retrieval and agent workflows with an emphasis on evidence, abstention, and evaluation. Seeking Junior AI Engineer roles with strong software engineering foundations.",
        "skills": "Python, FastAPI, Java, LangGraph, RAG, Qdrant, Ollama, PostgreSQL, evaluation, Docker",
        "projects": [
            ("SmartDoc Corrective RAG", "github.com/imtarget05/Enterprise-Document-Intelligence-Corrective-RAG-Platform/tree/9f8816d", "Built document ingestion, corrective RAG retrieval, and agent workflows. Main CI verified 30-case evaluation and real local CPU inference with llama3.2 via Ollama in CI (run #44115036808); evaluation distinguishes fixtures from live runs."),
            ("CreditFlow", "github.com/imtarget05/CreditFlow", "Built a credit-risk workflow combining model selection, human approval, and a durable ledger example. Describe it as a portfolio simulation, not a production credit decision system."),
            ("IncidentIQ", "github.com/imtarget05/incidentiq", "Built tenant-aware operational retrieval with ETL and TypeScript tool integration. Fake-backed evaluation verifies harness behavior; representative live retrieval measurement remains pending."),
        ],
    },
}


def draw_wrapped(c: canvas.Canvas, text: str, x: float, y: float, width: float,
                 size: float = 9.1, leading: float = 13.1, color=INK) -> float:
    style = ParagraphStyle("body", fontName="ArialCV", fontSize=size, leading=leading,
                           textColor=color, alignment=TA_LEFT)
    paragraph = Paragraph(text, style)
    _, height = paragraph.wrap(width, PAGE_H)
    paragraph.drawOn(c, x, y - height)
    return y - height


def section(c: canvas.Canvas, label: str, y: float) -> float:
    y -= 23
    c.setFont("ArialCV-Bold", 9.5)
    c.setFillColor(ACCENT)
    c.drawString(MARGIN, y, label.upper())
    c.setStrokeColor(colors.HexColor("#d5dce5"))
    c.line(MARGIN, y - 4, PAGE_W - MARGIN, y - 4)
    return y - 16


def generate(slug: str, data: dict) -> Path:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    path = OUTPUT / f"mai-nguyen-binh-tan-{slug}-cv.pdf"
    c = canvas.Canvas(str(path), pagesize=(PAGE_W, PAGE_H))
    c.setTitle(f"Mai Nguyen Binh Tan — {data['title']}")
    c.setAuthor(COMMON["name"])
    y = PAGE_H - 48
    c.setFillColor(INK)
    c.setFont("ArialCV-Bold", 21)
    c.drawString(MARGIN, y, COMMON["name"])
    y -= 23
    c.setFillColor(ACCENT)
    c.setFont("ArialCV-Bold", 10)
    c.drawString(MARGIN, y, data["title"])
    y -= 21
    c.setFillColor(MUTED)
    c.setFont("ArialCV", 8.5)
    c.drawString(MARGIN, y, COMMON["contact"])
    y -= 13
    c.drawString(MARGIN, y, COMMON["links"])

    y = section(c, "Profile", y)
    y = draw_wrapped(c, data["summary"], MARGIN, y, PAGE_W - 2 * MARGIN)
    y = section(c, "Skills", y)
    y = draw_wrapped(c, data["skills"], MARGIN, y, PAGE_W - 2 * MARGIN)
    y = section(c, "Experience", y)
    y = draw_wrapped(c, COMMON["experience"], MARGIN, y, PAGE_W - 2 * MARGIN)
    y = section(c, "Selected projects", y)
    for name, link, description in data["projects"]:
        y -= 17
        c.setFont("ArialCV-Bold", 10)
        c.setFillColor(INK)
        c.drawString(MARGIN, y, name)
        c.setFont("ArialCV", 7.7)
        c.setFillColor(ACCENT)
        c.drawRightString(PAGE_W - MARGIN, y, "View repository")
        c.linkURL("https://" + link, (MARGIN, y - 3, PAGE_W - MARGIN, y + 11), relative=0)
        y -= 9
        y = draw_wrapped(c, description, MARGIN, y, PAGE_W - 2 * MARGIN, size=9.3, leading=13.8)
    y = section(c, "Education", y)
    y = draw_wrapped(c, COMMON["education"], MARGIN, y, PAGE_W - 2 * MARGIN)
    if y < 48:
        raise ValueError(f"{slug} overflows the A4 page: bottom={y:.1f}")
    c.setFont("ArialCV", 7.5)
    c.setFillColor(MUTED)
    c.drawString(MARGIN, 31, "Project claims: github.com/imtarget05/portfolio/blob/main/docs/apply-2027-evidence.md")
    c.showPage()
    c.save()
    return path


if __name__ == "__main__":
    for key, cv in VARIANTS.items():
        print(generate(key, cv))
