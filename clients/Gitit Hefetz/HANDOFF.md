# Gitit Hefetz — Handoff Notes
**Company:** NEMI Connect / MiConnect
**Last updated:** 2026-07-21

---

## Transition Context
- New client — free consulting call 2026-07-03
- Gitit Hefetz — Owner — gitithef@gmail.com — (984) 302-4062
- No prior consultant history

## Snapshot
Trade show skincare sales network. Customer buys $300+ at a trade show booth, scans one of 3 QR codes, uploads receipt, gets a free facial voucher at one of 3 partner spas, books on that spa's calendar. Gitit takes 6% revenue share, trade show owner 8%, tracked manually for now. **Scope revised 2026-07-17: 2→3 spas, deposit REMOVED from MVP (phase 2 now), everything ×3 (QR/form/calendar/pipeline/fields/workflow/login, nothing shared). Revised MVP estimate: 7-9 hours ($385-$495). BUILD STARTED 2026-07-17 — most of it already done, see below.**

## What Exists (confirmed)
- Project brief document from Gitit (pre-call)
- Fireflies call recap (2026-07-03)
- Revised scope email from Gitit (2026-07-17)
- 3 pipelines, 3 calendars, 3 custom field sets, 3 forms, 3 reminder workflows, 3 QR codes, and the process flowchart — all built 2026-07-17
- 3 Form Submitted workflows, full E2E test across all 3 spas, 2-way Opportunity↔Contact field sync — built 2026-07-21
- Follow-up scope clarification email from Gitit (2026-07-18) re: consent checkboxes, Thank You page copy, Trade Show Partner ID/QR reporting

## What Does NOT Exist (still needs to be built)
- 3 scoped spa logins
- Full end-to-end test across all 3 spas
- Walkthrough doc
- 2nd consent checkbox on the forms (optional, spa/MiConnect promo opt-in) — per 07-18 email
- Thank You page — SIMPLIFIED per 07-21 email: no spa details, no two-stage reveal, just a standard page telling the customer a spa will contact them + fine print disclaimer, using Gitit's own text/picture. **BLOCKED — image never arrived despite 2 requests (07-18, 07-21). Keep chasing before building this.**
- Trade Show Partner ID hidden field + custom field, tagged per QR via trigger link URL param — per 07-18 email
- Event/Trade Show name hidden field + custom field — NEW per 07-21 email, second attribution dimension since a partner attends multiple events over time with the same QR
- Spa Name custom field — NEW per 07-21 email, for easier cross-spa report filtering later (spa separation already exists structurally via per-spa pipelines, this is just convenience)
- Phase 2 (not this build): calendar connection to "MiConnect calendar" + $25 deposit via post-booking text link
- Phase 3 (not scoped): reporting/invoicing automation off Net Purchase Amount — she explicitly does NOT want this built now, only wants underlying data structure to support it without a rebuild later

## Access Status
| System | Status |
|---|---|
| GHL admin access | GRANTED — support@gosmarterflow.com added |
| Payment on file | PAID — $1 verification cleared 2026-07-17 |
| Spa #1/#2/#3 details | NOT YET — still needed once Thank You page shows spa-specific info |
| Stripe account(s) | NOT YET — phase 2 item, not urgent |

## Risks
- Deposit removed from MVP — do not build Stripe/deposit flow into this phase, it's phase 2
- **QR codes: trigger-link layer DROPPED 2026-07-21 (CJ decision, "didn't make sense at this stage"). Now direct QR→form links. This means reassigning a QR to a different spa requires reissuing the QR — directly contradicts Gitit's explicit written request ("without creating a new QR code"). NOT YET communicated to her. Highest-priority item to flag before her next trade show.**
- Zip-code routing (future phase) explicitly needs a custom AI/workaround since GHL can't natively branch on thousands of zip codes — no estimate committed yet, don't scope-creep it into MVP
- She's anxious about cost/scope creep — always flag before exceeding the estimate (now 7-9 hrs)
- "MiConnect calendar" (phase 2) is ambiguous — confirm whether it's a GHL calendar or an external tool before estimating further
- Payment info: never send/receive card details unencrypted — secure payment link only

## Key Numbers
- MVP estimate (revised, no deposit): 7-9 hours ($385-$495 max) — QUOTED to Gitit 2026-07-17
- Phase 2 estimate (calendar connection + $25 deposit): 1-2 hours ($55-$110) — QUOTED to Gitit 2026-07-17. Tighter than the 3-5hr internally discussed; "MiConnect calendar" is still undefined, watch hours closely against this number.
- Rate: $55/hr, pay-as-you-go, no retainer
- First billing sent 07/13-07/17: 4:00 hrs, $220.00 (card on file)
- Revenue share: Gitit 6%, trade show owner 8%, spa keeps rest (tracked manually — phase 3 wants this automated)
- 3 spas for this MVP, eventual scale target up to ~50

## First Call After Discovery
- N/A — no second call scheduled; working via email thread

## Pending (as of 2026-07-21)
- Waiting: Gitit to resend the Thank You page image — asked twice (07-18, 07-21 draft replies), still not received
- Waiting: spa content for all 3 spas (name/photo/description/contact) — lower priority now since Thank You page no longer shows spa details
- To do: build 2nd consent checkbox, Trade Show Partner ID field, Event/Trade Show name field, Spa Name field, and the simplified Thank You page (once image arrives)
- To do: 3 scoped spa logins, full E2E test, walkthrough doc, confirm naming convention consistency
- Kanban board (client_id: gitit) is live and current — 9 of 15 cards done as of 2026-07-17, needs new cards added for the 07-21 attribution fields + thank-you simplification
