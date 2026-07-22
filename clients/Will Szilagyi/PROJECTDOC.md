# Will Szilagyi — Project Documentation

## Client Info
- **Name:** Will Szilagyi
- **Company:** The Ziggy Team (mortgage/HELOC broker) — brand "Cash Flow Protocols"
- **Email:** will@theziggyteam.com
- **Point of contact during build:** Tyler (his son)
- **Consultant:** CJ Salamida

## Project Overview
Will sells first/second-position HELOCs (Velocity Banking / Cash Flow Protocols) and does mortgage loan origination. Currently on another GHL agency, signed May 1 2026, very slow progress (checked automation history in his GHL — long gaps, May 15 to Jun 19 to Jul 8, over 2 months for basic work). Exploring switching build partners.

Currently runs contacts/tasks in **Be In Touch** (mortgage CRM) — end goal is to retire it and run everything in GoHighLevel.

## Scope (phased proposal sent 2026-07-14)

### Phase 1 — Email Parsing & Lead Intake Automation (up to 10 hrs)
**Revised architecture (2026-07-18):** no Outlook/Zapier hop needed. His referral source is a 3rd party lead provider — just have them send directly to his GHL inbound email address (subdomain-based, lands in Conversations). Simpler chain:
- Inbound email trigger (Customer Replied / inbound email) on his GHL conversation inbox
- Keyword match on the two things that matter: **1st HELOC** vs **2nd HELOC** position — this is the actual bottleneck, everything branches off it
- Capture custom fields from the email body (borrower name, loan balance, credit score, property type, state, phone) — this is the bigger win, more data captured than his current manual process
- Branch: correct email template + correct video sent per position (1st vs 2nd), same PDF attachment logic as before, calendar link included
- Create/update contact in GHL, enroll into correct workflow
- Create task (replaces manual Be In Touch task creation)

### Phase 2 — Cash Flow Protocols Funnel (10-12 hrs est.)
- Hub page = Cash Flow Protocols; 3 spoke funnels (Velocity Banking + 2 others), all similar structure, different ad sources
- Site partially built already in Claude: helocsimulator.com — has intro video, education content, HELOC calculator
- Calculator = yes/no gate: runs surplus cash-flow math, captures lead info either way (qualified → one bucket/workflow, not qualified → nurture bucket)
- Connect calculator gate to GHL

### Phase 3 — Internal Operations Automation (10-20 hrs est., scoped after Phase 2)
- Move his internal loan pipeline tracker off spreadsheet into Google Sheets, then into GHL
- Milestone-based task automation: when one role (LOA/processing/closing) completes a task, auto-notify the next assigned person (SMS/email)
- Role-specific task boards inside GHL (mirrors what he liked about Be In Touch's dashboard)

### Future phases (from his own scope-of-work doc, not yet estimated)
- GHL Foundation & CRM: import Be In Touch contacts, phone/SMS setup, separate marketing side from Luminate Bank loan application process
- AI SMS qualification/follow-up (10-15 hrs est.) — HELOC/DSCR/self-employed tracks
- Education & nurture sequences (Velocity Banking, HELOC, DSCR, self-employed) — needs a separate strategy session before quoting

## Competitive Status (as of 2026-07-18)
Will ran 6 vendor interviews, down to CJ vs one other agency (pricier, he says "extreme competence"). Real scope is multi-month: sales funnels + backend ops, not a one-off build. He and Tyler requested a deeper-dive call on capabilities before deciding.

## Billing
- Rate: $55/hr pay-as-you-go, no retainer
- Billing: work Mon-Fri billed the following Monday to card on file
- Payment link: https://link.gosmarterflow.com/payment-link/6733da86d637435b51a616c0
- Status: **no card on file yet** — proposal + follow-up sent, awaiting his go-ahead

## Demo Prototype Spec (for the deep-dive call)
Build a working Phase 1 prototype in a demo/sandbox sub-account (no HighLevel access from Claude this session):
- Custom fields: Loan Balance, Credit Score, Property Type, State, Borrower Phone, HELOC Position
- Trigger: Customer Replied / inbound email
- AI parsing step extracts the 6 fields + classifies HELOC Position (First/Second)
- If/Else branch on Position → correct template (video + PDF + calendar) per branch
- Downstream: create/update contact, create task, enroll workflow
- Test against mock First-position and Second-position emails — his real sample was only screen-shared live on the 07-14 call, never actually sent over, so nothing to pull from Gmail

## Key Notes
- His current agency is slow — verified by CJ live on the call by checking his GHL automation update timestamps
- The referral-source email format never changes — reason he wants email parsing over a form
- The attached PDF is generic (same for every lead), only 2 variants: first position vs second position — simplifies the parsing logic
- Jonathan CC'd on proposal + follow-up emails
- His scope-of-work doc (Index3_Scope of work.docx) is attached to the 07-14 email thread but its content has never actually been opened/read by Claude — no attachment-download tool available this session
- Phase 3 (ops/pipeline automation) is still just a stated want from the call — no field names, milestone list, SLA numbers, or full team roster. Don't quote or demo it as if it's scoped
