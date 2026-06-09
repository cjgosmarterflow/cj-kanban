# Nacho — Claude Context
**Client:** Nacho
**Consultant:** CJ Salamida
**Started:** June 2026

---

## Sub-Accounts

| Sub-Account | Location ID | Notes |
|---|---|---|
| Alberto de Blas | q7QWcqB3q81Kq4KLw2vs | Nav cleanup in progress |
| Asesoria Inmobiliaria León | AmIpeBd5n4gZ2V183CeW | Missed call text back fix in progress |

---

## Alberto de Blas (q7QWcqB3q81Kq4KLw2vs)

**Task:** Hide the following items from the left navigation menu:
1. Ask AI
2. Reporting
3. App Marketplace
4. Support Calls
5. Community
6. Mobile App
7. Settings

Path in GHL: Agency → Sub-accounts → Alberto de Blas → Edit → Left Nav / Menu customization

---

## Asesoria Inmobiliaria León (AmIpeBd5n4gZ2V183CeW)

**Phone:** +1 507-516-9800
**Workflow:** "Missed Call Text Back - Digi -> Zadarma -> GHL"

### Call chain
1. Incoming → Spanish mobile (Digi) → rings ~10s
2. No answer → diverts to Spanish landline via Zadarma
3. Zadarma forwards to GHL +1 507-516-9800
4. GHL Number Settings: incoming timeout 50s, outgoing timeout 40s

### Problem
GHL sometimes auto-answers (IVR or voicemail) instead of registering as Missed. Call Status = "Voicemail" → workflow does NOT trigger. Call Status = "Missed" → workflow triggers correctly.

### Goal
Every unattended call = "Missed" status. No voicemail, no IVR, no Voice AI, no fallback.

### What's been tried
- Zadarma: call duration 30s, if no answer hang up. Works inconsistently.

### Fix needed
1. Disable voicemail at backend level for +1 507-516-9800 (not available in UI)
2. Set optimal GHL timeout so call never reaches voicemail
3. Validate fix covers all scenarios: client hangs up, Zadarma cuts call, timeout expires

### Current voicemail greeting (to be disabled)
"We are unable to take your call right now. Please leave a message after the beep."
