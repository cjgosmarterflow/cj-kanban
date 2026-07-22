# Harvey — Project Documentation

**Last updated:** 2026-07-18

---

## Status

Active — CJ is primary consultant. Woodstock sending domain verified green (Jun 24). Alpharetta chatbot "Ashley" hallucination fixed (Jul 18). Pipeline regression (Apr) unverified — next priority.

---

## Client

- **Name:** Harvey Hillyer
- **Company:** dermani MEDSPA® (multi-location franchise)
- **Email:** harvey@dermanimedspa.com | CC: marketing@dermanimedspa.com, digital@dermanimedspa.com
- **Phone:** 877-337-6264 | Cell: 770-286-3235
- **Stephanie** (admin@dermanimedspa.com) — GoDaddy / domain admin contact

---

## Scope (from Projects Master)

- Woodstock sub-account: sending domain (woodstock.dermanimedspa.co) DNS verification
- Pipeline-status regression (April 2026) — confirm resolved
- Per-location franchise buildouts (new sub-accounts = new pipelines/workflows/domain setup)

---

## GHL Sub-accounts

| Location | GHL ID | Domain | Status |
|---|---|---|---|
| Woodstock | Sx1pflmJdApprLCcpUXy | woodstock.dermanimedspa.co | Sending domain verified green (Jun 24) |
| Marketing Requests | wkKKyoasEMmZcCu47neM | — | Centralized social scheduling hub; all location FB pages connected here |
| North Buckhead | OiGUzjUOJqRnX8TUGUsa | — | Active |
| Alpharetta | TBD | — | Chatbot "Ashley" fixed Jul 18 (Conversation AI) |
| Corporate + others | TBD | TBD | Not yet audited |

---

## Open Items

- [x] Harvey provides GoDaddy access — Stephanie joined DNS call 2026-06-24
- [x] Woodstock sending domain verified green (Jun 24)
- [x] Alpharetta chatbot "Ashley" fixed (Jul 18) — cherry angiomas + Sunday hours FAQ entries added
- [x] Social Planner META comments — confirmed platform limitation; KP informed (Jul 9)
- [ ] Confirm pipeline-status regression (Apr) resolved — manual GHL check needed
- [ ] Audit all sub-accounts and document full scope
- [ ] Confirm Alpharetta sub-account GHL ID

---

## Activity Log

### 2026-07-21
- Weekly billing sent for week 07/13-07/17: 1:00 hr, $55.00 (1h minimum). Task: Check Alpharetta chatbot (0:24:52).
- Context flush + all client files updated (UPDATE.md, PROJECTDOC.md, HANDOFF.md, CLAUDE.md)

### 2026-07-18
- KP reported Alpharetta bot "Ashley" gave wrong info to 2 leads (cherry angiomas + Sunday hours)
- Full read-only audit via Claude in Chrome: knowledge base (26 URLs + 29 FAQs), Business Profile, ~30 workflows
- Root cause 1: cherry angiomas — hallucination from IPL Photofacial content (no entry existed; bot inferred from "benign pigments + broken capillaries")
- Root cause 2: Sunday hours — scraped facials page had no Sunday data; FAQ correct but bot hit wrong source
- Fix: added 2 FAQ entries in Alpharetta Conversation AI > Bot Training: cherry angiomas (not treated) + Sunday hours (closed)
- Draft reply to KP saved explaining root causes and fixes
- Solution: explicit FAQ entries prevent hallucination on both topics going forward

### 2026-07-09
- KP (marketing@dermanimedspa.com) reported Social Planner comments not showing in location sub-accounts
- Investigated + confirmed with 2 GHL support reps: platform limitation — Facebook page can only show comments in one sub-account; Marketing Requests holds the active connection
- Replied to KP confirming limitation; Marketing Requests is correct centralized hub
- KP followed up asking if scheduling + comments can be split across sub-accounts — confirmed not possible per GHL limitation
- Drafted reply explaining both options; recommended keeping Marketing Requests as hub
- Also addressed GHL AI Employee promo in reply

### 2026-06-24
- DNS troubleshooting call with Stephanie
- Root cause: CNAME `woodstock` on `.co` domain blocked MX/TXT records (CNAME carried over incorrectly from `.com` funnel setup)
- Stephanie deleted CNAME in GoDaddy; MX + TXT records added successfully
- Emailed Harvey confirming fix; GHL verification pending

### 2026-06-22
- Harvey forwarded sending domain verification email (Nica bounced)
- Jonathan introduced CJ; Harvey replied positively
- CJ requested GoDaddy access to fix DNS — awaiting Harvey reply

### 2026-06-08
- Jonathan intro CJ to Harvey as Nica cover
- Harvey replied, CJ replied
