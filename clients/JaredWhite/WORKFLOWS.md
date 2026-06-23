# Jared White — GHL Workflow Catalog
> Face-value analysis from screenshots. Updated as new screenshots are reviewed.
> Last updated: 2026-06-24

---

## WF #2.2 — 15 Day Stale Opportunity

**What it consists of:**
- 2 triggers: Stale Opportunities in "Lead Pipeline" — one for stage "New Lead" (+more conditions), one for stage "Follow-up..." (+more conditions)
- Condition check → Branch: if Tags does NOT include "10day_rec..." → continues / else → END
- Condition check → Branch: if "First Name" is not empty → personalized Day 15 SMS / else → generic Day 15 SMS
- Condition check → Branch: if "Email" is not empty → sends Email / else → END
- Both paths end after email step

**Notes:**
- Targets stale leads in at least 2 pipeline stages
- Tag check suggests coordination with a 10-day recovery workflow (avoids overlap)
- Two SMS variants: personalized (has name) and generic (no name)
- Email follow-up only if email exists on contact
- **Meta relevance:** Low — this is a follow-up sequence, not an entry/attribution workflow

---

## Z-09-3 — Email Bounced

**What it consists of:**
- Trigger: Email Events → Event is "Bounced"
- System Added Note (logs the bounce)
- Add contact tag: "email bounced"
- Set contact DND — Email Only
- Remove from all workflows
- END

**Notes:**
- Hygiene/compliance workflow — handles bad email addresses
- DND set to Email Only (SMS still allowed)
- Removes contact from all active workflows on bounce
- **Meta relevance:** None — housekeeping only

---

<!-- ADD NEW WORKFLOWS BELOW THIS LINE -->
