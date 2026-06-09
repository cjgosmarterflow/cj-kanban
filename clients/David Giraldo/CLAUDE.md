# David Giraldo — Client Context

## Identity
- **Name:** David Giraldo
- **Company:** Flipside Investments LLC / DEO Homes LLC (real estate)
- **Company email:** flipside.cfl@gmail.com
- **Mobile:** 239-287-5420 | Office: 407-456-8962
- **Website:** flipsideinvestmentsllc.com | Instagram: @deohomesllc
- **Timezone:** EST
- **Engaged since:** Late March 2026 (first call 3/31)
- **Previous consultant:** Nica Dapac (on 2-week leave from 2026-06-09)
- **Billing rate:** $55/hr to client · CJ earns $24/hr · billed Monday for previous week

## GHL Setup
- **Sub-accounts:** Christina (older, larger backlog) + Josh (newer, cleaner)
- **Agency:** SmarterFlow

## What's Built
Cold SMS outreach machine. 3-phase system across 7 phone numbers (Batches A–G).

**Phase 1 — Untouched (cold):** Tag `AddedToNew2026` → Untouched Main → splits to A–G workflows → 10 contacts/day drip, 8 follow-ups × 21 days (~168 days total).

**Phase 2 — Interested (warm):** `Interested` tag → Needs Follow-Up workflow → removes from cold → routes to same batch phone number → 15 follow-ups × 21 days (~315 days).

**Phase 3 — Hot Agents:** Fires when `Hot Agent` tag removed → re-enters contact at correct pipeline stage → two workflows (GHL branch limit = 10, stages 1–10 in WF1, 11–15 in WF2).

**After stage 15:** loops back to Follow-Up 4, cycles indefinitely.

**Opt-out:** DNC or STOP tag exits all flows permanently.

## Tag System
| Tag | Meaning |
|---|---|
| `AddedToNew2026` | Entry trigger for Untouched Main |
| `Untouched` | In cold outreach phase |
| `Interested` | Marked interested by team |
| `Needs Follow-Up Workflow` | Alternative warm trigger |
| `Hot Agent` | Agent involved — pause outreach |
| `DNC` / `STOP` | Opt-out — exit all flows |
| `Flipper` / `Buyer` | Disqualifying — skip outreach |
| `A` through `G` | Batch identifier — locks contact to phone number |

## Smart Lists

All 5 lists exist on both Christina and Josh sub-accounts with identical filter logic.

### Excl — All Exclusions
Contacts that must never receive SMS. Use as exclusion base for all other lists.
```
Tag is dnc
OR Tag is stop
OR Tag is wrong number
OR Tag is not interested
OR Tag is error
OR SMS Do Not Disturb is Enabled
```
**Counts:** Josh 5,674 | Christina 5,444

---

### Active — Untouched
Contacts currently in cold outreach phase. Data quality filters included.
```
Tag is untouched
AND Tag is added to new 2026 workflow
AND Phone is not empty
AND First Name is not empty
AND Last Name is not empty
AND Tag is not dnc
AND Tag is not stop
AND Tag is not wrong number
AND Tag is not not interested
AND Tag is not error
AND SMS DND is Disabled
```
**Counts:** Josh 13,336 | Christina 5,682

---

### Active — Interested / Warm
Contacts currently in warm nurture phase.
```
(Tag is interested OR Tag is needs follow-up workflow)
AND Tag is not dnc
AND Tag is not stop
AND Tag is not wrong number
AND Tag is not not interested
AND Tag is not error
AND SMS DND is Disabled
```
**Counts:** Josh 2,576 | Christina 5,829

---

### Eligible — Not Yet in Any Workflow
Clean contacts never enrolled in any phase. Safe to enroll immediately.
```
Tag is not untouched
AND Tag is not added to new 2026 workflow
AND Tag is not interested
AND Tag is not needs follow-up workflow
AND Tag is not dnc
AND Tag is not stop
AND Tag is not wrong number
AND Tag is not not interested
AND Tag is not error
AND SMS DND is Disabled
```
**Counts:** Josh 262 | Christina 478

**To enroll:** Bulk-add tag `AddedToNew2026`. Triggers Untouched Automation Main entry.

---

### Stuck — Never Enrolled
Have the trigger tag but never entered any workflow. Root cause: GHL trigger fires on tag ADD only — these contacts had the tag before workflows were built.
```
Tag is added to new 2026 workflow
AND Tag is not untouched
AND Tag is not interested
AND Tag is not needs follow-up workflow
AND Tag is not dnc
AND Tag is not stop
AND Tag is not wrong number
AND Tag is not not interested
AND Tag is not error
AND SMS DND is Disabled
```
**Counts:** Josh 76 | Christina 8,993

**To enroll:** Spot-check 20–30 contacts first (confirm batch tag A–G present, no hidden exclusions). Then bulk-add `AddedToNew2026`.

---

## Contact Audit Summary (2026-06-09)
| Account | Total | Excluded | Untouched Active | Warm Active | Eligible | Stuck | Overlap |
|---|---|---|---|---|---|---|---|
| Josh | 21,804 | 5,674 | 13,336 | 2,576 | 262 | 76 | 120 (0.5%) |
| Christina | 26,283 | 5,444 | 5,682 | 5,829 | 478 | 8,993 | 143 (0.5%) |

## Phone Numbers
7 numbers assigned — one per batch (A–G). Already purchased and in use. SMS sending is active.

## GHL Folder Structure
```
UntouchedAutomation/
  Untouched Automation Main
  Untouched Automation A–G
  Old Workflows/ (archived, do not delete)

Interested Needs Follow-Up Automation/
  Needs Follow-Up (entry)
  Follow-Up Workflows/
    Batch A–G: Interested NF 1–15
  Hot Agents Tag Removal 1
  Hot Agents Tag Removal 2
```

## Critical Rules (Do Not Break)
- Phase 2+ workflows have NO trigger — entered programmatically from upstream. Do not add triggers.
- Loop after Follow-Up 15 is intentional — re-enters at Follow-Up 4 by design.
- A–G batch tags are the backbone. Lost batch tag = wrong phone number or misroute.
- Old workflows are archived but do not delete.
- GHL DND: "DND = Enabled" means opted out. "DND = Disabled" means contactable. (Counter-intuitive.)
- DNC tag ≠ GHL native DND toggle. Both must be handled separately.

## Communication
- **Primary:** WhatsApp (CJ↔David direct — exchanged on handoff call)
- **Escalation:** Email Jonathan + CC
- **Cadence:** End-of-day WhatsApp update minimum. David is time-sensitive — async silence = financial drain for him.

## Loom Walkthroughs (Nica's — watch if inheriting)
- Flipside A: https://www.loom.com/share/54eeb25182334a2c9c38af0925f89f98
- Flipside B: https://www.loom.com/share/030e5a87dfe4463b913c39e9ed5613f5
- Flipside C: https://www.loom.com/share/988370579dc641ad816e69bdfdda369e
- Summary: https://www.loom.com/share/ac189ef740dd498eae5f466cc80c4a58

## Billing History
- 4/13–4/18: 2 hrs ($110) | 4/15: $605 paid
- 4/27: $55 review credit applied
- 5/5: $55 paid
- 5/11–5/15: 6.5 hrs ($357.50, paid 5/20)
- 5/18–5/22: 3.5 hrs ($192.50, paid 6/1)
- Transition call 2026-06-09: not billed. Bill from post-call work forward.
