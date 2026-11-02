---
title: "HEPA and ULPA Integrity Testing: Leakage, Scan and Acceptance"
metaTitle: "HEPA and ULPA Integrity Testing: Scan and Acceptance"
description: "Understand HEPA and ULPA integrity testing: classification versus leak scan, test stages, acceptance records and the limits of factory and site tests."
slug: "hepa-ulpa-integrity-testing"
keyword: "hepa and ulpa integrity testing"
order: 6
isPillar: false
pillarSlug: "filter-quality-verification"
published: 2026-11-01
series: filter-quality-verification
seriesTitle: Filter quality and verification
---

A high-efficiency filter can meet a classification requirement and still contain a leak. The two statements are not contradictory. Classification describes performance under a defined efficiency test. Integrity testing looks for a local defect through the media, bond, frame or gasket of a particular element.

Buyers often conflate these claims because both are expressed in efficiency terms. A supplier may report that a filter is H13, H14, U15 or another class, then state that it has passed a leak test. The buyer needs to know which test was performed on which object, under which standard, with what acceptance criterion and whether the result applies to the individual filter being purchased.

This page explains the practical structure of HEPA and ULPA integrity testing for procurement and quality teams. It is part of the [filter quality verification system](/knowledge/filter-quality-verification/) and assumes that a standard and performance class have already been selected for the application.

## 1. Distinguish Classification from Integrity

Classification answers a design-level question: does the filter element achieve a defined efficiency class under the specified challenge and method? Integrity testing answers an individual-unit question: does this element contain an unacceptable local pathway that would allow particles to bypass the intended filter medium?

The tests can use related aerosol and particle-counting technology, but their acceptance logic differs. A classification result is usually expressed as an efficiency class or penetration at the specified particle size. An integrity result is often based on a scan of the element surface and seals, comparing local downstream response with a defined criterion.

An element with good average efficiency can still have a pinhole or gasket leak. An element that passes a scan can still fail to meet the classification efficiency of the design if the media itself is not capable. These are separate evidence requirements.

**A classification certificate is not a substitute for an individual leak test, and a leak-test pass is not a substitute for classification.**

## 2. Identify the Test Object and Test Boundary

Integrity testing takes place at different levels:

- **Flat-sheet media:** a sample of the filter medium is tested for efficiency or pressure drop.
- **Finished element:** the complete filter element, including media pack, bond lines, frame and gasket, is tested.
- **Filter housing or installation:** the installed filter and its sealing interface are challenged in place.
- **Complete system:** the filter train is tested as part of cleanroom or process commissioning.

Each level answers a different question. Media testing can establish the performance of the medium, but it cannot detect a manufacturing defect in the finished element. A factory element scan can detect many element defects, but it cannot detect a poor seal at the installed housing interface. An installed test can detect a site leak, but it may not identify whether the leak originates in the filter, gasket, frame or housing.

The buyer should write the required boundary into the purchase order and acceptance record. “HEPA filter leak tested” is incomplete until the record states whether the test was performed on the element at the factory, the installed filter in the housing or the complete system.

## 3. Understand the Standard Landscape

EN 1822 and ISO 29463 are the principal standard families for high-efficiency filters. Their parts separate classification, aerosol generation and measurement, flat-sheet media testing, element leakage and element efficiency. A report that cites only the family name may not reveal which of those functions was tested.

EN 1822-4 and ISO 29463-4 address determination of leakage of filter elements by scan method. EN 1822-5 and ISO 29463-5 address determination of filter-element efficiency. The buyer should confirm the current edition and the exact part with the laboratory and supplier.

IEST-RP-CC034 addresses HEPA and ULPA filter leak testing and is often encountered alongside the EN/ISO framework. Its scope and recommended practices should be read directly; it is not a substitute for the product classification standard.

ISO 14644-3 provides test methods for cleanrooms and associated controlled environments, including installed-filter leakage testing. It is a system-level standard. A cleanroom test can provide evidence that the installed filter system is acceptable at the time of testing, but it does not establish the classification of a filter element or guarantee that future replacements will perform identically.

EU GMP Annex 1 may impose additional expectations for critical cleanroom filtration in sterile manufacturing. It is a regulatory guideline, not a test method. The buyer should map its obligations to the appropriate product, installation and monitoring standards rather than treating the guideline as a certificate.

## 4. Define What “Leak” Means in the Acceptance Record

A leak is a local penetration path that exceeds the agreed acceptance criterion. The criterion may be expressed as a local penetration, a ratio to the upstream challenge or another metric defined by the method. The buyer should not invent a criterion without understanding the standard, the detection method and the consequence of failure.

The acceptance record should state:

- Challenge aerosol or test method.
- Upstream concentration or challenge condition.
- Particle counter and sampling method.
- Scan coverage and instrument speed, where specified by the method.
- Acceptance criterion for a local leak.
- Acceptance criterion for the overall element, if different.
- Action after a leak is detected: repair, retest, reject or investigate.
- Identity of the tested element and the person or system that accepted it.

**A leak-test report that records only “passed” is weak evidence.** The buyer should be able to reconstruct what was challenged, how the element was scanned and what criterion was applied.

## 5. Recognise Where Leaks Occur

Integrity failures tend to concentrate at interfaces and transitions:

- Pleat-to-bond-line joints.
- Media folds and creases.
- Frame-to-media adhesive lines.
- Separator or support contact points.
- Gasket-to-frame attachment.
- Gasket compression surface.
- Header, sealant or potting interfaces.
- Damage caused during handling, packing or installation.

The test method must be capable of challenging those locations. A scan that covers only the central media area may miss a defective corner seal. A test performed before the element is installed may miss a housing gasket leak.

The first series' discussion of [why filters with the same efficiency rating can perform differently](/knowledge/air-filters-same-efficiency-different-performance/) applies here in a different form. Two elements may carry the same class label while differing in construction robustness, seal quality and handling tolerance. Integrity evidence is one way to expose those differences.

## 6. Separate Factory Testing from Site Testing

A factory element test is performed in a controlled environment where the element can be scanned before packing. It is the appropriate place to detect manufacturing defects and to release the individual element.

A site test is performed after installation, when the element is compressed against a housing, frame or ceiling grid. It can detect installation errors, damaged gaskets and leaks at interfaces that were not present in the factory test.

Both tests can be valid, but they are not interchangeable. A site test does not prove that every element in the shipment passed a factory scan. A factory scan does not prove that the site installation is leak-free. For a critical application, the quality plan may require both.

The site test can also create a false sense of permanence. A filter that passes at commissioning can be damaged by subsequent maintenance, pressure excursions or improper replacement. The buyer should define re-test triggers, such as filter replacement, housing repair, abnormal pressure drop or a contamination event.

## 7. Use Efficiency and Penetration Calculations Correctly

For a challenge with upstream concentration \(C_u\) and downstream concentration \(C_d\), efficiency and penetration are related by:

$$\eta = 1 - \frac{C_d}{C_u}$$

$$P = \frac{C_d}{C_u} = 1 - \eta$$

The calculations are simple, but the measurement conditions matter. A particle counter has a detection range, coincidence limit and sampling flow. The challenge aerosol must be stable and appropriate to the method. The downstream sample must be representative of the scanned area or of the total element, depending on the test purpose.

A local leak value and a total efficiency value should not be compared directly as if they were the same metric. One describes a local response during a scan; the other describes overall performance under a defined challenge. The acceptance criteria and calculation basis should be kept separate in the report.

For multiple filters in series, the overall penetration can be approximated by multiplying the penetrations when the stages are independent and the challenge is stable:

$$P_{total} \approx P_1 \times P_2 \times \cdots \times P_n$$

This relationship is useful for understanding why a downstream stage can reduce total penetration, but it does not prove that a leaking upstream element is acceptable. A local bypass can still create a risk that the downstream filter was not designed to manage.

## 8. Interpret H13, H14 and ULPA Classes Correctly

Classes such as H13, H14 or the ULPA categories are defined within a standard's classification framework. They are not universal descriptions that tell the buyer everything about construction, leak integrity or application suitability.

The class should be read together with:

- The standard and edition under which it was awarded.
- The MPPS concept and test method used.
- The tested object and size.
- The efficiency result and its uncertainty.
- The applicable leak-test requirement.
- The installation and gasket conditions assumed.

The buyer should not infer a specific numerical efficiency from a marketing statement or convert one class to another without the standard's definitions. H13 and H14 may be familiar labels, but the acceptance decision still requires the actual test evidence.

## 9. Control Repair and Retest

If an integrity test finds a leak, the response should be controlled. Some methods permit repair of a localized defect followed by retest. Other applications may require rejection. The quality agreement should define which is allowed.

The repair record should identify:

- The location and nature of the defect.
- The repair material and method.
- The quantity and size of repaired areas, where the method limits them.
- The retest result.
- The final acceptance decision.
- The identity of the element and the person who approved the repair.

An unreported repair is a configuration change. If a supplier can repair leaks without documenting them, the buyer cannot know whether the delivered element is the same construction that was approved. Repairs should be traceable even when they are permitted.

## 10. Check the Instrumentation and Test Conditions

An integrity test is only as good as the measurement system. The buyer should confirm that the test facility controls:

- Aerosol generation and stability.
- Upstream and downstream sampling.
- Particle counter calibration.
- Leak-check response time.
- Flow rate and pressure conditions.
- Background particle concentration.
- Instrument detection limits relative to the acceptance criterion.

The method may require a specific challenge concentration or scan speed. The buyer does not need to reproduce those details in the purchase order if the standard is correctly invoked, but should ensure that the report shows compliance and that deviations are documented.

If an in-house test is used for routine release, the buyer should verify that the method is validated and that the equipment is calibrated. A test that cannot reliably detect the acceptance threshold is not a meaningful release control.

## 11. Design the Acceptance Record for Traceability

The record should connect the test to the individual filter and to the shipment. Useful fields include:

- Filter model, size and serial number.
- Production batch or work order.
- Test method, standard and edition.
- Instrument ID and calibration date.
- Challenge aerosol and upstream concentration.
- Scan result, local leak result and total efficiency, as applicable.
- Acceptance criterion and decision.
- Repair and retest records, if any.
- Operator and approval signature or electronic identity.
- Date and production site.

For multiple-element orders, the buyer should agree whether every element is leak-tested or whether the supplier uses a defined sampling and audit plan. If sampling is used, the statistical and risk basis should be explicit. Critical applications may require individual testing.

## 12. Review the Supplier's Test Boundary

A supplier may perform an internal leak check but not a full classification test. That can be acceptable for production release if the design classification is supported by other evidence. The buyer should confirm:

- Which test is performed on every element.
- Which test is performed on a sample.
- Which test is performed by an independent laboratory.
- How the internal method compares with the contractual method.
- What happens when an internal result is borderline or failed.

An internal check can be faster and more practical than a full third-party classification test. It is not automatically equivalent. The quality agreement should state the role of each test and the evidence required for release.

## 13. A Test-Level Matrix

The following table is an illustrative planning aid. It does not prescribe universal acceptance criteria.

| Test level | Object tested | Typical evidence | Main limitation |
|---|---|---|---|
| Media efficiency | Flat-sheet sample | Media test report | Does not prove finished-element integrity |
| Classification efficiency | Finished element | Element efficiency report | Does not prove every production unit is leak-free |
| Factory element scan | Individual finished element | Leak-scan record | Does not prove installed housing seal |
| Site filter test | Installed element and housing | Commissioning or replacement test record | May not isolate the source of a leak |
| System test | Filter train or cleanroom | Cleanroom/installation test report | Does not classify individual filter elements |

The matrix helps prevent a common procurement error: asking for one test to answer every integrity question. The correct plan assigns each question to the right test level.

## 14. Common Failure Points in Procurement

The most common problems are procedural:

- The specification names a class but not a leak-test method.
- The report names a standard family but not the part or test object.
- A factory scan is assumed to cover installation.
- A site test is assumed to cover every delivered element.
- The acceptance criterion is not stated.
- Repairs are permitted without traceability.
- The test is performed before a relevant design or process change.
- The buyer does not receive records linked to the batch or serial.

These problems can exist even when the supplier's test equipment is good. **The value of integrity testing depends on the question the buyer asks and the record the supplier can provide.**

## 15. Questions to Put to the Supplier

Before approving a high-efficiency filter, ask the supplier to answer the following questions in writing:

1. Which standard, part and edition govern the classification claim, and which govern the leak test?
2. Is the leak test performed on every element, on a sample or only on a qualification unit?
3. What is the tested object: media, finished element, installed element or complete system?
4. What challenge aerosol, instrument and scan coverage are used?
5. What is the local acceptance criterion, and how is a borderline result handled?
6. Are repairs permitted, and how are repaired areas recorded and retested?
7. How is the test record linked to the serial number, batch and shipment?
8. What site test is required after installation, and who accepts the result?
9. What change in media, adhesive, gasket, frame or production site would require retesting?
10. What does the report explicitly exclude from its conclusion?

The supplier's answers should be consistent with the report and the quality agreement. If the answer is “the certificate covers it,” ask which certificate, issued by whom, for which test object and against which criterion. A certificate is useful only when its scope matches the claim.

This questioning process also helps the buyer distinguish a supplier with controlled test evidence from one that is repeating marketing language. A technically strong supplier should be able to explain why a test was selected, where leaks typically occur and how a failed element is dispositioned. That explanation is not itself a test result, but it is evidence of a controlled process.

## The practical position

The practical position is that "leak tested" means nothing until the buyer names the test level and the record that closes acceptance. We would specify the factory element scan, installed filter test and system verification separately, with the accepting party identified for each. A supplier certificate should not waive the installed interface check, because the bypass path belongs to the assembly rather than the element alone. The test that matters is the one performed on the boundary the buyer controls. If the plan cannot say who signs off each boundary, it is not yet a verification plan.

## 16. What this page does not claim.

This page is a technical procurement guide, not a test report, certification or substitute for the current text of EN 1822, ISO 29463, IEST-RP-CC034, ISO 14644 or any regulatory guideline. It does not establish that a particular filter, housing, test method or installation meets a leak or efficiency requirement. Acceptance criteria and test procedures must be confirmed with the applicable standard and qualified testing professionals. Final product and installation acceptance remain the buyer's responsibility, supported by independent testing where the application risk requires it.
