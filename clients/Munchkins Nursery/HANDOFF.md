# Munchkins Nursery — Handoff Document
**Client:** Munchkins Nursery — UK nursery group, ~7-8 locations
**Day-to-day:** Lottie Hayward (marketing) + Kellie Mulchinock (accounts)
**Consultant:** CJ Salamida (Primary, replacing Nica)
**Last updated:** 2026-06-26

---

## Current Status

Active retainer, ~1h/week. Healthy relationship. GHL access now granted. Timezone audit + fix complete (Jun 26). Summary email sent to Ethan and Lottie. Loom walkthrough doc still to be delivered.

---

## Contacts

| Name | Role | Email | Phone |
|---|---|---|---|
| Lottie Hayward | Head of Marketing | marketing@munchkins-nursery.co.uk | +44 7932 821055 |
| Kellie Mulchinock | Accounts + day-to-day requests | enquiries@munchkins-nursery.co.uk | 07572 147087 |
| Ethan | Marketing Assistant (Lottie's team) | — | — |
| Kelly | GHL Top Admin (separate office) | — | — |

**Timezone:** UK (BST/GMT) | **Rate:** $55/hr PAYG, billed weekly (since August 2025)

---

## Scope (What We Do)

- Standardize email templates and branding across nursery sub-accounts
- Fix workflow and follow-up delivery issues
- Set up and automate per-location dashboards (e.g. Brentwood)
- Each fix gets a Loom doc so they have a record of what changed

---

## How They Use GHL

- **Event workflows:** WordPress form (GHL-embedded) → time-slot selection → contacts split into 4 outcomes → tailored email sequence per outcome. Each event handled in the relevant nursery sub-account (e.g. Billericay for current event).
- **Parent liaison:** Staff use contact cards + opportunity funnels. Contacts moved manually into pipeline stages → automated emails triggered per stage.
- **Sub-accounts:** ~8+ total (one per nursery location). Main active: **Wivenhoe**. Current event: **Billericay**.

## Resolved: Timezone Bug (Jun 26)

Root cause: agency-level timezone was blank (defaulting to US timezone → 7hr offset in activity logs). Also Dunton Fields was on GMT-12:00. Both corrected to GMT+01:00 Europe/London (BST). Confirmation emails to parents were always correct — only internal activity log display was wrong.

## Resolved: Brentwood Stage 3 Workflow (Jun 26)

"Booking an appointment" workflow had invalid custom field in Find Opportunity action → Update Opportunity was skipping → pipeline not auto-updating on bookings. Invalid custom field removed, workflow functioning.

## GHL Access Methods (documented for Kelly)

1. **Agency-level (preferred):** Team panel → search Nica → reassign all sub-accounts to CJ at once (support@gosmarterflow.com)
2. **Sub-account level (manual):** Settings → My Staff → Add User — must repeat for each of the ~8 sub-accounts

## Open Items

| # | Task | Owner | Status |
|---|---|---|---|
| 1 | ~~Introduce CJ to Lottie and Kellie~~ | Done | 2026-06-23 |
| 2 | ~~Kelly grants CJ GHL access~~ | Done | 2026-06-26 |
| 3 | Check inbox — Ethan forwarded last Nica email thread | CJ | Pending |
| 4 | ~~Audit calendar/timezone conflict~~ | Done | 2026-06-26 |
| 5 | ~~Fix timezone + Brentwood workflow bug~~ | Done | 2026-06-26 |
| 6 | Loom doc for Jun 26 fixes (optional — Nica-era practice, not promised by CJ) | CJ | Optional |
| 7 | Ask current priorities across all sub-accounts | CJ | Next |

---

## Drive Links

- Project Doc: https://docs.google.com/document/d/1DFmzH2Pv8PkNqEQuJ9deT6BnVh84FV9VTHyeKjt6yDk/edit
- Project Folder: https://drive.google.com/drive/folders/1FP71JKNKGCC8nZUBfbWbzdTO9EXTDpQ8

---

## Session Log

### 2026-06-23 — Intro email sent
- Sent intro email to Lottie (marketing@) and Kellie (enquiries@) introducing CJ as new primary.
- Awaiting reply before next steps.

### 2026-06-26 — Timezone audit + fixes (1h 23m)
- Agency-level timezone was blank → set to GMT+01:00 Europe/London (BST). Root cause of 7hr activity log offset.
- Dunton Fields: GMT-12:00 → GMT+01:00 Europe/London (BST). Was causing date offset + wrong timezone label on appointments.
- Brentwood Stage 3 workflow: removed invalid custom field from Find Opportunity → Update Opportunity now runs → pipeline updates on booking.
- All other sub-accounts (Dunton Park, Baddow, Billericay, Brightlingsea, Laindon, Wivenhoe, Recruitment, Discount Club) were already correct.
- Summary email sent to Ethan and Lottie.

### 2026-06-25 — Intro call with Ethan (Lottie's marketing assistant)
- Ethan walked through GHL usage. Confirmed ~8+ sub-accounts, main active: Wivenhoe, event: Billericay.
- Timezone bug identified. GHL access pending Kelly.

### 2026-06-23 — Intro email sent
- Sent intro email to Lottie (marketing@) and Kellie (enquiries@) introducing CJ as new primary.

### 2026-06-22 — Handoff received
- CJ confirmed as Primary on Munchkins Nursery (replacing Nica).
- Active retainer, healthy relationship. Files scaffolded.
