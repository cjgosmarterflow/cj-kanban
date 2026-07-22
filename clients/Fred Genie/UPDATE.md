## 2026-07-14

**What was done:**
- Weekly billing sent for week 07/06 - 07/10: 1:00 hrs, $55.00
- Tasks billed: GHL Calendar reconfiguration, Test chat widget (0:08:03), WP Contact Us Page Fix (0:28:23)

**What's next:**
- Follow up for any new requests

**Blockers:**
- None

---

## 2026-06-30

**What was done:**
- Weekly billing sent for week 06/22 - 06/26: 3:00 hrs, $165.00, card charged
- Tasks billed: Check Voice AI Settings (0:04:20), Reputation Mgmt – Enable & configure automated review request system (2:01:33), Voice AI – Updated Prompt + After Hours Setting + Audit (0:27:23), Add All-in-one Chat Widget to WordPress (0:20:19)
- Sent to fred@geniereceptionist.com, CC jonathan@gosmarterflow.com

**What's next:**
- Confirm with Fred that chat widget is visible + working on geniereceptionist.com
- Await Fred's reply or new tasks

**Blockers:**
- None

---

## 2026-06-26

**What was done:**
- Received WordPress admin access from Andrea
- Installed LeadConnector plugin on Fred's WordPress site (geniereceptionist.com) — later found to be faulty (widget showing inconsistently, duplicate widgets)
- Removed old footer script from Neve theme and removed LeadConnector plugin
- Added All-In-One Chat Widget script cleanly — widget now stable and live on geniereceptionist.com
- Fixed Contact Us form — replaced LeadConnector shortcode with GHL iframe embed (height:1200px); form now displays in full with no scrolling
- Replied to Fred's email: confirmed Voice AI 24/7 change correct, updated calendar to Appointment Calendar – Outlook, asked which calendar settings he prefers, confirmed CJ as primary consultant
- Kanban updated: fg-website-andrea, fg-website-widget, fg-website-form → done

**What's next:**
- Fred to confirm which calendar settings he prefers (Appointment Calendar vs Appointment Calendar – Outlook)
- Fred to review Reputation Management and send questions

**Blockers:**
- None

---

## 2026-06-25

**What was done:**
- Voice AI – Switched active agent from "Genie" to "Genie – Updated" (revised prompt by Johnica, Hard Rules change applied). All other settings identical — only prompt changed.
- Voice AI – Reassigned phone number (916) 908-5085 to "Genie – Updated"
- Voice AI – Configured after-hours schedule: Mon–Fri 12:00 AM–8:00 AM + 5:00 PM–11:30 PM; Sat–Sun 12:00 AM–11:30 PM. GHL 30-min increment limitation = 11:30 PM max; 30-min gap nightly unavoidable.
- Voice AI – Verified "Appointment Calendar - Outlook" connected to Voice AI
- Reputation Mgmt – Completed fix and confirmed fully working. Automated review requests now trigger on Closed Won or "Request Review" tag. Full funnel: email → SMS → Yes/No branch → Google review follow-up or negative feedback form.
- Sent detailed update email to Fred covering both Voice AI and Rep Mgmt (with screenshots)
- Kanban updated: fg-voice-prompt, fg-voice-hours, fg-voice-cal → done

**What's next:**
- Email Andrea (andrea@appletreeadvertising.com) for admin access to Fred's website (cj@gosmarterflow.com)
- Install All-In-One chat widget once Andrea grants access

**Blockers:**
- Website access pending — waiting on Andrea

---

## 2026-06-24

**What was done:**
- Received Fred's reply (June 23) — approved All-In-One chat widget install, approved rep mgmt $110 fix, provided website designer contact (andrea@appletreeadvertising.com)
- **Rep mgmt started (~2hrs):** Enabled and configured automated review request system in GHL.
- Reviewed Voice AI call routing: found Business Phone Number set as priority with Voicemail as backup — flagged to Fred
- Fred clarified: Voice AI is ONLY for after-hours and weekend calls; phone system handles forwarding; no backup/shuffling intended
- Replied to Fred: confirmed will configure after-hours schedule, asked for specific weekday/weekend hours, explained BPN
- Identified correct GHL calendar likely "Appointment Calendar - Outlook" for Voice AI bookings
- Drafted reply-all to Fred covering all open items

**What's next:**
- Configure Voice AI: remove BPN from profile; leave GHL hours always-on (phone system handles forwarding). Schedule: Mon-Fri 8AM-5PM live, after hours + weekends route to Voice AI automatically.
- Review Johnica's 2 Voice AI prompt versions → apply Hard Rules change → push active
- Verify "Appointment Calendar - Outlook" connected to Voice AI in GHL
- Complete rep mgmt fix (started Jun 24 ~2hrs — enable/configure done, test + verify remaining)
- Wait for Andrea to grant cj@gosmarterflow.com website admin access, then install All-In-One widget

**Blockers:**
- Website access pending — waiting on Andrea (andrea@appletreeadvertising.com)

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
