# Jared White — Handoff Notes

## Transition Context
- Previous consultant: Nica (email no longer active)
- New consultant: CJ (cj@gosmarterflow.com)
- Introduced by Jonathan on 2026-06-22
- Cheyli (hello@cheily-ochoa.com) is Jared's internal collaborator — include on all threads

## What Nica Built (confirmed or likely)
- Phase 1 GHL SMS entry flow (conditional based on data available at lead entry)
- Pipeline stages in GHL
- Some tag-based automation
- Partially built lead recovery workflow (10-day spec exists, build status unknown)
- Nurture campaign (spec exists, build status unknown)
- Quoted Stage SMS (spec exists, build status unknown)

## What Nica Did NOT Build
- Meta attribution / CAPI — confirmed fresh build as of 2026-06-24
- Phase 2 items (floor plan automation, AI SMS, AI phone) — explicitly deferred by Jared

## What's Unknown
- Card capture flow: does ZenMaid capture card at booking, or is it already on file?

## Confirmed (2026-07-02)
- **Paid journey (Cheyli):** Meta chat builder asks automatic questions (building + address) inside the ad — not ManyChat. Contact lands in ManyChat → Instagram Ads Trigger fires → Set Lead Source = meta_paid. Jared manually quotes → sends GHL form link with `?lead_source=meta_paid` → customer fills + pays.
- **"Automatic questions" = Meta Ads Manager chat builder** — no ManyChat questions automation exists or is needed.
- **GHL Form First confirmed:** GHL form replaces the ZenMaid link Jared sends. Jared sends `[GHL form URL]?lead_source=meta_paid`. Form captures hidden lead_source. Zapier creates ZenMaid booking.
- **GHL form BUILT** (2026-07-06) with payment fields. Square payment processing NOT yet wired in GHL — separate step. Zapier wiring is next.
- **Payment = GHL invoice link** (confirmed 2026-07-07). Jared creates invoice in GHL → sends to customer → Square processes → GHL records revenue. NOT via booking form. ZenMaid has no "invoice paid" Zapier trigger — revenue lives in GHL, not ZenMaid. Train Jared on GHL invoice links.
- **ManyChat Lead Source naming:** `meta_paid` / `meta_organic` / `google_paid` / `google_organic`
- **meta_paid attribution = GHL form URL param** (`?lead_source=meta_paid`). Jared sends the right link after quoting. No ManyChat Instagram Ads trigger needed. CAPI fires event on form submission.
- **CAPI unblocked (2026-07-08):** Access token obtained. Domain now in allowlist in Meta Events Manager.
- **WF #1.3 - Payment Received (CAPI) BUILT, not yet published:** 3 branches — Payment Received ($135 form) → Purchase | Form Submitted ($0 auth form) → Schedule | Invoice Paid (Jared's Quote) → Purchase. Lead event not yet built (nice to have).

## Project C — 7-Step Booking Form Redesign (2026-07-17)
- **Form:** BUYKXRGbLKuGhYVLarvJ ($0 booking auth form) — this is the ONLY form being redesigned
- **$135 form:** bODe8Xi7WPHZluY5F73B — do NOT touch, different form
- **GHL credentials:** stored in `clients/JaredWhite/.env` (gitignored) — locationId + API key
- **Custom fields created via API (all on contact model):**
  - `contact.how_did_you_hear_about_us` — dropdown (ID: YhuVeqkxWvfmfrLt9LYL)
  - `contact.loft_windows` — radio Yes/No (ID: ka809x9d7HwHVdMDtMh2)
  - `contact.interior_cleaning` — radio Exterior Only / Interior + Exterior (ID: HA6Wyn2GOE3A4rUIIJo1)
  - `contact.membership_frequency` — radio One-Time Cleaning / Quarterly Maintenance / Monthly Balcony Maintenance (ID: cjmkRig2BRnnIpyHrmQ4)
  - GlassKeepers auth checkbox (ID: FDqAxu40HU0lFEOoN6xl) — shows conditionally when Quarterly Maintenance selected
  - Rinse & Repeat auth checkbox (ID: M5slR67hADJjq8mgNx0x) — shows conditionally when Monthly Balcony Maintenance selected
  - `contact.initials` — text, placeholder "e.g. JW" (ID: c9xlaSURBjtaea7gKkyt)
- **T&C structure:** T&C 1 = SMS + marketing consent combined. T&C 2 = combined auth checkbox (payment auth + cancellation/lockout policy + authorized cardholder confirmation).
- **Signature:** native GHL Signature field added (no custom field needed)
- **OPEN — not yet done:**
  - Unit # field (from Jared's Step 1 spec) — not yet added to form
  - Authorization note at top of form (Jared's spec language) — not confirmed added
  - Progress bar on HTML wrapper pages (checkout-1 + checkout-2 HTML)
  - End-to-end test — submit test booking, verify GHL fields populate + CAPI Schedule fires
- **Existing funnel wrappers** (on link.gosmarterflow.com):
  - Step 1 wrapper: `checkout-1-request-appointment.html` → form bODe8Xi7WPHZluY5F73B ($135)
  - Step 2 wrapper: `checkout-2-booking-authorization.html` → form BUYKXRGbLKuGhYVLarvJ ($0)
  - Shared: `thank-you.html`
  - Custom arrival window snippets: `arrival-window-capture.html` (form 1) + `arrival-window-capture-form2.html` (form 2)

## Zapier Notes
- 2 Facebook Lead Ads zaps had auth error (2026-07-14): "Invalid Authentication. Please reconnect your account." — fixed by reconnecting Facebook account. If this recurs, reconnect Facebook Lead Ads app in Zapier.

## Access Status (as of 2026-06-30)
- [x] GoHighLevel — active, workflow audit complete
- [x] ZenMaid — credentials via email (2026-06-23)
- [x] ManyChat — invite sent (2026-06-23), accept needed
- [x] Grasshopper — added (2026-06-23), set password needed
- [x] Rosie (AI phone answering) — invite sent (2026-06-23), accept needed
- [x] Meta Business Manager — Cheyli granted access on 2026-06-30 Zoom call
- [x] Zapier — Cheyli granted access on 2026-06-30 Zoom call

## Attribution Dashboard — Google Sheet
- **Sheet:** https://docs.google.com/spreadsheets/d/1VkQhs1O8zftFK_XXaeVcgWzTQYJQFY_sVQCwaYA7FBQ/edit
- Tabs: Leads, Spend, Dashboard, Sample Data
- Cheyli fills monthly Meta ad spend in Spend tab. GHL webhooks auto-populate Leads tab.
- Apps Script webhook handler written (bwc_attribution_appscript.js). Needs deployment + 4 GHL webhook workflows (card jwn5webhooks).

## Stack (updated)
- GHL — CRM + automation
- ZenMaid — scheduling/invoicing (syncs to GHL via Zapier)
- ManyChat — Messenger/IG DM automations → GHL
- Square — payments
- Grasshopper — SMS + customer communication
- Rosie — AI phone answering
- Meta, Google, TikTok — ad platforms

## Known Bugs (2026-06-26 Audit)

**Bug #1 — SMS Duplicates (CONFIRMED, fix pending — review drafts first)**
- Root cause: WF #2.1 (10-day stale) and WF #2.2 (15-day stale) have suppression tag gates but never write the tags → stale trigger re-fires every N days → same SMS sent repeatedly
- Design flaw: WF #2.2 checks `10day_recovery_active` (copy-paste error from WF #2.1) — should check `15day_recovery_active`
- NEW FINDING: 10-DAY LEAD RECOVERY #1, #2, #3 + FINAL CALL TASK all exist in GHL as Draft workflows (0 enrolled). These are Nica's incomplete replacement for WF #2.1/#2.2. #1 already writes `10day_recovery_active` correctly before the condition gate — just never finished/published.
- Fix path: review all 4 draft workflows, complete missing pieces, publish. Do NOT patch WF #2.1 directly — Nica's drafts are the intended replacement.
- Status: Draft workflows found, review in progress. Email sent to Jared explaining situation.

**Bug #2 — Emails Failing (CONFIRMED, fix requires DNS access)**
- Root cause: `info.brickellwindowcleaners.com` unverified in GHL since Apr 17, 2026. SSL Unknown. All emails bouncing with DMARC authentication failures.
- Fix: Connect with Jared's DNS team → add GHL SPF/DKIM verification records → re-verify domain before Jul 26, 2026 auto-delete deadline
- Status: Email drafted to Jared requesting DNS team introduction (not yet sent)

**Proactive Finds (flag at Jun 30 Zoom)**
- WF #3 Day 5 SMS fires twice back-to-back — verify if intentional double-tap or build error
- WF #6 Tag Conditions — in Draft status, not live
- WF #4.1 Booked-Closed Won — confirmed exists (revealed by WF #6), not yet documented

## Key Risks
- Follow-up Guard (WF #4): if broken, booked customers get spammed — check first
- ZenMaid → GHL Zapier zap: confirm still live
- No attribution data flowing to Meta: ads optimizing on messages, not revenue
- ManyChat → GHL: unknown if UTM/fbclid fields are being passed
- Bug #2 deadline: `info.brickellwindowcleaners.com` auto-deletes from GHL Jul 26, 2026 — DNS fix must happen before then
