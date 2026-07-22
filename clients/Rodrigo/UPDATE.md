# Rodrigo Clark — Session Updates
**Client:** Rodrigo Clark
**Consultant:** CJ Salamida

---

## 2026-07-14

**What was done:**
- Weekly billing sent for week 07/06 - 07/10: 1:00 hrs, $55.00
- Tasks billed: Remove Travis Brooks + Chris Lacerda from lead notifications (0:29:50)

**What's next:**
- Follow up for any new requests

**Blockers:**
- None

---

<!-- TEMPLATE
## [Date]

**What was done:**

**What's next:**

**Blockers:**
-->

## 2026-07-09

**What was done:**
- URGENT request from Rodrigo (info@gbsantabarbara.com): Travis Brooks and Chris Lacerda no longer work for Gracie Barra Santa Barbara. Travis opened a competing gym nearby — both may still be receiving live lead notification emails.
- CJ removed both Travis Brooks and Chris Lacerda from GHL lead notifications (Settings > My Staff + notification settings).
- Kanban card added: rod001notif1

**What's next:**
- Confirm with Rodrigo that neither is receiving notifications anymore
- Continue franchise sub-account audit

**Blockers:**
- None

---

## 2026-07-03

**What was done:**
- Diagnosed root cause of "7pm booking" bug — calendar settings are correct.
- Root cause: contact's timezone field was set to CDT. GHL renders `{{appointment.startTime}}` in contact's timezone. 5pm PDT booking = 7pm CDT in notifications. Staff saw "7pm" and panicked — booking was valid.
- Sent reply to Rodrigo explaining the issue + two fixes pending his confirmation:
  1. Clear timezone field on all contacts (appointment times will render in PDT everywhere)
  2. Remove timezone question from any lead forms (if present) to prevent recurrence
- Asked Rodrigo whether any forms currently ask for timezone.

**What's next:**
- Await Rodrigo's reply confirming timezone form question exists (or not)
- Clear contact timezone fields once confirmed
- rc-008: Remove Friday/Saturday availability from Free Consultation calendar
- rc-009: Delete 2 extra unnecessary calendars

**Blockers:**
- rc-010 (timezone fix) waiting on Rodrigo's reply

---

## 2026-07-02

**What was done:**
- Read Rodrigo's email (Jul 1) — 3 issues reported:
  - Lead booked 7pm despite calendar set to 1pm-6pm (timezone or availability setting bug)
  - 2 unnecessary calendars need to be deleted (keep only "Free Consultation")
  - Friday availability must be removed for leads (staff shortage Fri/Sat); staff can still book anytime
- Added 3 tasks to Kanban: rc-007 (calendar time overflow), rc-008 (remove Friday for leads), rc-009 (delete extra calendars)
- CJ to go into GHL (Gracie Barra sub-account) and apply the fixes

**What's next:**
- Fix "Free Consultation" calendar: confirm 1pm-6pm hours + timezone, remove Friday from lead availability
- Delete 2 unnecessary calendars
- Send update to Rodrigo confirming fixes done

**Blockers:**
- GHL access needed to apply calendar fixes — pending CJ

---

## 2026-06-22

**What was done:**
- Sent check-in email to Rodrigo asking about chatbot CMS type (need to confirm if WordPress or other) and if he has new tasks.

**What's next:**
- Await Rodrigo's reply confirming CMS type so chatbot removal can proceed.

**Blockers:**
- Chatbot removal still blocked: gbsantabarbara.com not in GHL, CMS type unknown.

---

## 2026-06-12

**What was done:**
- Completed webhook integration for outbound calls vendor (call center: 1210008878@armailstnr.appspotmail.com, outbound number: 805-324-7086).
- Fixed lead notification emails — Rodrigo now receives them. Added call center email to notification list.
- Audited sales pipelines — most stage changes are manual; automated pipeline progression confirmed working.

**What's next:**
- Remove chatbot from gbsantabarbara.com (site NOT in GHL — confirm CMS type before proceeding)

**Blockers:**
- Chatbot removal: site is not in GHL. Need to confirm if WordPress or another CMS.

---

## 2026-06-12 (update)

**What was done:**
- Rodrigo reported 0 notifications and 0 pipeline activity for 2 days. Test form submission confirmed: lead did not appear in GHL, no email/app notification received.

**What's next:**
- URGENT: Audit GHL — form-to-GHL connection, workflow triggers, notification settings. Determine if leads are entering GHL at all or if the integration broke.

**Blockers:**
- None yet — investigation starting now.

---

## 2026-06-13

**What was done:**
- Investigated URGENT pipeline/notification issue. AnswerConnect confirmed Zapier account belongs to them.
- AnswerConnect flagged 2 duplicate accounts on their end (8774029803 and 8053247086).
- Investigation ongoing — root cause not yet confirmed.

**What's next:**
- Determine what changed in the Zapier/GHL integration since Monday
- Confirm which of the 2 AnswerConnect accounts is active and correctly mapped to GHL
- Restore lead flow and notify Rodrigo once resolved

**Blockers:**
- Need access to AnswerConnect's Zapier config to trace the broken link

---

## 2026-06-13 (update)

**What was done:**
- Completed GHL audit — system confirmed working correctly.
- Root causes of Rodrigo's concern identified:
  - SMS notifications set to 8AM–5PM only; tests submitted after hours, queued and fired next morning as designed.
  - App notifications were sent and visible in GHL — Rodrigo missed them in the feed.
  - Workflow triggers on form submission only — manually moving pipeline stage does not re-trigger it.
  - Test contact already had `hotleads` tag, routed to non-branch as expected.
- Replied to Rodrigo with findings and recommendation to test between 8AM–5PM.
- AnswerConnect (Rodrigo's third-party answering service) confirmed on their end — no issues. Integration working as expected.

**What's next:**
- rc-004: Remove chatbot from gbsantabarbara.com — confirm CMS type before proceeding.

**Blockers:**
- Chatbot removal: site not in GHL, CMS unknown.
