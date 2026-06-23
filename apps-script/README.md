# SmarterFlow Daily Nudge — Setup Guide

Sends you a 9 AM EST email every day listing your overdue and due-today tasks from the Consultant Tasks sheet. Each consultant runs their own copy — it only reads your tab and emails you.

---

## What you need

- A Google account (`@gosmarterflow.com`)
- Access to the SmarterFlow Consultant Tasks sheet (ask CJ if you don't have it)

---

## Steps

### 1. Open Google Apps Script

Go to: https://script.google.com

Click **New project** (top left).

Rename the project to: `SmarterFlow Daily Nudge`

---

### 2. Paste the script

Delete everything in the editor. Copy the full contents of `daily-nudge.gs` and paste it in.

Click **Save** (Ctrl+S or the floppy disk icon).

---

### 3. Set the timezone

Click the gear icon (Project Settings) on the left sidebar.

Under **Script Properties**, scroll to **Time zone** — set it to `America/New_York`.

Save.

---

### 4. Test it

In the function dropdown at the top of the editor, select `sendDailyNudge`.

Click **Run**.

First time: a dialog says "Authorization required" — click **Review permissions**, pick your `@gosmarterflow.com` account, click **Advanced** → **Go to SmarterFlow Daily Nudge (unsafe)** → **Allow**.

Check your inbox. You should get an email listing your overdue/due-today tasks. If your tab has no tasks with due dates, nothing arrives (that's correct — no noise if nothing is due).

---

### 5. Set the daily trigger

In the function dropdown, select `createTrigger`.

Click **Run**.

This sets a 9 AM EST trigger. You only need to do this once. From now on the email arrives automatically every morning.

---

## Troubleshooting

**No email received after running sendDailyNudge**
- Check the Execution log (bottom panel) for errors
- Make sure your tab in the Consultant Tasks sheet has rows with a Due date set (col F) and Status not set to Done

**"Account not mapped" in execution log**
- Your email is not in the TAB_MAP in the script. Contact CJ to add it.

**Authorization error**
- Re-run sendDailyNudge and go through the permissions flow again
