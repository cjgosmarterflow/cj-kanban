# Rodrigo Clark — Session Updates
**Client:** Rodrigo Clark
**Consultant:** CJ Salamida

---

<!-- TEMPLATE
## [Date]

**What was done:**

**What's next:**

**Blockers:**
-->

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
