# Tate Smith — Session Updates
**Client:** Tate Smith
**Consultant:** CJ Salamida

---

<!-- TEMPLATE
## [Date]

**What was done:**

**What's next:**

**Blockers:**
-->

## 2026-06-23

**What was done:**
- Analyzed Tate's maintenance spreadsheet (25 contacts, all "Next" dates pre-calculated, fixed intervals confirmed)
- Scoped full build: 6 workflows + 9 custom fields + 25-contact data migration + Smart List view
- Sent cost estimate — **Tate approved $220 / 4 hrs**
- Tate clarified: workflows must be package-type specific — enroll each contact only in workflows matching their package (Whole-Home Only / RO Only / Whole-Home+RO). Confirmed design handles this correctly.
- Added safety-net condition check to workflow design (exits if package type mismatch)
- Ready to build

**What's next:**
- Build: custom fields → 6 workflows → migrate 25 contacts → Smart List

**Blockers:**
- None — approved, ready to go

---

## 2026-06-18

**What was done:**
- Added custom fields to the Installation Calendar in GHL — backend-only (visible to internal team + assigned installer only, not shown to customers)
- Fields are required for sales reps when booking an appointment on the install calendar
- Notification goes to the assigned team member (existing dropdown)
- Completed in under 1 hour; billed at 1-hour minimum

**What's next:**
- Confirm with Tate that the custom fields are working as expected
- Monitor for any follow-up on the surcharge/ACH roadmap question

**Blockers:**
- None

---

## 2026-06-22

**What was done:**
- Sent check-in email to Tate asking if he has new tasks.

**What's next:**
- Await Tate's reply.

**Blockers:**
- None

---

## 2026-06-16

**What was done:**
- Drafted reply to Tate re: ACH surcharge roadmap question — clarified it's on GHL's roadmap but timeline is entirely GHL's; SmarterFlow handles implementation/strategy only. Floated custom software alternative.
- Added Kanban Done card for Tate Smith documenting the roadmap reply.
- Merged Jon's Kanban panel into Tate Smith — panel now displays as "Tate / Jon"; deleted Jon's 5 starter cards from Supabase.
- Added modal unsaved-changes guard to Kanban app — clicking outside the card modal now prompts confirmation if there are unsaved changes.
- Pushed all Kanban changes to GitHub → Vercel auto-deployed.

**What's next:**
- Send the drafted reply to Tate (pending CJ review/send)
- Monitor for Tate follow-up on roadmap or custom solution interest

**Blockers:**
- None

---

## 2026-06-12

**What was done:**
- Replied to Tate's ACH surcharge roadmap inquiry — informed him channel-specific processing fees are on GHL's roadmap but timeline is GHL's to set.
- Configured 2.9% surcharge to apply to credit card payments only. ACH excluded (ACH actual cost ~0.8% capped at $5).

**What's next:**
- Monitor for Tate follow-up
- Verify test transactions if not already done (ACH = no surcharge, credit card = 2.9% surcharge)

**Blockers:**
- None
