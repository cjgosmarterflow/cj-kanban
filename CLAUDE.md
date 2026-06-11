# SmarterFlow — CJ's Engagement Context

## Role
GHL Consultant under SmarterFlow (Jonathan Schoenberg)
Client tasks: $24/hr | Internal/SmarterFlow tasks: $15/hr | Target: 30 client-build hours/week
Start date: 2026-06-09
Email: cj@gosmarterflow.com

## Team
| Name | Role | Contact | Notes |
|---|---|---|---|
| Jonathan Schoenberg | Owner | jonathan@gosmarterflow.com | Bali-based, German-American |
| Moon (Ghulam Moin) | Consultant | moon@gosmarterflow.com | Pakistan · CJ's onboarding buddy · CC on all questions |
| Jed Billones | Consultant | jed@gosmarterflow.com | Philippines · part-time · API integrations specialist |
| Nica Dapac | Consultant (on leave) | nica@gosmarterflow.com | Leave from 2026-06-09, ~2 weeks |

CJ covers: Nika's clients (inherited) + own clients from free consulting calendar.
Pair coverage: CJ covers Moon, Moon covers Jed.

## Communication Protocol
- Questions to Jonathan: email + CC Moon
- Client emails: you + Jonathan + Moon (internal only); keep client threads separate
- Client direct: WhatsApp (where agreed per client)
- Internal questions → Moon first (faster response than Jonathan who goes offline evenings)

## Tools
| Tool | Purpose |
|---|---|
| Clockify | Time tracking — log every client session |
| GHL sub-account: SmarterFlow | Internal agency account (messy — don't prioritize cleanup) |
| Google Meet | Client calls |
| Read AI | AI note-taking (team license pending from Jonathan) |
| go.smarterflow.com/consult | Free consulting calendar — add yourself ASAP |

## Calendar Setup (Immediate Priority)
1. Create 30-min + 60-min booking links in SmarterFlow GHL sub-account (ref: Nika's setup as template)
2. Add yourself to free consulting calendar: go.smarterflow.com/consult
3. Open 2:30–5 PM slots (highest lead booking window)
4. Connect Google Meet to calendar

## Billing
- Internal (SmarterFlow hours): $15/hr, tracked in Clockify
- Client-facing: varies per client (see each client's CLAUDE.md)
- Billing cycle: weekly — Monday for previous week's work
- Process: Clockify export → billing email to client → CC Jonathan
- Ask Moon to walk through billing on your first week

## Weekly Rhythm
- Monday team meeting: mandatory, cancel in advance if missing (deduction applied otherwise)
- Wednesday team meeting: optional, team-led
- End-of-day report: Google Form, fill daily (max 5 min — link in Jonathan's onboarding email)

## SOP
- SmarterFlow SOPs in shared Google Drive folder (link in Jonathan's onboarding email)
- SOP tracking sheet: sign off on each section after reading
- Seven sections — read 2–3/day, questions to Jonathan + CC Moon

## Clients Currently Assigned
- **David Giraldo** (Flipside Investments) — inherited from Nika, URGENT
- **Chris** — folder scaffolded, details TBD
- **Harvey** — folder scaffolded, details TBD
- **Jared** — folder scaffolded, details TBD
- **Jon** — folder scaffolded, details TBD
- **Leo** — folder scaffolded, details TBD
- **Renato** — folder scaffolded, details TBD

Each client: `clients/<name>/CLAUDE.md` (context) + `HANDOFF.md` (living doc) + `kanban.html` (tasks).

---

## Kanban Board — Sync Instructions

Live board: https://cj-kanban.vercel.app

### Architecture

```
Supabase (live data) ←→ index.html EMBEDDED_DATA (fallback seed) → GitHub → Vercel (auto-deploy)
```

- **Supabase** is the primary data store. The app reads from it on load.
- **EMBEDDED_DATA** in `index.html` seeds a client only when they have 0 rows in Supabase, or if Supabase fails. Keep it in sync to prevent stale cards reappearing.
- **GitHub push → Vercel redeploys automatically.** No `vercel` CLI needed.
- **Auto-push hook**: Any Edit/Write to `index.html` triggers `git add index.html; git commit; git push` via `.claude/settings.json`.

### When the user shares a new JSON export — do these steps in order

1. Read the JSON file
2. Patch Supabase — PATCH changed cards, POST new ones, DELETE removed ones
3. Update `EMBEDDED_DATA` in `index.html` to mirror the JSON exactly, bump `_rev` by 1
4. The auto-push hook fires on the Edit → GitHub push → Vercel redeploys

### Supabase connection

- URL: `https://rcjeymcljjuloifaljoj.supabase.co`
- Anon key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjamV5bWNsamp1bG9pZmFsam9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5OTg3ODQsImV4cCI6MjA5NjU3NDc4NH0.MwHjevTmOB1WVpkuHH5Em7LmDKs0vgNAdiEv8ARrWRM`
- Table: `cards` — columns: `id, client_id, col, title, note, solution, pri, start_date, start_time, end_date, end_time, sort_order`

### PowerShell helper functions (copy-paste ready)

```powershell
$script:BASE = 'https://rcjeymcljjuloifaljoj.supabase.co/rest/v1/cards'
$script:KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjamV5bWNsamp1bG9pZmFsam9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5OTg3ODQsImV4cCI6MjA5NjU3NDc4NH0.MwHjevTmOB1WVpkuHH5Em7LmDKs0vgNAdiEv8ARrWRM'
$script:HDR  = @{ 'apikey'=$script:KEY; 'Authorization'="Bearer $($script:KEY)"; 'Content-Type'='application/json'; 'Prefer'='return=minimal' }

function SbPatch($id, $body) {
  $uri  = $script:BASE + '?id=eq.' + $id
  $json = [System.Text.Encoding]::UTF8.GetBytes(($body | ConvertTo-Json -Compress))
  try { Invoke-RestMethod -Uri $uri -Method PATCH -Headers $script:HDR -Body $json | Out-Null; Write-Host "PATCH $id OK" }
  catch { Write-Host "PATCH $id FAIL: $($_.Exception.Message)" }
}
function SbDelete($id) {
  $uri = $script:BASE + '?id=eq.' + $id
  try { Invoke-RestMethod -Uri $uri -Method DELETE -Headers $script:HDR | Out-Null; Write-Host "DELETE $id OK" }
  catch { Write-Host "DELETE $id FAIL: $($_.Exception.Message)" }
}
function SbPost($body) {
  $json = [System.Text.Encoding]::UTF8.GetBytes(($body | ConvertTo-Json -Compress))
  try { Invoke-RestMethod -Uri $script:BASE -Method POST -Headers $script:HDR -Body $json | Out-Null; Write-Host "POST $($body.id) OK" }
  catch { Write-Host "POST $($body.id) FAIL: $($_.Exception.Message)" }
}
```

**Critical gotchas:**
- Always use `$script:BASE` / `$script:HDR` — PowerShell functions don't inherit outer-scope variables, causing "Invalid URI" errors
- Never name a function `Del` — it's a PowerShell alias for `Remove-Item`
- If POST returns 409 Conflict, the card already exists — use `SbPatch` instead
- Encode body with `[System.Text.Encoding]::UTF8.GetBytes(...)` to avoid UTF-16 issues

### GitHub remote

```
git@github-cjkanban:cjgosmarterflow/cj-kanban.git  (main branch)
```
