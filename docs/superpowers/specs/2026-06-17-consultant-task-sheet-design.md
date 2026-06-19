# SmarterFlow Consultant Task Sheet — Design Spec
**Date:** 2026-06-17  
**Owner:** CJ  
**Assist:** Moon  
**Status:** Approved  
**Decided:** 2026-06-15 team meeting

---

## Goal

Every consultant has ONE place that holds ALL their work and tells them what to do next, ordered bottleneck-first. Nobody loses a task. Nobody wastes the morning deciding what to work on. The AI manager reads it daily to help (not police) and nudges overdue items.

---

## What Exists Already

Sheet is live: **SmarterFlow Consultant Tasks** in the "1. Team Management" Drive folder.  
URL: https://docs.google.com/spreadsheets/d/1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8/edit

One tab per consultant (CJ / Moon / Jed / Nica), already seeded from the 6/15 meeting.  
Build spec doc: https://docs.google.com/document/d/1LpcdeF1O8k2azYAj3R_41lk1CGCrp7E7eNoOyL1LO1g/edit

Projects Master (for cross-reference): https://docs.google.com/spreadsheets/d/1PbXBFUi20QLqkBePVvQYaPvlWzmxdtFiggifotRtipI/edit

---

## Sheet Structure

### Tabs
- **Instructions** — maintained by CJ; explains columns, source format, and rules
- **CJ** — CJ's task list
- **Moon** — Moon's task list
- **Jed** — Jed's task list
- **Nica** — Nica's task list

### Columns (each consultant tab)

| # | Column | Type | Notes |
|---|---|---|---|
| A | Task | Text | Task description |
| B | Client/Project | Text | Must match Client or Company name in Projects Master exactly |
| C | Priority | Dropdown | High / Med / Low |
| D | Score | Number | 1–100; highest score = work on this first |
| E | Status | Dropdown | To Do / Doing / Done |
| F | Due | Date | YYYY-MM-DD format |
| G | Source | Text (convention) | Format: `type:id` — see source tag rules below |
| H | Notes | Text | Context, meeting ID detail, or anything relevant |
| I | Start Date | Date | When work started — auto-filled from Clockify by billing skill |
| J | Start Time | Time | HH:MM EST — auto-filled from Clockify |
| K | End Date | Date | When work ended — auto-filled from Clockify. Also serves as Completed Date. |
| L | End Time | Time | HH:MM EST — auto-filled from Clockify |
| M | Source ID | Text | Unique ID for dedup — `gmail:messageId` / `fireflies:docId` / blank for manual. Written by /add-tasks only. |

**Note:** Completed Date column removed — End Date (K) serves the same purpose.

### Data Validation Rules
- **Priority (C):** Dropdown — `High`, `Med`, `Low`
- **Status (E):** Dropdown — `To Do`, `Doing`, `Done`
- **Source (G):** Freetext with naming convention (no dropdown — IDs are dynamic)

### Source Tag Convention
Format: `type:id` where type is one of:

| Type | Meaning | Example |
|---|---|---|
| `meeting` | From a meeting debrief | `meeting:01KTN` |
| `project` | From a client project | `project:Rodrigo` |
| `inbox` | From email | `inbox` |
| `manager` | Assigned by AI manager | `manager` |
| `consultant` | Self-added | `consultant` |
| `client` | Client asked directly | `client:ScottBlock` |
| `jonathan` | Jonathan assigned | `jonathan` |

### Projects Master Link
The `Client/Project` column value must exactly match the `Client` or `Company` column in the Projects Master sheet. This enables the AI manager to cross-reference tasks with active projects. No formula needed — just consistent naming.

### Sort Order
Rows ordered by Score descending. Consultants work top-to-bottom. Row 1 = what you do right now.

---

## Apps Script — Daily Nudge

### Trigger
- **Type:** Time-based, daily
- **Time:** 9:00 AM EST
- **Timezone:** Script project set to `America/New_York`
- **Days:** Every day (7 days/week)

### Config Block (top of script)
```javascript
const CONSULTANTS = [
  { name: 'CJ',   email: 'cj@gosmarterflow.com',  tab: 'CJ'   },
  { name: 'Moon', email: 'moon@gosmarterflow.com', tab: 'Moon' },
  { name: 'Jed',  email: 'jed@gosmarterflow.com',  tab: 'Jed'  },
  { name: 'Nica', email: 'nica@gosmarterflow.com', tab: 'Nica' },
];
```
*(Moon, Jed, and Nica emails to be confirmed before deploy)*

### Logic
1. Open the spreadsheet by ID
2. For each consultant in config:
   a. Read all rows from their tab, skip header row
   b. Filter rows: Status ≠ `Done` AND Due date is set
   c. Split into two buckets: **Overdue** (Due < today) and **Due Today** (Due = today)
   d. Sort each bucket by Score descending
   e. If both buckets are empty → skip, send no email
   f. Build email body (see format below)
   g. Send Gmail to consultant's email

### Email Format

**Subject:**
```
⚡ [SF Tasks] {N} items need you today — {Mon DD}
```
Where N = total count of overdue + due-today tasks.

**Body:**
```
Hi {Name},

You have {N} tasks that need attention today.

🔴 OVERDUE
- {Task} (Score: {Score}, Due: {Due})
...

📅 DUE TODAY
- {Task} (Score: {Score}, Due: {Due})
...

Work the top of your list first.
— SmarterFlow AI Manager
```

Sections are omitted if empty (e.g. no overdue tasks → no 🔴 section).

### Edge Cases
- No tasks overdue or due today → no email sent (no noise)
- Due date cell is blank → row is ignored
- Status = `Done` → always skipped regardless of due date

---

## SOD / EOD Skill Integration

### SOD (Start of Day)
Updated flow:
1. Log start time to Team Day Log
2. Sweep inbox for emails needing action
3. Check open commitments
4. Read consultant's tab → show top 5 tasks (Status ≠ Done, sorted by Score), highlight overdue
5. **"Any tasks to add?"** → calls `/add-tasks` inline (optional, consultant can skip)

### EOD (End of Day)
Updated flow — existing steps unchanged, add:
- Step after Clockify hygiene: **"Any new tasks from today?"** → calls `/add-tasks` inline
- Mark completed tasks as Done + fill Completed Date
- Optionally update Score/Priority on existing tasks

Both skills read/write via `gws sheets` (same as all other skills).

---

## Adoption Rules (from build spec)

1. One list = whole work life: client tasks + internal + meeting action items
2. Ordered bottleneck-first — highest Score on top, always
3. Never duplicate across systems — if it's in here, it's not in email, chat, or your head
4. Source every task — the Source column is required so we know where work originates
5. Use SOD + EOD daily — these are the on-ramp and off-ramp for the sheet

---

## /add-tasks Skill

### Purpose
Task capture primitive. Called by `/sod` (start of day), `/eod` (end of day), or standalone mid-day. Sweeps GWS sources automatically, deduplicates against existing sheet rows, drafts new tasks, consultant confirms, appends to correct tab.

### Entry Points
| How triggered | When |
|---|---|
| `/sod` calls it inline | Morning — after day plan shown |
| `/eod` calls it inline | End of shift — before closing day |
| Standalone `/add-tasks` | Mid-day — something new came up |

### Tab Routing
```javascript
const TAB_MAP = {
  'cj@gosmarterflow.com':   'CJ',
  'moon@gosmarterflow.com': 'Moon',
  'jed@gosmarterflow.com':  'Jed',
  'nica@gosmarterflow.com': 'Nica',
};
```
Reads active Google account via `gws auth status`. Cannot mix up tabs.

### Auto-Sweep (GWS Sources)
On every run, skill automatically checks:
1. Gmail inbox — new emails since last run with action items
2. `_Calls Inbox/` Drive folder — new Fireflies transcripts since last run

Consultant can also manually dump notes/email/brain dump as input.

### Dedup Algorithm
Before adding any task:
```
1. Read ALL rows in consultant's tab (including Done rows)
2. Build sets: existing Source IDs (col N) + existing task names (col A, normalized)

For each candidate task:
  → Has Source ID (gmail:XXX or fireflies:XXX)?
      Exists in Source ID set? → SKIP (entire source already processed)
      Not found? → NEW, proceed

  → No Source ID (manual brain dump)?
      Task name (lowercased, trimmed) matches existing? → SKIP
      No match? → NEW, proceed

Show only new tasks → consultant confirms → append
```

**V1 limitation:** rejected tasks (user removed from confirm list) have no Source ID in sheet → re-proposed on next sweep. Acceptable for now.

### Scoring Logic (Claude suggestions)
- Client task > internal task
- Has a due date → higher score
- Came from Jonathan → higher score
- Blocking another task → higher score
- Quick win vs. long task → adjusts score

### Clockify Integration
Task names in this sheet = exact Clockify entry names. Billing skill reads Clockify, matches by task name, auto-fills Start/End Date+Time (cols I-L) back into the sheet.

**Perfect world:** consultant just works → clocks in Clockify → everything else auto-fills.

### Skill README.md (inside skill folder)
Full step-by-step setup guide — see `/add-tasks/README.md`. Covers:
1. Get `client_secret.json` from Jonathan
2. Request IAM grant (common 403 blocker) — Jonathan grants `roles/serviceusage.serviceUsageConsumer` on `gws-cli-496310`
3. Install gws CLI + authenticate
4. Verify with `gws auth status`
5. Install skill
6. Run `/add-tasks`

---

## Future Features (v2+)

- Auto-update Projects Master (Next Action, Last Update columns) when a task is marked Done
- Google Chat notifications
- Weekly Friday digest
- Consolidated manager view across all tabs

---

## What This Is NOT (v1 scope)

- No Google Chat notifications
- No consolidated manager view across all tabs
- No auto Projects Master sync
- No weekly digest
- No custom app — Google Sheets only for now

---

## Setup Checklist

- [ ] Confirm Moon, Jed, and Nica email addresses
- [ ] Add Nica tab to the sheet
- [ ] Add data validation dropdowns to all four consultant tabs (Priority, Status)
- [ ] Add columns I–N (Start Date, Start Time, End Date, End Time, Completed Date, Source ID) to all four tabs
- [ ] Update Instructions tab with Source tag convention, Projects Master link rule, and new columns
- [ ] Write Apps Script with config block and nudge logic
- [ ] Set script project timezone to `America/New_York`
- [ ] Create time-based trigger at 9:00 AM EST
- [ ] Test with CJ's tab before enabling for all consultants
- [ ] Update SOD skill to read from the sheet
- [ ] Update EOD skill to write to the sheet
- [ ] Build /add-tasks skill with tab routing and scoring logic
- [ ] Write README.md inside skill folder (GWS CLI + client_secret setup steps)
- [ ] Reply-all to Jonathan's email with direction and go-live date
