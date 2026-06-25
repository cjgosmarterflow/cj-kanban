# INTERNAL — Fred Lowenstein — Genie Receptionist Services

**Client:** Fred Lowenstein  |  **Company:** Genie Receptionist Services  |  **HighLevel sub-account ID:** [TBD — confirm in GHL]  |  **Primary:** CJ Salamida  |  **Backup:** [see Backups tab]  |  **Status:** Active

---

## 1. Snapshot

Genie Receptionist Services is a virtual receptionist business. CJ onboarded this client in June 2026. Active work spans three areas: Voice AI (after-hours AI receptionist named "Genie"), Reputation Management (automated review request system via GBP), and a website chat widget install. The Voice AI is live and in use. The reputation management system is configured but has broken parts that need to be fixed before activation. The chat widget is pending website login credentials.

---

## 2. Communication

**Primary contact:** Fred Lowenstein — Fred@geniereceptionist.com

**All associated contacts:**
- Fred Lowenstein (owner) — Fred@geniereceptionist.com

**Preferred channel:** Async email
**Active thread:** "RE: Smarter Flow Project Next Steps"
**Timezone:** [TBD — confirm with Fred]

---

## 3. Access and Systems

**HighLevel sub-account:** Genie Receptionist Services
**Location ID:** [TBD — pull from GHL URL]
**GHL phone number:** +1 916-545-9045
**support@gosmarterflow.com added:** [TBD — verify]
**Secrets vault (1Password):** [TBD]

**What is built:**
- Voice AI — after-hours receptionist named "Genie", with structured call flow script and hard rules
- GBP (Google Business Profile) — connected and ready for reputation management
- Review request Email + SMS templates — wording updated by Fred, reviewed by CJ
- Reputation management workflow ("4. Review Request Survey Submitted") — exists but has broken parts (do not activate)

---

## 4. Current State and Next Actions

**Workstream: Voice AI**
- Status: COMPLETE
- Active agent: "Genie – Updated" — revised prompt (Johnica) with Hard Rules change applied. Phone number (916) 908-5085 assigned. Old "Genie" agent is off.
- After-hours schedule live: Mon–Fri 12:00 AM–8:00 AM + 5:00 PM–11:30 PM; Sat–Sun 12:00 AM–11:30 PM. GHL 30-min increment limit = unavoidable 30-min gap nightly (11:30 PM–12:00 AM).
- "Appointment Calendar - Outlook" verified and connected to Voice AI.
- Caller ID issue: still pending Fred buying new LC number. Not blocking anything else.
- Owner: CJ

**Workstream: Reputation Management**
- Status: COMPLETE — Fixed and confirmed working. June 25.
- What was fixed: corrupted If/Else branch rebuilt, custom field created and mapped, conditional logic updated for Happy (⭐⭐⭐⭐) and Extremely Happy (⭐⭐⭐⭐⭐) routing.
- Trigger: Closed Won in Genie Receptionist Pipeline OR "Request Review" tag added.
- Flow: Email review request → follow-up SMS → Yes/No branch → Google review follow-up sequence OR negative feedback form with internal notification.
- Owner: CJ | Billed: 2hrs @ $55 = $110

**Workstream: Website Chat Widget**
- Status: Pending website access — Fred chose All-In-One widget
- Website designer: Andrea — andrea@appletreeadvertising.com
- Access method: Andrea assigns cj@gosmarterflow.com as admin
- Note: Voice AI Chat Widget is currently in GHL Labs — confirm agency enablement before install
- Next action: Wait for Andrea to grant access, then install All-In-One widget
- Owner: CJ | Pending: Andrea

---

## 5. Risks and Watch-outs

- **Caller ID still broken** until Fred switches from Twilio to a Lead Connector number — do not close this item until confirmed.
- **Voice AI Chat Widget is in Labs** — must verify it is enabled at the agency level before attempting install on Fred's website.
- **Website access blocked** — Andrea must assign cj@gosmarterflow.com as admin before chat widget install can proceed. Nothing to do until access granted.

---

## 6. Handoff Notes (read first if covering cold)

1. Voice AI is live and after-hours calls are routing. The AI is named "Genie."
2. Caller ID fix requires Fred to take action (buy LC number) — it is not something CJ can do on his behalf.
3. The reputation management workflow exists but is broken — do not activate under any circumstances before fixing the corrupted branch and running end-to-end tests.
4. Fred is responsive but busy (small staff). Async email is the right channel. Don't push for quick replies.
5. Chat widget install is completely blocked on Fred's website person — nothing to do until credentials arrive.
6. GHL sub-account Location ID is still TBD — pull from GHL URL on first login.

---

══════════════ ACTIVITY LOG (AI-maintained, do not edit below this line) ══════════════

2026-06-10 | Email | by Fred — Sent questions on Voice AI (Hard Rules self-ID line, duplicate greeting in Call Flow Script #1, Caller ID not passing through) and Reputation Management (GBP connected, ready to activate; email/SMS templates updated).

2026-06-12 | Work | by CJ — Updated Voice AI Hard Rules self-ID line. Confirmed Call Flow Script #1 greeting is not a duplicate issue. Identified Caller ID root cause (Twilio masking). Reviewed Email 1 + Email 2 + SMS templates. Started reputation management review — found corrupted branch and missing custom field. Sent end-of-day summary to Fred.

2026-06-16 | Email | by CJ — Sent follow-up covering: chat widget options (text / Voice AI / All-in-One) with GHL doc link; reputation management findings with $110 fix proposal; waiting on Fred's approval and website login credentials.

2026-06-16 | Email | by Fred — Replied short-staffed today, will get back tomorrow.

2026-06-22 | Email | by CJ — Sent follow-up + check-in. Referenced rep mgmt survey fix ($110 pending approval) and website login credentials (person back week of June 23). Asked if Fred has other new tasks. Fred still silent since June 16.

2026-06-23 | Email | by Fred — Approved All-In-One chat widget install. Approved rep mgmt $110 fix. Asked about Voice AI prompt versions (Johnica's 2 drafts not yet pushed active), hours control (phone system handles it), and Outlook calendar connection. Provided website designer contact: Andrea at andrea@appletreeadvertising.com — will assign cj@gosmarterflow.com as admin.

2026-06-24 | Work | by CJ — Reviewed call routing: Business Phone as priority, Voicemail as backup (not Voice AI) — needs live testing. Identified "Appointment Calendar - Outlook" as likely correct GHL calendar for Voice AI. Drafted reply-all to Fred covering all items. Updated client files.

2026-06-24 | Email | by Fred — Clarified Voice AI is ONLY for after-hours and weekend calls. Not a backup to live calls. Phone system forwards non-business-hours calls to LC number. Asked CJ to explain BPN shuffling concern.

2026-06-24 | Email | by CJ — Apologized for confusion. Confirmed will configure Voice AI for after-hours/weekends only (no shuffling). Asked Fred for specific after-hours schedule for weekdays and weekends. Explained BPN.

2026-06-25 | Email | by Fred — Provided after-hours schedule. Business hours Mon-Fri 8 AM–5 PM (live). After hours Mon-Fri 5 PM to next business day 8 AM. Weekend Fri 5 PM to Mon 8 AM. GHL hours control NOT needed — phone system handles all forwarding. Voice AI stays always-on.

2026-06-25 | Work | by CJ — Switched active Voice AI agent from "Genie" to "Genie – Updated" (revised prompt + Hard Rules applied). Reassigned phone number (916) 908-5085. Configured after-hours schedule in GHL. Verified Outlook calendar connected. Completed reputation management fix (corrupted branch rebuilt, custom field created, routing logic corrected). Sent detailed update email to Fred with screenshots covering both Voice AI and Rep Mgmt. Kanban updated.
