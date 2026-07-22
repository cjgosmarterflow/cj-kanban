## 2026-07-21

**What was done:**
- Weekly billing sent for week 07/13 - 07/17: 5:45 hrs, $316.25
- Tasks billed: Fix Zapier Errors (0:21:00), Adding SMS variants / Splits (3:37:16), Continue SMS variants / Splits (0:12:53), New Booking Form (1:27:00)
- Billing email: jared@brickellwindowcleaners.com, CC jonathan@gosmarterflow.com (invoice link — generate in GHL before sending)

**What's next:**
- Generate GHL invoice link and insert before sending billing draft
- End-to-end test: submit test booking, verify GHL contact fields populate, CAPI Schedule fires
- Send Jared updated workflow map + final combined message list before activating SMS nurture

**Blockers:**
- None

---

## 2026-07-17

**What was done:**
- Project C (7-Step Booking Form Redesign) — full build complete on $0 booking auth form (BUYKXRGbLKuGhYVLarvJ)
- Created 7 GHL custom fields via API: How Did You Hear About Us (dropdown), Loft Windows (radio), Interior Cleaning (radio), Membership Frequency (radio), GlassKeepers auth checkbox, Rinse & Repeat auth checkbox, Initials (text)
- Added all fields to booking auth form in correct order
- HDYHAU corrected to $0 form (was accidentally added to $135 form first)
- Combined SMS + marketing consent into T&C 1
- T&C 2 = combined auth checkbox (payment auth + cancellation policy + authorized cardholder)
- Membership Frequency radio with conditional GlassKeepers / Rinse & Repeat checkboxes
- Initials + Signature added as final step before submit
- All 8 Project C Kanban cards created and completed
- .env file created for Jared's GHL credentials

**What's next:**
- End-to-end test: submit test booking, verify GHL contact fields populate, CAPI Schedule fires
- Unit # field (from Jared's Step 1 spec) — not yet added to form
- Authorization note at top of form (Jared's spec) — confirm if added
- Progress bar on HTML wrapper pages (visual enhancement)

**Blockers:**
- None

---

## 2026-07-16

**What was done:**
- Completed full SMS nurture expansion build across 10-Day Lead Recovery #1, #2, #3
- Added Random Split at every SMS touchpoint with equal % distribution
- All 20 new message variations from Jared mapped to appropriate days by tone
- Go To actions added after each split path to reconnect flow (no orphaned ENDs)
- Split assignments: Day 1 (5 paths), Day 2 Lunch (4), Day 2 Evening (4), Day 4 (4), Day 5 (4), Day 6 (4), Day 7 (4), Day 8 (4), Day 9 (3), 7-day check-ins (5)
- Dependent/Timing support SMS left untouched (contextual replies, not nurture)

**What's next:**
- Send Jared updated workflow map + final combined message list BEFORE activating
- Add Kanban card (Supabase offline — add manually)

**Blockers:**
- None

---

## 2026-07-15 (continued)

**What was done:**
- Received Jared's approval for SMS nurture expansion (Project A — nurture campaign)

**What's next:**
- Build SMS nurture expansion: add new variations to existing rotation, percentage-split/randomized, contact-level tracking
- Send Jared updated workflow map + final combined message list BEFORE activating
- Kanban card needed (Supabase offline — add manually)

**Blockers:**
- None — Jared approved, ready to build

---

## 2026-07-15

**What was done:**
- Received Jared's full booking form redesign spec (7-step multi-page form). This is a new significant scope item — replaces the current simple GHL booking form.
- Jared confirmed he likes the direction of moving booking into GHL (away from ZenMaid form)
- Jared is sending a Loom of how current bookings look on his end

**What's next:**
- Wait for Jared's Loom before starting build
- Review Loom → scope/estimate the 7-step form build → present to Jared
- Build new form once scoped and approved

**Blockers:**
- Waiting on Jared's Loom

---

## 2026-07-14

**What was done:**
- Google Drive share notification received from Jared: "New Booking Form" document shared.
- CJ sent check-in draft (r-3275946089118364078): acknowledged the doc + asked about Google Sheet clone + Apps Script deploy status.
- Fixed 2 Zapier errors: "Error while hydrating data from Facebook Lead Ads (1.1.9): Invalid Authentication. Please reconnect your account." — reconnected Facebook account in both zaps.
- Weekly billing sent for week 07/06 - 07/10: 2:45 hrs, $151.25
- Tasks billed: Report: Build Meta attribution Google Sheet dashboard + Apps Script webhook handler (0:47:10), Report: GHL smart lists - lead source dashboard filters (0:06:00), Capture: GHL form submissions workflow (0:13:10), Capture: CAPI GHL Workflow (0:26:56), Report: Pre-build GHL webhook workflows for attribution dashboard (1:07:44)

**What's next:**
- Send Gmail draft to Cheyli (Apps Script + Sheet link)
- Await Cheyli: Apps Script deploy → webhook URL

**Blockers:**
- None new

---

## 2026-07-11

**What was done:**
- Added 4 custom Sheet webhook actions to WF #1.3:
  - Form Submitted branch: `Sheet - Form Submit (Booking Auth Form)` → event_type: form_submit
  - Invoice Paid branch: `Sheet - Invoice Paid (Jared's Quote)` → event_type: invoice_paid
  - Payment Received branch: `Sheet - Form Submit ($135)` + `Sheet - Invoice Paid ($135)` (two sequential webhooks — creates row then records revenue)
- Built WF - Stage Quoted: trigger Pipeline Stage Changed → Quoted → event_type: stage_quoted
- Built WF - Stage Booked: trigger Pipeline Stage Changed → Booked → event_type: stage_booked + arrival_window field
- All webhooks use placeholder URL (https://placeholder.example.com/webhook) — swap when Cheyli sends Apps Script URL
- All workflows in Draft

**What's next:**
- Send email draft to Cheyli (in Gmail drafts) — Apps Script deploy + Sheet link
- Await Cheyli: deploy Apps Script → send webhook URL → swap placeholders
- Lead CAPI event (form submitted + lead_source=meta_paid → CAPI Lead)
- Zapier GHL → ZenMaid (needs Cheyli on call)
- Square integration in GHL
- End-to-end test
- Handoff to Cheyli

**Blockers:**
- Cheyli must deploy Apps Script and send webhook URL
- Zapier + Square need Cheyli

---

## 2026-07-08

**What was done:**
- CAPI access token obtained (unblocked)
- Domain now in allowlist in Meta Events Manager (unblocked)
- Built WF #1.3 - Payment Received (CAPI) — 3 branches:
  1. Payment Received ($135 booking form) → CAPI Purchase, value: `{{payment.total_amount}}`
  2. Form Submitted ($0 Booking Authorization form) → CAPI Schedule, value: `{{payment.total_amount}}`
  3. Invoice Paid (Jared's Quote) → CAPI Purchase, value: `{{invoice.total_price}}`
- Workflow NOT yet published (pending test)

**What's next:**
- Publish WF #1.3 (CAPI) after review
- Add Lead CAPI event — trigger: form submitted (either $135 or $0 auth form) + lead_source=meta_paid → CAPI Lead. Separate workflow.
- Send email draft to Cheyli: share Google Sheet + Apps Script doc (draft ready, CJ to send)
- Deploy Apps Script web app (solo, no dependencies — Extensions > Apps Script > paste bwc_attribution_appscript.js > Web App > Anyone)
- Build 4 GHL webhook workflows → Google Sheet (card jwn5webhooks)
- Wire Zapier: GHL form → ZenMaid (needs Cheyli call)
- Integrate Square in GHL
- Validate: end-to-end test → CAPI fires in Meta Events Manager + Sheet populates
- Handoff: walk Cheyli through dashboard
- Confirm with Jared: platform-level ROAS enough or campaign-level needed (phase 2)?

**Blockers:**
- Square not yet integrated in GHL
- Zapier GHL → ZenMaid needs Cheyli on call

**Project A status:** COMPLETE (10-day lead recovery live, DNS fix done)

---

## 2026-07-07 (continued)

**What was done:**
- Attribution architecture simplified: no ManyChat Instagram Ads trigger needed. meta_paid attribution happens at GHL form submission via URL param (`?lead_source=meta_paid`) — Jared sends the right link after quoting. CAPI fires event on submit.
- Built GHL workflow: form submitted → if/else on lead_source custom field → add tag (meta_paid / meta_organic / google_organic). Card jwc8formwf01 done.
- Built GHL smart lists: contacts filtered by tag per source (meta_paid, meta_organic, google_organic).
- GHL Ad Manager investigated — NOT the solution. Only tracks campaigns created inside GHL, not existing Meta campaigns.
- Built Google Sheet attribution dashboard (ID: 1VkQhs1O8zftFK_XXaeVcgWzTQYJQFY_sVQCwaYA7FBQ). 4 tabs: Leads, Spend, Dashboard, Sample Data. All CPL/ROAS formulas wired. Cheyli fills monthly spend, GHL webhooks auto-fill lead/revenue data.
- Wrote Apps Script webhook handler (bwc_attribution_appscript.js in scratchpad). Pending deployment.
- Identified 4 GHL webhook workflows needed to complete the pipeline (card jwn5webhooks).
- Solution for ad spend: Cheyli manually enters monthly Meta spend in Spend tab. No paid tools needed.
- GHL form has payment fields but Square NOT yet wired in GHL — separate step
- Deleted obsolete Kanban cards: jwc7igadspu1 (Publish Instagram Ads automation), jwc6zapiergh (Zapier ManyChat→GHL)
- jwc4refstore moved to done: meta_organic LIVE, meta_paid handled via form URL param
- jwc5emailphn moved to done: GHL form captures email + phone at submission
- jwf3domainvr blocked: "You don't have permission to edit this pixel" in Meta Events Manager
- Email sent to Cheyli/Jared: (1) CAPI access token — need developer role or they generate token, (2) domain verification — need pixel edit access or they verify themselves

**What's next:**
- Deploy Apps Script web app (one-time, CJ does solo)
- Build 4 GHL webhook workflows → Google Sheet (card jwn5webhooks)
- Await Cheyli reply on CAPI access token + domain verification
- Wire Zapier: GHL form → ZenMaid (needs Cheyli call)
- Integrate Square in GHL
- CAPI workflows after above

**Blockers:**
- CAPI access token: waiting on Cheyli
- Domain verification: waiting on Cheyli (no pixel edit permission)
- Square not yet integrated in GHL
- Jared replied 2026-07-07: "traveling at the moment, give me a few days" — all Jared-dependent items delayed a few days

---

## 2026-07-07

**What was done:**
- Confirmed ZenMaid has NO "invoice paid" Zapier trigger — ZenMaid revenue sync card obsolete
- Architecture updated: payment via GHL Square invoice link (separate from booking form). Revenue data lives in GHL — no ZenMaid sync needed.
- CAPI Purchase event now triggers from GHL payment received (not ZenMaid)
- New task identified: train Jared on GHL invoice links (required before revenue attribution works)
- Kanban updated: jwr1zemrevnu obsolete, jwo3capipurc updated, dashboards updated, new card jwn4ghlinv01 added
- Files updated across all 4 docs

**What's next:**
- Awaiting Cheyli/Jared reply on: CAPI token, domain verification, Zapier call
- Train Jared on GHL invoices

**Blockers:**
- All remaining steps need Cheyli/Jared availability or reply

---

## 2026-07-06

**What was done:**
- GHL booking form with Square payment integration BUILT ✓
- Confirmed next steps for Meta Attribution: Zapier (GHL form → ZenMaid) is now the Connect stage blocker

**What's next:**
1. Wire Zapier: GHL form submission → ZenMaid Create Booking
2. Publish Instagram Ads automation (add Send Message first step)
3. Test end-to-end booking flow
4. Fill GHL CAPI credentials (Access Token + Dataset ID: 221505847391424)
5. Revenue dashboard (Report stage)

**Blockers:**
- Zapier must be wired before form is useful to Jared's team
- Awaiting Cheyli/Jared reply on Tuesday test call (sent 2026-07-03)

---

## 2026-07-03 (Session 4 — continued)

**What was done:**
- Resolved false blocker: "automatic questions" in paid flow come from Meta Ads Manager chat builder, not a ManyChat automation. No wiring needed.
- Confirmed GHL Form First approach (from Jun 30 call transcript): Jared agreed to switch brickellwindowcleaners.com/authorization from ZenMaid form to GHL form. ZenMaid stays for team dispatch only.
- GHL handles Square payment natively (PCI compliant) — confirmed. ZenMaid receives booking via Zapier after form submit. Team workflow unchanged.
- Reviewed Jared's full quoting video transcript: pricing formula locked ($1.10/sqft under 400, $0.88/sqft over 400, +~$100 loft), ZenMaid form fields catalogued, cleaner dispatch requirements noted.
- Discovered two ZenMaid forms in use: #5GXPM (has upsells, price pre-filled) and #FJQ6M (has terms initials, name on card, $0 estimate). Need to know when each is used before building GHL version.
- Architecture confirmed: one GHL form, two links — `[form URL]?lead_source=meta_paid` and `[form URL]?lead_source=meta_organic`. Jared picks which to send.
- Drafted + created follow-up email to Jared + Cheyli: Square/ZenMaid context, question about two forms, Tuesday test call proposal. Draft ID: r3015620544165184986.
- Corrected Cheyli name spelling throughout all 4 client files (was "Cheily").
- All 4 client files updated with quoting workflow, pricing formula, ZenMaid form fields, architecture decisions.

**What's next:**
- Await Cheyli/Jared reply on: (1) which form is used when, (2) Tuesday test call confirmation
- Once confirmed: build GHL booking form (Connect stage) with all ZenMaid fields + hidden lead_source
- Wire Zapier: GHL form → ZenMaid Create Booking
- Add Send Message to Instagram Ads automation → publish (Capture stage)

**Blockers:**
- Waiting on Cheyli/Jared reply re: two ZenMaid forms before building
- Tuesday test call not yet confirmed

---

## 2026-07-02 (Session 3 — Billing)

**What was done:**
- Card 3142 invoice sent + paid. Week 06/22-06/26 ($178.75) — cleared.

**What's next:**
- Continue Meta Attribution brainstorm

**Blockers:**
- None

---

## 2026-07-02 (Session 2)

**What was done:**
- Researched ManyChat trigger types — confirmed Instagram Ads Trigger (not referral link) is correct for CTM ads
- Confirmed Messenger v3 campaign is messaging/engagement type with "Message destinations" CTA (Messenger + Instagram + WhatsApp)
- Locked naming convention: `meta_paid` / `meta_organic` / `google_paid` / `google_organic`
- Created new ManyChat automation: "User clicks an Instagram Ad" → Set Lead Source = `meta_paid` ✓
- Deprecated ref param approach — Cheyli does NOT need to edit 272 ads
- Reverted Main Flow to original (no incomplete wiring)
- Kanban updated: jwc2refparam → done (superseded), jwc4refstore → inprogress, jwc3mctrigon solution updated

**What's next:**
- Decision needed from Jared: should paid ad contacts (tapped "Send Message" on ad) receive same Main Flow message as organic followers? Affects what we connect after Instagram Ads automation.
- Once decided: wire Instagram Ads automation Next Step → appropriate flow
- Wire Main Flow "Then" → Condition #2 → Lead Source unknown → set `meta_organic` → Send Message

**Blockers:**
- Need to identify which ManyChat automation handles paid ad automatic questions (building + address) before wiring Instagram Ads Trigger into it

**Cheyli confirmed (2026-07-02):**
- Paid journey: ManyChat sends automatic questions (building + address) → Jared manually quotes → Jared sends ZenMaid link → customer fills form + pays + enters CRM
- GHL form replaces the ZenMaid link Jared sends, with `?lead_source=meta_paid` appended → attribution captured at booking

---

## 2026-07-02

**What was done:**
- Built full Meta Attribution stage map (Mermaid flowchart) — Foundation → Capture → Connect → Optimize → Report → Validate
- Added all 20 attribution build tasks to Kanban board
- Foundation: CAPI dataset already existed (ID: 221505847391424, events firing) — marked done
- Foundation: GHL CAPI action shell found in GHL workflow — credentials empty (Access Token + Dataset ID not filled) — Optimize stage work
- Capture: Audited Meta Ads — 3 active campaigns: Messenger v3 (CTM, feeds ManyChat), LeadForm (separate funnel), Ad Recall (awareness)
- Capture: ManyChat referral link trigger turned ON → wired to Actions #1 → Set Lead Source = meta_paid
- Confirmed architecture: ManyChat stores Lead Source (meta_paid or organic) → booking link sent by ManyChat with dynamic `?lead_source={{lead_source}}` → GHL form captures it → Zapier → ZenMaid booking
- Cheyli asked to add Ref parameter `meta_paid` to active Messenger ads (draft email sent + direct ask)
- Clockify naming convention established: Stage: Task (e.g. "Foundation: Visual flowchart", "Capture: Audit ads")
- Attribution source map confirmed:
  - Meta paid: ref param in ad → ManyChat → dynamic booking link
  - Meta organic: no ref → lead_source=organic in booking link
  - Google Ads: UTM template in Google Ads → GHL form captures automatically
  - Google organic: deferred to phase 2 (no reliable auto-tagging without JS)

**What's next:**
- Capture C4: Add organic fallback in ManyChat — if no ref param → set Lead Source = organic_instagram
- Capture C5/C6: Build ManyChat automation — when Jared tags contact "quoted" → ManyChat sends dynamic booking link with {{lead_source}}
- Connect: Build GHL booking form (email, phone, address, service type + hidden lead_source field)
- Connect: Zapier — GHL form submission → ZenMaid Create Booking
- Send Cheyli email re: Ref parameter on active Messenger ads

**Blockers:**
- Cheyli must add Ref parameter to active Messenger ads before paid/organic differentiation works
- ManyChat → booking link automation not yet built

---

## 2026-07-01

**What was done:**
- Reviewed full Zoom transcript (Jun 30 call — Jared + Cheyli)
- Meta BM access granted by Cheyli on call ✅
- Zapier access granted by Cheyli on call ✅
- Key findings confirmed:
  - Messaging campaigns (not lead form) — switched ~6 weeks ago; most leads come through Messenger
  - No Meta pixel in use — everything lives inside Meta/Facebook
  - ZenMaid "how did you hear about us" field gets bypassed with `-` even though marked required — self-reported attribution is dead
  - ZenMaid Zapier has `Create Booking` action → GHL Form First approach is technically viable
  - Previous Nica sync showed lifetime revenue per client, not monthly — must build date-ranged revenue reporting
- Brainstormed attribution architecture:
  - GHL Form First (swap ZenMaid booking form to GHL form → Zapier creates ZenMaid booking) = cleanest solution
  - UTM auto-capture on GHL forms = native, no JavaScript needed
  - Each source gets UTM-tagged links: Google Ads URL template, ManyChat booking link with campaign variable, organic FB bio/post links
  - Trigger links as attribution layer also confirmed viable for leads already in GHL
- Brainstorm paused, continuing 2026-07-02
- Jared to share customer journey video/doc (lead → ZenMaid booking flow)

**What's next:**
- Continue Meta Attribution brainstorm 2026-07-02
- Confirm: does ManyChat current flow send a booking link, and can we edit it to append UTMs?
- Get Jared's customer journey video/doc
- Decide: GHL Form First vs hybrid trigger link approach
- Charge card 3142 for week 06/22-06/26 ($178.75)
- DNS records for `info.brickellwindowcleaners.com` — confirm Jared forwarded to DNS team (Jul 26 deadline)
- Accept ManyChat + Rosie invites; set Grasshopper password

**Blockers:**
- Meta Attribution build blocked until architecture decision confirmed with Jared
- Payment pending — card 3142 confirmed, charge not yet processed
- DNS records — Jared must forward to his DNS provider (Jul 26 deadline)
- Day 3 MMS — blocked until Jared sends before/after image

---

## 2026-06-30

**What was done:**
- Weekly billing sent for week 06/22 - 06/26: 3:15 hrs, $178.75
- Card on file ending in 3142 declined — email sent to Jared asking if card ending in 7913 can be charged
- Jared replied: confirmed charge card 3142 going forward (and flagged SMS timing issue)
- Jonathan tasked CJ: charge 3142 + investigate SMS timing
- Bug #2 (SMS timing): turned off 15-day stale opportunity trigger — was firing SMS too close to 10-day recovery chain

**What's next:**
- Charge card 3142 for week 06/22-06/26 ($178.75)
- Jun 30 Zoom 12PM: LONG-TERM NURTURE (empty skeleton) + bwc_scheduledfollowup dead-end + Day 3 MMS image
- Confirm Jared forwarded DNS records (Bug #2 — Jul 26 deadline)
- Accept ManyChat + Rosie invites; set Grasshopper password
- Await Meta BM access from Cheyli

**Blockers:**
- Payment pending — card 3142 confirmed, charge not yet processed
- DNS records — Jared must forward to his DNS provider (Jul 26 deadline)
- Day 3 MMS — blocked until Jared sends before/after image

---

## 2026-06-29

**What was done:**
- Sent DNS records to Jared for `info.brickellwindowcleaners.com` domain verification (Bug #2). Jonathan had flagged the Jul 26 auto-delete deadline; Jared replied asking for the actual records; CJ sent them in-thread.
- Jared needs to forward records to his DNS provider/IT team to complete verification.

**What's next:**
- Jun 30 Zoom: review + publish 10-DAY LEAD RECOVERY #1/#2/#3 + FINAL CALL TASK (Bug #1)
- Confirm Jared forwarded DNS records (Bug #2 — Jul 26 deadline)
- Accept ManyChat + Rosie invites; set Grasshopper password
- Await Meta BM access from Cheyli

**Blockers:**
- Bug #2 blocked until Jared's DNS team applies the records
- Bug #1 fix pending Jun 30 Zoom

---

## 2026-06-27

**What was done:**
- Audited all 4 recovery workflow interiors via JSON export (#1, #2, #3, FINAL CALL TASK)
- Confirmed full chain: WF #1 → #1 (Days 1–3) → #2 (Days 4–6) → #3 (Days 7–10 + Hail Mary) → FINAL CALL TASK
- All workflow IDs verified: #2=eef98080, #3=ccb13368, FINAL CALL TASK=003892e4, Objection micro-flow=60b374a2
- Fixed Objection micro-flow None branch double-SMS bug → published
- Fixed Day 3 time window bug in #1 (was zero-width 14:00–14:00, corrected to 12:00–14:00)
- Published all 4 recovery workflows + Objection micro-flow
- Wired WF #1 handoff: enabled Timeout (1 day) on placeholder Wait → timeout path → Add to Workflow → #1
- 10-day lead recovery system is now fully live end-to-end
- Identified: LONG-TERM NURTURE (d15267c6) is empty skeleton, orphaned from recovery chain
- Identified: bwc_scheduledfollowup tag is a dead-end — no workflow triggers on it

- Fixed WF #2.1: added Add Tag (`10day_recovery_active`) after SMS in both branches (personalized + generic)
- Fixed WF #2.2: added `15day_recovery_active` + `bwc_hailmary_sent` to gate; added Add Tag (`15day_recovery_active`) after SMS in both branches
- Added `bwc_hailmary_sent` to WF #2.1 gate — permanently blocks post-recovery contacts from re-entering stale workflows
- Sent plain-language update email to Jared + Cheyli: duplicate SMS fixed, 10-day recovery live, before/after photo requested

**What's next:**
- Jared to send before/after image for Day 3 MMS
- Jun 30 Zoom: bwc_scheduledfollowup dead-end, LONG-TERM NURTURE empty
- Accept ManyChat + Rosie invites; set Grasshopper password
- Await Meta BM access from Cheyli (Project B)

**Blockers:**
- Day 3 MMS blocked until Jared sends before/after image
- Meta BM access pending Cheyli

---

## 2026-06-26

**What was done:**
- Audited all GHL workflows via screenshots — built comprehensive WORKFLOWS.md catalog (10 workflows documented)
- Diagnosed Bug #1 (SMS duplicates — Jared's reported issue): stale opportunity trigger re-fires every N days indefinitely; suppression tag gate exists in WF #2.1 and WF #2.2 but neither workflow ever writes the tag → contacts receive the same SMS repeatedly. Confirmed via Eddie eMIX Hernández enrollment history (WF #2.1: Jun 1, 11, 21; WF #2.2: Jun 6, 21)
- Identified design flaw in WF #2.2: gate checks `10day_recovery_active` (copy-paste from WF #2.1) — separate `15day_recovery_active` tag needed so Day 15 can fire independently of Day 10
- Diagnosed Bug #2 (emails failing): sending domain `info.brickellwindowcleaners.com` unverified in GHL since Apr 17; SSL Unknown; all emails bouncing with DMARC authentication failures; auto-delete deadline Jul 26, 2026
- Identified proactive finds: Day 5 SMS fires twice in WF #3 (double-send or build error), WF #6 is in Draft (not live), WF #4.1 Booked-Closed Won exists but not yet documented
- Discovered 10-DAY LEAD RECOVERY #1, #2, #3 + FINAL CALL TASK — all Draft, 0 enrolled. Nica's incomplete fix for Bug #1. #1 already writes `10day_recovery_active` tag correctly — just never finished/published.
- Sent email to Jared + Cheyli: Bug #1 root cause + draft workflow discovery explained; Bug #2 DMARC issue flagged, requested DNS team intro (Jul 26 deadline)
- Merged Jared + JaredWhite client folders → single canonical JaredWhite folder

**What's next:**
- Review 10-DAY LEAD RECOVERY #1/#2/#3 + FINAL CALL TASK — understand what's missing, complete and publish
- Await Jared DNS team intro (Bug #2)
- Jun 30 Zoom
- Accept ManyChat + Rosie invites; set Grasshopper password
- Await Meta BM access from Cheyli

**Blockers:**
- Bug #1 fix blocked until draft workflows fully reviewed
- Bug #2 fix blocked until DNS team intro from Jared
- Meta Business Manager access — pending Cheyli

---

## 2026-06-24

**What was done:**
- Reviewed all 8 shared Google Docs from Jared (MASTER BOOK, Operating Bible, Hey Nica x2, Runbook 4, Nurture Campaign, Lead Recovery, Quoted Stage SMS)
- Confirmed Meta attribution/CAPI project is a FRESH BUILD — nothing exists in GHL for this
- Received formal project brief from Jared: Meta campaign attribution → booked jobs → revenue → ROAS
- Drafted and sent reply to Jared requesting: GHL access, ManyChat access, Meta BM access; asked if this is first priority and what Nica left behind
- Jared replied: working on access, wants CJ to review system first then discuss on a call
- Access granted: ZenMaid (credentials via email), ManyChat (invite link), Grasshopper (email invite), Rosie AI (email invite)
- Meta BM access: Jared asked Cheyli to grant — PENDING
- Began GHL workflow audit via screenshots

**What's next:**
- Accept ManyChat, Rosie invites
- Set Grasshopper password
- Complete GHL workflow audit (screenshots in progress)
- Review ManyChat → GHL integration for UTM/fbclid passthrough
- Await Meta BM access from Cheyli
- Schedule intro call with Jared

**Blockers:**
- Meta Business Manager access — pending Cheyli

---

## 2026-06-23

**What was done:**
- Reviewed transition email thread (thread ID: 19eed79411925947)
- Jonathan introduced CJ as new dedicated consultant (replacing Nica)
- CJ replied with 3-step transition plan; Jared added Cheyli (hello@cheily-ochoa.com) to thread
- Created client folder and began onboarding

**What's next:**
- Wait for Jared's list of broken GHL flows
- Review all shared Google Docs (MASTER BOOK, OPERATING BIBLE, RUNBOOK, Nurture Campaign, Lead Recovery, Quoted Stage SMS)
- Book end-of-week intro call once docs reviewed
- Action flow fixes after intro call

**Blockers:**
- No broken flows list yet — waiting on Jared's reply
- No prior email threads forwarded yet from Jared/Cheyli
