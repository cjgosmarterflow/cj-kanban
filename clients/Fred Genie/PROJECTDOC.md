# Fred Genie — Project Documentation

**Last updated:** 2026-06-22

---

## System Overview

Three active workstreams for Genie Receptionist Services (virtual receptionist business):

---

## Workstream 1 — Voice AI (LIVE)

After-hours AI receptionist named "Genie."

**What was done:**
- Hard Rules self-ID line updated (AI says it's fully trained to answer questions, make account changes, or schedule a call)
- Call Flow Script #1 greeting reconciled (not a duplicate issue — intentional)
- Caller ID root cause identified: Twilio masks original caller ID during forwarding

**Caller ID fix (pending Fred):**
- Fred must buy a new LC phone number (Add Phone Number → Option 1)
- Update Voice AI forwarding destination to the new LC number
- GHL will then pass Contact's Phone Number through correctly
- Caller name will NOT show — number only

**GHL phone:** +1 916-545-9045

---

## Workstream 2 — Reputation Management (IN PROGRESS — BROKEN)

Automated review request system via GBP (Google Business Profile).

**What's built:**
- GBP connected and ready
- Review request Email + SMS templates (wording updated by Fred, reviewed by CJ)
- Workflow "4. Review Request Survey Submitted" — exists but has broken parts

**Broken parts found:**
1. Missing custom field — "How was your experience with us?" field needs to be created and mapped to survey
2. Workflow conditional logic — needs updating to route Happy (4 stars) and Extremely Happy (5 stars) correctly
3. Corrupted If/Else branch in workflow — needs backup + rebuild before activation

**Fix proposed:** 2 hours @ $55/hr = $110. Proposal sent to Fred on June 16.
**Status:** Awaiting Fred's approval. Do NOT activate until fixed and tested end-to-end.

---

## Workstream 3 — Website Chat Widget (BLOCKED)

**Status:** Waiting on website login credentials.
- Fred's website person on vacation, back ~week of June 23
- Chat widget type TBD — Fred to choose: Text only, Voice AI only, or All-in-One
- Voice AI Chat Widget is in GHL Labs — confirm agency enablement before install
- GHL doc: https://help.gohighlevel.com/support/solutions/articles/155000004779-how-to-use-the-all-in-one-chat-widget

---

## GHL Sub-Account

- Name: Genie Receptionist Services
- Location ID: TBD — pull from GHL URL on first login
