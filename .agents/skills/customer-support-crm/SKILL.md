---
name: customer-support-crm
description: Use for customer demand summarization, support replies, CRM note extraction, objection handling, quotation preparation, and customer feedback analysis.
---

# Customer Support and CRM Skill

## Required context

- Original customer message.
- Product/service information.
- Company policy.
- Pricing/MOQ/lead time if relevant.
- Language and tone requirement.
- Customer history if available.

## Workflow

1. Extract explicit request.
2. Identify hidden needs or risks as labeled inference.
3. Determine whether pricing, technical, legal, compliance, or human approval is needed.
4. Draft a direct reply.
5. Ask only necessary follow-up questions.
6. Produce CRM fields.
7. Suggest internal next action.

## Output

- Demand summary.
- Customer intent.
- Missing information.
- Reply draft.
- CRM fields.
- Internal next action.
- Escalation risk.

## Red flags

- Do not promise unavailable price, stock, delivery, certification, refund, warranty, or legal terms.
- Do not ignore complaints or safety issues.
- Do not expose internal notes in customer-facing replies.
