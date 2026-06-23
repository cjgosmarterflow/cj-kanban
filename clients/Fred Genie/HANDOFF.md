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
- Status: Live and in use
- Prompt updates done: Hard Rules self-ID line updated; Call Flow Script #1 greeting reconciled
- Prompt push pending: Johnica built 2 revised versions — CJ to review, apply Hard Rules change, push active. Fred does not touch this.
- Call routing issue: Business Phone Number set as priority; Voicemail is backup (not Voice AI). Needs 5–10 call test to confirm behavior. If unanswered calls go to voicemail → remove Business Phone from profile → retest. GHL hours control: confirmed OFF — Fred's phone system handles after-hours forwarding.
- Outlook calendar: Voice AI should book into "Appointment Calendar - Outlook" in GHL (Outlook synced). CJ to verify and connect to Voice AI.
- Caller ID issue: Twilio masks original caller ID. Fix = Fred buys new LC phone number (Add Phone Number → Option 1) and updates Voice AI forwarding destination. Caller name will NOT show — number only.
- Next action: Prompt review + push; call routing test; Outlook calendar verify
- Owner: CJ

**Workstream: Reputation Management**
- Status: APPROVED — Fred approved $110 fix on June 23. Ready to build.
- Broken parts found:
  1. Missing custom field — needs "How was your experience with us?" field created and mapped to survey
  2. Workflow conditional logic — needs updating to route Happy (⭐⭐⭐⭐) and Extremely Happy (⭐⭐⭐⭐⭐) correctly
  3. Corrupted If/Else branch in workflow — needs backup + rebuild before activation
- Next action: Build fix → end-to-end test → activate
- Owner: CJ | Estimate: 2hrs @ $55 = $110

**Workstream: Website Chat Widget**
- Status: Pending website access — Fred chose All-In-One widget
- Website designer: Andrea — andrea@appletreeadvertising.com
- Access method: Andrea assigns cj@gosmarterflow.com as admin
- Note: Voice AI Chat Widget is currently in GHL Labs — confirm agency enablement before install
- Next action: Wait for Andrea to grant access, then install All-In-One widget
- Owner: CJ | Pending: Andrea

---

## 5. Risks and Watch-outs

- **Do NOT activate the reputation management workflow** until the corrupted branch is fixed and end-to-end tested. Activating now will cause routing errors.
- **Caller ID still broken** until Fred switches from Twilio to a Lead Connector number — do not close this item until confirmed.
- **Call routing: Voicemail may intercept calls** — Business Phone Number set as priority, Voicemail as backup. Test 5–10 calls before touching anything. Fix = remove Business Phone from profile if voicemail intercepts.
- **Voice AI Chat Widget is in Labs** — must verify it is enabled at the agency level before attempting install on Fred's website.
- **Sending domain / GBP** — GBP is connected but review automation is not yet live. Do not tell Fred it's active until fully tested.

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
