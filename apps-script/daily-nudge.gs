const SPREADSHEET_ID = '1VAv6TrXREj3aLUyeCsfxPCpwa8FYSh38rn3a-HkMwC8';
const CONSULTANTS = [
  { name: 'CJ',   email: 'cj@gosmarterflow.com',   tab: 'CJ'   },
  { name: 'Moon', email: 'moon@gosmarterflow.com',  tab: 'Moon' },
  { name: 'Jed',  email: 'jed@gosmarterflow.com',   tab: 'Jed'  },
  { name: 'Nica', email: 'nica@gosmarterflow.com',  tab: 'Nica' },
];

// Column indices (0-based): A=0 B=1 C=2 D=3 E=4 F=5
const COL = { TASK: 0, SCORE: 3, STATUS: 4, DUE: 5 };

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

// Run once to set the 9 AM EST daily trigger. Delete existing triggers first.
function createTrigger() {
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('sendDailyNudge')
    .timeBased()
    .atHour(9)
    .everyDays(1)
    .inTimezone('America/New_York')
    .create();
}
