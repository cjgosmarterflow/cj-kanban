# Munchkins Nursery — Session Updates
**Client:** Lottie Hayward / Kellie Mulchinock — Munchkins Nursery
**Consultant:** CJ Salamida

---

## 2026-06-30

**What was done:**
- Weekly billing sent for week 06/22 - 06/26: 1:45 hrs, $96.25, card charged
- Tasks billed: Meeting with Ethan (Munchkins) (0:20:03), GoHighLevel Calendar & Timezone Audit + Fixes (1:23:17)
- Sent to accounts@munchkins-nursery.co.uk (Kelly), CC jonathan@gosmarterflow.com

**What's next:**
- Ask Ethan/Lottie for current priorities across other sub-accounts
- Confirm GHL timezone fixes are holding across all sub-accounts

**Blockers:**
- None

---

## 2026-06-26

**What was done:**
- GHL access granted — completed full timezone audit across all sub-accounts.
- Agency-level timezone was blank → set to GMT+01:00 Europe/London (BST). This was the root cause of the 7-hour time difference in activity logs.
- Dunton Fields sub-account was set to GMT-12:00 (International Date Line) → corrected to GMT+01:00 Europe/London (BST). Was causing appointment records to show wrong timezone + dates off by a full day.
- Brentwood Stage 3 workflow ("Booking an appointment") had a Find Opportunity action failing on an invalid custom field, which caused Update Opportunity to skip → pipeline not auto-updating on bookings. Removed invalid custom field. Workflow now functioning.
- All other sub-accounts (Dunton Park, Baddow, Billericay, Brightlingsea, Laindon, Wivenhoe, Recruitment, Discount Club) were already on correct timezone. No changes needed.
- Sent summary email to Ethan and Lottie with full breakdown of what was done.
- Time logged: 1 hour 23 minutes.

**What's next:**
- Ask Ethan/Lottie for current priorities across other sub-accounts.
- Loom walkthrough is a standing Nica-era practice (not promised by CJ) — optional to continue.

**Blockers:**
- None.

---

## 2026-06-25

**What was done:**
- Intro call with Ethan (Lottie's marketing assistant — Lottie got pulled away, didn't join).
- Ethan walked through how they use GHL: embedded WordPress forms → GHL workflows → time-slot-based email sequences for events. Also use contact cards + opportunity funnels for parent liaison calls.
- Main sub-account: Wivenhoe. Current event sub-account: Billericay. ~8+ sub-accounts total.
- **Active bug identified:** Calendar/timezone conflict — business timezone set wrong, affecting appointment booking across sub-accounts. Staff can't see all available time slots. Ethan suspects conflict between business calendar, employee calendar, and timezone settings.
- GHL access still not granted — Ethan and Lottie don't have My Staff permissions. Kelly (separate office, top admin permissions) needs to add CJ.
- CJ showed Ethan two methods: (1) agency-level — add via team panel, covers all sub-accounts at once; (2) sub-account level — Settings > My Staff, done one by one.
- Ethan will contact Kelly tomorrow to grant access. Also forwarded last email thread with Nica to cj@gosmarterflow.com — check inbox.
- CJ committed to: as soon as access is granted, audit timezone issue + send estimate (likely 15-30 min fix), then proceed after approval.

**What's next:**
- Grant CJ GHL access (Kelly's action) — Ethan following up with Kelly.
- Check inbox for forwarded Nica email thread from Ethan.
- Once access granted: audit calendar/timezone conflict, send estimate, fix on approval.

**Blockers:**
- GHL access pending Kelly (top admin). Ethan will contact her tomorrow (Jun 26).

---

## 2026-06-23

**What was done:**
- Sent intro email to Lottie and Kellie introducing CJ as new primary consultant (replacing Nica).

**What's next:**
- Await Lottie/Kellie reply.
- Migrate GHL access from Nica to CJ.
- Ask current priorities across all nursery sub-accounts.

**Blockers:**
- None.

---

## 2026-06-22

**What was done:**
- Received handoff from Jonathan. CJ confirmed as Primary (replacing Nica).
- Files scaffolded.

**What's next:**
- Introduce CJ to Lottie and Kellie.
- Migrate GHL access from Nica to CJ.
- Ask current priorities across all nursery sub-accounts.

**Blockers:**
- None — just needs intro email.
