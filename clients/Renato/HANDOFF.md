# INTERNAL — Renato Gerger — Sarah K

**Client:** Renato Gerger  |  **Company:** Sarah K (sarahk.com.au)  |  **HighLevel sub-account ID:** [TBD — confirm in GHL]  |  **Primary:** CJ Salamida  |  **Backup:** [see Backups tab]  |  **Status:** Active

---

## 1. Snapshot

Sarah K is an Australian cosmetic / med-spa business. CJ inherited this client from Nica Dapac (June 10, 2026). Primary work to date has been an EOFY SMS + email campaign targeting 773 contacts. The SMS campaign hit GHL's ramp limit on launch day (100/day), required workflow restructuring and manual tagging to resolve. All 775 contacts are now enrolled in the fixed workflow (Drip Mode, 250/day). Campaign is actively sending.

---

## 2. Communication

**Primary contact:** Renato Gerger — renato@sarahk.com.au

**All associated contacts:**
- Renato Gerger (owner) — renato@sarahk.com.au / renatogerger@gmail.com

**Preferred channel:** Async email  
**Active thread:** "Re: Smarter Flow Project Outline and Next Steps"  
**Timezone:** AEST (UTC+10) — Australia

---

## 3. Access and Systems

**HighLevel sub-account:** Sarah K — sarahk.com.au  
**Location ID:** [TBD — pull from GHL URL]  
**support@gosmarterflow.com added:** [TBD — verify]  
**Secrets vault (1Password):** [TBD]

**What is built:**
- EOFY SMS Campaign workflow — Drip Mode, 250/day, triggers on contact enrollment
- EOFY-SMS-Sent Smart List — 112 contacts already received SMS, protected from duplicates
- Sarah K EOFY email campaign — scheduled, launched June 15
- Sending domain: sales@inbox.replies.sarahknanoplasty.com.au (sarahk.com.au DNS could not be verified)

---

## 4. Current State and Next Actions

**Workstream: EOFY SMS Campaign**
- Status: Completing — Day 3 of drip (June 18). ~163 contacts remaining. Expected to finish June 18.
- Next action: Confirm final delivery in GHL workflow history. No manual action needed unless contacts stall.
- Owner: CJ | Due: ~June 18

**Workstream: General GHL Audit**
- Status: Started (EOFY workflow was the first audit item — completed)
- Next action: Broader workflow audit when EOFY campaign wraps
- Owner: CJ | Due: TBD

---

## 5. Risks and Watch-outs

- **SMS ramp system** — Account is mid-ramp (Level 2+, 250/day). Do NOT bulk-enroll contacts outside the workflow or the ramp resets. Always use Drip Mode.
- **Sending domain mismatch** — @sarahk.com.au DNS records could not be verified. All outbound email uses sales@inbox.replies.sarahknanoplasty.com.au. Do not attempt to resend from @sarahk.com.au without resolving DNS first.
- **4 duplicate contacts** — Found during EOFY audit. Not yet merged/deleted. Flag for cleanup.
- **EOFY-SMS-Sent tag is critical** — The 112 already-sent contacts rely on this tag to be excluded from duplicate sends. Do not delete this tag or the Smart List.

---

## 6. Handoff Notes (read first if covering cold)

1. EOFY SMS campaign is live and sending in Drip Mode — do not re-enroll contacts or modify the workflow mid-send.
2. 112 contacts already received the SMS and are tagged EOFY-SMS-Sent. The workflow uses this to exclude them from duplicates.
3. The sending domain is sales@inbox.replies.sarahknanoplasty.com.au — not @sarahk.com.au.
4. Renato emails from both renato@sarahk.com.au (professional, use this) and renatogerger@gmail.com (personal).
5. GHL sub-account Location ID is still TBD — pull it from the GHL URL on first login.

---

══════════════ ACTIVITY LOG (AI-maintained, do not edit below this line) ══════════════

2026-06-10 | Email | by Renato — Requested help with EOFY SMS Campaign (send to all contacts at 8:00 AM June 15) and asked to verify email campaign readiness.

2026-06-11 | Email | by CJ — Sent instructions + Loom walkthrough for bulk-enrolling 773 contacts into EOFY SMS Campaign workflow. Confirmed Sarah K EOFY email campaign scheduled (Jun 14 10:15 PM system time = early morning June 15 AEST).

2026-06-12 | Email | by Renato — Confirmed receipt and that steps were followed.

2026-06-15 | Campaign launch | by Renato — EOFY email sent successfully. SMS hit GHL Level 1 ramp limit at 112 contacts sent. Reported error: "You have reached your SMS sending limit of 100 for the day."

2026-06-15 | Work | by CJ — Identified 112 confirmed SMS recipients. Audited and fixed workflow (removed Custom Date + Wait actions, converted to Drip Mode). Segregated contacts into sent/unsent lists. Applied EOFY-SMS-Sent tag to 112 contacts. Attempted CSV import (3–4 times) — GHL import bug blocked completion. (~3h 5min)

2026-06-16 | Work | by CJ — SMS Level 2 (250/day) unlocked at 8:00 AM AEST. Re-enrolled all 663 remaining contacts into workflow via Drip Mode (10:48–11:31 AM, ~43 min).

2026-06-17 | Validation | by CJ — Confirmed bulk tag update processed. Verified EOFY-SMS-Sent Smart List = 112 contacts. Final validation passed — no duplicate sends possible. Sent Renato summary email.

2026-06-18 | Monitoring | by CJ — Drip Day 3. ~163 contacts remaining as of today. Campaign expected to complete today. No issues reported.
