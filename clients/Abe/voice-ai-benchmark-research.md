# Voice AI Outbound — Benchmark Research Brief (Internal)

**Client:** Abe Hakawati / MyLoanDesk
**Prepared:** 2026-06-16 by CJ
**Purpose:** Defensible data to answer Abe's "what success metrics should we expect" question without over-promising.

> ⚠️ **Status: INCOMPLETE.** Deep-research run (deep-research workflow, 22 sources, 82 claims) was cut off by the org's monthly Claude spend limit before synthesis and ~95% of fact-check votes ran. Only 4 claims reached full 3-vote verification. The workflow's "refuted" list is mostly `0-0` (votes never executed), NOT genuinely disproven. Re-run for hard benchmarks once the spend limit resets / is raised (claude.ai/admin-settings/usage).

---

## ✅ VERIFIED (3 independent skeptic votes, primary sources)
All four relate to answer rates / caller-ID — they back our caller-ID + number-health architecture.

| Claim | Source | Vote |
|---|---|---|
| 28% of 46.75B unknown calls flagged spam/fraud in 2023 (up from 24% in 2022) | Hiya 2024 State of the Call | 3-0 |
| 46% of unidentified calls go unanswered, even from legit businesses | Hiya | 3-0 |
| 77% of consumers more likely to answer if they know who's calling | Hiya | 3-0 |
| STIR/SHAKEN only flags possible spoofing; showing business NAME requires Rich Call Data (RCD), not STIR/SHAKEN alone | FCC (DOC-415059A1) | 2-0 |

Sources:
- https://blog.hiya.com/2024-state-of-the-call-consumers-prefer-voice-but-spam-and-fraud-are-threats
- https://docs.fcc.gov/public/attachments/DOC-415059A1.pdf

---

## ⚠️ UNVERIFIED — directional only, DO NOT quote to client as promises
These are the appointment/conversion numbers Abe asked about — and they are the weakest data (blogs + vendor marketing). Verification never completed.

- ~16.6% dial-to-connect rate (Cognism, State of Cold Calling)
- 87% of Americans don't answer unknown numbers (resimpli blog)
- Avg cold-call conversion ~4.82%; B2B ~5%, B2C ~10% (resimpli blog aggregator)
- Real-estate funnel: 1,000 calls → ~50 conversations → 5 appointments → 1–2 listings (callin.io blog) ≈ 0.5% call-to-appointment
- Spam-label event → answer rates drop 20–50% overnight (Convoso blog)
- **Beeline AI voice agent: 48.72% conversation-to-lead vs 25% human; 6x conversion, 8x applications (magicblocks.ai)** — VENDOR MARKETING, treat with heavy skepticism

---

## ⚠️ TCPA / REGULATORY — unverified in this run but from law-firm/secondary sources, directionally reliable
- Automated marketing calls to cell phones require **prior express written consent (PEWC)**
- Fines **$500–$1,500 per call/text** + class-action exposure
- Quiet hours: no solicitation before 8am / after 9pm local (GHL enforces 8am–8pm — stricter, so compliant)
- Sept 2025 FCC final rule eliminated the "one-to-one consent" requirement; bundled consent permissible again

Sources (directional): Goodwin Law, Squire Patton Boggs, Urban Institute, ActiveProspect, ConsumerFinancialServicesLawMonitor.

---

## RECOMMENDATION (how we answer Abe)
1. Do NOT put specific appointment/transfer-rate promises in the client email — no verified data to back them.
2. Cite the verified Hiya/FCC answer-rate data to justify the caller-ID/spam strategy.
3. Commit to establishing MyLoanDesk's REAL baseline in a measured pilot, then optimize — instead of quoting borrowed industry figures.
4. Re-run full verified research once spend limit resets for hard benchmarks if Abe still wants them.
