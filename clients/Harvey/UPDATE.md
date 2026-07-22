# Harvey — Session Updates
**Client:** Harvey Hillyer / dermani MEDSPA
**Consultant:** CJ Salamida

---

## 2026-07-21

**What was done:**
- Full session context flush — reviewed all open items and session history
- Confirmed Alpharetta bot "Ashley" fix from 2026-07-18 is complete and KP email was sent
- Pipeline regression (Apr) still unverified — no email evidence, originated from Nica handoff notes; needs manual GHL check
- Updated all client files (UPDATE.md, PROJECTDOC.md, HANDOFF.md, CLAUDE.md) with full session context
- Weekly billing sent for week 07/13 - 07/17: 1:00 hrs, $55.00 (1h minimum)
- Tasks billed: Check Alpharetta chatbot (0:24:52)
- Billing email: harvey@dermanimedspa.com, CC marketing@dermanimedspa.com, digital@dermanimedspa.com, jonathan@gosmarterflow.com

**What's next:**
- Await KP reply on Alpharetta chatbot fix confirmation
- Manually check Woodstock sub-account (Sx1pflmJdApprLCcpUXy) pipeline stages for Apr regression
- Audit remaining franchise sub-accounts (Alpharetta ID unknown — confirm access)

**Blockers:**
- Alpharetta sub-account ID not yet documented

---

## 2026-07-14

**What was done:**
- Weekly billing sent for week 07/06 - 07/10: 1:00 hrs, $55.00
- Tasks billed: Audit Social Planner FB Comments (0:15:47)

**What's next:**
- Follow up on audit findings
- Await KP decision on Marketing Requests vs per-location scheduling

**Blockers:**
- None

---

## 2026-07-14 (Alpharetta chatbot — Ashley)

**What was done:**
- KP (Kaci Pedersen, marketing@dermanimedspa.com) reported that Alpharetta chatbot "Ashley" gave two leads incorrect information over the weekend: (1) told a lead it treats cherry angiomas — incorrect service; (2) told a lead it is open on Sundays — incorrect hours.
- CJ sent expectation-setting reply to KP: explained root cause (knowledge base has incorrect service info + business hours misconfigured), committed to correcting both.
- Draft reply to KP created (r-107973179397577470) — CJ to review and send.

**What's next:**
- Log into Alpharetta sub-account → Settings > AI Employee > Knowledge Base
  - Remove any mention of cherry angiomas
  - Add explicit instruction to only discuss services on the current service menu
- Correct business hours in chatbot settings: remove Sunday (dermani is not open Sundays)
- Send confirmation to KP once both fixed

**Blockers:**
- Need confirmed GHL access to Alpharetta sub-account (separate from Woodstock Sx1pflmJdApprLCcpUXy)

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
- Log into GHL Woodstock sub-account (Sx1pflmJdApprLCcpUXy) and manually verify pipeline stages — no email evidence of Apr regression found, likely from Nica's handoff notes only
- Audit remaining franchise sub-accounts

**Blockers:**
- None — DNS propagation in progress (up to 30 min)

## 2026-06-30

**What was done:**
- Weekly billing sent for week 06/22 - 06/26: 1:15 hrs, $68.75, card charged
- Tasks billed: GoDaddy DNS coordination call (Stephanie) (0:57:00), Fix GoDaddy issue with Woodstock subaccount (0:11:23)
- Sent to harvey@dermanimedspa.com + admin@dermanimedspa.com (Stephanie added to To), CC jonathan@gosmarterflow.com + marketing@dermanimedspa.com + digital@dermanimedspa.com

**What's next:**
- Confirm GHL sending domain verification green for woodstock.dermanimedspa.co
- Manually check Woodstock sub-account (Sx1pflmJdApprLCcpUXy) pipeline stages for Apr regression
- Clarify billing CC list — Marketing + Digital were included; verify if they should be on future billing emails

**Blockers:**
- None

---

## 2026-07-18

**What was done:**
- Investigated Alpharetta sub-account chatbot "Ashley" giving incorrect info to two leads (said they treat cherry angiomas + said open Sunday)
- Used Claude in Chrome (read-only) to audit: Conversation AI knowledge base (26 URLs + 29 FAQs), Business Profile hours, and all ~30 workflows
- Root cause 1 (cherry angiomas): No entry existed — bot hallucinated from IPL Photofacial content ("benign pigments + broken capillaries"). AI inferred cherry angiomas as related.
- Root cause 2 (Sunday hours): FAQ said "Sun-Closed" correctly but scraped facials page only listed M-F + Sat with no Sunday mention — bot hit that page and had no clear answer.
- Fix: Added 2 explicit FAQ entries in Conversation AI > Bot Training > FAQ for Alpharetta sub-account: "Do you treat cherry angiomas?" (No) and "Are you open on Sundays?" (No, closed Sun)
- Drafted reply to KP (marketing@dermanimedspa.com) explaining investigation + fixes — saved as draft

**What's next:**
- Await KP confirmation email is received/reviewed
- Continue: check GHL pipeline regression (Apr) manually in Woodstock sub-account
- Audit remaining franchise sub-accounts

**Blockers:**
- None

---

## 2026-07-09

**What was done:**
- Investigated Social Planner comments not showing in location sub-accounts (reported by KP, marketing@dermanimedspa.com)
- Confirmed with 2 GHL support specialists: platform limitation — each Facebook page can only show comments in one sub-account at a time. Since pages are connected to Marketing Requests sub-account, comments only appear there, not in individual location sub-accounts.
- Replied to KP explaining the limitation and confirming Marketing Requests is the centralized hub for META comments
- Also addressed GHL AI Employee promo ("31 accounts free through August") in the reply

**What's next:**
- Await KP decision: keep Marketing Requests as hub (recommended) or move scheduling per location
- Await KP response on AI Employee promo interest
- Continue franchise sub-account audit
- Confirm pipeline-status regression (Apr) resolved via GHL sub-account check

**Blockers:**
- None

### KP Follow-up (same day)
- KP replied asking if she can keep Marketing Requests for scheduling while having comments push to each location sub-account
- Confirmed: not possible — GHL platform limitation, one active connection per page
- Explained both options: keep current setup (recommended) or move scheduling per location
- Draft reply saved, awaiting CJ to send

---

## 2026-06-26

**What was done:**
- Searched Gmail for April pipeline regression thread — no emails found
- Pipeline issue originated from Nica's handoff notes, not a client-reported email thread
- Kanban cleaned: all todo cards removed, done cards added for DNS call + fix + file updates

**What's next:**
- Manually check GHL Woodstock sub-account (Sx1pflmJdApprLCcpUXy) pipeline stages to confirm April regression resolved or still active
- Confirm GHL sending domain verification green

**Blockers:**
- None

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
