# Gitit Hefetz — Project Documentation
**Company:** NEMI Connect / MiConnect
**Consultant:** CJ Salamida
**Status:** Active — build in progress, ahead of estimate. Awaiting Thank You page image + spa content.
**Last updated:** 2026-07-21

---

## Project A — NEMI Connect MVP (REVISED SCOPE, no deposit)

**Goal:** Trade-show-to-spa referral pipeline, simplified for a light, low-error initial rollout. Gitit found a partner with a large spa network and expects fast growth, so this build must be clean and repeatable per spa from day one. Deposit collection removed from MVP entirely — added back in phase 2.

**Business model context:**
- Gitit runs/knows trade show sales teams selling skincare nationwide
- Customer spends $300+ → qualifies for free facial voucher at a partner spa
- 3 trade show partners / 3 spas for this MVP (up from 2 in the original scope)
- Revenue share (6% Gitit / 8% trade show owner / spa keeps rest) still tracked manually — reporting/invoicing automation is a phase 3 ask, not yet scoped

**Revised flow (no deposit in MVP, thank-you page simplified per 2026-07-21 email — see below):**
```
Customer buys $300+ at trade show booth
    ↓
Scans one of 3 QR codes (DIRECT link → that spa's form, plain QR, no trigger-link
layer — see decision note below. URL still carries Trade Show Partner ID + Event/
Trade Show name via URL parameters — see Attribution Structure section below)
    ↓
GHL form (one per spa, NOT shared): First Name, Last Name, Email, Phone, ZIP code,
receipt photo upload, 2 consent checkboxes (1 required: calls/texts/emails re: the
facial request — gates the voucher; 1 optional: spa/MiConnect promo opt-in)
    ↓
Lead auto-captured in GHL → that spa's pipeline, tagged with Partner ID + Event name
    ↓
STANDARD Thank You page (no spa details, per Gitit's 2026-07-21 simplification —
she is supplying her own text + picture, NOT YET RECEIVED, asked her to resend):
lets customer know a participating spa will review their info and contact them,
plus a fine-print disclaimer line. No longer says "we are locating your nearest
spa partner" with a later spa-name/photo upgrade — that whole two-stage idea is
dropped, this is just the final MVP thank-you page.
    ↓
Spa schedules appointment on ITS OWN calendar
    ↓
Automated reminders fire off that spa's workflow:
  - Email only, 2 days before
  - Email + SMS, 1 day before
  - Email + SMS, 2 hours before
    ↓
Customer attends → spa marks Attended + Facial Date, enters Total Purchase Amount
+ Net Purchase Amount (Total minus financing/deferred-payment fees)
```

**Attribution structure (added per Gitit's 2026-07-21 email, future-proofing for reporting she does NOT want built yet):**
She wants to eventually report on: leads per trade show partner AND per specific event, lead-to-customer conversion, which spa received each lead, purchase amount per customer, which event generated each customer. Each spa will also eventually get its own login (already planned) and she wants separate reports per spa AND per partner later.

Gap identified: a Partner ID alone isn't enough since the same partner attends multiple different events over time with the same QR — Event/Trade Show name needs to be a second, separate tag captured at scan time, not just Partner ID.

Decision: add a second hidden field / URL parameter for Event/Trade Show name alongside the Partner ID, riding on the same QR-link URL (see decision note below — this is now a direct link, not a trigger link). Also add a simple Spa Name custom field so cross-spa exports/filtering don't require cross-referencing which pipeline a record sits in (spa separation already exists structurally via per-spa pipelines, this is just for easier filtering later). Purchase amount and attendance are already captured via existing custom fields — no new fields needed there. NOT building actual reports now, only ensuring the data is captured correctly from day one so nothing has to be rebuilt later.

**DECISION 2026-07-21 — trigger links dropped:** CJ removed the trigger-link layer from the build (didn't make sense at this stage). QR codes now point via a plain direct link straight to each spa's form, carrying Partner ID + Event name as URL parameters baked into that link.

⚠️ **Client-facing risk:** this contradicts something Gitit explicitly asked for in her clarification email — "I need to be able to manually change which spa that QR code is assigned to without creating a new QR code." With a direct link (no trigger link/redirect layer), reassigning a QR to a different spa now DOES require reissuing the QR code, since the destination is baked directly into the link the QR encodes. Partner ID and Event tagging still work fine either way (they're just URL params), but the "reassign without reissuing" capability she specifically requested is currently NOT there. Flag this to her before she finds out the hard way at the next trade show — either revisit the trigger-link approach later, or set expectations now that reassignment means a new QR per spa change.

**Spa-side mechanics — build detail (implemented):**
- Scheduling / no-show handling: pipeline stage change to "No Show" + appointment status field updated to "No Show" when applicable
- Attendance: pipeline stage change to "Visited" + appointment status field updated to "Showed" when the customer attends
- Facial date: captured automatically at booking time — when the appointment is booked, the "appointment date/time" custom field updates
- Total Purchase Amount + Net Purchase Amount: configured as custom field folders for easy access, manual entry (per spa)
- **2-way sync built between Opportunity fields and Contact fields** — custom field values entered on either the Opportunity or the Contact record sync to the other automatically, so spas don't need to re-enter the same data twice regardless of which record type they're working from

**Everything is ×3 — nothing shared across spas:**

| Component | Count | Notes |
|---|---|---|
| QR codes | 3 | Each → direct link to its spa's form (no trigger-link layer, dropped 2026-07-21). Reassigning to a different spa now requires reissuing the QR — was supposed to be reassignable without reissuing, see decision note above |
| Forms | 3 | One per spa. Same fields, not shared submissions |
| Calendars | 3 | One per spa |
| Pipelines | 3 | One per spa — GHL permission scoping is per-pipeline, cleanest way to guarantee no cross-spa lead leakage |
| Custom field sets | 3 | Total Purchase Amount, Net Purchase Amount, Attended?, Facial Date — duplicated per spa |
| Workflows (reminders) | 3 | Each spa's own reminder cadence tied to its own calendar |
| Logins | 3 | Each spa user scoped to only its own form's leads, calendar, fields, pipeline |

**MVP scope (revised, no Stripe/deposit):**
- Configure GHL account for the pilot
- 3 dynamic QR codes with reassignable destinations
- 3 separate GHL forms (name split first/last, email, phone, ZIP, receipt upload non-blocking, required consent checkbox)
- Auto-create leads per spa's pipeline
- Generic thank-you page copy (spa-specific version deferred)
- 3 spa calendars for appointment scheduling
- 3 sets of custom fields (Attended?, Facial Date, Total Purchase Amount, Net Purchase Amount)
- 3 reminder workflows (2-day email, 1-day email+SMS, 2-hour email+SMS)
- 3 scoped spa logins (view: name/email/phone/ZIP/receipt; edit: scheduling, attendance, purchase fields)
- Simple flowchart deliverable of the process
- Full end-to-end test across all 3 spas before handoff
- Short walkthrough doc at handoff

**Estimated scope:** 7-9 hours ($385-$495 max) — flag Gitit before exceeding without approval

**Naming convention (lock before build):** e.g. `NEMI - Spa1 - Form`, `NEMI - Spa1 - Calendar`, `NEMI - Spa1 - Pipeline`, `NEMI - Spa1 - Workflow` — consistent per spa across every component since it's ×3 everywhere.

**Things needed from her:**
- GHL admin access (support@gosmarterflow.com added as staff)
- Payment info — CJ to send secure payment link only, she does not want to send card details unencrypted
- Confirmation of what "basic setup" she already did in GHL, for CJ to review before starting
- Spa content for all 3 spas (name, photo, description, contact) — needed once thank-you page is upgraded to show spa info

**Next steps:**
- [x] Send Gitit hours estimate (7-9 hrs / $385-$495) + phase 2 timeline + phase 2 estimate — SENT 2026-07-17
- [x] Gitit pays $1 card verification via secure link — PAID
- [x] Gitit adds support@gosmarterflow.com to GHL staff — GRANTED
- [x] CJ reviews Gitit's existing "basic setup" in GHL before starting — DONE 2026-07-17, 12:04-12:27 PM
- [ ] Lock naming convention across all 3 spas (not explicitly logged as a separate step — confirm naming held consistent across the builds below)
- [x] Build 3 dynamic QR codes + trigger links — DONE 2026-07-17, 3:28-4:20 PM
- [x] Build 3 separate GHL forms — DONE 2026-07-17, 1:52-2:08 PM
- [x] Build 3 pipelines — DONE 2026-07-17, 12:45-12:51 PM
- [x] Build 3 calendars — DONE 2026-07-17, 1:08-1:20 PM
- [x] Build 3 custom field sets — DONE 2026-07-17, 1:27-1:40 PM
- [x] Build 3 reminder workflows — DONE 2026-07-17, 2:26-3:09 PM
- [x] Build flowchart deliverable — DONE 2026-07-17, 11:42-11:52 AM
- [ ] Set up 3 scoped spa logins
- [x] Test full journey end to end, all 3 spas — DONE 2026-07-21
- [x] Build 3 Form Submitted workflows (one per spa) — DONE 2026-07-21, not originally itemized separately, added alongside the reminder workflows
- [ ] Deliver walkthrough doc
- [x] Reply sent to Gitit's 07-18 email — progress update (9/15 build tasks done) + confirmed 2nd checkbox + asked her to resend the missing image + explained Partner ID reassignment/reporting mechanism
- [ ] Add 2nd (optional) consent checkbox to all 3 forms
- [ ] Add Trade Show Partner ID hidden field + custom field, tagged per QR via trigger link URL param
- [ ] Add Event/Trade Show name hidden field + custom field (NEW per 07-21 email — second attribution dimension alongside Partner ID)
- [ ] Add Spa Name custom field for easier cross-spa filtering later (NEW per 07-21 email)
- [ ] Simplify Thank You page: drop spa-details/two-stage plan entirely, use Gitit's own text + picture (NOT YET RECEIVED, requested resend twice — 07-18 and 07-21 drafts) + add fine-print disclaimer line
- [x] Reply drafted to Gitit's 07-21 simplification email — confirmed checkbox/thank-you simplification, flagged missing image again, proposed Event ID + Spa Name fields as the "simple addition now" she asked about

---

## Project B — Phase 2 (calendar connection + $25 deposit)

Expected to start same week MVP is live and tested, pending Gitit's approval.

- Connect system to a "MiConnect calendar" (Gitit's own master calendar — clarify whether this is a GHL calendar or external tool)
- Optional $25 deposit — NOT collected on the original form. Requested only after appointment is scheduled, via a spa-sent text with a secure deposit-payment link. Appointment/calendar record must clearly reflect deposit received.
- If a spa collects deposit through its own separate system, that stays outside GHL entirely

**Estimated scope:** 1-2 hours ($55-$110) — quoted to Gitit 2026-07-17. Tighter than the 3-5hr internal estimate; risk is "MiConnect calendar" scope turning out bigger than expected once defined. Watch actual hours closely against this number.

**Architecture note — payment processor per spa:** GHL allows only ONE payment processor connected per sub-account. If a spa uses a processor other than Stripe for its deposit, that spa needs its own separate sub-account rather than sharing the shared NEMI Connect account the ×3 MVP components live in. Doesn't affect MVP (no deposit collected yet). Decide this before phase 2 build starts — affects both the estimate and whether any MVP components need migrating to per-spa sub-accounts.

---

## Project C — Phase 3 (reporting + invoicing) — NOT YET SCOPED

- Reports based on Net Purchase Amount
- Automated creation of two invoices (Gitit's 6% + trade show owner's 8%) based on those amounts
- No estimate given — too undefined, needs its own scoping pass once real data exists

---

## Future Phases (older list, still relevant, re-prioritize against phase 2/3 above)
1. Zip-code auto-routing to nearest spa — GHL can't natively branch on thousands of zip codes, needs custom workaround, no estimate
2. Square / Clover POS integration
3. Trade show partner dashboards (secure login for trade show owners) — likely lives outside GHL if built
4. Scaling from 3 spas toward Gitit's eventual ~50-spa network

## Access Status

| System | Status | Notes |
|---|---|---|
| GHL sub-account | GRANTED | support@gosmarterflow.com added as staff 2026-07-17 |
| Payment on file | CONFIRMED | $1 verification paid 2026-07-17. First billing sent 07/13-07/17: 4:00 hrs, $220.00 |
| GHL "basic setup" Gitit already did | REVIEWED | Reviewed 2026-07-17, 12:04-12:27 PM. Build started same day. |
| Spa #1/#2/#3 content | TBD | Needed once Thank You page shows spa-specific info (currently simplified) |

## Call Notes (2026-07-03, Fireflies recap on file)
- Gitit has 0 prior GHL build experience personally; CJ confirmed 3 yrs GHL / has built similar (non-medspa) trade-show-to-lead systems before
- She emphasized: not technical, will need ad hoc support time billed same $55/hr rate, fine with that
- Confirmed 4-person SmarterFlow team (Jonathan, Moon, Jed, CJ); CJ is her primary point of contact going forward
- Billing mechanics explained in detail: weekly Monday emails, 15-min rounding increments, 1-hr minimum
- She works Israel hours; call took place at 2:30 AM her local time

## Scope Revision Notes (2026-07-17)
Gitit emailed a materially revised model:
- 2 spas → 3 (found a partner with a large spa network, expects fast growth)
- Stripe $25 deposit REMOVED from MVP — deferred to phase 2, collected post-booking via text link, not on the original form
- QR codes now must support reassignable destinations without reissuing the physical QR (partners reuse the same QR across different trade shows)
- Form fields expanded: split first/last name, added ZIP code; consent checkbox now explicitly gates voucher eligibility
- Spa portal actions expanded: mark attendance, record facial date, split Total vs Net Purchase Amount (net = minus financing fees)
- Reminder cadence now specific: 2-day email, 1-day email+SMS, 2-hour email+SMS
- Flow decoupled: form submit → generic thank-you page now, spa-specific info shown later once assigned (no longer an immediate redirect to a fixed spa landing page)
- New deliverable requested: process flowchart
- Phase 3 introduced: automated reporting + invoicing off Net Purchase Amount
- She asked for 3 numbers: MVP hours w/o deposit, timeline to phase 2, phase 2 hours estimate
- CJ + team decision: everything is ×3, not shared (forms, calendars, pipelines, fields, workflows, logins) — pipelines specifically chosen ×3 over one shared pipeline with hidden rows, since GHL permission scoping is cleaner per-pipeline
- Reply email SENT 2026-07-17 with final numbers: MVP 7-9 hrs ($385-$495), phase 2 same-week start, phase 2 1-2 hrs ($55-$110 — tighter than the 3-5hr internally discussed, flagged as a risk given "MiConnect calendar" is still undefined). Also included: payment-processor-per-sub-account architecture note, payment security note (no card details by email/text, offered a call to set up payment instead), and the support@ access ask.
