# Jared White — Claude Instructions

## Client
Jared White, Brickell Window Cleaners. GHL-heavy client, transitioning from consultant Nica.
Always CC: hello@cheily-ochoa.com and jonathan@gosmarterflow.com on client emails. (Cheyli = Cheylibeth Ochoa — note email domain spells it "cheily" but her name is Cheyli)

## Projects
1. **GHL Workflow Audit + SMS Nurture Expansion** — IN PROGRESS (reopened 2026-07-15)
2. **Meta Attribution / CAPI** — IN PROGRESS

## SMS Nurture Expansion — Split Assignments (2026-07-15, build 2026-07-16)
Build: Random Split at each SMS touchpoint in 10-Day Lead Recovery #1/#2/#3. Equal % per path. Existing message kept as one path. All paths reconnected via Go To action (no orphaned ENDs).

### #1 — Days 1–3

**Day 1 (5 paths, 20%):**
1. Hey {{contact.first_name}} — circling back, let me know when you get a chance ✨ (original)
2. Hey {{contact.first_name}} — no pressure but I just wanted to follow up
3. Hey {{contact.first_name}} — want me to get a new cleaning date set up for you?
4. Did you still need service?
5. Hey 🙂

**Day 2 Lunch (4 paths, 25%):**
1. Hey {{contact.first_name}} — just checking back in here (original)
2. Hey {{contact.first_name}} — just tapping back in. Are the windows still dirty?
3. Hey — I know you're probably really busy this week. Which day can we come clean the windows so it's one less thing to worry about?
4. Sure looks like a great day to book a window cleaning, don't ya think?

**Day 2 Early Evening (4 paths, 25%):**
1. Hey {{contact.first_name}}! Still want those windows cleaned? I can lock that in for you (original)
2. Hey {{contact.first_name}} — want me to get a new cleaning date set up for you?
3. Hey — tomorrow is available, how are your windows looking?
4. Would you like me to check availability?

**7-day check-in (5 paths, 20%):**
1. Hey just checking back in — were you able to get everything sorted? (original)
2. Hey {{contact.first_name}} — just tapping back in. Are the windows still dirty?
3. Hey {{contact.first_name}} — are the windows bothering you yet?
4. Hey {{contact.first_name}} — did you ever end up getting the windows taken care of?
5. Hey — would sometime soon work better, or should I circle back another time?

### #2 — Days 4–6

**Day 4 (4 paths, 25%):**
1. Hey {{contact.first_name}}, we're gonna be over there this week, we can pass by if you like? (original)
2. Hey — tomorrow is available, how are your windows looking?
3. Hey {{contact.first_name}} — we have availability every day this week if you need us. What day works?
4. Would you like me to check availability?

**Day 5 (4 paths, 25%):**
1. I still have a couple openings — is there any day that works for you? (original)
2. Did you still need service?
3. Hey {{contact.first_name}} — did you ever end up getting the windows taken care of?
4. Hey — would sometime soon work better, or should I circle back another time?

**Day 6 (4 paths, 25%):**
1. Hey I had a cancellation come up if you want us to pass by (original)
2. Hey {{contact.first_name}} — no pressure but I just wanted to follow up
3. Hi
4. Did you still need service?

**7-day follow-up check-in (5 paths, 20%):** same pool as #1 7-day check-in

### #3 — Days 7–10

**Day 7 (4 paths, 25%):**
1. Hey — want me to keep this open or circle back later? (original)
2. Hey — would sometime soon work better, or should I circle back another time?
3. Hey {{contact.first_name}} — did you ever end up getting the windows taken care of?
4. Hey {{contact.first_name}} did you find anyone else to get your windows cleaned?

**Day 8 (4 paths, 25%):**
1. Hey {{contact.first_name}} — quick one, should I close this out for now? (original)
2. Hey {{contact.first_name}} — just so you know we are fully insured, and have all background-checked, uniformed, fully trained technicians who are safe, courteous, and professional. Want me to check the schedule for you?
3. Hey — besides all our reviews, one thing our customers really appreciate is that we don't leave a water mess or runoff onto neighboring balconies. Want to speak with us about getting yours cleaned?
4. Hey {{contact.first_name}} — let's get you on the schedule, you're gonna notice a huge difference when we are done. Reply Yes to get started

**Day 9 (3 paths, 33%):**
1. Hey just wanted to share some reviews if you're still looking for a reputable window cleaning company https://g.co/kgs/oeFXca (original)
2. Hey — just wanted to share some reviews in case you're looking for a reputable window cleaning company. https://g.co/kgs/oeFXca Want me to check availability for you?
3. Hey just as a heads up.. we don't leave until you've had the opportunity to review and approve the service. Let me know if you want to get a cleaning on the schedule

**Dependent/Timing support SMS (all workflows):** Leave as-is — contextual reply messages, not nurture.
**No-name branches:** All paths use same copy without {{contact.first_name}} variable.

## GHL Stack
- CRM: GoHighLevel
- Booking: ZenMaid (Zapier integration confirmed — Create Booking action available)
- Payments: Square (via GHL invoice links)
- Lead source: Meta Ads → Messenger/IG DM → Meta chat builder → Jared quotes → sends GHL form with ?lead_source=meta_paid
- Attribution: GHL form URL param → lead_source custom field → workflow tags contact on submit
- **GHL Ad Manager:** Built-in feature but only tracks campaigns CREATED inside GHL. Does NOT import existing Meta Ads Manager campaigns. Not useful for Jared's existing campaigns.

## Google Sheet Attribution Dashboard
- **Sheet ID:** 1VkQhs1O8zftFK_XXaeVcgWzTQYJQFY_sVQCwaYA7FBQ
- **Tabs:** Leads (auto-filled via GHL webhooks), Spend (Cheyli fills monthly Meta ad spend), Dashboard (CPL/ROAS formulas), Sample Data
- **Apps Script:** bwc_attribution_appscript.js — deploy as Web App, paste URL into 4 GHL webhook workflows
- **4 Sheet webhook workflows — BUILT (Draft, placeholder URL):**
  1. Form Submit: on WF #1.3 Form Submitted branch → `{event_type: form_submit, id, name, email, phone, lead_source}`
  2. Stage Quoted: WF - Stage Quoted → Pipeline Stage Changed → Quoted → `{event_type: stage_quoted, id, name, email, phone}`
  3. Stage Booked: WF - Stage Booked → Pipeline Stage Changed → Booked → `{event_type: stage_booked, id, name, email, phone, arrival_window}`
  4. Invoice Paid: on WF #1.3 Invoice Paid branch → `{event_type: invoice_paid, id, name, email, phone, amount}`
  - Payment Received branch fires BOTH form_submit + invoice_paid sequentially (row create + revenue record)
  - Swap placeholder URL when Cheyli sends Apps Script Web App URL

## CAPI Status (2026-07-08)
- Access token: obtained ✓
- Domain allowlisted in Meta Events Manager ✓
- WF #1.3 - Payment Received (CAPI): BUILT, not yet published
  - Payment Received ($135 form) → Purchase (`{{payment.total_amount}}`)
  - Form Submitted ($0 Booking Auth form) → Schedule (`{{payment.total_amount}}`)
  - Invoice Paid (Jared's Quote) → Purchase (`{{invoice.total_price}}`)
- Lead event: not yet built. Trigger: form submitted (either $135 form OR $0 auth form) + lead_source = meta_paid → CAPI Lead. Separate workflow, covers both forms.

## Meta Attribution Key Facts
- No pixel — everything inside Meta/Facebook
- Organic Messenger also sends leads — must differentiate paid vs. organic
- ZenMaid "how did you hear about us" unusable — people type `-` to bypass
- Revenue reporting must be date-ranged (monthly), NOT lifetime per client
- CAPI dataset ID: 221505847391424 (already exists, events firing)
- GHL CAPI action shell exists in a workflow — Access Token + Dataset ID empty (Optimize stage work)

## Confirmed Attribution Architecture (2026-07-02)
- **Naming convention (locked):** `meta_paid` / `meta_organic` / `google_paid` / `google_organic`
- **Meta paid:** Attribution happens at GHL form submission. Jared sends `[form URL]?lead_source=meta_paid` after quoting paid leads. No ManyChat Instagram Ads trigger needed — form URL param is the attribution mechanism. CAPI fires event on submit.
- **Meta organic:** New follower DMs → Main Flow → Condition (Lead Source unknown?) → Set Lead Source = meta_organic → Send Message. LIVE.
- **Google Ads:** UTM template `?utm_source=google&utm_medium=cpc` → GHL form captures
- **Google organic:** deferred to phase 2
- **Paid journey (Cheyli confirmed):** Meta chat builder collects automatic questions (building + address) inside the ad — NOT ManyChat. Contact lands in ManyChat, Instagram Ads Trigger fires, Jared manually quotes → sends GHL form link `[GHL form URL]?lead_source=meta_paid` → customer fills → Zapier → ZenMaid booking.
- **"Automatic questions" = Meta Ads Manager chat builder.** No separate ManyChat questions automation exists.
- **GHL form = capture point:** email, phone, address, service type + hidden lead_source field (auto-populated from URL param). BUILT with payment fields ✓ (Square not yet wired — payment fields in form, Square integration is a separate step)
- **Zapier:** GHL form submission → ZenMaid Create Booking. NOT YET BUILT — this is the current blocker.
- **Active ManyChat ads campaign:** Messenger v3 — Message destinations (Messenger + Instagram + WhatsApp). Instagram Ads Trigger covers Instagram DM portion only.

## Clockify Naming (hard gate)
All entries prefixed by stage: "Foundation: X" / "Capture: Y" / "Connect: Z" / "Optimize: X" / "Report: X" / "Validate: X"
Clockify project: Jared White → Tasks (ID: 699db1ea2c3d048c9a83e609)

## Pipeline Stages (spec)
New Lead → Info Collected → Layout Sent → Quoted → Booked → Paid/Closed Won → Completed → Reactivation

## Key Tags
layout_confirmed, quote_sent, STATE_BOOKED, STATE_COMPLETED, STATE_MEMBER
BWC_ prefix for all recovery/intent tags (see 10-day lead recovery doc)

## Pricing Formula (from Jared's video transcript)
- Balcony ≤400 sq ft: $1.10/sq ft
- Balcony >400 sq ft: $0.88/sq ft
- Loft windows (double set): add ~$100
- First-time discount: discretionary ~10%
- NOT a hard rule — Jared has leeway per job

## GHL Booking Form — NEW 7-Step Redesign (Project C, BUILT 2026-07-17)
**Status: Fields built. Pending test + Unit # field + auth note at top + progress bar.**
Form: BUYKXRGbLKuGhYVLarvJ ($0 booking auth form). $135 form = bODe8Xi7WPHZluY5F73B (do NOT edit).
Custom fields created (all via API):
- How Did You Hear About Us → contact.how_did_you_hear_about_us (ID: YhuVeqkxWvfmfrLt9LYL)
- Loft Windows → contact.loft_windows (ID: ka809x9d7HwHVdMDtMh2)
- Interior Cleaning → contact.interior_cleaning (ID: HA6Wyn2GOE3A4rUIIJo1)
- Membership Frequency → contact.membership_frequency (ID: cjmkRig2BRnnIpyHrmQ4)
- GlassKeepers auth checkbox → contact.i_authorize_recurring_quarterly_service_under_the_glasskeepers_club (ID: FDqAxu40HU0lFEOoN6xl)
- Rinse & Repeat auth checkbox → contact.i_authorize_recurring_monthly_service_under_the_rinse__repeat_club (ID: M5slR67hADJjq8mgNx0x)
- Initials → contact.initials (ID: c9xlaSURBjtaea7gKkyt)
GHL credentials: c:\...\clients\JaredWhite\.env (gitignored)
Replaces existing simple GHL booking form AND current ZenMaid brickellwindowcleaners.com/authorization form.
Goals: increase avg ticket, membership enrollments, reduce chargebacks, cut CS calls.

- Step 1 — Contact Info: Full Name*, Phone* + SMS consent, Email*, Service Address* (Google Autocomplete), Unit #, "How did you hear" dropdown (Google/Instagram/Facebook/TikTok/ChatGPT/Friend/Building/Existing/Printed Card/Other)
- Step 2 — Appointment Request: Date picker + Preferred Arrival Window (Morning/Midday/Afternoon/Early Evening). Note: requested preference only, confirmed by office.
- Step 3 — Property Info: Loft windows? (Y/N), Ladder-access windows? (Y/N), Special requests (text)
- Step 4 — Upsells: Interior Window Cleaning (Exterior Only vs Interior+Exterior $10/panel), Shower Door Soap Stain Treatment ($35/shower, qty), Bathroom Mirror Cleaning ($11/mirror, qty)
- Step 5 — Membership: "How often keep glass looking best?" One-Time / Quarterly / Monthly. Quarterly → recommend GlassKeepers Club. Monthly → recommend Rinse & Repeat Club. Each requires explicit recurring authorization checkbox before submit.
- Step 6 — Payment: Apple Pay + Google Pay first (if GHL+Square supports), then standard card. Payment REQUIRED before submit.
- Step 7 — Authorization: Full chargeback-protection language (same as current), 3 required checkboxes (payment auth, cancellation/lockout policy, authorized cardholder), Initials + Signature fields.
- Progress bar: Information → Appointment → Property → Complete Your Cleaning → Protect Your Investment → Payment & Agreement
- Confirmation page: thank you + next steps (text + email confirm, on-my-way text, receipt emailed)
- Customer account creation option post-submit (rebook, manage memberships, invoices, payment methods)
- UX goal: Airbnb/Uber feel — modern, fast, mobile-friendly
- Hidden: `lead_source` (URL param — meta_paid / meta_organic / google_paid)
- **Authorization language (top of form):** "By submitting this form, you authorize BRICKELL WINDOW CLEANERS LLC to file and charge your card for services rendered or any applicable cancellation/lockout/refusal or mobilization fees. Appointments canceled <48hrs notice, access unavailable, or service declined after technician arrival may result in fee = 50% of estimated price."

## Rules from Jared
- Do NOT ask for square footage
- Do NOT explain pricing logic
- All quotes are "estimated price"
- Messaging must be fast, clean, professional
- Text-first; calls only as last resort
- GHL is single source of truth — nothing bypasses CRM

## Billing
- Rate: $55/hr, weekly, 15-min rounding, 1-hr minimum
- No card on file — invoice-link based (card 3142 declined, 7913 pending)
- Last billed: 07/13-07/17, 5:45 hrs, $316.25 (invoice link — generate in GHL before sending)
- Billing contact: jared@brickellwindowcleaners.com

## Email Thread
Gmail thread ID: 19eed79411925947
