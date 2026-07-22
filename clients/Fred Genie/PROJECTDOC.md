# Fred Genie — Project Documentation

**Last updated:** 2026-06-26

---

## System Overview

Three workstreams for Genie Receptionist Services (virtual receptionist business). All three now complete. Open items are minor and pending Fred.

---

## Workstream 1 — Voice AI (COMPLETE)

After-hours AI receptionist named "Genie."

**Active agent:** Genie – Updated (revised prompt by Johnica, Hard Rules applied)
**Phone number:** +1 916-908-5085 assigned to Genie – Updated
**Schedule:** 24/7 (12:00 AM–11:30 PM all days) — Fred changed from split schedule. Correct approach: phone system controls forwarding, Voice AI just needs to always be available.
**Calendar:** Appointment Calendar – Outlook (Outlook-synced). Pending Fred confirming which calendar settings he prefers (see open items).

**What was done:**
- Hard Rules self-ID line updated
- Call Flow Script #1 greeting reconciled (not a duplicate — intentional)
- Switched active agent from Genie → Genie – Updated
- After-hours schedule configured (later changed to 24/7 by Fred — correct)
- Appointment Calendar – Outlook connected to Voice AI

**Caller ID fix (pending Fred):**
- Fred must buy a new LC phone number (Add Phone Number → Option 1)
- Update Voice AI forwarding destination to the new LC number
- Caller name will NOT show — number only

---

## Workstream 2 — Reputation Management (COMPLETE)

Automated review request system via GBP (Google Business Profile).

**Trigger:** Contact marked Closed Won in Genie Receptionist Pipeline OR "Request Review" tag added.

**Flow:**
1. Email review request sent → follow-up SMS (Yes/No)
2. Yes → enrolled in review follow-up workflow → confirms Google review left → thank-you SMS. If no response after reminders → workflow ends.
3. No → directed to negative feedback form (4. Review Survey funnel) → internal notification sent to team.

**What was fixed:**
- Missing custom field created and mapped to survey
- Workflow conditional logic updated for Happy (⭐⭐⭐⭐) and Extremely Happy (⭐⭐⭐⭐⭐) routing
- Corrupted If/Else branch rebuilt
- Billed: 2hrs @ $55 = $110 (approved by Fred June 23)

---

## Workstream 3 — Website (COMPLETE)

**Chat Widget:**
- All-In-One Chat Widget installed on geniereceptionist.com via script embed (WPCode)
- LeadConnector plugin removed (was faulty — duplicate widgets, inconsistent display)
- Footer script from Neve theme removed

**Contact Us Form:**
- LeadConnector shortcode replaced with GHL iframe embed
- Height set to 1200px — form displays in full, no scrolling
- URL: geniereceptionist.com/contact-genie-receptionist

---

## GHL Sub-Account

- Name: Genie Receptionist Services
- GHL Phone: +1 916-908-5085
- Location ID: TBD — pull from GHL URL on first login

---

## Open Items

- Fred to confirm calendar preference: Appointment Calendar (4hr notice, 2-day window, unlimited/day) vs Appointment Calendar – Outlook (3hr notice, 5-day window, 3/day max)
- Fred to review Reputation Management and send questions
- Caller ID fix pending Fred buying new LC number
