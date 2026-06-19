# Consultant Task Sheet Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the SmarterFlow Consultant Task Sheet system — structured sheet, 9 AM daily nudge email, `/add-tasks` skill with GWS sweep + dedup, and updated SOD/EOD skills.

**Architecture:** Google Sheets as the single source of truth per consultant. Apps Script handles the daily nudge (runs server-side, no tokens). `/add-tasks` is a Claude skill (SKILL.md) that sweeps Gmail + Drive, deduplicates against existing rows via Source ID, and appends confirmed tasks via `gws sheets`. SOD and EOD call `/add-tasks` inline as a step.

**Tech Stack:** Google Sheets API (via gws CLI), Google Apps Script, Gmail API (via gws), Google Drive API (via gws), Claude Code skills (SKILL.md format)

## Global Constraints

- Spreadsheet ID: `1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8`
- Projects Master ID: `1PbXBFUi20QLqkBePVvQYaPvlWzmxdtFiggifotRtipI`
- Skill Usage Log ID: `16WR-HxZi8fAH-wJ8jOgu6CjL_vKCD8rtd3xS5ISWPIE`
- _Calls Inbox Drive folder ID: `1KogB152K0K2FJp59ZlYHD9rHaAkUwJfl`
- Tabs: `CJ`, `Moon`, `Jed`, `Nica`
- gws prefix (every command): `export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" &&`
- Run gws in Git Bash only — not PowerShell
- Dates: `YYYY-MM-DD`, `valueInputOption=USER_ENTERED`
- Timezone: `America/New_York` everywhere
- Skills path: `C:\Users\Carl Salamida\.claude\plugins\marketplaces\smarterflow\plugins\team\skills\`
- No formulas in sheets — plain values only
- Column N (`Source ID`) is write-only by skills — humans never edit it

---

## Task 1: Verify gws Access

**Files:**
- None — verification only

**Goal:** Confirm IAM grant is active before any sheet writes. If not, unblock it first.

- [ ] **Step 1: Send the IAM request draft to Jonathan**

Open Gmail drafts and send the draft titled `"gws setup — client_secret saved, need IAM grant"` to jonathan@gosmarterflow.com. Do not proceed until he confirms the grant.

- [ ] **Step 2: Verify auth status**

```bash
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" && gws auth status
```

Expected output includes: `token_valid: true`, `user: cj@gosmarterflow.com`

If `token_valid: false` → run `gws auth login -s gmail,sheets,drive,forms` (run in background, approve in browser).

- [ ] **Step 3: Test sheet read**

```bash
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" && gws sheets +read --spreadsheet "1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8" --range "CJ!A1:A3" --format csv
```

Expected: rows from CJ's tab. If `403 error` → IAM grant not done. Wait for Jonathan, retry.

- [ ] **Step 4: Get tab IDs (needed for data validation)**

```bash
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" && gws sheets spreadsheets get --params '{"spreadsheetId":"1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8","fields":"sheets(properties(sheetId,title))"}' --format json
```

Record the numeric `sheetId` for each tab: CJ, Moon, Jed, Nica. These are needed in Task 2.

---

## Task 2: Sheet Structure — Columns + Validation

**Files:**
- Modify: `CJ`, `Moon`, `Jed`, `Nica` tabs in spreadsheet `1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8`

**Interfaces:**
- Consumes: tab IDs from Task 1 Step 4
- Produces: all tabs have columns A–N with correct headers; Priority (C) and Status (E) have dropdown validation

- [ ] **Step 1: Add column headers I–N to CJ tab**

```bash
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" && gws sheets spreadsheets values update --params '{"spreadsheetId":"1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8","range":"CJ!I1:N1","valueInputOption":"USER_ENTERED"}' --json '{"values":[["Start Date","Start Time","End Date","End Time","Completed Date","Source ID"]]}'
```

- [ ] **Step 2: Repeat for Moon, Jed, Nica tabs**

```bash
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" && gws sheets spreadsheets values update --params '{"spreadsheetId":"1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8","range":"Moon!I1:N1","valueInputOption":"USER_ENTERED"}' --json '{"values":[["Start Date","Start Time","End Date","End Time","Completed Date","Source ID"]]}'

export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" && gws sheets spreadsheets values update --params '{"spreadsheetId":"1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8","range":"Jed!I1:N1","valueInputOption":"USER_ENTERED"}' --json '{"values":[["Start Date","Start Time","End Date","End Time","Completed Date","Source ID"]]}'

export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" && gws sheets spreadsheets values update --params '{"spreadsheetId":"1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8","range":"Nica!I1:N1","valueInputOption":"USER_ENTERED"}' --json '{"values":[["Start Date","Start Time","End Date","End Time","Completed Date","Source ID"]]}'
```

- [ ] **Step 3: Add data validation — Priority (col C) and Status (col E) for all tabs**

Replace `SHEET_ID_CJ`, `SHEET_ID_MOON`, `SHEET_ID_JED`, `SHEET_ID_NICA` with the numeric IDs from Task 1 Step 4.

```bash
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" && gws sheets spreadsheets batchUpdate --params '{"spreadsheetId":"1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8"}' --json '{
  "requests": [
    {"setDataValidation":{"range":{"sheetId":SHEET_ID_CJ,"startRowIndex":1,"startColumnIndex":2,"endColumnIndex":3},"rule":{"condition":{"type":"ONE_OF_LIST","values":[{"userEnteredValue":"High"},{"userEnteredValue":"Med"},{"userEnteredValue":"Low"}]},"showCustomUi":true,"strict":false}}},
    {"setDataValidation":{"range":{"sheetId":SHEET_ID_CJ,"startRowIndex":1,"startColumnIndex":4,"endColumnIndex":5},"rule":{"condition":{"type":"ONE_OF_LIST","values":[{"userEnteredValue":"To Do"},{"userEnteredValue":"Doing"},{"userEnteredValue":"Done"}]},"showCustomUi":true,"strict":false}}},
    {"setDataValidation":{"range":{"sheetId":SHEET_ID_MOON,"startRowIndex":1,"startColumnIndex":2,"endColumnIndex":3},"rule":{"condition":{"type":"ONE_OF_LIST","values":[{"userEnteredValue":"High"},{"userEnteredValue":"Med"},{"userEnteredValue":"Low"}]},"showCustomUi":true,"strict":false}}},
    {"setDataValidation":{"range":{"sheetId":SHEET_ID_MOON,"startRowIndex":1,"startColumnIndex":4,"endColumnIndex":5},"rule":{"condition":{"type":"ONE_OF_LIST","values":[{"userEnteredValue":"To Do"},{"userEnteredValue":"Doing"},{"userEnteredValue":"Done"}]},"showCustomUi":true,"strict":false}}},
    {"setDataValidation":{"range":{"sheetId":SHEET_ID_JED,"startRowIndex":1,"startColumnIndex":2,"endColumnIndex":3},"rule":{"condition":{"type":"ONE_OF_LIST","values":[{"userEnteredValue":"High"},{"userEnteredValue":"Med"},{"userEnteredValue":"Low"}]},"showCustomUi":true,"strict":false}}},
    {"setDataValidation":{"range":{"sheetId":SHEET_ID_JED,"startRowIndex":1,"startColumnIndex":4,"endColumnIndex":5},"rule":{"condition":{"type":"ONE_OF_LIST","values":[{"userEnteredValue":"To Do"},{"userEnteredValue":"Doing"},{"userEnteredValue":"Done"}]},"showCustomUi":true,"strict":false}}},
    {"setDataValidation":{"range":{"sheetId":SHEET_ID_NICA,"startRowIndex":1,"startColumnIndex":2,"endColumnIndex":3},"rule":{"condition":{"type":"ONE_OF_LIST","values":[{"userEnteredValue":"High"},{"userEnteredValue":"Med"},{"userEnteredValue":"Low"}]},"showCustomUi":true,"strict":false}}},
    {"setDataValidation":{"range":{"sheetId":SHEET_ID_NICA,"startRowIndex":1,"startColumnIndex":4,"endColumnIndex":5},"rule":{"condition":{"type":"ONE_OF_LIST","values":[{"userEnteredValue":"To Do"},{"userEnteredValue":"Doing"},{"userEnteredValue":"Done"}]},"showCustomUi":true,"strict":false}}}
  ]
}'
```

- [ ] **Step 4: Verify**

Open the sheet in browser. Click any cell in col C on CJ tab → confirm dropdown shows High/Med/Low. Click col E → confirm To Do/Doing/Done. Check col I header says "Start Date", col N says "Source ID".

- [ ] **Step 5: Commit spec + plan to SmarterFlow local repo**

```bash
cd "c:\Users\Carl Salamida\OneDrive\Desktop\Clawd Projects\SmarterFlow"
git add docs/
git commit -m "feat: add consultant task sheet spec and implementation plan"
```

---

## Task 3: Apps Script — Daily Nudge Email

**Files:**
- Create: `apps-script/daily-nudge.gs` (local copy for reference)
- Deploy: paste into Google Apps Script editor at script.google.com

**Interfaces:**
- Consumes: spreadsheet `1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8`, tabs CJ/Moon/Jed/Nica
- Produces: daily 9 AM EST email per consultant listing overdue + due-today tasks sorted by Score

- [ ] **Step 1: Write the script locally**

Create `c:\Users\Carl Salamida\OneDrive\Desktop\Clawd Projects\SmarterFlow\apps-script\daily-nudge.gs`:

```javascript
const SPREADSHEET_ID = '1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8';
const CONSULTANTS = [
  { name: 'CJ',   email: 'cj@gosmarterflow.com',   tab: 'CJ'   },
  { name: 'Moon', email: 'moon@gosmarterflow.com',  tab: 'Moon' },
  { name: 'Jed',  email: 'jed@gosmarterflow.com',   tab: 'Jed'  },
  { name: 'Nica', email: 'nica@gosmarterflow.com',  tab: 'Nica' },
];

// Column indices (0-based, matching sheet columns A=0)
const COL = { TASK:0, CLIENT:1, PRIORITY:2, SCORE:3, STATUS:4, DUE:5 };

function sendDailyNudge() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const tz = 'America/New_York';
  const now = new Date();
  const todayStr = Utilities.formatDate(now, tz, 'yyyy-MM-dd');

  CONSULTANTS.forEach(({ name, email, tab }) => {
    const sheet = ss.getSheetByName(tab);
    if (!sheet) return;

    const rows = sheet.getDataRange().getValues().slice(1); // skip header
    const overdue = [], dueToday = [];

    rows.forEach(row => {
      const task = row[COL.TASK];
      const status = row[COL.STATUS];
      const due = row[COL.DUE];
      const score = row[COL.SCORE] || 0;

      if (!task || status === 'Done' || !due) return;

      const dueStr = due instanceof Date
        ? Utilities.formatDate(due, tz, 'yyyy-MM-dd')
        : String(due).trim();

      const entry = { task, score, dueStr };

      if (dueStr < todayStr) overdue.push(entry);
      else if (dueStr === todayStr) dueToday.push(entry);
    });

    if (!overdue.length && !dueToday.length) return;

    overdue.sort((a, b) => b.score - a.score);
    dueToday.sort((a, b) => b.score - a.score);

    const total = overdue.length + dueToday.length;
    const dateLabel = Utilities.formatDate(now, tz, 'MMM dd');
    const subject = `⚡ [SF Tasks] ${total} item${total !== 1 ? 's' : ''} need you today — ${dateLabel}`;

    let body = `Hi ${name},\n\nYou have ${total} task${total !== 1 ? 's' : ''} that need attention today.\n`;

    if (overdue.length) {
      body += `\n🔴 OVERDUE\n`;
      overdue.forEach(t => { body += `- ${t.task} (Score: ${t.score}, Due: ${t.dueStr})\n`; });
    }
    if (dueToday.length) {
      body += `\n📅 DUE TODAY\n`;
      dueToday.forEach(t => { body += `- ${t.task} (Score: ${t.score}, Due: ${t.dueStr})\n`; });
    }

    body += `\nWork the top of your list first.\n— SmarterFlow AI Manager`;
    GmailApp.sendEmail(email, subject, body);
  });
}

function createTrigger() {
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('sendDailyNudge')
    .timeBased()
    .atHour(9)
    .everyDays(1)
    .inTimezone('America/New_York')
    .create();
}
```

- [ ] **Step 2: Deploy to Apps Script**

1. Go to https://script.google.com
2. Click "New project"
3. Name it: `SmarterFlow Daily Nudge`
4. Delete the default `myFunction` code
5. Paste the full script above
6. Save (Ctrl+S)

- [ ] **Step 3: Set timezone in Apps Script project settings**

In the Apps Script editor: click gear icon (Project Settings) → Script timezone → set to `(GMT-05:00) America/New_York`

- [ ] **Step 4: Test manually (CJ only first)**

Temporarily edit CONSULTANTS to only include CJ's entry. Run `sendDailyNudge` from the editor (▶ Run). Check cj@gosmarterflow.com inbox — confirm email arrives with correct subject and task list.

- [ ] **Step 5: Create the time trigger**

Run `createTrigger` from the editor (select it from function dropdown → ▶ Run). Grant permissions when prompted.

Verify: in Apps Script editor → Triggers (clock icon) → confirm one trigger exists: `sendDailyNudge`, time-driven, day timer, 9am–10am.

- [ ] **Step 6: Restore full CONSULTANTS array**

Remove the CJ-only test restriction. Save.

- [ ] **Step 7: Commit local script file**

```bash
cd "c:\Users\Carl Salamida\OneDrive\Desktop\Clawd Projects\SmarterFlow"
git add apps-script/daily-nudge.gs
git commit -m "feat: add daily nudge Apps Script"
```

---

## Task 4: Build /add-tasks Skill

**Files:**
- Create: `C:\Users\Carl Salamida\.claude\plugins\marketplaces\smarterflow\plugins\team\skills\add-tasks\SKILL.md`
- Already exists: `...\add-tasks\README.md`

**Interfaces:**
- Consumes: spreadsheet `1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8` (read col A + N for dedup, append rows)
- Consumes: Gmail (search new emails), Drive `_Calls Inbox/` (new transcripts)
- Produces: new task rows appended to the correct consultant tab

- [ ] **Step 1: Write SKILL.md**

Create `C:\Users\Carl Salamida\.claude\plugins\marketplaces\smarterflow\plugins\team\skills\add-tasks\SKILL.md`:

````markdown
---
name: add-tasks
description: Capture new tasks into your personal tab in SmarterFlow Consultant Tasks. Sweeps Gmail and Fireflies automatically, deduplicates against existing rows, drafts task list with scoring, consultant confirms, appends to correct tab. Called inline by /sod and /eod, or run standalone mid-day.
metadata:
  category: Team Management
---

# /add-tasks — Task Capture

Captures new tasks into your Consultant Tasks tab. Works standalone or called by /sod and /eod.

Prefix every gws command with: `export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" &&`

## Constants

- **Spreadsheet ID:** `1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8`
- **_Calls Inbox folder:** `1KogB152K0K2FJp59ZlYHD9rHaAkUwJfl`
- **Tab map:** `cj@gosmarterflow.com → CJ` | `moon@gosmarterflow.com → Moon` | `jed@gosmarterflow.com → Jed` | `nica@gosmarterflow.com → Nica`
- **Last-run file (Windows):** `C:\Users\<name>\.smarterflow\add-tasks-last-run.txt`
- **Columns:** A=Task, B=Client/Project, C=Priority, D=Score, E=Status, F=Due, G=Source, H=Notes, I=Start Date, J=Start Time, K=End Date, L=End Time, M=Completed Date, N=Source ID

## Step 0 — Log the run

```bash
gws sheets spreadsheets values append --params '{"spreadsheetId":"16WR-HxZi8fAH-wJ8jOgu6CjL_vKCD8rtd3xS5ISWPIE","range":"Log!A:C","valueInputOption":"USER_ENTERED"}' --json '{"values":[["'"$(TZ='America/New_York' date '+%Y-%m-%d %H:%M')"'","<your first name>","add-tasks"]]}'
```

## Step 1 — Identify your tab

```bash
gws auth status
```

Extract the `user` email. Map to tab:
- cj@gosmarterflow.com → `CJ`
- moon@gosmarterflow.com → `Moon`
- jed@gosmarterflow.com → `Jed`
- nica@gosmarterflow.com → `Nica`

If email not in map → stop and tell the user: "Your account is not mapped to a tab. Contact CJ."

## Step 2 — Get last-run timestamp

Read the last-run file:
- Windows: `cat C:\Users\<name>\.smarterflow\add-tasks-last-run.txt`
- If file missing or unreadable → use 24 hours ago as the lookback window

Format the timestamp as RFC3339 for Gmail API: `YYYY-MM-DDTHH:MM:SS-05:00`

## Step 3 — Sweep Gmail for new emails with action items

```bash
gws gmail messages list --params '{"userId":"me","q":"after:<UNIX_TIMESTAMP> is:inbox","maxResults":20}'
```

For each message returned:
```bash
gws gmail messages get --params '{"userId":"me","id":"<messageId>","format":"full"}'
```

Read the subject and body. For each email, determine:
- Does it contain action items or tasks for you?
- If YES: extract each discrete task. Store the Gmail message ID as `gmail:<messageId>`.
- If NO: skip.

## Step 4 — Sweep Drive _Calls Inbox/ for new Fireflies transcripts

```bash
gws drive files list --params '{"q":"\"1KogB152K0K2FJp59ZlYHD9rHaAkUwJfl\" in parents and modifiedTime > \"<RFC3339_TIMESTAMP>\"","fields":"files(id,name,modifiedTime)","orderBy":"modifiedTime desc"}'
```

For each new transcript file:
```bash
gws drive files export --params '{"fileId":"<fileId>","mimeType":"text/plain"}'
```

Extract action items from the transcript. Store Drive file ID as `fireflies:<fileId>`.

## Step 5 — Accept manual input (optional)

If the consultant provided text input (meeting notes, brain dump, email paste) when running /add-tasks, parse it now for additional tasks. Source ID = blank for manual input.

## Step 6 — Load existing rows for dedup

```bash
gws sheets +read --spreadsheet "1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8" --range "<TAB>!A:N" --format csv
```

Parse CSV (skip header row). Build two sets:
- **existingSourceIDs**: all non-blank values in column N
- **existingTaskNames**: all values in column A, lowercased and trimmed

## Step 7 — Dedup candidates

For each candidate task:

1. **Has Source ID** (gmail:XXX or fireflies:XXX)?
   - Source ID in existingSourceIDs? → SKIP entire source (already processed)
   - Not found → proceed

2. **No Source ID** (manual)?
   - Task name (lowercased, trimmed) in existingTaskNames? → SKIP
   - Not found → proceed

Keep only candidates that passed. If zero candidates → tell consultant "Nothing new to add — all sources already captured." → stop.

## Step 8 — Score and draft task rows

For each candidate task, suggest:

**Score (1–100):**
- Base: 50
- Client task (B is a client name): +15
- Has a Due date: +10
- Source is `jonathan`: +15
- Source is `meeting`: +5
- Task blocks another task explicitly: +10
- Quick win (clearly under 30 min): +5
- Long research task: -5

**Priority:** High if Score ≥ 75, Med if 50–74, Low if < 50

**Status:** `To Do` always

**Source tag (col G):**
- From Gmail → `inbox`
- From Jonathan's email → `jonathan`
- From Fireflies → `meeting:<filename-or-id>`
- Manual → `consultant`

**Source ID (col N):**
- Gmail: `gmail:<messageId>`
- Fireflies: `fireflies:<fileId>`
- Manual: blank

Show draft list to consultant:

```
Here are X new tasks I found:

1. [Task name] | Client: X | Priority: High | Score: 82 | Due: — | Source: inbox
2. [Task name] | Client: — | Priority: Med | Score: 60 | Due: 2026-06-25 | Source: jonathan
...

Reply with:
- "looks good" to add all
- "remove 2" to drop item 2
- "change 1 score to 90" to adjust
- "add due 2026-06-22 to 3" to set a due date
```

Make all requested changes, re-show the final list, ask for final confirmation.

## Step 9 — Append confirmed rows

For each confirmed task, append one row:

```bash
gws sheets spreadsheets values append \
  --params '{"spreadsheetId":"1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8","range":"<TAB>!A:N","valueInputOption":"USER_ENTERED"}' \
  --json '{"values":[["<Task>","<Client>","<Priority>","<Score>","To Do","<Due>","<Source>","<Notes>","","","","","","<SourceID>"]]}'
```

Blank values for Start Date (I), Start Time (J), End Date (K), End Time (L), Completed Date (M).

After all rows appended, confirm: "X tasks added to your [TAB] tab."

## Step 10 — Update last-run timestamp

```bash
# Windows PowerShell
$d = (Get-Date).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ssZ'); New-Item -ItemType Directory -Force "$env:USERPROFILE\.smarterflow" | Out-Null; Set-Content "$env:USERPROFILE\.smarterflow\add-tasks-last-run.txt" $d
```

## Rules

- Never append to someone else's tab — always verify via `gws auth status` first
- Skip entire source if its Source ID already exists in any row (including Done rows)
- Source ID column (N) is written by this skill only — never prompt consultant to edit it
- If gws sweep fails (403, timeout) → fall through to manual input only, note the error
- Plain values only, no formulas
````

- [ ] **Step 2: Test /add-tasks standalone**

In Claude Code, type `/add-tasks`. Provide a short brain dump: `"need to reply to Jonathan about billing format"`.

Verify:
- Claude identifies your tab as `CJ`
- Drafts one task row with score + source = `consultant`
- After confirmation, row appears in CJ tab of the sheet
- Last-run file updated at `C:\Users\Carl Salamida\.smarterflow\add-tasks-last-run.txt`

- [ ] **Step 3: Test dedup**

Run `/add-tasks` again immediately. Provide same brain dump text.

Verify: Claude reports "Nothing new to add" for the manual task (exact name match). ✓

- [ ] **Step 4: Commit**

```bash
cd "c:\Users\Carl Salamida\OneDrive\Desktop\Clawd Projects\SmarterFlow"
git add .
git commit -m "feat: add /add-tasks skill with GWS sweep and dedup"
```

---

## Task 5: Update SOD Skill

**Files:**
- Modify: `C:\Users\Carl Salamida\.claude\plugins\marketplaces\smarterflow\plugins\team\skills\sod\SKILL.md`

**Interfaces:**
- Consumes: `/add-tasks` skill (calls inline)
- Consumes: spreadsheet `1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8` (reads consultant's tab)
- Produces: updated SOD that shows top tasks from Consultant Tasks sheet + offers /add-tasks at end

- [ ] **Step 1: Add Consultant Tasks read to SOD Step 4 (Day Plan)**

In `sod/SKILL.md`, find Step 4 (Day plan). Append this block to that step:

```markdown
**Consultant Tasks check:** Read your tab from the Consultant Tasks sheet:
```bash
gws sheets +read --spreadsheet "1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8" --range "<TAB>!A:F" --format csv
```
Filter rows where Status ≠ `Done`. Sort by Score (col D) descending. Show top 5 with: Task, Score, Priority, Due date. Highlight any where Due < today as OVERDUE.
```

- [ ] **Step 2: Add Step 5 — /add-tasks prompt**

Append a new Step 5 to `sod/SKILL.md`:

```markdown
## Step 5 — Task capture (optional)

Ask the consultant: "Anything to add to your task list before you start?"

If yes → run the /add-tasks skill inline now.
If no or no reply → skip.

This is the morning task capture. /add-tasks will sweep Gmail and Fireflies automatically.
```

- [ ] **Step 3: Test updated SOD**

Run `/sod`. Verify:
- Step 4 now shows your top 5 tasks from the Consultant Tasks sheet
- Step 5 prompts for task capture
- Answering "yes" triggers /add-tasks inline

- [ ] **Step 4: Commit**

```bash
cd "c:\Users\Carl Salamida\OneDrive\Desktop\Clawd Projects\SmarterFlow"
git add .
git commit -m "feat: update /sod to read Consultant Tasks and call /add-tasks"
```

---

## Task 6: Update EOD Skill

**Files:**
- Modify: `C:\Users\Carl Salamida\.claude\plugins\marketplaces\smarterflow\plugins\team\skills\eod\SKILL.md`

**Interfaces:**
- Consumes: `/add-tasks` skill (calls inline)
- Consumes: spreadsheet (reads + writes consultant's tab for marking Done)
- Produces: updated EOD that marks tasks Done + captures end-of-day tasks

- [ ] **Step 1: Add task Done-marking after Clockify hygiene (Step 4)**

In `eod/SKILL.md`, after Step 4 (Clockify hygiene), add:

```markdown
### 4b. Mark completed tasks Done

Read your Consultant Tasks tab:
```bash
gws sheets +read --spreadsheet "1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8" --range "<TAB>!A:M" --format csv
```

Show all rows where Status = `To Do` or `Doing`. Ask: "Which tasks did you complete today? (list numbers)"

For each completed task, update Status → `Done` and Completed Date → today (EST):
```bash
gws sheets spreadsheets values update \
  --params '{"spreadsheetId":"1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8","range":"<TAB>!E<ROW>:M<ROW>","valueInputOption":"USER_ENTERED"}' \
  --json '{"values":[["Done","","","","","","","","<YYYY-MM-DD>"]]}'
```
Where ROW is the 1-based row number in the sheet (header = row 1, first data = row 2).
```

- [ ] **Step 2: Add /add-tasks prompt after task marking**

Append after step 4b:

```markdown
### 4c. End-of-day task capture

Ask: "Any new tasks from today to add before you close out?"

If yes → run /add-tasks inline. It will sweep Gmail/Fireflies for anything since this morning's SOD run, plus accept any manual input.
If no → skip.
```

- [ ] **Step 3: Test updated EOD**

Run `/eod`. Verify:
- Step 4b prompts to mark tasks Done, updates sheet correctly
- Step 4c asks for new tasks, triggers /add-tasks inline if yes

- [ ] **Step 4: Commit**

```bash
cd "c:\Users\Carl Salamida\OneDrive\Desktop\Clawd Projects\SmarterFlow"
git add .
git commit -m "feat: update /eod to mark tasks Done and call /add-tasks"
```

---

## Task 7: Update Instructions Tab

**Files:**
- Modify: `About` tab in spreadsheet `1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8`

- [ ] **Step 1: Update About tab with new column definitions**

```bash
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" && gws sheets spreadsheets values update \
  --params '{"spreadsheetId":"1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8","range":"About!A1:A15","valueInputOption":"USER_ENTERED"}' \
  --json '{"values":[
    ["SmarterFlow Consultant Tasks"],
    ["Each consultant tab is YOUR one list for ALL your work: client tasks, internal tasks, and action items from meetings."],
    ["Ordered bottleneck-first, highest Score sits on top. Work the top of your list."],
    ["Columns: Task | Client/Project | Priority (High/Med/Low) | Score 1-100 | Status (To Do/Doing/Done) | Due | Source | Notes | Start Date | Start Time | End Date | End Time | Completed Date | Source ID"],
    ["Source format: type:id — meeting:01KTN | project:Rodrigo | inbox | manager | consultant | client:Name | jonathan"],
    ["Client/Project must match the Client or Company name in the Projects Master exactly."],
    ["Source ID (col N): written automatically by /add-tasks for dedup. Do not edit manually."],
    ["Start/End Date+Time (cols I-L): auto-filled by billing skill from Clockify. Task names must match Clockify entries exactly."],
    ["Owner: CJ builds + maintains. Moon assists. The AI manager reads your tab daily and nudges overdue tasks."],
    ["Daily routine: /sod at start (shows top tasks + captures new ones), /eod at end (marks done + captures new ones)."],
    ["Use /add-tasks anytime mid-day to capture tasks immediately."],
    [""],
    ["SOURCE column format: type:id"],
    ["meeting:<id> = from a team meeting | project:<client> = from a client project | inbox = from email | manager = AI manager | consultant = you added it | client:<name> = client asked | jonathan = Jonathan assigned"],
    ["Keep the Source filled on every task so we can count where work originates."]
  ]}'
```

- [ ] **Step 2: Verify in browser**

Open the sheet, click About tab. Confirm rows updated correctly.

- [ ] **Step 3: Final commit**

```bash
cd "c:\Users\Carl Salamida\OneDrive\Desktop\Clawd Projects\SmarterFlow"
git add .
git commit -m "docs: update About tab with new column definitions and source format"
```

---

## Self-Review Checklist

- [x] Task 1 covers IAM blocker before any sheet writes
- [x] Task 2 adds all 6 new columns (I-N) + validation on Priority + Status
- [x] Task 3 Apps Script handles blank due dates, Date objects vs strings, skips Done rows, no email if nothing due
- [x] Task 4 /add-tasks SKILL.md covers: tab routing, last-run file, Gmail sweep, Drive sweep, manual input, dedup (source ID + name), scoring, confirmation loop, append, timestamp update
- [x] Task 5 SOD reads Consultant Tasks sheet + calls /add-tasks inline
- [x] Task 6 EOD marks tasks Done with row-accurate update + calls /add-tasks inline
- [x] Task 7 About tab updated with all new columns and Source ID note
- [x] Moon/Jed/Nica emails flagged as TBD — confirmed in Task 3 CONSULTANTS array before deploy
- [x] All gws commands include the nvm prefix
- [x] No formulas anywhere — plain values only
