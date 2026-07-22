# Rodrigo Clark — Consultant Handoff
**Client:** Rodrigo Clark
**Company:** Gracie Barra Santa Barbara (BJJ gym)
**Consultant:** CJ Salamida
**Last updated:** July 3, 2026

---

## Current Status

Active. Three open workstreams: (1) Add GHL chat widget to gbsantabarbara.com, (2) Remove Fri/Sat calendar availability, (3) Contact timezone cleanup — pending Rodrigo's reply. Rodrigo engaged and responsive.

---

## Sub-Accounts

| Sub-Account | Location ID | Status |
|---|---|---|
| Gracie Barra Santa Barbara | klHc5Eg0r48FoFYAVWhI | Active |

---

## Open Workstreams

### Workstream A — Outbound Calls Webhook Integration — DONE
- Webhook integration completed June 12.
- Call center email (1210008878@armailstnr.appspotmail.com) added to lead notification list.
- Outbound number (805-324-7086) configured correctly.

### Lead Notifications — DONE
- Fixed June 12. Rodrigo now receives lead notification emails.
- Root cause resolved: notifications were misconfigured, not broken.

### Pipeline Audit — DONE
- Audited June 12. Most stage changes are manual by design. Automated pipeline progression confirmed working.
- GHL system fully functioning — root cause of Rodrigo's concern was tests submitted after notification hours (8AM–5PM).

### GHL Chat Widget — TODO (rc-004)
- Scope changed: no longer removing chatbot — adding GHL All-In-One Chat widget instead.
- Site gbsantabarbara.com is external (not in GHL). Need to get embed code from GHL → give to Rodrigo's site admin.
- HOW: GHL → Settings → Chat Widget → copy embed code → paste before `</body>`.
- Owner: CJ

### Remove Fri/Sat Calendar Availability — TODO (rc-008)
- Free Consultation calendar must block Fri/Sat for leads (staff shortage).
- Staff can still manually book inside GHL anytime — widget-only restriction.
- HOW: GHL → Calendars → Free Consultation → Availability → uncheck Fri + Sat.
- Owner: CJ

### Contact Timezone Field Cleanup — WAITING (rc-010)
- Root cause of "7pm booking" confusion: contact had timezone = CDT → GHL rendered appointment time in CDT → staff saw 7pm, was 5pm PDT. Valid booking, calendar correct.
- Fix: (1) bulk clear timezone field on all contacts, (2) remove timezone field from any lead forms.
- Asked Rodrigo if forms collect timezone. Awaiting reply.
- Owner: CJ | Blocked: Rodrigo reply

---

## Critical Rules

- Trust gap: Kyle's departure caused a service lapse. Rodrigo flagged "urgent" twice. Move fast, visible follow-through only.
- Tone: apologize for the gap once, then move fast. No explanations.
- Review likelihood: marked "Not Likely" — handle with extra care before any review ask.
- Contact: rodrigoclarkbjj@gmail.com | Pacific time (UTC-7)

---

## Activity Log

| Date | Event |
|---|---|
| 2026-07-03 | Contact Us form on gbsantabarbara.com fixed. rc-004 scope changed: now adding GHL chat widget (not removing chatbot). rc-010 created: contact timezone cleanup pending Rodrigo reply. All files updated. |
| 2026-07-03 | Diagnosed "7pm booking" bug — root cause: contact timezone field set to CDT. GHL renders appointment times in contact timezone. 5pm PDT = 7pm CDT. Calendar settings correct. Explained to Rodrigo, asked about timezone in forms. |
| 2026-07-01 | Rodrigo reported: 7pm booking on 1pm-6pm calendar, 2 extra calendars, Fri/Sat availability issue. CJ investigated. |
| 2026-06-30 | CJ sent check-in email. Rodrigo replied Jul 1 with calendar issue. |
| 2026-06-22 | CJ sent check-in email asking about chatbot CMS type and if Rodrigo has new tasks. |
| 2026-06-13 | GHL audit complete. System confirmed working correctly. SMS notifications are 8AM–5PM only — Rodrigo's test was after hours. Replied to Rodrigo with findings. AnswerConnect confirmed integration working on their end. |
| 2026-06-13 | AnswerConnect flagged 2 duplicate accounts (8774029803, 8053247086). Investigated urgency report. |
| 2026-06-12 | Webhook integration completed. Lead notifications fixed (call center email added). Pipeline audited — automated progression working. |
| 2026-06-09 | Kyle departed. Jonathan introduced CJ as new Primary. Rodrigo acknowledged. |
| 2026-06-09 | Project Doc created on handoff. Two urgent workstreams identified. |
