# Leo Veloz — Consultant Handoff
**Client:** Leudson "Leo" Veloz (Director) / Thiaggo M Gomes (Manager, day-to-day)
**Company:** Souzet (souzet.com)
**Consultant:** CJ Salamida
**Last updated:** 2026-07-21

---

## Current Status

Active. Two open items: WhatsApp template failure (lv-018, high — reported 2026-07-21, not yet investigated) and dedicated JOF phone number (lv-009, todo). JOF pipeline, funnels, workflows otherwise fully built and stable.

---

## Sub-Accounts

| Sub-Account | Location ID | Status |
|---|---|---|
| Souzet | LCb3KCRj8DxVjNQbmEdZ | Active |

---

## Contacts

| Name | Role | Email |
|---|---|---|
| Thiaggo M Gomes | Manager / Day-to-day | thiaggo@souzet.com |
| Leudson "Leo" Veloz | Director / Owner / Billing | leo@souzet.com |
| General | — | info@souzet.com |
| IT / Developer | CC on technical requests | it.istomin@gmail.com |

Phone: (833) 717-5001 | Address: 1625 C / 893 Washington St, Holliston, MA 01746 | Timezone: Eastern (UTC-4)

---

## Open Workstreams

### Workstream A — New Sales Pipeline + Funnels — COMPLETE
- JOF folder created in Souzet sub-account.
- Funnel duplicated, forms cloned with JOF pipeline routing.
- Workflows re-created routing to JOF pipeline.
- Tags updated to distinguish JOF leads.
- Julia Muniz (jofcompanyagencia@gmail.com) added to JOF pipeline June 17.
- Portuguese landing page updated (FAQ #2 text, Verde → Eficiente).
- Thank you page cleaned (removed email, phone, WhatsApp elements).
- Status: Done.

### Workstream B — Lead Zip Code Extraction — CLOSED
- Removed from Kanban scope. Not a current task. Confirm with Thiaggo if ever needed.

### Workstream C — +55 Phone Prefix on JOF Form Submissions — DONE (2026-07-15)
- Brazil call center leads arriving in CRM with +55 country code prefix.
- Root cause: GHL form auto-country-detection enabled.
- Fix: turned off auto-timezone/country detection in JOF form settings.

### Workstream D — Add Julia Muniz to JOF Pipeline — DONE (2026-06-17)
- Thiaggo couldn't add jofcompanyagencia@gmail.com due to permissions error.
- CJ added directly.

### Workstream E — WhatsApp Template Messages Failing — OPEN (lv-018)
- Error: "Message failed to send because there were one or more errors related to your payment method."
- Leo confirmed: GHL wallet $24.03 (auto-recharge on), Meta/WhatsApp Approved + Green quality, template is approved Utility (pt_BR).
- Root cause likely at Meta Business billing level — NOT GHL wallet.
- Next step: GHL agency > WhatsApp settings > verify/re-add payment method for Souzet sub-account. Also check Meta Business Manager payment method.
- Priority: High. Reported 2026-07-21.

---

## Critical Rules

- Thiaggo moves fast and expects responsiveness — respond same day
- Two decision-makers: Leo (billing/owner) and Thiaggo (day-to-day) — reply-all always, both must stay in loop
- History: Moon → Nica → CJ. Read Activity Log before any client contact.
- WhatsApp billing errors: check Meta Business Manager, not just GHL wallet — GHL wallet balance does not reflect Meta's payment method status

---

## Activity Log

| Date | Event |
|---|---|
| 2026-07-21 | Leo reported WhatsApp template messages failing — payment method error. lv-018 added to Kanban. Investigation pending. |
| 2026-07-15 | Fixed +55 phone prefix on JOF form submissions (lv-017). Root cause: GHL form auto-country-detection. Turned off. |
| 2026-07-21 | Weekly billing sent for week 07/13–07/17: 1:00 hr, $55.00 (1h minimum). |
| 2026-07-14 | Weekly billing sent for week 07/06–07/10: 1:30 hrs, $82.50. |
| 2026-06-22 | CJ sent check-in email to Thiaggo (CC Leo) — all tasks done, asking for new work. |
| 2026-06-17 | CJ added Julia Muniz (jofcompanyagencia@gmail.com) to JOF pipeline — Thiaggo had permissions error. |
| 2026-06-11 | CJ synced Kanban board (Supabase → GitHub → Vercel). Confirmed lv-010–lv-015 done. Deleted lv-004, lv-006, lv-016 from scope. |
| 2026-06-10 | CJ built full JOF pipeline setup: folder, funnel clone, form clones, workflows, tags. Ran scoping call with Thiaggo. Updated PT landing page. Cleaned thank you pages. |
| 2026-06-09 | Thiaggo confirmed pipeline + funnels request ASAP. Jonathan sent CJ booking links. |
| 2026-06-08 | Jonathan sent coverage intro to Leo, Thiaggo, info@ (CC Nica, CJ). |
| 2026-06-03/04 | Nica resolved "Adding Users" issue — ads@digitalfuelagency.com added to Souzet account. |
| 2026-03-19/20 | Leo requested zip code extraction from notes field (handled by Nica, Moon OOO). |
| ~Nov 2025+ | Ongoing weekly consulting. Moon → Nica. Stripe wallet auto-recharges separately. |
