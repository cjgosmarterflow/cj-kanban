# Jared White — Project Documentation

## Client
- **Name:** Jared White, General Manager
- **Company:** Brickell Window Cleaners
- **Email:** jared@brickellwindowcleaners.com | T: 305-984-3048 ext 702 | M: 631-764-4814
- **Address:** 1000 Brickell Ave Ste 715, Miami, FL 33131
- **Key contact:** Cheyli (hello@cheily-ochoa.com) — Jared's internal collaborator

## Stack
- **CRM:** GoHighLevel
- **Booking/Invoicing:** ZenMaid (syncs to GHL via Zapier)
- **Payments:** Square
- **Lead source:** Meta Ads (Messenger / Instagram DM)
- **Lead capture:** ManyChat → GHL
- **Phones/SMS:** Grasshopper
- **AI Phone Answering:** Rosie (heyrosie.com)
- **Ad platforms:** Meta, Google, TikTok

## Access Status
| Platform | Status | Notes |
|----------|--------|-------|
| GoHighLevel | ✅ Active | Workflow audit complete |
| ZenMaid | ✅ Active | Credentials via email |
| ManyChat | ✅ Invite sent | Accept invite |
| Grasshopper | ✅ Added | Set password |
| Rosie | ✅ Invite sent | Accept invite |
| Meta Business Manager | ✅ Active | Cheyli granted on 2026-06-30 Zoom |
| Zapier | ✅ Active | Cheyli granted on 2026-06-30 Zoom |

## Active Projects

### Project A — GHL Workflow Audit & Fixes — ACTIVE (reopened 2026-07-15)
- 10-day lead recovery live (all 4 workflows published, duplicate SMS fixed)
- Bug #2 DNS fix complete — info.brickellwindowcleaners.com verified
- **SMS nurture expansion (approved 2026-07-15, built 2026-07-16):**
  - Random Split added at every SMS touchpoint in #1, #2, #3
  - Go To actions added after each path to reconnect flow
  - All 20 new variations mapped by tone to appropriate days (see CLAUDE.md for full assignments)
  - Dependent/Timing support SMS untouched
  - PENDING: send Jared workflow map + combined message list before activating

### Project C — 7-Step Booking Form Redesign — BUILT 2026-07-17
- All fields added to $0 booking auth form (BUYKXRGbLKuGhYVLarvJ)
- GHL custom fields created: How Did You Hear About Us, Loft Windows, Interior Cleaning, Membership Frequency (radio), GlassKeepers auth checkbox, Rinse & Repeat auth checkbox, Initials
- T&C 1: SMS + marketing consent combined
- T&C 2: Combined auth checkbox (payment auth + cancellation policy + authorized cardholder)
- Membership Frequency radio with conditional GlassKeepers / Rinse & Repeat recurring auth checkboxes
- Initials + Signature at end of form
- PENDING: Unit # field (from spec Step 1) not yet added
- PENDING: Authorization note at top of form — confirm if added
- PENDING: End-to-end test (Step 8)
- PENDING: Progress bar on HTML wrapper pages

### Project B — Meta Attribution & CAPI (FRESH BUILD)
- **Brief received:** 2026-06-24
- Goal: campaign → leads → booked jobs → revenue → ROAS visibility
- Funnel: Meta Ads → Messenger/IG DM → ManyChat → GHL → Quote → Booked → Completed → Revenue
- Deliverables: audit report + recommendations + implementation plan
- Nothing exists in GHL for this yet — confirmed fresh build
- Audit/proposal doc sent to Jared + Cheyli on 2026-07-01

**Key findings from 2026-06-30 Zoom:**
- Messaging campaigns (not lead form) — switched ~6 weeks ago; cheaper CPL via Messenger
- Organic Messenger also sends leads — must differentiate paid vs. organic
- No Meta pixel in use — everything lives inside Meta/Facebook
- ZenMaid "how did you hear about us" gets bypassed with `-` — self-reported attribution unusable
- Previous Nica ZenMaid → GHL sync showed lifetime revenue per client (not monthly) — must build date-ranged revenue reporting. Cheyli flagged this on Jun 30 call as a known Nica bug.
- Zapier ZenMaid has `Create Booking` action — GHL Form First is technically viable

**Confirmed architecture (2026-07-02):**
- **Paid journey:** Meta chat builder handles conversation (building + address) inside the ad. Contact lands in ManyChat. Jared manually quotes → sends GHL form URL with `?lead_source=meta_paid` → customer fills → Zapier creates ZenMaid booking.
- **meta_paid attribution = GHL form URL param.** No ManyChat Instagram Ads trigger needed. Attribution happens at form submission. CAPI fires event on submit.
- **"Automatic questions" = Meta Ads Manager chat builder.** No ManyChat questions automation exists or is needed.
- **Organic journey:** New follower DMs → Main Flow → Lead Source = meta_organic (fallback condition) → same GHL form flow. LIVE.
- **ManyChat Lead Source naming convention (locked):** `meta_paid` / `meta_organic` / `google_paid` / `google_organic`
- **GHL form captures:** email, phone, address, service type + hidden `lead_source` field (auto-populated from URL param). BUILT with payment fields ✓ (2026-07-06). Square payment processing NOT yet wired — separate step.
- **Connect stage blocker:** Zapier — GHL form submission → ZenMaid Create Booking. NOT YET BUILT.
- **GHL workflow BUILT (2026-07-07):** Form submitted → if/else on `lead_source` custom field → add tag (meta_paid / meta_organic / google_organic).
- **GHL smart lists BUILT (2026-07-07):** Contacts filtered by lead source tag. Dashboard completion blocked on CAPI + Zapier.

## Project B Completion Criteria (locked 2026-07-06)
Project is NOT done until ALL 6 are live, verified, and answerable with real data:

1. **Cost per lead** — `meta_paid` contacts counted in GHL by date range. ManyChat Instagram Ads automation published. Needs Cheyli to monitor (we don't touch ads).
2. **Cost per qualified lead** — `meta_paid` contacts who reached Quoted stage in GHL pipeline. Requires consistent pipeline stage updates by Jared.
3. **Cost per booked job** — `meta_paid` contacts with confirmed ZenMaid booking. Requires Zapier wiring (GHL form → ZenMaid). Must do on a call with Cheyli.
4. **Revenue attribution** — actual paid amounts from ZenMaid synced to GHL contact opportunity by date. **OPEN QUESTION:** Does Jared/Cheyli update the estimate in ZenMaid after job completion? Is there a separate "paid amount" field in ZenMaid, or just the booking estimate? Does ZenMaid have an "appointment completed" Zapier trigger?
5. **Campaign-level ROAS** — currently platform-level only (meta_paid vs meta_organic). **OPEN QUESTION:** Does Jared want campaign/ad-set level breakdown? If yes = phase 2 scope, not in current build.
6. **Meta conversion optimization** — CAPI events (Lead, Schedule, Purchase) firing to Meta. Access Token needed from Meta BM — we handle this ourselves. Dataset ID: `221505847391424`.

**Pending questions for Cheyli/Jared before build can complete:**
- ZenMaid revenue: estimate vs actual paid amount? "Appointment completed" trigger available?
- Dashboard granularity: platform-level (meta_paid/organic) or campaign-level?
- Tuesday test call confirmed?

**NOTE: GHL Ad Manager only tracks campaigns CREATED inside GHL. Does not import Jared's existing Meta campaigns. Ad spend solution = Google Sheet (Cheyli fills monthly spend manually).**

**CAPI status (2026-07-08):**
- Access token: obtained ✓
- Domain allowlisted in Meta Events Manager ✓
- WF #1.3 - Payment Received (CAPI) BUILT, not yet published:
  - Payment Received ($135 form) → Purchase, `{{payment.total_amount}}`
  - Form Submitted ($0 Booking Auth form) → Schedule, `{{payment.total_amount}}`
  - Invoice Paid (Jared's Quote) → Purchase, `{{invoice.total_price}}`
- Lead event: not yet built (nice to have)

**Stages (estimated 10–17 hrs):**
1. Foundation — Meta BM, pixel, domain verification
2. Capture — campaign data on every lead into GHL
3. Connect — ZenMaid bookings + revenue synced back to GHL contact by email/phone
4. Optimize — Lead, Booked Job, Purchase events → Meta CAPI
5. Report — dashboard: revenue, booked jobs, cost per booked job, ROAS by campaign
6. Validate — end-to-end test + handoff

## Jared's Current Manual Quoting Workflow (from video transcript)

**Lead entry points:** Meta ads (Messenger/IG), Rosie AI phone (sends CJ a summary), Grasshopper SMS, organic DMs

**Step-by-step:**
1. Lead messages → ask full name + service address including unit number
2. Copy address → Google "[address] condo black book" OR building's own website → find floor plan
3. Locate balcony sq ft from floor plan
4. Calculate price (see formula below)
5. Confirm floor plan with customer ("is this your floor plan?")
6. Send quote + service includes message (copy-paste template)
7. Send availability ("we have Friday 12-3 arrival window, how does that sound?")
8. No response within 10 min → "still with me?" nudge
9. Once agreed → send ZenMaid booking authorization form link

**Pricing formula:**
- Balcony ≤400 sq ft: $1.10/sq ft
- Balcony >400 sq ft: $0.88/sq ft
- Loft windows (double set): add ~$100
- First-time customer: sometimes 10% off (discretionary)
- Rule is NOT concrete — Jared has leeway per job

**Quote message template (copy-paste):**
"[price] and service includes interior exterior balcony glass railing windows, all exterior windows, and a sliding glass door accessible from floor balcony, metal railings, door tracks, white balcony floor. Left needs satisfaction is guaranteed."

**Upsell:** "Receive 40% off shower scum treatment when you include it today"

**ZenMaid booking form fields (what GHL form replaces):**
- Full name
- Address
- Phone number
- Email
- How did you hear about us → REPLACED by hidden `lead_source` field
- Date and time selection
- Service frequency (one-time, monthly)
- Name on card (payment authorization)

**Why ZenMaid still receives booking (Jared, Jun 30 call):** Team does NOT have GHL access — they work entirely in ZenMaid. ZenMaid = dispatch only. ZenMaid must always receive the booking, but the customer-facing form can be GHL.
**Payment:** GHL Square invoice link. Jared creates invoice in GHL → sends link to customer → Square processes → GHL records revenue on contact. NOT via the booking form. ZenMaid has no "invoice paid" Zapier trigger — confirmed 2026-07-07.
**Revenue flow:** Jared sends GHL invoice link after quoting → customer pays via Square → GHL records amount on contact with lead_source → CAPI Purchase fires.
**Current ZenMaid form URL:** brickellwindowcleaners.com/authorization → this gets replaced by GHL form URL.
**Jared confirmed on Jun 30 call:** "If we just switch it to a GHL form and everything else is the same and ZenMaid knows that we have a booking, I don't think it's too much of a big deal."

**Two ZenMaid forms in use (discovered 2026-07-03):**
- Form #5GXPM: upsells (shower door $35, bathroom mirror $11), price pre-filled, "how did you hear" not required
- Form #FJQ6M: no upsells, $0.00 estimate, "Name on Card" + terms initials required, "how did you hear" REQUIRED
- When each is used = UNKNOWN — asked Cheyli/Jared via email 2026-07-03. GHL form build blocked until answered.

**GHL form plan (2026-07-03):** One form, two links. `[form URL]?lead_source=meta_paid` for paid, `[form URL]?lead_source=meta_organic` for organic. Jared picks which link to send after quoting. Tuesday test call proposed with Cheyli to test end-to-end.

**Pain points Jared flagged (automation backlog):**
- Manual floor plan lookup per lead (Condo Black Book / building websites)
- Manual quote calculation
- Manual copy-paste follow-ups ("still with me?", availability messages)
- 4 years of Grasshopper SMS conversations not in GHL — wants to import + remarket all contacts
- Manual promotional campaigns (e.g. Valentine's Day promo done contact-by-contact)
- Meta lead form sometimes misses unit number → must ask again

**Phase 2 AI opportunity:** Auto floor plan lookup (address → Condo Black Book scrape → balcony sq ft → auto-calculate quote). Jared's #1 manual bottleneck.

## Documents from Jared
| Doc | Purpose |
|-----|---------|
| BRICKELL OS™ MASTER BOOK.docx | System constitution — read first |
| BRICKELL WINDOW CLEANERS METRO DOMINATION OPERATING BIBLE (V1) | Operations playbook |
| Hey Nica (x2) | Phase 1 GHL build brief — core SMS flow, pipeline, tags |
| 10-DAY LEAD RECOVERY / GHOST RECOVERY | Complex GHL workflow spec |
| Nurture Campaign System | Evergreen SMS/email/MMS drip |
| Quoted Stage SMS (Days 3–5) | Post-quote follow-up sequence |
| RUNBOOK 4 TRACKING & CONVERSION ENGINEER | Meta/Google/TikTok CAPI spec |

## Last Billing

| Period | Hours | Amount | Notes |
|---|---|---|---|
| 07/13-07/17 | 5:45 | $316.25 | Invoice link — no card on file (card 3142 declined, 7913 pending). Generate in GHL before sending. jared@brickellwindowcleaners.com. |

## Open Questions (from Nica's working doc)
1. Layout Sent + Quoted — merge into one stage?
2. "Paid" stage — replace with Closed Won / Closed Lost?
3. STATE_MEMBER — add current members as dropdown?
