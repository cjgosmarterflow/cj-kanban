# Will Szilagyi — Handoff Document

## Status as of 2026-07-18
**Competitive eval — final 2 of 6 vendors. Deep-dive call requested, awaiting his time slot.**
Scope confirmed as multi-month: sales funnels + backend ops streamlining (not just Phase 1-3 one-off build). Competing bid is pricier, described by Will as "extreme competence" — this next call likely decides it.

Reply draft is sitting in Gmail Drafts (thread 19f70e903a876a5d) — 3 versions exist from prep session, only send the final one (uses the revised Phase 1 architecture below), discard the other two.

## Who is Will
Mortgage/HELOC broker, The Ziggy Team, brand "Cash Flow Protocols." Sells first/second-position HELOCs (velocity banking angle). Currently on another GHL agency (signed May 1), unhappy with slow pace, shopping for a faster build partner. Son Tyler is the day-to-day point of contact once build starts.

## What's Been Done
- Free consulting call 2026-07-14 — Will screen-shared his current GHL, his scope-of-work doc, hub-and-spoke funnel diagram, and a sample referral email
- Live-verified his current agency's automation history barely moved in 2+ months
- Phased proposal sent 2026-07-14 (Phase 1-3 + future phases), cc Jonathan
- Follow-up nudge sent 2026-07-16 on Phase 1

## What Needs to Happen Next
1. Send final draft in thread 19f70e903a876a5d, discard the other two draft versions
2. Deep-dive call — win the eval against the other (pricier) vendor. Bring a WORKING PROTOTYPE of the email parser (built against mock data, see below), not just scope talk. Skip a portfolio — lean on flowchart/strategy-mapping instead, contingent on getting a real strategy call before build. Know his stack cold (Be In Touch, GoDaddy/subdomain snag, hub-and-spoke funnel structure, helocsimulator.com) — don't talk GHL generically.
3. Once he picks us: card on file (payment link in proposal/follow-up)
4. Add support@gosmarterflow.com to his GHL (Settings → My Staff → Add User)
5. Get a REAL sample referral email from him — the one shown during the call was screen-shared only, never actually emailed over, so nothing to pull from Gmail. Ask again before/at the deep-dive call.
6. Begin Phase 1 build (revised, no Outlook hop needed — see PROJECTDOC): inbound email trigger direct to GHL, first vs second position keyword detection, custom field capture, auto-reply (video + PDF + calendar), contact creation, task creation

## Demo Prototype Spec (build before deep-dive call)
- Custom fields: Loan Balance, Credit Score, Property Type, State, Borrower Phone, HELOC Position
- Trigger: Customer Replied / inbound email on his GHL conversation inbox
- AI parsing step: extract the 6 fields + classify HELOC Position (First/Second) from body text
- If/Else branch on HELOC Position → correct template (video + PDF + calendar link) per branch
- Downstream: create/update contact, create task, enroll workflow
- Test with mock First-position and Second-position sample emails (real one was never captured — see UPDATE.md 2026-07-18 entry for mock text)
- No HighLevel account access from Claude this session — build manually in a demo/sandbox sub-account

## Build Order
1. Phase 1 — email parsing / lead intake automation
2. Phase 2 — Cash Flow Protocols funnel (calculator gate → GHL)
3. Phase 3 — internal ops automation (Sheets → GHL, milestone notifications, role task boards)
4. Future — CRM foundation/Be In Touch migration, AI SMS qualification, nurture sequences (needs separate strategy session before quoting)

## Key Contacts
- Will: will@theziggyteam.com
- Tyler (son): tyler@theziggyteam.com — point of contact during build, cc'd on 07-17 evaluation email
- Jonathan cc'd on proposal + follow-up

## Watch Out For
- Two PDF variants only (first position / second position HELOC) — keeps parsing logic simple
- Referral email format is always identical from his one lead source — don't over-engineer the parser
- He wants to fully retire Be In Touch eventually — GHL becomes single CRM
- Nurture/education sequence phase needs its own strategy call — don't quote it without one
- Ops/pipeline (Phase 3) is still just a stated want — no field names, milestone list, SLA numbers, or team roster beyond Will/Tyler/Susan. Don't over-promise a working demo there like was almost done in an early draft — only Phase 1 can be prototyped for real right now
- His SOW docx (Index3_Scope of work.docx, attached to the 07-14 thread) has never actually been read/opened by Claude this session — no attachment-download tool was available. Open it manually if its exact wording matters
