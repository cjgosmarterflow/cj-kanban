# Jared White — Project Documentation

## Client
- **Name:** Jared White, General Manager
- **Company:** Brickell Window Cleaners
- **Email:** jared@brickellwindowcleaners.com | T: 305-984-3048 ext 702 | M: 631-764-4814
- **Address:** 1000 Brickell Ave Ste 715, Miami, FL 33131
- **Key contact:** Cheily (hello@cheily-ochoa.com) — Jared's internal collaborator

## Stack
- **CRM:** GoHighLevel
- **Booking:** ZenMaid (syncs to GHL via Zapier)
- **Payments:** Square
- **Lead source:** Meta Ads (Messenger / Instagram DM)
- **Lead capture:** ManyChat → GHL
- **Phones:** Grasshopper
- **Ad platforms:** Meta, Google, TikTok

## Active Projects

### Project A — GHL Workflow Audit & Fixes
- Nica built Phase 1 GHL system (conditional SMS entry, pipeline, follow-up guard, tag-based stage moves)
- Status: unknown — audit in progress from workflow screenshots
- Pipeline spec: New Lead → Info Collected → Layout Sent → Quoted → Booked → Paid/Closed Won → Completed → Reactivation
- Tags: layout_confirmed, quote_sent, STATE_BOOKED, STATE_COMPLETED, STATE_MEMBER
- Custom fields: Building Name, Unit Type, Balcony Sq Ft, Quoted Price, Service Type
- Key risk: Follow-up Guard (WF #4) — if broken, booked customers get spammed

### Project B — Meta Attribution & CAPI (FRESH BUILD)
- **Brief received:** 2026-06-24
- Goal: campaign → leads → booked jobs → revenue → ROAS visibility
- Funnel: Meta Ads → Messenger/IG DM → ManyChat → GHL → Quote → Booked → Completed → Revenue
- Deliverables: audit report + recommendations + implementation plan
- Nothing exists in GHL for this yet — confirmed fresh build
- Needs: ManyChat access, Meta BM access

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

## Open Questions (from Nica's working doc)
1. Layout Sent + Quoted — merge into one stage?
2. "Paid" stage — replace with Closed Won / Closed Lost?
3. STATE_MEMBER — add current members as dropdown?
