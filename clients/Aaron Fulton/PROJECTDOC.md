# Aaron Fulton — Project Documentation
**Company:** The Perfect Pool Co.
**Consultant:** CJ Salamida
**Status:** Active — BLOCKED on pricing objection (Jonathan Schoenberg handling)
**Last updated:** 2026-07-21

---

## Project A — Outbound Voice AI Speed-to-Lead (PRIMARY)

**Goal:** Replace Aaron's manual lead-qualification calls with an AI that calls within minutes of form submit, qualifies the lead, moves them in the pipeline, and only hands off sales-ready leads to Aaron.

**Current state:**
- Lead form → GHL survey → pipeline assignment → drip (email + SMS). No outbound call step.
- 588 "Ready to Buy" leads unqualified — fake numbers, no answers, just researching, price shoppers

**Proposed flow:**
```
Lead submits form
    ↓
Outbound AI call (within minutes)
    ↓
AI qualifies (budget? timeline? serious?)
    ↓
Pipeline stage updated
    ↓
Sales-ready only → Aaron
    ↓
Not ready → long-term nurture
```

**Phase 1 Deliverables (from proposal email 2026-06-26):**
- Configure Outbound Voice AI
- Design AI qualification conversation
- Build Speed-to-Lead automation
- Human escalation workflow
- SMS & email coordination
- Pipeline movement automation
- Call retry cadence
- End-to-end testing & refinement

**Estimated scope:** 15–25 hours ($825–$1,375)

**Full roadmap:**
1. Speed-to-Lead Automation (Outbound Voice AI) ← current
2. Pipeline Automation & Sales Workflow
3. Lead Intelligence & Reporting
4. Executive Dashboards
5. Conversion Optimization

**⚠️ Scoping constraint (from Jonathan Griffith email 2026-07-15):**
> "We're keeping each resource in a very specific lane so the system stays clean and we avoid duplicate work inside GHL. For you, the focus would be the qualification layer and making sure the right leads get surfaced quickly."

They have other GHL resources. CJ's lane = **qualification + surfacing leads only**. Do NOT touch other parts of GHL without explicit ask.

**Call held ~2026-07-16 with Jonathan Griffith. Outcome:**
- Confirmed scope: qualification layer only (see lane constraint above)
- Pricing objection raised by Jonathan Griffith — current pricing higher than budget
- CJ deferred to Jonathan Schoenberg (SmarterFlow) to resolve
- Payment link sent post-call: https://link.gosmarterflow.com/payment-link/6733da86d637435b51a616c0

**Next steps:**
- [ ] Jonathan Schoenberg resolves pricing objection with Jonathan Griffith
- [ ] Confirm payment received
- [ ] Confirm support@gosmarterflow.com added to GHL as staff
- [ ] Confirm GHL sub-account location ID + other resource scope
- [ ] Set qualification criteria (what = "sales-ready"?)
- [ ] Audit pipeline stages + survey routing (qualification layer only)
- [ ] Build + test outbound Voice AI

---

## Project B — Pipeline Cleanup + Nurture Optimization (SECONDARY)

**Goal:** Process 800+ idle leads sitting in pipeline. Segment by intent. Route appropriately.

**Known issues:**
- ~1,751 total opps (800+ idle, 588 "Ready to Buy" unverified)
- No second-layer qualification after survey
- Slow drip campaign — unclear if segmented by survey response

**Next steps:**
- [ ] Audit existing smart lists / segments
- [ ] Confirm Shopify → GHL sync status (not fully synced per discovery)
- [ ] Build AI lead scoring logic
- [ ] Design long-term nurture for non-sales-ready leads

---

## Future Opportunities (from discovery call)
- AI lead scoring
- Automated call cadence
- Executive + marketing dashboards
- AI conversation summaries → Google Sheets / reporting

---

## Access Status

| System | Status | Notes |
|---|---|---|
| GHL sub-account | TBD | Confirm location ID |
| Shopify | TBD | Not fully synced to GHL |
| Meta BM | TBD | — |
| A2P SMS | APPROVED | Just approved — can add SMS drips |

---

## GHL Architecture (known)

**Lead flow:**
Meta Ads → Landing Page → Embedded GHL Survey → Assigned Pipeline + Stage → Email/SMS Drip → Sales Team

**Existing:**
- Conversation AI (inbound) — active
- SMS A2P — just approved
- Survey-based routing — active
- High-intent → Aaron's pipeline directly
