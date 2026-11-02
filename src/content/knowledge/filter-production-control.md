---
title: "Production Control: What to Monitor Between Batches"
metaTitle: "Filter Production Control Between Batches"
description: "A practical framework for filter production control, covering control plans, lot traceability, SPC, release data, deviation handling and supplier review."
slug: "filter-production-control"
keyword: "filter production control"
order: 5
isPillar: false
pillarSlug: "filter-supplier-selection"
published: 2026-11-01
series: oem-supplier-risk
seriesTitle: OEM sourcing and supplier risk
---

Production approval is a snapshot. Supply is a sequence of material lots, machine settings, operators, shifts, maintenance events and changes. A supplier can pass a first article and still produce a nonconforming batch three months later without any deliberate deception. The control system has to detect the drift before the buyer does.

This is the role of production control: define what must remain stable, how the supplier knows it remains stable, and what happens when evidence says it does not. It sits between the [first article inspection](/knowledge/filter-first-article-inspection/) and the buyer's incoming inspection. The [supplier selection and risk-control framework](/knowledge/filter-supplier-selection/) explains why this is a separate gate rather than a paperwork extension of sample approval.

The same control logic applies whether the buyer is a manufacturer, an importer or a distributor. The [wholesale and distributor cooperation page](/wholesale/) describes the commercial route for multi-SKU supply; it does not change the need to define lots, release evidence and reaction plans.

The buyer does not need to monitor every process variable. The buyer needs to know which variables can change the product, which controls the supplier has, and which data will be available when a lot is questioned. That is a smaller and more useful question than asking for everything.

## 1. Production Control Is a Daily System, Not a Final Inspection

Final inspection catches some defects at the end of the line. It does not explain why they occurred, and it may not detect characteristics that are expensive or impossible to test on finished goods. Production control places checks where the product or process can still be corrected.

A control plan identifies the characteristic, the control method, the frequency, the sample, the acceptance rule, the owner and the reaction. It should cover incoming materials, in-process conditions, release tests and packaging. It should also identify which characteristics are critical, which are important and which are monitored for information.

The plan must match the actual process. A generic control plan copied from another product can create the appearance of control while omitting the characteristics that matter for the buyer's filter. The buyer should review the plan against the specification and the failure modes, not merely confirm that a document exists.

## 2. Start With the Characteristics That Predict Failure

Critical-to-quality characteristics should be selected from the product function and the failure consequences. For a filter, these may include media identity, effective area, pleat geometry, bond integrity, frame dimensions, gasket compression, clean-state pressure drop, efficiency or integrity, and marking. The exact list depends on the product and application.

The buyer should distinguish product characteristics from process parameters. A finished dimension is a product characteristic; a pleating temperature or adhesive quantity is a process parameter that can influence it. Monitoring only the final dimension may detect a problem after many units have been made. Monitoring the process parameter may catch the cause earlier, but only if the relationship between the parameter and the product is understood.

The [air filter performance framework](/knowledge/air-filter-performance/) and [batch consistency guide](/knowledge/filter-batch-consistency/) provide useful logic for separating a design property, a performance outcome and a production control. A control plan that monitors an easy visual feature while ignoring the characteristic that drives field failure is not risk-based.

## 3. Define the Lot, the Sample and the Traceability Unit

A lot should correspond to a meaningful production or material boundary. It may be based on a production run, a shift, a material lot, a machine setup or a defined quantity. The supplier should define the rule before production and use it consistently. A lot that is created only for paperwork is difficult to trace and difficult to contain.

The finished product should carry or be linked to a lot identifier that connects to the production date, line, shift, material lots, process settings and release results. The link does not have to be printed on every filter if packaging or cartons carry a traceable code, provided the relationship is maintained and accessible. The buyer should confirm that the traceability unit works for the actual shipping and storage arrangement.

Traceability should be tested, not assumed. Select a shipment and ask the supplier to reconstruct the relevant records within a defined time. Then select a material lot and ask which shipments it affected. The first direction supports a customer complaint investigation; the second supports containment when a material problem is found. The [factory audit guide](/knowledge/filter-factory-audit/) describes the two-way trace test on site.

## 4. Control Incoming Materials and Approved Configuration

Incoming control should verify that the material received matches the approved configuration. For critical materials, that may include identity, grade, lot, certificate, dimensional check and a supplier qualification record. The buyer should know which materials are critical and which can be released with documentary checks only.

The control plan should identify the approved-material limits and the reaction when a material is outside them. A substitution may look acceptable to a production planner and still change filtration performance, adhesive compatibility or service life. The [change management guide](/knowledge/filter-change-management/) explains why material substitution requires an approval path, not a purchasing decision.

Material storage and shelf life also belong in production control. Adhesives, gaskets, media and coatings can be affected by temperature, humidity, light or age. The supplier should define storage conditions, stock rotation and expiry or re-test rules where relevant. The buyer may not need to see every store, but the control plan should show that the risk is managed.

## 5. Monitor In-Process Conditions With a Reaction Plan

In-process checks should be placed where the output can be affected. They may include setup verification, first-off checks, pleat or media inspection, adhesive application checks, cure or drying conditions, dimensional checks, seal inspection and packaging checks. The frequency should reflect the stability of the process and the consequence of a missed defect.

Each check needs a reaction plan. If a dimension is outside the limit, what happens to the units made since the last acceptable check? Who decides whether to stop the line, sort the output, rework it or seek a concession? A control chart or checklist without a reaction rule only records the problem.

The reaction plan should also cover equipment. A maintenance event, tool change, power interruption or material change may require a restart check. The first units after a change are often more informative than a routine sample from the middle of a stable run.

## 6. Make Release Testing Match the Product Claim

Release tests should verify the characteristics that cannot be assured by process control alone and that the buyer needs for the release decision. A certificate of conformity that repeats the specification without data is not a release record. The buyer should require results, sample identity, method and acceptance decision.

Not every claim can be verified on every lot. Full performance testing may be expensive, destructive or dependent on a laboratory. The supplier may use a combination of routine checks, periodic validation and design approval. The buyer should understand which evidence applies to design, which applies to the production process and which applies to the individual lot. The [filter quality agreement](/knowledge/filter-quality-agreement/) should make that distinction explicit.

Where the buyer relies on a supplier's test report, the report should be readable and traceable. A class result without the test object, airflow, method and sample identity is not enough for a lot release. The [test report reading guide](/knowledge/read-filter-test-report/) provides a review checklist.

## 7. Use Statistical Process Control With Its Assumptions Visible

Control charts can detect changes that a pass/fail check may miss, especially when a process is drifting toward a limit. For attribute data, a p-chart can show the proportion nonconforming over time. A common form uses:

$$UCL/LCL=\bar p\pm 3\sqrt{\frac{\bar p(1-\bar p)}{n}}$$

where $\bar p$ is the average proportion nonconforming and $n$ is the sample size. The formula assumes the observations and sample sizes are suitable for the chart. Small samples, changing product mixes and multiple defect types can make the limits misleading. The chart is a signal tool, not a release decision by itself.

For variable data, the buyer should review the process mean and spread, not only whether each result is inside a specification. A process can be entirely within a limit while drifting steadily toward it. The supplier should identify special-cause signals and respond according to the control plan. If the chart is used only to decorate a monthly report, it is not controlling anything.

## 8. Track Quality and Capacity With Transparent Metrics

Two simple metrics help a buyer see whether production control is working. First-pass yield measures the proportion of units that meet requirements without rework:

$$FPY=\frac{\text{units conforming on first pass}}{\text{units started}}$$

A falling first-pass yield suggests increasing process loss, even if final yield appears acceptable because of rework. The buyer should ask what is being reworked, why, and whether the reworked units are inspected against the same requirements.

Overall equipment effectiveness combines availability, performance and quality:

$$OEE=A\times P\times Q$$

The metric is useful for understanding capacity and losses, but it should not be compared across dissimilar products without context. A supplier may improve OEE by reducing quality checks or by running faster outside the validated process. The buyer should treat OEE as one indicator and connect it to the process change and quality data that explain it.

## 9. Handle Deviations Before They Become Normal

Production will produce deviations. A material arrives slightly outside the usual range, a dimension trends high, a machine is repaired or a customer changes a label. The question is whether the deviation is contained and approved, or quietly absorbed into routine supply.

The supplier should have a written deviation process that identifies the requirement, the affected product, the cause, the risk, the proposed disposition, the approval and the corrective action. The buyer should be notified when a deviation affects the purchase specification or the agreed evidence. A recurring concession is a signal that the process or the specification is not stable.

The buyer's incoming inspection should know which deviations were approved and which lots are affected. If the buyer's inspectors are not informed, an approved deviation becomes an escape. The [batch failure and corrective action guide](/knowledge/filter-batch-failure-capa/) sets out the investigation and containment logic when a deviation becomes a quality event.

## 10. Review Data on a Cadence That Matches the Risk

Production data becomes useful when someone reviews it with authority to act. A low-risk supplier may need a periodic certificate and a review of rejected lots. A high-risk supplier may need each lot's release data, a monthly trend review and a quarterly change and corrective-action review.

The review should compare supplier data with the buyer's incoming results and any customer or field information. A supplier that reports perfect yield while the buyer finds defects has a detection or reporting problem. A supplier that reports improving yield but increasing concessions may be moving defects rather than removing them.

The review should produce actions with owners and dates. A meeting that reviews charts without changing a control, escalating a trend or requesting evidence is not a control review. The buyer should also review whether the supplier's controls still match the approved configuration after any change.

The review should include the supplier's approved-material list, change log and open corrective actions. These records can reveal a change that never reached the buyer's technical team or a repeated deviation that is being handled as routine. A supplier's quality score may improve while its number of concessions rises; the buyer should look at both.

For a multi-SKU programme, review should also check whether a strong aggregate result hides a weak product family. A supplier may perform well on a high-volume standard filter while a low-volume custom filter receives less attention, older tooling or a different line. Stratifying the data by product family and production site makes the hidden risk visible.

## 11. Use Remote Oversight Without Pretending It Is an Audit

Remote data review can improve visibility between site visits. The buyer may receive release records, photographs, video of a check, batch data or electronic signatures. These can support a trend review and help decide when a site visit is needed. They do not reproduce an on-site process walk or verify the condition of equipment and material handling.

If remote evidence is used, the buyer should define the record format, identity, timing and retention. A photograph without a lot identifier or date is weak evidence. A video of a test without the sample identity and method is not a substitute for a record. The supplier should know which data must be submitted and what constitutes an incomplete submission.

The [incoming inspection guide](/knowledge/filter-incoming-inspection/) explains how the buyer can use its own limited checks to complement supplier data. The two systems should be designed together; otherwise the buyer may duplicate easy checks and miss the difficult failure mode.

## 12. Build a Control Hierarchy Around Consequence

The amount of control should rise with the consequence of failure and the difficulty of detection. The following hierarchy is a starting point, not a fixed rule.

| Control layer | Purpose | Example evidence | When to strengthen |
|---|---|---|---|
| Incoming material | Confirm approved inputs | Lot certificate, identity check, dimensions | Critical media or adhesive change |
| Setup | Confirm the line is in the approved state | First-off check, tool identity, settings | Tool change, repair or restart |
| In-process | Detect drift before many units are affected | SPC, visual check, bond or seal check | Narrow limits or unstable process |
| Release | Decide whether a lot may ship | Test data, acceptance record, traceability | Performance-critical product |
| Packaging | Protect the product and identity | Label, quantity, carton, storage check | Long route or fragile interface |
| Review | Detect trends across lots | Yield, deviations, corrective actions | Recurring defects or high exposure |

The control plan should explain why each layer exists and what happens when it fails. A control that cannot trigger a reaction is only a data-collection habit.

## 13. Make the Release Decision Reconstructable

The buyer should be able to reconstruct why a lot was allowed to ship. The release record should identify the lot, the quantity, the production period, the line, the materials used, the checks performed, the results, any deviations and the authorised release decision. It should be possible to connect that record to the certificate or test report supplied with the shipment.

A release record is not a narrative written after a complaint. It should be created as part of the normal production flow, with entries made by the people who performed the work or an authorised reviewer. Corrections should be traceable, and the record should not be silently edited after release. Electronic systems are acceptable if access, audit trails and retention are controlled.

The buyer should review a sample release record during supplier qualification and periodically thereafter. If the record cannot be retrieved for a delivered shipment, the supplier may have a document-retention issue, a lot-identification issue or both. Either one weakens the value of every other quality document in the relationship.

## 14. What this page does not claim.

This page describes production-control principles, not a product standard, legal requirement or substitute for auditing and testing the actual manufacturing process. It does not establish that any supplier, control plan, sampling frequency or metric is adequate for a particular filter, and it does not guarantee that the absence of a reported deviation means the product is conforming. The buyer remains responsible for defining acceptance criteria and verifying the evidence for the product and risk at hand.
