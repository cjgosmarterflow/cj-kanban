# Jared White — Handoff Notes

## Transition Context
- Previous consultant: Nica (email no longer active)
- New consultant: CJ (cj@gosmarterflow.com)
- Introduced by Jonathan on 2026-06-22
- Cheily (hello@cheily-ochoa.com) is Jared's internal collaborator — include on all threads

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
- Which GHL workflows are published vs. draft vs. broken
- Whether ManyChat → GHL integration passes UTM/fbclid fields
- Whether Nica had Meta BM or ManyChat access
- Full list of broken flows (waiting on Jared's reply)

## Access Status (as of 2026-06-24)
- [x] GoHighLevel — access confirmed (workflow audit in progress)
- [x] ZenMaid — credentials sent via email (2026-06-23)
- [x] ManyChat — invite link sent via email (2026-06-23)
- [x] Grasshopper — added via email (2026-06-23), set password needed
- [x] Rosie (AI phone answering) — invite sent via email (2026-06-23)
- [ ] Meta Business Manager — Jared asked Cheily to grant access, PENDING

## Stack (updated)
- GHL — CRM + automation
- ZenMaid — scheduling/invoicing (syncs to GHL via Zapier)
- ManyChat — Messenger/IG DM automations → GHL
- Square — payments
- Grasshopper — SMS + customer communication
- Rosie — AI phone answering
- Meta, Google, TikTok — ad platforms

## Key Risks
- Follow-up Guard (WF #4): if broken, booked customers get spammed — check first
- ZenMaid → GHL Zapier zap: confirm still live
- No attribution data flowing to Meta: ads optimizing on messages, not revenue
- ManyChat → GHL: unknown if UTM/fbclid fields are being passed
