# SmarterFlow Consultant Tasks — Setup Guide

Follow these steps top to bottom. Takes about 15 minutes.

Before you start: make sure you have received the `client_secret.json` file from Jonathan. If you don't have it yet, stop here and ask him.

---

## Part 1 — Daily nudge email (5 minutes)

Sends you an email at 9 AM EST every day with your overdue and due-today tasks. Runs in Google — nothing to install on your computer.

### 1. Open Google Apps Script

Go to: https://script.google.com

Click **New project**. Rename it to: **SmarterFlow Daily Nudge**

### 2. Paste this script

Delete everything in the editor. Copy and paste the entire block below:

```javascript
const SPREADSHEET_ID = '1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8';
const TAB_MAP = {
  'cj@gosmarterflow.com':   { name: 'CJ',   tab: 'CJ'   },
  'moon@gosmarterflow.com': { name: 'Moon', tab: 'Moon' },
  'jed@gosmarterflow.com':  { name: 'Jed',  tab: 'Jed'  },
};

const COL = { TASK: 0, SCORE: 3, STATUS: 4, DUE: 5 };

function sendDailyNudge() {
  const email = Session.getActiveUser().getEmail();
  const consultant = TAB_MAP[email];
  if (!consultant) { Logger.log('Account not mapped: ' + email); return; }

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(consultant.tab);
  if (!sheet) { Logger.log('Tab not found: ' + consultant.tab); return; }

  const tz = 'America/New_York';
  const now = new Date();
  const todayStr = Utilities.formatDate(now, tz, 'yyyy-MM-dd');

  const rows = sheet.getDataRange().getValues().slice(1);
  const overdue = [], dueToday = [];

  rows.forEach(row => {
    const task = row[COL.TASK];
    const status = row[COL.STATUS];
    const due = row[COL.DUE];
    const score = Number(row[COL.SCORE]) || 0;
    if (!task || status === 'Done' || !due) return;
    const dueStr = due instanceof Date
      ? Utilities.formatDate(due, tz, 'yyyy-MM-dd')
      : String(due).trim();
    if (!dueStr.match(/^\d{4}-\d{2}-\d{2}$/)) return;
    const entry = { task, score, dueStr };
    if (dueStr < todayStr) overdue.push(entry);
    else if (dueStr === todayStr) dueToday.push(entry);
  });

  if (!overdue.length && !dueToday.length) return;

  overdue.sort((a, b) => b.score - a.score);
  dueToday.sort((a, b) => b.score - a.score);

  const total = overdue.length + dueToday.length;
  const dateLabel = Utilities.formatDate(now, tz, 'MMM dd');
  const subject = `[SF Tasks] ${total} item${total !== 1 ? 's' : ''} need you today - ${dateLabel}`;

  let body = `Hi ${consultant.name},\n\nYou have ${total} task${total !== 1 ? 's' : ''} that need attention today.\n`;

  if (overdue.length) {
    body += `\n** OVERDUE **\n`;
    overdue.forEach(t => { body += `- ${t.task} (Score: ${t.score}, Due: ${t.dueStr})\n`; });
  }
  if (dueToday.length) {
    body += `\n** DUE TODAY **\n`;
    dueToday.forEach(t => { body += `- ${t.task} (Score: ${t.score}, Due: ${t.dueStr})\n`; });
  }

  body += `\nWork the top of your list first.\n— SmarterFlow AI Manager`;
  GmailApp.sendEmail(email, subject, body);
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

Press **Ctrl+S** to save.

### 3. Set the timezone

Click the gear icon on the left (Project Settings). Set **Time zone** to `(GMT-05:00) America/New_York`. Save.

### 4. Test it

In the dropdown at the top, select `sendDailyNudge`. Click **Run**.

First time: popup says **Authorization required** — click **Review permissions**, pick your `@gosmarterflow.com` account, click **Advanced** → **Go to SmarterFlow Daily Nudge (unsafe)** → **Allow**.

Check your inbox. You should get an email with your tasks.

### 5. Set the daily trigger

Switch the dropdown to `createTrigger`. Click **Run**.

Done. Email arrives at 9 AM EST every day from now on.

---

## Part 2 — Claude Code skills (10 minutes)

This gives you `/add-tasks`, `/sod`, and `/eod` which automatically keep your task list up to date.

### 1. Install the SmarterFlow plugin

Open Claude Code and run:

```
/plugin marketplace add jonathangosmarterflow/smarterflow-skills
/plugin install team@smarterflow
```

### 2. Save client_secret.json

Take the `client_secret.json` file Jonathan sent you and save it here:

- **Windows:** `C:\Users\<your username>\.config\gws\client_secret.json`
- **Mac:** `~/.config/gws/client_secret.json`

Do not share this file. Do not commit it to any repo.

### 3. Install gws CLI

**Windows (PowerShell):**
```powershell
winget install googleworkspace.cli
```

**Mac (Terminal):**
```bash
brew install googleworkspace/tap/gws
```

Verify: `gws --version`

### 4. Authenticate

```bash
gws auth login
```

Browser opens — sign in with your `@gosmarterflow.com` account, allow access.

Confirm: `gws auth status` should show `token_valid: true`.

### 5. Test

In Claude Code, run `/add-tasks` — it should start sweeping your Gmail and Fireflies for tasks.

---

## You are set up

- **9 AM email** — arrives automatically, no action needed
- **`/sod`** — run at start of day, pulls your task list and sweeps for new tasks
- **`/eod`** — run at end of day, marks completed tasks done, sweeps for new tasks
- **`/add-tasks`** — run anytime mid-day if something new came up

Questions? Ask CJ.
