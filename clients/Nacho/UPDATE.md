# Nacho — Session Updates
**Client:** Nacho
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
- Hidden 7 nav items on Alberto de Blas sub-account (Ask AI, Reporting, App Marketplace, Support Calls, Community, Mobile App, Settings).
- Submitted GHL backend support ticket to disable voicemail at backend level for Asesoria Inmobiliaria León (Location: AmIpeBd5n4gZ2V183CeW, phone: +1 507-516-9800).

**What's next:**
- Wait for GHL support confirmation on voicemail ticket
- Test: let call ring out, verify Call Report shows "Missed" not "Voicemail"

**Blockers:**
- Waiting on GHL support to action the voicemail disable ticket

---

## 2026-06-13

**What was done:**
- GHL Senior Support confirmed: backend voicemail disable is not possible for +1 507-516-9800. Platform limitation — cannot be done via UI or backend.
- Diagnosed root cause: when GHL's voicemail answers a call, the MCTB workflow does not trigger (call exits at None branch with no SMS sent).
- Identified workflow fix: add condition branch at top of "Missed Call Text Back - Digi → Zadarma → GHL" — if call status = Voicemail → send SMS Fuera de horario → End. Bypasses business hours / contact type routing entirely.
- Sent email to Nacho explaining GHL's response and the workflow workaround.

**What's next:**
- Find a way to prevent GHL voicemail from activating entirely (not just handling after the fact)
- Awaiting team response from team@gosmarterflow.com — if anyone knows a config to block voicemail activation, escalate to Nacho

**Blockers:**
- Nacho rejected workflow fix — his goal is voicemail never answers at all (Spanish clients distrust English voicemail, see it as a scam)
- GHL Senior Support confirmed backend disable not possible
- Escalated to Smarter Flow team for a solution — blocked pending team input
