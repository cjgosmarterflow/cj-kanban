# GHL Automation System — Consultant Handoff Document

**Client:** David Giraldo + Irini (wife/co-operator) — Flipside CFL (flipside.cfl@gmail.com)
**Built by:** Nica (on leave for 2 weeks as of transition call date)
**Taking over:** CJ Salamida (SmarterFlow — new consultant, first day on this project)
**Agency/Company:** SmarterFlow (Jonathan Schoenberg, owner)
**Purpose:** Cold SMS outreach + lead nurture automation for real estate contacts
**Platform:** GoHighLevel (GHL)
**Two sub-accounts:** Christina (older, has issues) · Josh (newer, cleaner)

---

## What Is This System?

This is a fully automated SMS outreach machine built in GoHighLevel. Its job is to take a list of cold, untouched real estate contacts, send them a sequence of text messages over several months, and automatically respond to different outcomes (interested, hot agent, opted out, etc.) — all without manual sending.

The system is designed to run across **7 separate phone numbers (Batches A–G)** to protect sender reputation and ensure each contact always receives messages from the same number throughout the campaign.

---

## The Big Picture — 3 Phases

### Phase 1: Untouched (Cold Outreach)
### Phase 2: Interested / Needs Follow-Up (Warm Nurture)
### Phase 3: Hot Agents Tag Removal (Re-engagement)

Each phase hands off automatically to the next based on contact behavior and tags.

---

## Phase 1: Untouched Automation

**What it does:** Takes freshly imported contacts and sends them a multi-month cold outreach SMS sequence.

### How it starts
A team member imports a list of contacts into GHL and adds the tag `AddedToNew2026`. That tag fires the **Untouched Automation Main** workflow.

### Untouched Main Workflow (the gatekeeper)
Before any message is sent, this workflow checks that the contact has **both** required tags active:
- `Untouched`
- `AddedToNew2026`

If either tag is missing, it alerts Josh (team member), waits 1 hour, and checks again. It keeps looping until both tags are confirmed. This prevents contacts from slipping through with bad tag setups.

Once both tags are confirmed, the contacts are **split equally across 7 paths (A through G)**. Each path adds contacts into its own sub-workflow. If you import 1,000 contacts, ~143 go to each batch.

### Untouched A–G Workflows (the actual outreach)
Each batch workflow runs identically — the only difference will be the phone number assigned.

- **Drip cap:** 10 contacts per day (prevents spam flags)
- **Speed:** 1 contact per minute
- **Personalization check:** If the contact has a first name, they get a personalized opening text. If no first name, they get a generic message ("My name is Josh, I'm based out of Orlando.")
- **Cadence:** After the first message, the workflow waits 21 days for a reply. If no reply, it sends Follow-Up 1. Then waits another 21 days. Repeats up to **Follow-Up 8**.
- **Total cold outreach duration:** ~168 days (8 follow-ups × 21 days)
- **After Follow-Up 8 with no reply:** Loops back to the beginning of the follow-up sequence and restarts

Before each follow-up, the system checks if any disqualifying tags have been added (e.g., the contact became interested, or a hot agent got involved). If so, it stops sending cold messages.

---

## Phase 2: Interested / Needs Follow-Up Automation

**What it does:** When a contact shows interest, the team marks them, and this phase takes over with a warmer, longer nurture sequence.

### How it starts
A team member adds the `Interested` tag (or `Needs Follow-Up Workflow` tag) to the contact. This fires the **Needs Follow-Up** workflow.

### Needs Follow-Up Workflow
- Removes the `Untouched` tag
- Removes the contact from all Untouched A–G workflows (so they stop getting cold messages)
- Adds `Interested` and `Needs Follow-Up` tags
- Waits **21 days**
- Then checks: does the contact have any disqualifying tags? (`Hot Agent`, `Flipper`, `Buyer`, `DNC`)
  - If yes → exits the flow (contact is already being handled elsewhere)
  - If no → finds their existing opportunity in the pipeline and checks which **batch tag** they have (A through G)

**Critical:** The system identifies which batch (A–G) the contact came from so it can route them into the **same phone number** for the next phase. If they got cold texts from Phone #3 (Batch C), they'll get warm follow-ups from Phone #3 too.

### Batch A–G Interested Follow-Up Workflows (15 workflows total)
- Same drip structure: 1 contact/min, first name check, personalized or generic SMS
- **15 follow-up messages**, each 21 days apart
- **Total warm nurture duration:** ~315 days (15 × 21 days)
- If a `Hot Agent` tag is added during this phase (meaning an agent got involved), the contact pauses on a 21-day loop and keeps checking until the hot agent tag is removed, then resumes

---

## Phase 3: Hot Agents Tag Removal

**What it does:** When a "hot agent" situation clears up, this phase re-enters the contact into the right place in the funnel automatically.

### How it starts
The `Hot Agent` tag is **removed** from a contact. This fires **Hot Agents Tag Removal Workflow 1**.

### The logic
- Waits 21 days, then checks: is the hot agent tag still gone? No DNC? No error tags?
- If clean, it finds the contact's current opportunity and checks what **pipeline stage** they're in (1–15)
- Removes them from their current batch workflow for that stage
- Advances them to the next pipeline stage
- Re-checks their batch tag (A–G) and drops them back into the correct batch workflow for the new stage — same phone number, same continuity

**Why two workflows?** GHL limits condition branches to 10. Pipeline stages 1–10 are handled in Workflow 1, stages 11–15 in Workflow 2 (which is fed automatically from Workflow 1 when needed).

**After stage 15 (end of the line):** Instead of exiting, the contact loops back to **Follow-Up #4** and continues 4 → 5 → 6 ... → 15, repeating indefinitely until they opt out.

### Opt-out
At any point, if a contact has a `DNC` or `STOP` tag, they exit all flows permanently.

---

## Phone Number System

This is one of the most important design decisions in the system.

| Batch | Phone Number | Used For |
|-------|-------------|----------|
| A | Phone #1 | Untouched A + Interested NF Batch A + Hot Agents Batch A |
| B | Phone #2 | Same, Batch B |
| C | Phone #3 | Same, Batch C |
| D | Phone #4 | Same, Batch D |
| E | Phone #5 | Same, Batch E |
| F | Phone #6 | Same, Batch F |
| G | Phone #7 | Same, Batch G |
| — | Phone #8 | Direct/live communication only |

**Why this matters:** SMS regulations and carrier filtering work against campaigns where a contact gets texts from multiple random numbers. By locking each contact to one number from the start, the system builds familiarity and avoids spam flags.

**Status:** Phone numbers have NOT been purchased yet. David needs to buy 7–8 numbers and provide them to Nica (or the incoming consultant) for assignment.

---

## Tags Reference

| Tag | Meaning |
|-----|---------|
| `AddedToNew2026` | Triggers entry into Untouched Main |
| `Untouched` | Contact is in cold outreach phase |
| `Interested` | Team has marked contact as interested |
| `Needs Follow-Up Workflow` | Alternative trigger for warm phase |
| `Hot Agent` | A real estate agent is involved — pause outreach |
| `DNC` | Do Not Contact — exit all flows |
| `STOP` | Opt-out — exit all flows |
| `Flipper` | Disqualifying tag (contact is a flipper) |
| `Buyer` | Disqualifying tag (contact is a buyer) |
| `A` through `G` | Batch identifier — links contact to their phone number |

---

## Folder Structure in GHL

```
📁 UntouchedAutomation
   └── Untouched Automation Main
   └── Untouched Automation A
   └── Untouched Automation B
   └── ... (through G)
   └── 📁 Old Workflows (archived)

📁 Interested Needs Follow-Up Automation
   └── Needs Follow-Up (entry workflow)
   └── 📁 Follow-Up Workflows
       └── Batch A: Interested NF 1–15
       └── Batch B: Interested NF 1–15
       └── ... (through G)
   └── Hot Agents Tag Removal 1
   └── Hot Agents Tag Removal 2
```

---

## What the Incoming Consultant Needs to Do

1. **Purchase 7–8 phone numbers** (David's responsibility, but consultant should follow up)
2. **Assign phone numbers to Batches A–G** in each workflow set (Untouched A–G, Interested NF A–G, Hot Agents A–G)
3. **Review the Hot Agents Tag Removal** workflows — Nica noted she may create a separate summary Loom for this
4. **Test a small batch** before importing full contact lists
5. **Confirm Josh's assignment** is still correct for tag-error alerts
6. **Verify opt-out tags** (DNC/STOP) are correctly configured to exit all active workflows — this is the main risk point in the system

---

---

## Transition Call Summary (Most Recent — CJ's First Day)

This section captures the live handoff call between Jonathan (SmarterFlow), David & Irini (client), and CJ (incoming consultant). This gives full context on what's broken right now and what the client actually needs.

### Why the handoff happened
Nica requested 2 weeks off with short notice. Jonathan spontaneously pulled CJ into a live call with David the same day to begin the transition. CJ was given agency admin access to both sub-accounts on this call.

### David's feedback on Nica
David was direct: **Nica is technically excellent** — during meetings, she understands the system deeply and communicates well. But **her async communication has been the worst David has dealt with.** Specifically: messages sent Thursday morning with no reply Thursday, Friday, or Monday. His employee Christina sat idle for days, being paid to do nothing, because the SMS system wasn't running. David said he didn't escalate to Jonathan sooner because he's not a "problematic person," but the situation was draining him financially and operationally.

**Key takeaway for CJ:** David and Irini will be extremely appreciative of consistent, proactive communication. An end-of-day WhatsApp update is the minimum bar they're expecting. Show up on time. Don't go dark.

### The actual live problem right now

The system was designed to send **~1,200 SMS/day**. Here's what actually happened:

| Day | Messages Sent | Notes |
|-----|--------------|-------|
| Monday | ~2,400–2,600 | Way over target |
| Tuesday | ~On target | Good |
| Wednesday | ~35 | Dropped off |
| Thursday | ~20 (then spiked after manual upload) | Nica went silent, team uploaded 1,000 new leads manually |
| Friday | Partial send from Thursday's list | No Nica response |
| Today (call day) | ~98 | Ran out of leads |

### Root cause (identified by Irini on the call)

When Nica rebuilt the workflows, **contacts that were already in the CRM still had the old trigger tags from previous automations.** Because the tag was already present (not newly added), the new automation's trigger didn't fire for them — GHL triggers only on tag *added* events, not on existing tags. The team had to manually add those contacts to the workflow, which was only done for a small batch (~1,000 leads). The rest are sitting uncontacted.

### The missing leads problem

- **Total contacts in CRM:** ~26,200
- **Contacts appearing in smart lists:** ~18,000–19,000
- **Gap:** ~6,000–7,000 leads unaccounted for
- **Likely explanation found on call:** ~5,680 contacts have **DND (Do Not Disturb) enabled** in GHL — meaning they've opted out at the platform level, not just via tag. These are not showing up in smart lists correctly because of a filter confusion (see below).

### GHL DND Filter Confusion — Important to Understand

GHL's DND filter is a double negative that trips everyone up:

- **DND = Enabled** → the DND is ON → contact has opted out → **do NOT text**
- **DND = Disabled** → the DND is OFF → contact is reachable → **safe to text**

The team was filtering "SMS DND = Disabled" thinking it meant they were disabling DND on those contacts. It actually means: *show me contacts where DND is turned off (i.e., contactable people).* This caused confusion when trying to isolate opted-out contacts.

**The DNC tag ≠ GHL's DND setting.** The `DNC` tag in the workflow is separate from GHL's native DND toggle. Contacts can be DND'd in GHL without having the DNC tag, meaning they'd be skipped at the platform level but the workflow logic wouldn't know to exclude them. Irini had started manually adding the DNC tag to opted-out contacts but this wasn't done systematically.

### Smart List issues

Smart lists are inconsistent and giving wrong counts. Filtering by the same criteria produces different results at different times. The team suspects:
- Overlapping filters between smart lists may be canceling each other out
- Some tags are junk/legacy from old workflows and are interfering with logic
- The relationship between tags and smart list filters hasn't been audited since Nica rebuilt everything

**Irini's priority:** She wants to be able to pull a smart list for any tag or status and have it be accurate. Right now it isn't.

### Two sub-accounts — Christina vs. Josh

| Account | Status | Priority |
|---------|--------|----------|
| **Christina** | Older account, has all the messy data, actively broken | Fix first |
| **Josh** | Newer account, Nica built it clean before leads were added | Should be fine, replicate Christina's fixes here once done |

### What David and Irini actually want

1. **Clarity on where all the leads are** — they just want to know what's in the system and whether the workflows are actually running or just waiting
2. **The system sending ~1,200 SMS/day consistently** — not 35 one day and 2,600 the next
3. **Clean smart lists** they can use to answer basic questions (how many DNC'd this month, how many are in follow-up stage X, etc.)
4. **A consultant who shows up and communicates** — this is as important to them as the technical fix

### Access granted to CJ on this call
- Agency admin access to both sub-accounts (Christina + Josh)
- WhatsApp contact exchanged directly with David/Irini

### Communication protocol going forward
- **Primary:** WhatsApp (David/Irini ↔ CJ directly)
- **Escalation:** Email Jonathan (cc him if issues arise)
- **Billing:** Not billed for the transition call. Bill going forward from post-call work. Weekly billing (Monday for previous week).
- **Call cadence:** End-of-day report from CJ today; follow-up call to be scheduled (same day evening or next morning)

---

## Immediate Action Items for CJ (Priority Order)

1. **Watch all Nica's Loom videos** (recorded ~21 days before this call) — full system walkthrough is in those videos
2. **Audit Christina's smart lists** — rebuild or fix filters so they give accurate, consistent counts
3. **Reconcile the ~6,000–7,000 missing leads** — likely DND contacts; determine how many are actually reachable vs. opted out
4. **Fix the DND/DNC tag gap** — identify contacts who are DND in GHL but don't have the DNC tag, and decide on a systematic approach
5. **Find and fix the tag trigger issue** — identify contacts with the old trigger tags who never entered the new workflows, and manually enroll them correctly
6. **Audit junk tags** — with Irini/David, identify which tags are legacy/unused and clean them up (carefully — some tags trigger workflow logic)
7. **Send end-of-day report** to David/Irini via WhatsApp
8. **Once Christina is clean:** replicate smart list structure and fixes to Josh's sub-account
9. **Once David purchases phone numbers (7–8):** assign to Batches A–G across all workflow sets

---

## Key Things to Understand Before Taking This Over

- **This system does not send emails.** It is purely SMS-based.
- **The batch tagging system (A–G) is the backbone.** Everything depends on contacts having the right batch tag. If a contact loses their batch tag, they'll get misrouted or receive texts from a different number.
- **All workflows from Phase 2 onward have no trigger** — they are entered programmatically from upstream workflows. Do not add triggers to them.
- **The loop after Follow-Up 15 is intentional** — contacts re-enter at Follow-Up 4 and cycle indefinitely. This is by design per the client's request.
- **Old workflows are archived in an "Old Workflows" folder** — do not delete them, but they are no longer active.
