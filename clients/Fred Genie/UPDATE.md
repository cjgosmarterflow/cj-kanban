## 2026-06-24

**What was done:**
- Received Fred's reply (June 23) — approved All-In-One chat widget install, approved rep mgmt $110 fix, provided website designer contact (andrea@appletreeadvertising.com)
- Reviewed Voice AI call routing: found Business Phone Number set as priority with Voicemail as backup (not Voice AI) — needs 5–10 call test to confirm behavior before removing Business Phone from profile
- Identified correct GHL calendar likely "Appointment Calendar - Outlook" for Voice AI bookings
- Drafted reply-all to Fred: Voice AI prompt (CJ handling), hours control confirmed off, call routing findings, Outlook calendar, All-In-One widget, website access (cj@gosmarterflow.com)

**What's next:**
- Review Johnica's 2 Voice AI prompt versions → apply Hard Rules change → push active
- Test call routing 5–10 calls: confirm unanswered calls go to Voice AI not voicemail
- If voicemail → remove Business Phone from profile → retest
- Verify "Appointment Calendar - Outlook" connected to Voice AI in GHL
- Begin rep mgmt fix ($110 approved): custom field, workflow logic, branch rebuild, end-to-end test
- Wait for Andrea to grant cj@gosmarterflow.com website admin access, then install All-In-One widget

**Blockers:**
- Website access pending — waiting on Andrea (andrea@appletreeadvertising.com)
- Call routing behavior unconfirmed — needs live testing

---

## 2026-06-22

**What was done:**
- Sent check-in email to Fred referencing pending rep mgmt survey fix (5 smileys + dropdown on page 2) and asking if he has new tasks.

**What's next:**
- Await Fred's reply on rep mgmt approval and website login credentials (website person back ~week of June 23).

**Blockers:**
- Fred silent since June 16.
- Website login credentials pending.

---

## 2026-06-12

**What was done:**
- Voice AI – Updated Hard Rules self-ID line: AI now says it's fully trained to answer questions, make account changes, or schedule a call with a team member
- Voice AI – Confirmed Call Flow Script #1 greeting is not a duplicate issue; Agent's Initial Message and Structured Call Flow Script lines are intentionally the same
- Voice AI – Identified root cause of Caller ID not passing through: Twilio replaces original caller ID during forwarding. Solution: buy new LC phone number (Add Phone Number → Option 1) and update Voice AI forwarding destination to the new LC number. Fred advised caller's number will show, not their name
- Reputation Mgmt – Reviewed Email 1 (merged redundant lines), Email 2 (fixed missing word "know"), and SMS (no changes needed)
- Reputation Mgmt – Started review of automated review request setup; found two broken parts: 5 smileys and dropdown menu missing from survey form. Timeline to be sent to Fred
- Sent end-of-day summary email to Fred
- Sent follow-up email about chat widget options (text, Voice AI, All-in-One) with GHL doc link and note about rep mgmt timeline

**What's next:**
- Fix broken survey form parts (5 smileys + dropdown on 2nd page) in review request setup
- Enable and configure automated review request system
- Wait for Fred's website login credentials (website person back next week)
- Fred to confirm chat widget preference: text, Voice AI, or All-in-One
- Fred to buy new LC number and update Voice AI forwarding destination

**Blockers:**
- Website login credentials pending — Fred's website person on vacation, back next week
- Chat widget type TBD — waiting on Fred's preference
