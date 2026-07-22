# Jared White — GHL Workflow Map
**Account:** Brickell Window Cleaners | **Location ID:** l4uFssfuU8NJySwHkeGc
**Last updated:** 2026-06-27

> Face-value catalog of workflows visible in GHL Automation tab. Updated as screenshots are reviewed. NOT based on clicked-through trigger/action details — only what's visible at builder level.

---

## Workflow #0 — WF #0 Lead Data Collection

**What it consists of:**
- **Trigger:** Contact Created — no filters (fires on ALL new contacts, including Meta leads)
- **Wait:** 1 minute
- **Wait step:** Wait for Name and Address
- **Find Opportunity** action → branches:
  - **Opportunity Found:**
    - Condition — Is In New Lead Stage (Pipeline stage = Lead Pipeline → New Lead)
    - Yes → **Update Opportunity**: Pipeline = Lead Pipeline, Stage = Info Collected. **Duplicate opportunity: ENABLED**
    - No (None of conditions met) → END
  - **Opportunity Not Found:**
    - **Create Opportunity** → END

**Notes:**
- Fires on every contact regardless of source — Meta form leads, manual entries, everything
- "Duplicate opportunity: ENABLED" on the Update step — means it will create a duplicate opp if one already exists. Potentially problematic.
- 182 contacts have passed through this workflow (shown in builder)
- Meta relevance: **YES** — any Meta lead form contact created in GHL runs through this workflow

---

## Workflow — Nurture & Follow-Up Stop Conditions

**What it consists of:**
- **Trigger 1:** Appointment status — Event Type is "Normal" + Appointment status starts with "co..." + 2 more conditions (truncated)
- **Trigger 2:** Pipeline stage changed — In Lead Pipeline, Pipeline stage changed to "Booked Appointment" (or similar)
- **Trigger 3:** Contact tag added — Tag includes "Glass Keepers..." (Glass Keepers Club tag)
- **Trigger 4:** Contact DND — DND direction is "Outbound"
- **Action:** Remove from Workflow — removes contact from the following workflows simultaneously:
  - Post-Service Upsell: Glass Keepers Club Promotion
  - Quote Sent Nurture Sequence
  - Quote Sent Stage
  - Geo-Text Strategy
  - Follow-up Needed
  - +9 more (not fully visible in screenshot)

**Notes:**
- This is the kill switch / stop-conditions workflow for all nurture flows
- Any of the 4 triggers fires → contact yanked from all listed active sequences
- Confirmed Published
- Meta relevance: **Indirect** — if a Meta lead books an appointment or goes DND, this fires and stops their nurture

---

## Workflow #1 — WF #1 Form Submissions

**What it consists of:**
- **Trigger 1:** Facebook Lead Form submission — Page is "Brickell Window Cleaners", Form is any of ["Window Form v3..."] (truncated — multiple forms likely)
- **Trigger 2:** Form Submitted — Form is any of "Estimate"
- **Action 1:** Remove from Workflow (specific workflow not visible)
- **Action 2:** Add Tag (tag name not visible)
- **Action 3:** Create Or Update Opportunity
- **Action 4:** Internal Notification
- **Action 5:** Internal Notification (second — likely different recipient or message)
- **Action 6:** Task created — "#2 Action Needed: Follow-Up – New Estimate Submission"
- **Action 7:** Wait 30 seconds
- **Condition:** If "First name" is not empty
  - **Yes branch:**
    - SMS #1 → Wait few seconds → SMS #2 → Wait 1 Hour
    - Contact reply → END
    - Time out (1 hour) → Condition: If "Time of the day" is before 7:30 PM (Weekdays)
      - Before 7:30PM weekdays → **Day 0 SMS Follow Up** → Wait (note: "update once 10-day campaign complete") → Goal → END
      - None (after hours) → Go To (loops back)
  - **None branch (no first name):**
    - SMS #1 → Go To (loops back)

**Notes:**
- **Meta relevance: HIGH** — Trigger 1 is explicitly Facebook Lead Form from Brickell Window Cleaners page. Primary Meta ads entry point into GHL.
- Sends SMS #1 within 30 seconds of form submission regardless of first name
- Business hours gate (before 7:30PM weekdays) controls Day 0 SMS timing
- Builder note references 10-day campaign — WF #1 hands off to WF #2.1 after Day 0
- 10 contacts at Wait step (small but active)

---

## Workflow #1.1 — WF #1.1 New Lead (Missing Information)

**What it consists of:**
- **Trigger:** Contact Created — no filters (fires on ALL new contacts, same as WF #0)
- **Wait:** 3 minutes
- **Condition:** If Address 1 is empty OR Full address is empty + 1 other segment
  - **Match (missing address):**
    - Create Opportunity in New Lead Stage
    - **Condition** → 3 branches:
      - **Case 2 (name present, address missing):** SMS #1 → Wait few sec → SMS #2 → Wait 1hr → [Contact reply → Internal Email + SMS Notification → END | Time out → SMS Follow Up #1 → Wait → Contact reply → Go To | Time out 1 day → END]
      - **Case 3 (no data — no name or address):** SMS #1 → Wait few sec → SMS #2 → Wait 1hr → [Contact reply → Internal Email + SMS Notification → END | Time out → SMS Follow Up #1.1 → Wait → Contact reply → Go To | Time out 1 day → END]
      - **None:** END
  - **None (address present):** END

**Notes:**
- **Meta relevance: HIGH** — Contact Created with no filters = runs for all Meta lead form contacts
- **Overlap risk with WF #0:** Both trigger on Contact Created. WF #0 waits 1 min; WF #1.1 waits 3 min. Both create opportunities → potential race condition / duplicate opp
- Data-collection fallback — catches contacts where address is missing
- Case 2 vs Case 3 have different follow-up SMS variants (#1 vs #1.1)
- 3 contacts at SMS Follow Up #1 wait step

---

## Workflow #2.1 — WF #2.1 10 Day Stale Opportunity

**What it consists of:**
- **Trigger 1:** Stale Opportunities — "Stale Opportunities - Follow-Up" — In Lead Pipeline, stage: Follow-Up Needed + 1 more
- **Trigger 2:** Stale Opportunities — "Stale Opportunities - New Lead" — In Lead Pipeline, stage: New Lead + 1 more
- **Tag gate (Condition):** If Tags does not include `10day_recovery_active` → proceed; None → END
- **Name check (Condition):**
  - **Branch (First name not empty):** Day 10 SMS → END
  - **None (no first name):** Day 10 SMS → END *(both send SMS — content differs)*

**Bug #1 — Root cause (CONFIRMED):**
- Workflow never writes `10day_recovery_active` tag → gate never blocks re-entry
- Stale trigger re-fires every 10 days indefinitely as long as opportunity stays idle
- Eddie eMIX Hernández: enrolled Jun 1, Jun 11, Jun 21 — Day 10 SMS sent 3 times

**Fix:**
- Add "Add Tag: `10day_recovery_active`" step before Day 10 SMS in **both** branches (name + no-name)
- Once written, gate blocks all future re-fires for this workflow

---

## Workflow #2.2 — WF #2.2 15 Day Stale Opportunity

**What it consists of:**
- **Trigger 1:** Stale Opportunities — In Lead Pipeline, stage: New Lead + 1 more
- **Trigger 2:** Stale Opportunities — In Lead Pipeline, stage: Follow-Up Needed + 1 more
- **Tag gate (Condition):** Full tag check (confirmed via tooltip):
  > If Tags does not include `10day_recovery_active` AND `won` AND `lost` AND `bwc_booked` AND `bwc_stopall` AND `bwc_dnd` AND `bwc_manual_control`
  - Pass → proceed; None → END
- **Name check (Condition):**
  - **Branch (First name not empty):** Day 15 SMS → If Email not empty → **Email** → END | None → END
  - **None:** Day 15 SMS → If Email not empty → **Email** → END | None → END

**Bug #1 — Root cause (CONFIRMED) + Design flaw:**
- WF #2.2 re-fires every 15 days (Eddie enrolled Jun 6 + Jun 21 — 15 days apart)
- Gate checks `10day_recovery_active` — but if WF #2.1 writes this tag (fix), WF #2.2 would NEVER fire for those contacts. This was a copy-paste error in the original build.
- Two independent cadences: WF #2.1 fires every 10 days, WF #2.2 fires every 15 days. On Day 30, both hit simultaneously (confirmed: Eddie, Jun 21, 24 sec apart)

**Fix:**
1. Change WF #2.2 tag gate to check `15day_recovery_active` (not `10day_recovery_active`) — allows Day 15 to fire for contacts who already received Day 10
2. Add "Add Tag: `15day_recovery_active`" before Day 15 SMS in both branches
3. Proactive find (not Jared's complaint): Add DND SMS gate before email step — contacts who texted STOP still receive emails (Bill Heilmann confirmed example). Flag at Jun 30 Zoom.

---

## Workflow #3 — WF #3 Quote Stage Recovery

**What it consists of:**
- **Trigger:** Stale Opportunities — "Stale Opportunities - 3rd day" — Lead Pipeline, stage: **Quoted**, duration: 3 days
- **Tag gate:** Same as WF #2.1/#2.2 PLUS `state_booked`:
  > `10day_recovery_active`, `won`, `lost`, `bwc_booked`, `bwc_stopall`, `bwc_dnd`, `bwc_manual_control`, `state_booked`
- **Both branches (name/no-name) run identical sequence:**
  1. Day 3 SMS → Wait → Day 3 Email → Wait (1 day)
  2. Contact reply → Internal SMS + Internal Notification → END
  3. Timeout (1 day) → Day 4 SMS → Wait (1 day) → [reply → Go To | timeout → Day 5 SMS → Wait few sec → Day 5 SMS → Wait 7 days]
  4. Timeout (7 days) → Day 7 SMS → Wait 3 days → [reply → Go To | timeout → Recovery SMS Message 2 → Wait → Recovery SMS Message 2.1]

**Active contacts:** 15 at Day 5 → 7-day wait. 6 at Day 7 → 3-day reply wait.

**Notes:**
- Targets Quoted stage only — separate from #2.1/#2.2
- Sends Day 3 Email — same DND gap (no email DND check). Flag at Zoom.
- Same suppression tag missing issue — `10day_recovery_active` checked but never written → re-fire risk
- Day 5 SMS fires TWICE back-to-back (double-send or build error — verify intent)
- Multi-week cadence: Day 3 → 4 → 5 → 7 → Recovery msgs
- **Meta relevance:** Indirect — fires when Quoted-stage contacts go stale, includes Meta leads who reached Quoted

---

## Workflow — Won/Booked Killswitch *(name not visible)*

**What it consists of:**
- **Trigger 1:** Contact Tag `won` added
- **Trigger 2:** Contact Tag `bwc_booked` added
- **Action:** Remove from Workflow → END

**Notes:**
- Lightweight kill-switch for won/booked contacts — pulls them from active nurture sequences
- Companion to "Nurture & Follow-Up Stop Conditions" (different trigger set)

---

## Workflow — Lost Handler *(name not visible)*

**What it consists of:**
- **Trigger 1:** Opportunity Changed → Lead Pipeline, stage changed to Closed Lost
- **Trigger 2:** Contact Tag `lost` added
- **Actions:** Add Tag (unknown) → Update Opportunity Status to Lost → Remove from Workflow → END

**Notes:**
- Standardizes lost contacts: tags them, marks opp as lost, removes from active sequences
- Add Tag content not visible — open to confirm

---

## Workflow #6 — WF #6 Tag Conditions

**What it consists of:**
- **Trigger 1:** Contact Tag `quote_sent` added
- **Trigger 2:** Contact Tag `state_completed` added
- **Trigger 3:** Contact Tag `state_booked` added
- **Condition** routes by which tag fired:
  - **Completed** (`STATE_COMPLETED`): Find Opportunity → [Found: check stage = Work Completed → END | else Update Opportunity → END] [Not Found: Create Opportunity → END]
  - **Quote Sent** (`quote_sent`): Find Opportunity → [Found: check stage = Quoted → END | else Update Opportunity → END] [Not Found: Create Opportunity → END]
  - **Booked** (`STATE_BOOKED`): Add to Workflow → **WF #4.1 Booked - Closed Won** → END
  - **None** → END

**Notes:**
- Central tag-to-pipeline-stage router
- Reveals **WF #4.1 Booked - Closed Won** exists (not yet documented)
- Status: **Draft** — not published
- Meta relevance: Indirect

---

## Workflow — Appointment Booking V2

**What it consists of:**
- **Trigger:** Not visible (cut off — check Settings tab)
- Add Tag → Wait 1 minute → **⚠️ Meta Conversion API** → #1 Format Date and Time → #1 Book Appointment
- **Condition:** If Subscription Recurrence Frequency = One time
  - **One time:** Add Tag → Condition: If Invoice Status contains "True"
    - Invoice Paid → Note → Create opportunity in Paid Stage → Wait 1 Day after appointment → END
    - None (not paid) → Note → Create opportunity in Paid Stage → END
  - **None (recurring):** Go To (loop)

**Notes:**
- **Meta relevance: CRITICAL** — Directly calls Meta Conversion API. Bridge between GHL bookings and Meta ads attribution/ROAS reporting.
- Trigger unknown — need to confirm (likely Appointment Booked)
- Meta CAPI fires before the booking step (after 1-min wait) — sequencing matters for deduplication
- Central to Jared's Meta Attribution project (Project B)

---

## Workflow — Z-09-3 Email Bounced

**What it consists of:**
- **Trigger:** Email Events → Event is "Bounced"
- System Added Note (logs the bounce)
- Add contact tag: `email bounced`
- Set contact DND — Email Only
- Remove from all workflows
- END

**Notes:**
- Hygiene/compliance workflow — handles bad email addresses
- DND set to Email Only (SMS still allowed)
- Removes contact from all active workflows on bounce
- Meta relevance: None — housekeeping only

---

## Workflow Folder — 10-DAY LEAD RECOVERY (#1 / #2 / #3 / FINAL CALL TASK)

**Status: All Draft — 0 total enrolled, 0 active enrolled**
**Active work:** #1 interior fully audited (2026-06-27). #2, #3, FINAL CALL TASK interiors not yet reviewed.

| Workflow | Last updated | Created | Interior audited |
|---|---|---|---|
| 10-DAY LEAD RECOVERY #1 | May 15 2026 | Apr 12 2026 | ✅ 2026-06-27 — Days 1–3 |
| 10-DAY LEAD RECOVERY #2 | Apr 27 2026 | Apr 26 2026 | ✅ 2026-06-27 — Days 4–6 |
| 10-DAY LEAD RECOVERY #3 | Apr 27 2026 | Apr 26 2026 | ✅ 2026-06-27 — Days 7–10 + Hail Mary |
| FINAL CALL TASK | Apr 27 2026 | Apr 26 2026 | ✅ 2026-06-27 — post-hail-mary call task, clean |

**System design context:**
- #1 = Days 1–3 | #2 = Days 4–6 | #3 = Days 7–10 + Hail Mary | FINAL CALL TASK = post-completion call task
- No trigger on any of the 4 — intentional chain via "Add to Workflow" actions
- **Confirmed workflow chain (all IDs verified 2026-06-27):**
  - WF #1 (Form Submissions) → placeholder wait → **#1** (no trigger, entered via Add to Workflow)
  - **#1** Day 3 timeout → **#2** (`eef98080-77b1-4191-9335-9f43bccb71da`)
  - **#2** Day 6 timeout → **#3** (`ccb13368-598f-41d4-9f1d-9572b641bb0c`)
  - **#3** Hail Mary timeout → **FINAL CALL TASK** (`003892e4-0c37-4d27-a9f0-4b8b5b526bfa`) ✅ confirmed
  - **Objection micro-flow** = `60b374a2-6beb-46f6-9699-a63400014a14` (called by all 4 recovery workflows on objection replies)
  - **LONG-TERM NURTURE** = `d15267c6-c4d8-4adb-ab87-5a32d4d87971` — orphaned, empty skeleton, not connected to recovery chain
- **Do NOT wire WF #1 until all 4 are published.** WF #1 placeholder wait must be replaced with "Add to Workflow → #1" as the LAST step.

---

### #1 — Interior Audit (2026-06-27)

**What's built correctly ✅**
- Tag write `10day_recovery_active` at entry
- Initial eligibility gate (time ≥ 9:15 AM + suppression tags: bwc_booked, bwc_manual_control, bwc_dnd, lost, won)
- Day 1 SMS with name/no-name split — correct spec copy: "Hey {{contact.first_name}} — circling back, let me know when you get a chance ✨"
- Reply wait (12h) → classify or continue
- Reply classification — all 8 buckets with keyword + AI intent (schedule-yes / schedule-no)
- Hard No path — DND outbound + opportunity → Lost ✅
- Objection sub-classification A/B/C → routes to objection workflow (`60b374a2-6beb-46f6-9699-a63400014a14`)
- Dependent path — support SMS + 7-day booking wait
- Timing path — support SMS
- Day 2 lunch window (11:30–13:30 weekdays) + per-step suppression check ✅
- Day 2 lunch SMS — correct spec copy
- Day 2 evening window (17:00–19:30 weekdays) + per-step suppression check ✅
- Day 2 evening SMS — correct spec copy
- Day 3 email subject line correct: "Quick follow-up on your window cleaning request"
- Handoff to #2 via `Add to Workflow (eef98080-77b1-4191-9335-9f43bccb71da)` at end of Day 3 ✅
- Hold/pause loop on manual control ✅
- Reply classification re-used at Day 2 and Day 2/3 transitions ✅

**Gaps — must fix before publishing**

| # | Gap | Severity | Status |
|---|-----|----------|--------|
| 2 | Day 3 time window bug: start AND end both "14:00" — zero-width, never fires | CRITICAL | ✅ Fixed (Prompt 2 applied) |
| 3 | Day 3 email body — was flagged as placeholder but was already correct | — | ✅ Not a gap — skip |
| 4 | Day 3 MMS absent — spec §14 requires before/after photo | LOW | ⏳ Deferred — publish without it, add after Jared sends image |
| 5 | Scheduled follow-up path — only writes tag. Need to confirm if separate workflow fires on `bwc_scheduledfollowup` tag before touching #1 | HIGH | ❓ Investigate: check GHL for WF triggered by this tag |
| 6 | Soft No path — tag + stage update is sufficient. GHL auto-removes on END. No extra steps needed. | ✅ | N/A — resolved by clarification |
| 7 | Human override timing check — N/A, bwc_manual_control tag is sufficient | — | ✅ Removed — not needed |

**Message sequence status for #1**

| Day | Required | Status |
|-----|----------|--------|
| 0 | Day 0 follow-up SMS ~2hrs after form | ✅ Handled by WF #1 |
| 1 | 1 SMS | ✅ Built — correct spec copy |
| 2 lunch | 1 SMS | ✅ Built |
| 2 evening | 1 SMS | ✅ Built |
| 3 | MMS before/after photo | ❌ Missing — needs Jared image |
| 3 | Email — Day 3 | ❌ Placeholder body — needs spec copy |
| Handoff → #2 | | ✅ Wired to `eef98080` |

---

### #1 — Fix Prompts for Workflow AI

> ⚠️ Do NOT run Prompt 1 (WF #1 handoff) until all 4 workflows are complete, tested, and published.

**Prompt 2 — Fix Day 3 time window** ✅ DONE
> ~~In 10-DAY LEAD RECOVERY #1, find the time window wait step named "Day 3 - SMS." Change the start time to 12:00, end time stays 14:00, Monday–Friday.~~

**Prompt 3 — Day 3 email body** ✅ NOT A GAP — SKIP
> Email body was already correct. No action needed.

**Prompt 4 — Add Day 3 MMS** ⏳ DEFERRED — needs Jared's before/after image
> Day 3 already has the email. MMS is a separate, complementary touch (visual before/after photo). Goes BEFORE the email. Do not block publishing over this — wire it in after Jared sends the image.
>
> When image is ready: In 10-DAY LEAD RECOVERY #1, insert an MMS step BEFORE the Day 3 email time window wait. Add a condition: if tag "bwc_beforeafter_sent" is absent — yes branch continues, none branch skips to email. On the yes branch: send MMS with the before/after image and text "Hey — just wanted to show you a quick before & after from a recent job. Let me know if you want me to get this taken care of". After MMS sends, add tag: bwc_beforeafter_sent. Then continue to Day 3 email.

**Prompt 5 — Scheduled follow-up path** ❓ INVESTIGATE FIRST
> Before editing #1: check GHL Automation tab for any workflow that triggers on tag `bwc_scheduledfollowup` being added. If one exists → #1 just needs to write the tag and END, that workflow handles the rest. If none exists → need to build the scheduled follow-up mini-loop (either inside #1 or as a new workflow).

**Prompt 6 — Soft No path** ✅ NO ACTION NEEDED
> Soft no path already writes `bwc_softno` tag + updates opportunity stage. GHL auto-removes contact from workflow on END. No explicit Remove step or Add to Workflow needed. Soft no contacts will re-enter Day 3 email after 14 days through existing stale trigger — that is the intended nurture path.

**Prompt 1 — Wire WF #1 handoff** *(run LAST — only after all 4 are published)*
> Go to WF #1 Form Submissions. Find the step after "Day 0 SMS Follow Up" — there is a Wait step with a builder note: "update once 10-day campaign complete." Replace that Wait step with an "Add to Workflow" action pointing to 10-DAY LEAD RECOVERY #1. This fires on the timeout branch (no reply) only. Leave the Contact Reply branch going to END as-is.

---

### #2, #3, FINAL CALL TASK — Pending Interior Review

Need screenshots of all 3 to audit. Based on system design:
- **#2** likely covers Days 4–7 (entered via handoff from #1 at end of Day 3)
- **#3** likely covers Days 8–10 + Hail Mary email
- **FINAL CALL TASK** — post-completion, creates staff call task. Must confirm: exclusion conditions (not booked/hard no/DND/manual), tags BWC_Call_FinalAttempt + BWC_CallTask_Created, no-answer SMS + voicemail note, move to nurture on no-answer.

---

### Pre-Publish Checklist

- [x] #1 interior fully audited
- [x] Prompt 2 — Day 3 time window fixed
- [x] Prompt 3 — N/A (email body was already correct)
- [x] Prompt 6 — N/A (soft no path is fine as-is)
- [ ] Prompt 5 — check GHL for workflow triggered by `bwc_scheduledfollowup` tag
- [x] #2 interior audited (2026-06-27) — Days 4–6, clean, confirm Day 4 email body not placeholder
- [x] #3 interior audited (2026-06-27) — Days 7–10, clean, confirm Hail Mary email body not placeholder
- [x] FINAL CALL TASK interior audited (2026-06-27) — clean, no changes needed
- [ ] Verify Day 4 email body in #2 not placeholder (open in GHL)
- [ ] Verify Hail Mary email body in #3 not placeholder (open in GHL)
- [ ] GHL Conversation AI confirmed enabled on sub-account
- [ ] Full flow tested on sandbox contact
- [ ] All 4 published in order: #1 → #2 → #3 → FINAL CALL TASK
- [ ] THEN: Prompt 1 applied — WF #1 wait replaced with Add to Workflow → #1
- [ ] After publish: ask Jared for before/after image → wire Day 3 MMS (Prompt 4)

---

## Workflows Pending Documentation

- [ ] WF #4.1 Booked - Closed Won (confirmed exists via WF #6)
- [ ] ZenMaid completion trigger workflow(s)
- [ ] Review gating + rescue routing workflow(s)
- [ ] Membership automation workflow(s)
- [ ] Reactivation sequences
- [ ] Chatbot / DM automation workflow(s)
- [ ] Appointment Booking V2 trigger (scroll up in builder to confirm)

---

## Meta Ads Relevance Tracker

| Workflow | Meta trigger? | Sends email? | Notes |
|---|---|---|---|
| WF #0 Lead Data Collection | YES (Contact Created, no filter) | No | Fires for ALL contacts incl. Meta leads |
| WF #1 Form Submissions | YES (Facebook Lead Form trigger) | No | PRIMARY Meta entry point |
| WF #1.1 New Lead (Missing Info) | YES (Contact Created, no filter) | No | Overlaps WF #0 — both run simultaneously |
| WF #2.1 10 Day Stale | Indirect (stale follow-up) | No | SMS only; Bug #1 FIXED 2026-06-26 (tag write added) |
| WF #2.2 15 Day Stale | Indirect (stale follow-up) | Yes | Bug #1 FIXED 2026-06-26 (tag corrected to `15day_recovery_active`) |
| WF #3 Quote Stage Recovery | Indirect (Quoted stage stale) | Yes | Day 3 Email; DND gap |
| Appointment Booking V2 | CRITICAL (Meta CAPI fires directly) | No | Core of Project B attribution |
| WF #6 Tag Conditions | Indirect (tag-based router) | No | Draft — not live |
| Z-09-3 Email Bounced | None | No | Housekeeping only |
