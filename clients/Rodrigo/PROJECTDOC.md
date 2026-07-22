# INTERNAL - Rodrigo Clark - Gracie Barra Santa Barbara
<!-- Mirrors the Google Drive Project Doc. Edit here, paste to Drive — or paste from Drive back here. Do NOT edit the Activity Log section; that is AI-maintained in the Drive doc only. -->

**Client:** Rodrigo Clark  |  **Company:** Gracie Barra Santa Barbara (Brazilian Jiu-Jitsu gym)  |  **HighLevel sub-account:** klHc5Eg0r48FoFYAVWhI  |  **Primary:** CJ  |  **Backup:** Jed  |  **Backup-2:** Moon  |  **Status:** Active

## 1. Snapshot

Gracie Barra Santa Barbara is a BJJ gym running on HighLevel. Account transitioned from Kyle to CJ on 2026-06-09. Trust rebuilt through fast follow-through. Webhook, pipeline audit, and lead notifications are all done. Active workstreams: (1) Add GHL All-In-One Chat widget to gbsantabarbara.com — replacing old chatbot; (2) Remove Friday/Saturday availability from Free Consultation calendar; (3) Contact timezone field cleanup — pending Rodrigo's confirmation on whether forms collect timezone.

## 2. Communication

- **Primary contact:** Rodrigo Clark — rodrigoclarkbjj@gmail.com
- **All associated emails + contacts:** Call center — 1210008878@armailstnr.appspotmail.com (outbound calls vendor). Outbound number: 805-324-7086.
- **Preferred channel and format:** Email (he emails Jonathan directly). Confirm direct preference with Rodrigo.
- **Timezone / best times:** Pacific (Santa Barbara, California, UTC-7).

## 3. Access and Systems

- **HighLevel sub-account(s):** Gracie Barra Santa Barbara — klHc5Eg0r48FoFYAVWhI
- **support@gosmarterflow.com added to the sub-account?** TO CONFIRM
- **Secrets vault (1Password):** TO CREATE
- **What is built:** Lead notification emails (fixed). Webhook integration with outbound call center (complete). Sales pipeline and funnel automations (audited and confirmed working). Website gbsantabarbara.com is external — not in GHL.
- **Billing:** Stripe auto recharge on sub-account wallet (LC phone/email credits — wallet credits, not consulting fees). Consulting billed through weekly billing flow.

## 4. Current state and Next actions

**rc-004 — Add GHL All-In-One Chat widget to gbsantabarbara.com (TODO):** Old chatbot removed/deprecated. Rodrigo now wants GHL chat widget added instead. Site is external — need to get embed code from GHL and give to Rodrigo/site admin to install before `</body>`. Owner: CJ.

**rc-008 — Remove Fri/Sat availability from Free Consultation calendar (TODO):** Staff shortages on Fri/Sat — leads must not be able to book those days. Staff can still book manually inside GHL anytime. Owner: CJ.

**rc-010 — Clear contact timezone fields + audit forms (WAITING ON RODRIGO):** Root cause of "7pm booking" confusion: a contact had timezone = CDT. GHL rendered appointment time in contact's timezone → showed 7pm to staff (was 5pm PDT, valid booking). Fix: clear timezone fields on contacts + remove timezone question from any lead forms. Rodrigo asked to confirm if forms collect timezone. Owner: CJ, blocked pending reply.

**Completed — Calendar bug diagnosis (Jul 3):** Diagnosed "7pm booking" — not a real bug. Contact timezone field (CDT) caused display mismatch. Calendar settings (1pm–6pm PDT) confirmed correct. Explained to Rodrigo.

**Completed — Contact Us form fix (Jul 3):** Form on gbsantabarbara.com fixed.

**Completed — Webhook integration:** Outbound call center fully connected. Call center email (1210008878@armailstnr.appspotmail.com | 805-324-7086) added to lead notifications.

**Completed — Pipeline automation audit:** Automations confirmed working. Leads auto-progress per set timeframes.

**Completed — Lead notifications:** Fixed Jun 12. Rodrigo receives new lead emails. Call center email on notification list.

## 5. Risks and watch-outs

- **Trust gap:** Service lapsed when Kyle left (bounced email). Rodrigo flagged "urgent" twice. Needs visible follow-through — no more gaps.
- **Review risk:** Marked "Not Likely" in old Clients Tracker. Handle with extra care before any review ask.
- **External website:** gbsantabarbara.com is not in GHL. Chat widget install requires Rodrigo's site admin to paste embed code.
- **Contact timezone field:** If leads fill out a form with timezone, it overrides appointment time display in notifications. Monitor for recurrence until rc-010 is resolved.

## 6. Handoff notes (read first if covering cold)

- Kyle departed with no handoff. CJ is Primary as of 2026-06-09.
- Webhook and pipeline work are done. Only open task is chatbot removal from gbsantabarbara.com (external site, not GHL).
- Tone: apologize for the gap once, then move fast. Rodrigo wants action, not explanations.
- Contact: rodrigoclarkbjj@gmail.com. Pacific time.
