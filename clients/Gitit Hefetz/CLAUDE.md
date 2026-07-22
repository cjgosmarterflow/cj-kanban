# Gitit Hefetz — NEMI Connect (MiConnect)
**Role:** AI context for CJ Salamida (SmarterFlow)
**Last updated:** 2026-07-21

---

## Who They Are
- **Gitit Hefetz** — Owner, NEMI Connect / MiConnect
- Israel-based. Trade show owner — runs sales teams that sell skincare at US trade shows.
- Not technical. Needs hand-holding on GHL concepts (asked "what's a funnel?").
- Personable, cautious about scope/cost creep. Wants to be told before any hours go over estimate.

## Communication
- **Primary contact:** Gitit Hefetz — gitithef@gmail.com — (984) 302-4062
- **CC:** jonathan@gosmarterflow.com
- **Channel:** Email (thread: "NEMI Connect MVP - Call Summary & Next Steps")
- **Timezone:** Israel — call was booked at odd local hours for her (2:30 AM her time), be mindful when scheduling

## Context: Why We're Here
Free consulting call 2026-07-03, 2:30 PM EDT (~47 min), booked via directory lead round-robin. Wants a trade-show-to-spa referral system built in GHL: customer buys $300+ skincare at trade show booth → scans QR → uploads receipt → gets free facial voucher → books at partner spa → pays refundable deposit → spa/Gitit split revenue.

## Primary Project: NEMI Connect MVP (REVISED 2026-07-17, no deposit) — BUILD IN PROGRESS
Full flow: 1 of 3 QR codes (DIRECT link, no trigger link — see 07-21 decision below) → spa's own GHL form (name split first/last, phone, email, ZIP, consent, receipt upload) → lead in that spa's pipeline → generic thank-you page → spa books on its own calendar → 3-tier reminders (2-day email, 1-day email+SMS, 2-hr email+SMS) → spa marks attendance/facial date/Total+Net Purchase Amount. NO Stripe/deposit in MVP — that's phase 2.

**Build status (2026-07-17):** Payment paid + GHL access granted. Built same day: pipelines, calendars, custom fields, forms, reminder workflows, QR codes, flowchart, reviewed her existing setup. Later same week: 3 Form Submitted workflows, full E2E test, 2-way Opportunity↔Contact field sync. Well ahead of the 7-9hr estimate. Remaining: 3 scoped spa logins, naming convention confirmation, walkthrough doc, spa content collection.

**DECISION 2026-07-21 — trigger links dropped:** CJ removed the trigger-link layer (didn't make sense at this stage). QR codes now use a plain direct link straight to each spa's form. ⚠️ **This means reassigning a QR to a different spa now requires reissuing the QR** — directly contradicts what Gitit asked for in writing ("I need to be able to manually change which spa that QR code is assigned to without creating a new QR code"). Not yet communicated to her. Flag before she tries to reassign one at a live show and it doesn't work the way she expects.

**Gitit email 2026-07-18 — replied same day:** progress update sent (9/15 build tasks done, ahead of pace) + confirmed 2nd consent checkbox + asked her to resend the missing Thank You image + explained the Partner ID reassignment/reporting mechanism she asked about.

**Gitit email 2026-07-21 — further simplification, replied:**
- Drop deposit stays dropped (she reconfirmed, doesn't want to exceed 7-9hr estimate)
- Thank You page: drop the spa-details/two-stage plan entirely. Use HER OWN text + picture instead — standard MVP thank-you page, just tells customer a spa will contact them + fine print disclaimer. **Image still not received after 2 asks (07-18 and 07-21) — keep chasing.**
- Attribution/reporting: she does NOT want reports built now, only wants the underlying data structure to support it later without a rebuild. She wants eventual reports by: partner + event, lead→customer conversion, which spa got the lead, purchase amount, which event generated the customer. Also wants per-spa AND per-partner reports eventually (each spa already gets its own login).
- **Gap CJ identified:** Partner ID alone isn't enough — same partner attends multiple different events over time with the same QR, so Event/Trade Show name needs its own tag, captured at scan time, separate from Partner ID. Decided to add a 2nd hidden field for Event name (same trigger-link mechanism as Partner ID) plus a simple Spa Name field for easy cross-spa filtering. Purchase amount + attendance already covered by existing fields, no changes needed there.
- Still nowhere near the 7-9hr MVP cap

## Rules / Preferences
- **3 spas for MVP** (was 2 — she found a partner with a large spa network, expects fast growth)
- **Everything is ×3, nothing shared:** QR codes, forms, calendars, pipelines, custom field sets, reminder workflows, logins — all one-per-spa. Pipelines specifically chosen ×3 over one shared pipeline with hidden rows since GHL permission scoping is cleanest per-pipeline.
- Lock a consistent naming convention across all 3 before building (e.g. `NEMI - Spa1 - Form`, `NEMI - Spa1 - Calendar`)
- Deposit REMOVED from MVP — phase 2 only, collected via spa-sent text link after booking, not on the original form
- QR codes were supposed to support reassignable destinations (partners reuse the same QR across different trade shows) via a trigger link layer — **DROPPED 2026-07-21, now direct QR→form links, so reassignment now requires a new QR. Client-facing risk, not yet communicated to her.**
- Revenue tracking (6% Gitit / 8% trade show owner / spa keeps rest) still MANUAL — phase 3 wants automated reporting/invoicing off Net Purchase Amount, not yet scoped
- Billing: $55/hr pay-as-you-go, 15-min rounding, 1-hr minimum, weekly Monday billing email (CJ + Jonathan)
- First billing sent 07/13-07/17: 4:00 hrs, $220.00
- She flagged: don't bill/build past estimate without her approval first (7-9 hrs MVP, 1-2 hrs phase 2 — both quoted and sent 2026-07-17)
- Phase 2 quoted tight (1-2 hrs / $55-$110) despite "MiConnect calendar" being undefined — watch actual hours closely, flag her early if it's running over
- Wants brief walkthrough doc + a process flowchart at end so she can self-manage the system
- Payment info: she does NOT want to send card details unencrypted — always use the secure payment link, never email/text for that

## Key Contacts
| Name | Role | Email |
|---|---|---|
| Gitit Hefetz | Owner | gitithef@gmail.com |
| Jonathan Schoenberg | SmarterFlow owner (CC'd) | jonathan@gosmarterflow.com |
