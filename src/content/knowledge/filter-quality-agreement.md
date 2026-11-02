---
title: "What Belongs in a Filter Quality Agreement"
metaTitle: "What Belongs in a Filter Quality Agreement"
description: "Define product, test standards, sampling, reports, change control, non-conformance and escalation in a filter quality agreement that is auditable."
slug: "filter-quality-agreement"
keyword: "filter quality agreement"
order: 5
isPillar: false
pillarSlug: "filter-quality-verification"
published: 2026-11-01
series: filter-quality-verification
seriesTitle: Filter quality and verification
---

A filter quality agreement is the point where technical expectations become obligations. The drawing defines the product, the test standard defines the method and the purchase order defines the commercial transaction. The quality agreement connects them by answering a practical question: when a result is disputed, what did both parties agree would count as conforming, and what must happen if it is not?

Many agreements are too thin to answer that question. They may repeat a filtration class, list a certificate of conformity and require “good quality.” Those statements do not define a batch, a test method, a decision rule, a change-control obligation or a corrective-action path. When a problem appears, the buyer and supplier discover that they agreed on an outcome in principle but not on the evidence that would prove it.

This guide is for buyers and quality engineers drafting or reviewing a filter quality agreement. It should be read alongside the [filter quality verification framework](/knowledge/filter-quality-verification/), which explains how standards, reports, samples and batches fit together.

## 1. The Agreement Should Define Evidence and Consequences

A useful quality agreement has two jobs. First, it defines the evidence that the supplier will provide and retain. Second, it defines what happens when the evidence shows that a requirement was not met.

Those jobs are connected. A requirement without evidence is difficult to verify. A nonconformance without a defined consequence can drift into negotiation. A test requirement without an acceptance rule can generate data without a decision.

The agreement should avoid vague phrases such as:

- “Quality must be acceptable to the buyer.”
- “The supplier will provide all necessary tests.”
- “Samples must meet the required standard.”
- “Production will be consistent with the approved sample.”
- “Nonconforming products will be replaced.”

Each phrase may express a good intention, but none defines what will be measured, by whom, at what frequency, against which limit or with what record. **A quality agreement should be written so that a third party can determine whether an obligation was met.**

## 2. Define the Approved Product Configuration

The agreement should identify the product unambiguously by drawing, revision, model, dimensions, media specification, construction and approved sample. If the supplier offers a product family with several sizes or options, the agreement should state which configurations are covered and whether they share test evidence.

Include:

- Product name and internal part number.
- Buyer part number and drawing revision.
- Applicable sizes and variants.
- Media grade and component requirements that affect performance.
- Gasket, frame, adhesive and support construction.
- Approved sample ID and retention location.
- Production site and, where relevant, production line.
- Packaging and labelling requirements.

The production site matters because a quality system is not automatically transferable between locations. A supplier may hold a group certificate while manufacturing the ordered product at a different site or through a subcontractor. The agreement should state whether site changes require prior approval and how the buyer will be notified.

If proprietary details cannot be disclosed, the agreement can reference a controlled specification or a sealed drawing held by both parties. The important point is that the approved configuration is identifiable and changes to it are visible.

## 3. Specify Standards, Methods and Parts

“Tested to the standard” is not a sufficient requirement. The agreement should identify the standard designation, relevant part or method and, where the report relies on it, the edition. A family name may cover classification, media testing, element leakage, efficiency, pressure drop or other characteristics in separate documents.

For each test, state:

- Standard and part.
- Test object: media, element, housing or system.
- Test conditions and operating point.
- Challenge aerosol, dust or contaminant.
- Acceptance criterion.
- Test facility and whether accreditation is required.
- Whether the test is a type test, batch release test or witness test.

If the buyer accepts an alternative standard, the agreement should record the scope comparison that supports acceptance. It should also state whether a change in standard edition triggers review or retest.

The selection logic is covered in [choosing the applicable filter test standard](/knowledge/filter-test-standard-selection/). A quality agreement does not need to reproduce the standard, but it must make clear which standard is being incorporated and how a report will be judged.

## 4. Translate Performance into Characteristics and Limits

Requirements should be expressed as observable characteristics. “High efficiency” becomes a class or performance criterion under a named method. “Low pressure drop” becomes a limit at a defined airflow and condition. “Consistent quality” becomes a set of monitored characteristics and reaction rules.

Where a numerical limit is used, the agreement should define:

- The unit and test condition.
- Whether the limit is a minimum, maximum, target or range.
- Whether the value is initial, loaded, mean, maximum or worst-case.
- The number of units or measurements used to decide conformity.
- How measurement uncertainty is handled.
- Whether retesting is allowed and under what rule.

For a pressure-drop requirement at a reference airflow, a conversion may be used when the test is run at another condition. For a fixed geometry and turbulent flow, an approximate relation is:

$$\Delta p_{ref} \approx \Delta p_{test}\left(\frac{Q_{ref}}{Q_{test}}\right)^2$$

The agreement should state whether this approximation is permitted, which flow regime and geometry assumptions apply and what evidence supports the scaling. It should not be inserted as a universal conversion rule without engineering review.

For a conformity decision near a limit, an uncertainty-aware rule may take the form:

$$x + U \leq USL$$

where \(x\) is the measured result, \(U\) is the agreed expanded uncertainty and \(USL\) is the upper specification limit. The exact rule should be consistent with the method and contract. The purpose is to avoid a situation in which one party treats a marginal measurement as a clear pass while the other treats it as a clear fail.

## 5. Define the Batch and the Release Basis

The supplier cannot demonstrate batch consistency unless the batch is defined. The agreement should state how lots are formed, identified and traced, and whether a shipment may combine multiple production batches.

It should also define:

- Which characteristics are checked on every batch.
- Which are checked on a sampling basis.
- Which are verified periodically.
- Which require a certificate of analysis or certificate of conformity.
- Who performs the release test.
- What happens while a batch is awaiting a result.
- How rework and reinspection are controlled.

ISO 2859-1 may provide an attribute-sampling framework, but the agreement must still choose the inspection level, acceptance number and defect classes. The standard cannot decide which defect matters to the application.

Batch release records should be traceable to the shipment. A generic certificate that covers a product family may support administrative matching, but it does not show that the delivered lot was produced under the approved configuration. The buyer should be able to connect the certificate to the batch, and the batch to the relevant test results.

## 6. Require Reports and Raw Data Appropriate to the Decision

The agreement should specify what a test report must contain. A headline result is rarely enough for a high-risk purchase.

At a minimum:

- Report number, date and revision.
- Supplier, production site and laboratory.
- Product model, drawing and sample identity.
- Standard, part and edition.
- Test conditions and deviations.
- Results, calculations and acceptance criteria.
- Uncertainty and decision rule.
- Traceability to production batch or sample.
- Limitations and exclusions.

For ongoing supply, the buyer may require a summary release record rather than a full report per batch. The summary should still identify the tested characteristics, results and lot. Full raw data can be retained by the supplier and made available on request or during an audit.

The agreement should distinguish between records that accompany every shipment, records retained for a defined period and records available only on request. That distinction keeps routine transactions workable without losing auditability.

## 7. Make Change Control a Prior-Approval Obligation

Change control is one of the most important clauses in a filter quality agreement. Performance can change when media, adhesive, gasket, frame, pleating, production equipment or site changes, even if the external dimensions remain the same.

The agreement should require notification before a change that could affect:

- Form, fit or function.
- Filtration performance or pressure drop.
- Media or component identity.
- Regulatory status or labelling.
- Production site or line.
- Test method or inspection plan.

The buyer should define which changes require:

- Document notification only.
- First-article inspection.
- Limited production and buyer approval.
- Partial or full performance requalification.
- A new approved sample.

The supplier should not substitute a lower-cost material or relocate production under the same part number without disclosure. If the buyer discovers such a change after shipment, the relevant batches should be treated as unapproved until evidence supports acceptance.

**A change-control clause is not an obstacle to improvement.** It is a method for ensuring that the buyer's approval remains attached to the product actually being supplied.

## 8. Define Nonconformance, Containment and Corrective Action

The agreement should state what happens when the supplier discovers a nonconformance, and when the buyer discovers one after receipt.

For supplier-detected issues:

- Notification timing and contact.
- Identification of affected batches and shipments.
- Containment of finished goods, work in progress and customer inventory.
- Disposition options and approval authority.
- Root-cause analysis and corrective action.
- Evidence required for closure.

For buyer-detected issues:

- How to issue a nonconformance report.
- What evidence the supplier must provide.
- Whether stock can be sorted or must be returned.
- Who bears responsibility for investigation and replacement under the contract.
- How repeat failures affect supplier status and future inspection.

The agreement should not allow a supplier to close an issue solely by sending replacements. Corrective action should address why the nonconforming product was made or escaped. The buyer should define how effectiveness will be verified, whether through additional testing, process evidence, a follow-up audit or a period of increased sampling.

The operating workflow is described in [batch failure, CAPA and supplier escalation](/knowledge/filter-batch-failure-capa/). The quality agreement should align with that workflow rather than leave it to informal practice.

### Require Evidence of Supplier-Caused Escapes

When a nonconformance reaches the buyer, the quality agreement should require the supplier to investigate both occurrence and detection. An “escape” is a nonconforming condition that the supplier's process or release controls failed to prevent from leaving its control.

The supplier should identify:

- The point at which the nonconformity occurred.
- The inspection or test that should have detected it.
- Why that control did not detect it.
- Whether other batches, materials or product families could be affected.
- What containment was applied to inventory and shipments.
- What change will prevent recurrence and strengthen detection.

This requirement prevents a common weakness in corrective-action responses: the supplier explains why the product was defective but not why the defect was shipped. Both questions matter. A process correction may reduce occurrence, while an improved release test or sampling rule addresses escape.

The buyer should also require disclosure of failed internal tests that are relevant to the shipment, even if the supplier later retested or reworked the product. A quality agreement that permits silent retesting until a passing result appears weakens the entire verification chain.

## 9. Establish Traceability and Record Retention

Traceability connects a test result to the goods. The agreement should require enough lot and serial identification to support containment if a problem is found.

Records may include:

- Approved drawings and specifications.
- Material declarations and supplier certificates.
- Media and component lot identification.
- Production batch records.
- In-process and release test results.
- Leak-test records for high-efficiency elements.
- Deviation and concession records.
- Packaging and shipment records.
- Complaint and corrective-action records.

The agreement should state the retention period and the buyer's access rights. It should also state what happens if the supplier ceases production or changes ownership. A buyer that cannot obtain records after a supplier exit may find itself unable to investigate field failures.

## 10. Set Audit and Access Rights That Match the Risk

Audits are useful when they examine the controls that generate the product and records. They are less useful when they become a scheduled tour of a showroom.

The agreement may provide for:

- Initial supplier qualification audit.
- Periodic quality-system or process audit.
- Product-specific audits after a change or failure.
- Witness testing at the supplier or laboratory.
- Access to relevant records and production areas.
- Confidentiality protections for supplier information.

The audit scope should align with the product risk and the evidence already available. A high-risk HEPA product may warrant process and leak-test review. A lower-risk commodity filter may be adequately covered by document and receiving controls.

Audits complement, rather than replace, product testing. A clean audit does not prove that a particular batch met a performance specification. A failed test is not erased by a generally well-organised factory.

## 11. Address Quality-System and Regulatory Expectations

ISO 9001 and ISO 13485 can be relevant supplier-qualification references. ISO 9001 defines quality-management-system requirements; ISO 13485 addresses medical-device quality systems. The agreement should not use either certificate as a substitute for product performance evidence.

If the buyer's application is regulated, the agreement may need to address additional obligations such as:

- Validation and change-control expectations.
- Complaint and adverse-event notification.
- Traceability and record access.
- Sterility or cleanroom requirements.
- Requirements derived from EU GMP Annex 1 or another applicable regulatory framework.

The supplier and buyer should identify which requirements are contractual, which are regulatory and which are voluntary good practice. **A management-system certificate can support confidence in control; it cannot certify a filter's efficiency or leak integrity.**

## 12. Make Commercial and Technical Obligations Consistent

Quality obligations should be consistent with commercial terms. If the buyer requires replacement or correction of nonconforming product, the agreement should identify the trigger, process and evidence. If a supplier must notify before a change, the commercial team should know that the notification affects order acceptance and shipment.

A quality agreement should not promise a particular delivery schedule, price or minimum order quantity as part of this technical framework. Those are commercial matters and may change with capacity or market conditions. What matters for quality is that the duties, decision points and evidence requirements remain clear when commercial arrangements change.

A supplier scorecard can support the agreement by tracking lot acceptance, documentation completeness, response time and corrective-action effectiveness. These indicators should be defined so that they cannot be improved merely by failing to report an issue.

## 13. Keep the Agreement Alive

A quality agreement should be reviewed when:

- The product, drawing or standard changes.
- The supplier changes site, process or critical material.
- A significant nonconformance occurs.
- The sampling plan or test method changes.
- A regulatory requirement changes.
- The supplier's performance history materially improves or deteriorates.

The review should record decisions and update the controlled version. An agreement signed once and never revisited becomes detached from the actual production system.

## 14. A Clause Map for Review

The following table is a practical review aid, not a mandatory contract structure. The exact wording should be adapted to the product and legal framework.

| Clause area | Core question | Evidence or record |
|---|---|---|
| Product definition | What exactly is approved? | Drawing, specification, sample ID |
| Test methods | How will conformity be demonstrated? | Standard, part, edition, method |
| Acceptance limits | What result is acceptable? | Limits, units, decision rule, uncertainty |
| Batch release | Which units may ship? | Lot definition, sampling, release record |
| Reports | What proof accompanies supply? | Certificate, report, traceability |
| Change control | What must be notified before change? | Change request, risk review, approval |
| Nonconformance | What happens after a failure? | NCR, containment, CAPA, effectiveness check |
| Records | Can the evidence be reconstructed? | Retention, access, traceability |
| Audit | How is the system examined? | Audit plan, findings, closure |
| Review | When is the agreement updated? | Revision history, approval |

## The practical position

The practical position is that a quality agreement should be short enough to operate and specific enough to survive a dispute. We would attach the evidence schedule, sampling rules, change classes and disposition path, then remove aspirational language that no record can verify. A clause without an owner, trigger or acceptance rule is not a control. If the buyer and supplier cannot agree on what a failed result sets in motion, the agreement is unfinished. The best test is whether a new quality engineer could release a shipment using the document alone.

## 15. What this page does not claim.

This page is a procurement and quality-management guide, not a legal contract, test report or certification. It does not establish that a particular clause, supplier or filter meets any performance, regulatory or contractual requirement. The applicable standards, legal terms and acceptance criteria must be confirmed with qualified technical, quality and legal professionals for the specific transaction. Final approval and enforcement of a quality agreement remain the buyer's responsibility.
