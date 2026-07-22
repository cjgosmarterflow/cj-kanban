# Tate Smith — Claude Context
**Client:** Tate Smith
**Company:** CLR WTR Solutions
**Consultant:** CJ Salamida
**Started:** June 2026

---

## Billing Contact (updated 2026-06-30)

- **To:** tsmith@clrwtrsol.com (Tate Smith)
- **CC:** jonathan@gosmarterflow.com
- **Note:** Kyle Staude (kstaude@clrwtrsol.com) no longer works at CLR WTR — confirmed by Tate 2026-06-29. Jonathan Smith (jsmith@clrwtrsol.com) was the original wrong contact. All future invoices go to Tate directly.
- **Phone:** (615) 437-9664

---

## Payment Setup

- Processor: Stripe (recently switched from previous processor)
- Issue: 2.9% surcharge is being applied to ALL payment methods including ACH. Should only apply to credit cards.
- ACH processing fee is ~0.8% (capped $5) — passing 2.9% to ACH customers is incorrect.

## Fix Needed

In GHL Payments → Stripe settings, configure surcharge/convenience fee to apply to credit card payment methods only. Exclude ACH / bank transfer from the surcharge rule.
