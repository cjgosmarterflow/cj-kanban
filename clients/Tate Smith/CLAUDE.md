# Tate Smith — Claude Context
**Client:** Tate Smith
**Consultant:** CJ Salamida
**Started:** June 2026

---

## Payment Setup

- Processor: Stripe (recently switched from previous processor)
- Issue: 2.9% surcharge is being applied to ALL payment methods including ACH. Should only apply to credit cards.
- ACH processing fee is ~0.8% (capped $5) — passing 2.9% to ACH customers is incorrect.

## Fix Needed

In GHL Payments → Stripe settings, configure surcharge/convenience fee to apply to credit card payment methods only. Exclude ACH / bank transfer from the surcharge rule.
