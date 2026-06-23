# Tate Smith — Consultant Handoff
**Client:** Clearwater Solutions (CLR WTR Solutions) — water treatment
**Consultant:** CJ Salamida (Primary, replacing Nica) | Backup: Jed
**Last updated:** 2026-06-22

---

## Current Status

Active, long-running account (onboarded ~June 2025). Healthy relationship — they left a HL directory review and referred another agency. All known tasks complete. Check-in sent June 22.

---

## Contacts

| Name | Role | Email | Phone |
|---|---|---|---|
| Tate Smith | Day-to-day contact | tsmith@clrwtrsol.com | — |
| Jonathan "Jon" Smith | Owner / CEO | jsmith@clrwtrsol.com | 615-998-9155 |
| Kyle Staude | Owner / COO | kstaude@clrwtrsol.com | 270-791-6796 |

---

## What's Been Built

- Pipeline setup
- Twilio 615 number routed to owners' phones
- "Schedule Water Test" lead form + booking calendar
- "Install Calendar"
- Stripe payment integration

---

## What's Complete

| Task | Status | Date |
|---|---|---|
| ACH surcharge — limit 2.9% Stripe fee to credit cards only | Closed — GHL platform limitation. Client absorbing fees. | Pre-June 22 |
| Install Calendar custom fields (address, phone auto-populate; square-footage; RO Faucet Type/Color, Install Type, RO System Type dropdowns) | Done | 2026-06-18 |

---

## What's Pending

| Task | Status |
|---|---|
| Maintenance reminder workflows + Smart List | **APPROVED $220 / 4 hrs. Ready to build.** Scope: 9 custom fields, 6 workflows (package-type enrollment — not all 6 per contact), 25-contact migration, Smart List view. |

---

## Drive Links

- Project Doc: https://docs.google.com/document/d/107aP8jyu8iQKtkMMwhYoA9948Z9tX1KvqP7xfLiJCzE/edit
- Project Folder: https://drive.google.com/drive/folders/1vHcxIvImamD3-A91Q9UWnIkwXWCu0vB0

---

## Session Log

### 2026-06-23 — Approved, ready to build
- Tate approved $220 / 4 hrs
- Key design note: enroll each contact only in workflows matching their package type (Whole-Home Only = 4 workflows, RO Only = 2, Whole-Home+RO = all 6). Add condition-check safeguard inside each workflow.
- Build order: custom fields → workflows → 25-contact migration → Smart List

### 2026-06-23 — Cost estimate sent
- Analyzed spreadsheet: 25 contacts, all Next dates pre-calculated, fixed intervals
- Build scope: 9 custom fields + 6 workflows + 25-contact migration + Smart List = 4 hrs @ $55 = $220
- Email sent to Tate — awaiting approval

### 2026-06-23 — Maintenance tracking: full scope confirmed
- Salt = fixed 4 months ✅. Other intervals: brine 2yr, carbon/resin 10yr, RO filter 1yr, RO membrane 3yr
- Fields needed: Install Date, Maintenance Package (yes/no), Package Type (3 types)
- Extra request: maintenance dashboard tab in GHL sidebar
- 26 contacts in GHL, Excel has install + last done + upcoming dates
- CJ promised cost estimate next day — still outstanding
- Verify Excel attachment actually received (API showed null)

### 2026-06-23 — Maintenance tracking: Tate replied
- 26 maintenance customers in GHL already
- Excel has install dates + last maintenance dates per customer
- Tate forgot to attach Excel — needs follow-up
- Fixed vs variable intervals still unanswered
- Next: nudge email asking for Excel + interval confirmation

### 2026-06-23 — Maintenance tracking discovery (session planning)
- Tate wants to replace Excel-based maintenance tracking with GHL automated reminders
- Planned solution: custom date fields per maintenance type + workflow (Wait on field date → task + notification → re-enroll)
- Open question: fixed vs variable intervals determines whether field update is automatic or manual
- Draft reply sent to Tate asking 3 clarifying questions before build begins

### 2026-06-22 — Check-in + handoff received
- Received formal handoff from Jonathan. All context confirmed.
- Sent check-in email to Tate asking for new tasks.

### 2026-06-18 — Install Calendar fields
- Added custom fields to Install Calendar: auto-populate address + phone, required square-footage field, required dropdowns for RO Faucet Type/Color, Install Type, RO System Type.

### Pre-June-18 — ACH surcharge investigation
- Investigated Stripe 2.9% surcharge firing on ACH as well as credit cards.
- Confirmed GHL platform limitation — cannot limit surcharge to credit cards only. Client absorbing all fees. Closed.

### ~June 2025 — Onboarding (Nica)
- Nica built pipeline, Twilio number, Schedule Water Test form + calendar, Install Calendar, Stripe integration.
