# INTERNAL — Fred Lowenstein — Genie Receptionist Services

**Client:** Fred Lowenstein  |  **Company:** Genie Receptionist Services  |  **HighLevel sub-account ID:** [TBD — confirm in GHL]  |  **Primary:** CJ Salamida  |  **Backup:** [see Backups tab]  |  **Status:** Active

---

## 1. Snapshot

Genie Receptionist Services is a virtual receptionist business. CJ onboarded this client in June 2026. All three workstreams are now complete: Voice AI (after-hours AI receptionist "Genie" — live, 24/7 schedule, Genie Updated prompt active), Reputation Management (fixed and active — triggers on Closed Won or "Request Review" tag), and Website (All-In-One chat widget live, Contact Us form fixed with GHL iframe embed). Awaiting Fred on calendar preference and rep mgmt review questions.

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
- Voice AI — "Genie – Updated" agent active, 24/7 schedule, phone (916) 908-5085 assigned, Appointment Calendar – Outlook connected
- GBP (Google Business Profile) — connected, reputation management workflow live
- Review request Email + SMS templates — reviewed and wording finalized
- Reputation management workflow — FIXED and active (corrupted branch rebuilt, custom field created, routing corrected)
- All-In-One Chat Widget — live on geniereceptionist.com via WPCode script embed (LeadConnector plugin removed)
- Contact Us form — GHL iframe embed (height:1200px), no scrolling, replacing old LeadConnector shortcode

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
- Status: COMPLETE — June 26
- Received WordPress admin access from Andrea
- Installed LeadConnector plugin on geniereceptionist.com
- All-In-One chat widget connected to GHL and live on site
- Next action: Confirm with Fred widget is visible and working
- Owner: CJ

---

## 5. Risks and Watch-outs

- **Caller ID still broken** until Fred switches from Twilio to a Lead Connector number — do not close this item until confirmed.
- **Chat widget live** — pending Fred confirmation it's visible and working on geniereceptionist.com.

---

## 6. Handoff Notes (read first if covering cold)

1. Voice AI live. Active agent is "Genie – Updated." After-hours schedule configured. AI is named "Genie."
2. Caller ID fix requires Fred to take action (buy LC number) — not something CJ can do on his behalf.
3. Reputation management workflow fixed and active. Triggers on Closed Won or "Request Review" tag.
4. Chat widget installed and live on geniereceptionist.com — pending Fred confirmation.
5. Fred is responsive but busy (small staff). Async email is the right channel. Don't push for quick replies.
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

2026-06-26 | Work | by CJ — Received WordPress admin access from Andrea. Installed LeadConnector plugin — found faulty (widget inconsistent, duplicate widgets showing). Removed LeadConnector plugin and old footer script from Neve theme. Added All-In-One Chat Widget script directly — widget now stable and live on geniereceptionist.com. Fixed Contact Us form — replaced shortcode with GHL iframe embed (height:1200px), no scrolling. Replied to Fred covering Voice AI 24/7 confirmation, calendar update (Appointment Calendar – Outlook), rep mgmt follow-up, confirmed CJ as primary. Kanban: fg-website-andrea + fg-website-widget + fg-website-form → done.
