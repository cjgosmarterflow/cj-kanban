# Harvey — Session Updates
**Client:** Harvey Hillyer / dermani MEDSPA
**Consultant:** CJ Salamida

---

## 2026-06-22

**What was done:**
- Harvey forwarded urgent GHL email: woodstock.dermanimedspa.co sending domain verification required. Nica's email had bounced.
- Jonathan introduced CJ as new primary contact (same thread).
- Harvey replied positively to Jonathan.
- CJ replied to Harvey + team: confirmed email is legit, requested GoDaddy access to fix domain verification. Offered alternative if GoDaddy access not comfortable.

**What's next:**
- Harvey looped in Stephanie (admin@dermanimedspa.com) — GoDaddy expert.
- Stephanie booked 12 PM EST call for June 23 (today) to resolve DNS with CJ.
- After call: confirm DNS records added, verify sending domain live in GHL.
- Confirm pipeline-status regression (Apr) resolved.

**Blockers:**
- DNS call scheduled for today — outcome pending.

---

## 2026-06-24

**What was done:**
- Joined DNS troubleshooting call with Stephanie (admin@dermanimedspa.com)
- Diagnosed root cause: CNAME record for `woodstock` existed on `dermanimedspa.co` — carried over incorrectly from `.com` (where it's used for funnel subdomains). That CNAME blocked GHL from adding MX and TXT records for email sending.
- Confirmed via nslookup: no actual MX/TXT records existed — GoDaddy's error was a CNAME conflict, not a true duplicate record.
- Stephanie deleted the `woodstock` CNAME from GoDaddy DNS Manager for `.co` domain.
- MX and TXT records (Mailgun/GHL) now added successfully.
- Emailed Harvey + Stephanie confirming fix. GHL DNS verification pending propagation.

**What's next:**
- Confirm GHL sending domain verification goes green for woodstock.dermanimedspa.co
- Confirm pipeline-status regression (Apr) resolved
- Audit remaining franchise sub-accounts

**Blockers:**
- None — DNS propagation in progress (up to 30 min)

---

## 2026-06-08

**What was done:**
- Jonathan introduced CJ to Harvey as temporary cover for Nica (OOO).
- Harvey replied: "Thank you Jonathan and nice to e-meet you CJ!"
- CJ replied to Harvey.

**What's next:**
- Await any active requests from Harvey.

**Blockers:**
- None at time of intro.
