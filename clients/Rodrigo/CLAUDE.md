# Rodrigo Clark — Claude Context
**Client:** Rodrigo Clark
**Company:** Gracie Barra Santa Barbara (BJJ gym)
**Consultant:** CJ Salamida
**Started:** June 2026
**Last updated:** July 3, 2026

---

## Account

| Field | Value |
|---|---|
| Sub-account | Gracie Barra Santa Barbara |
| Location ID | klHc5Eg0r48FoFYAVWhI |
| Contact email | rodrigoclarkbjj@gmail.com |
| Timezone | Pacific (UTC-7) |
| Outbound calling number | 805-324-7086 |
| Call center email | 1210008878@armailstnr.appspotmail.com |

---

## Context

BJJ gym on HighLevel. Account transitioned from Kyle (departed) to CJ on 2026-06-09. Trust rebuilt through fast follow-through. Webhook, pipeline audit, lead notifications, and calendar bug diagnosis are all done. Three workstreams remain open.

---

## Open Workstreams

### rc-004 — Add GHL All-In-One Chat Widget
Replace old chatbot on gbsantabarbara.com with GHL chat widget.
- Site is external (not in GHL)
- Get embed code: GHL → Settings → Chat Widget → copy
- Give code to Rodrigo/site admin to paste before `</body>`

### rc-008 — Remove Fri/Sat Availability from Free Consultation Calendar
Staff shortages on Fri/Sat — leads must not book those days.
- GHL → Calendars → Free Consultation → Availability → uncheck Fri + Sat
- Staff manual booking inside GHL is unaffected (widget-only restriction)

### rc-010 — Contact Timezone Field Cleanup (WAITING ON RODRIGO)
Root cause of "7pm booking" display bug: contact had timezone = CDT.
GHL renders `{{appointment.startTime}}` in contact's timezone.
5pm PDT booking showed as 7pm CDT in notifications. Calendar was correct.
Fix: bulk clear timezone field on contacts + remove timezone from lead forms.
Asked Rodrigo if forms collect timezone — awaiting reply.

---

## Completed

- Webhook integration with AnswerConnect call center (Jun 12)
- Lead notification emails fixed — Rodrigo + call center both on list (Jun 12)
- Pipeline automation audit — automations confirmed working (Jun 12)
- GHL system audit (Jun 13) — confirmed working, SMS 8AM–5PM window explained
- Contact Us form on gbsantabarbara.com fixed (Jul 3)
- Calendar "7pm bug" diagnosed — contact timezone field issue, not calendar bug (Jul 3)

---

## Known GHL Behavior (important)

`{{appointment.startTime}}` and all appointment time custom fields render in the **contact's timezone** if that field is populated. If a contact has timezone = CDT, all time fields show CDT, not PDT. This is expected GHL behavior — not a bug. Fix: keep contact timezone fields blank so account timezone (PDT) is used everywhere.

---

## Tone

- Past service gap (Kyle departure) acknowledged once — don't revisit it.
- Rodrigo wants action and fast follow-through.
- Pacific timezone — be mindful of scheduling.
- Do not ask for a review until trust is fully restored.
