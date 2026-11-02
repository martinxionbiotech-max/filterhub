---
title: "Cleanroom Classification and What It Demands from Filtration"
metaTitle: "Cleanroom Classification and Filtration"
description: "How ISO cleanroom classification drives airflow, terminal filtration and verification, and why a filter class alone cannot establish a room class."
slug: "cleanroom-classification-filtration"
keyword: "cleanroom classification filtration"
order: 4
isPillar: false
pillarSlug: "hvac-hepa-cleanroom-selection"
published: 2026-11-01
series: hvac-hepa-cleanroom
seriesTitle: HVAC, HEPA and cleanroom systems
---

Cleanroom filtration discussions often begin with a filter class: H13, H14, U15, or some catalogue label. That is the wrong starting point. A cleanroom is classified by the particle concentration it can maintain under defined conditions, and the filtration system is only one part of the design that makes that classification possible. The room's air-change rate, airflow pattern, pressure relationships, construction, garments, cleaning regime and operational discipline all interact with the filters.

The practical consequence is simple: **define the cleanliness target and the room strategy before selecting the filter class and stage count.** If the design starts with a preferred filter and works backward, it may produce a technically impressive filter installation that cannot demonstrate the required room class. This article explains what ISO 14644 classification demands from filtration and how to connect the two without confusing a catalogue rating with a room result.

## 1. What a Cleanroom Classification Actually Means

ISO 14644-1 defines cleanroom classes by the maximum permitted concentration of airborne particles at specified particle sizes. The class is a statement about the airborne particle concentration in the room under the conditions defined for the classification test. It is not a statement that the room is sterile, safe for every product, free of chemical contamination or suitable for every process.

That distinction matters because a cleanroom may need control of:

- Airborne particles in a specific size range.
- Viable particles and microbial contamination.
- Chemical vapours or outgassing.
- Pressure relationships to adjacent spaces.
- Temperature and humidity.
- Airflow direction and recovery after disturbance.

Particulate filtration can contribute to the first item and support some of the others, but it cannot provide all of them. A HEPA filter does not sterilize the air, remove every gas or establish a pressure gradient by itself. Those outcomes require separate controls and verification.

The standard's numerical limits should be read from the current standard itself, not inferred from a catalogue summary or copied from a secondary table. The same applies to ISO 14644-3, which defines test methods used to demonstrate performance. The standard family provides the framework; the project must define the operating state, acceptance criteria and test plan.

## 2. Class Is a Room Property, Not a Filter Property

A filter's EN 1822 or ISO 29463 class describes its tested filtration performance under specified conditions. A room's ISO 14644 class describes the particle concentration that the room can demonstrate under its own classification conditions. These are different objects of classification. A catalogue-listed H14 terminal filter does not make a room ISO Class 5, ISO Class 6 or any other class. It may be part of a design intended to reach such a class.

The confusion is common because filter marketing and cleanroom conversation both use short labels. A buyer may ask for "an ISO Class 5 HEPA filter" when no such filter class exists in the same sense as a room class. The technically meaningful request is a filter class, an installed leak-test requirement, a room classification target, an airflow plan and a verification method.

The [HEPA versus ULPA guide](/guides/hepa-vs-ulpa/) explains the high-efficiency filter families. The [cleanroom filtration solutions guide](/guides/cleanroom-filtration-solutions/) covers the system architecture. This page keeps the distinction visible: the filter supports the room; it does not define the room.

The classification also needs an operating-state definition. A cleanroom may be assessed in an at-rest condition, an operational condition or both, depending on the project and the applicable requirements. The particle sources and airflow patterns can differ substantially between those states. A design that is satisfactory only when the room is empty and equipment is off may not protect the process during production. The test plan should state which states are being demonstrated and how the room is prepared for each one.

## 3. Particle Sources Determine How Much Filtration Can Achieve

A cleanroom's particle concentration is the result of particle generation and removal. Sources include:

- People and their clothing.
- Process equipment, motion and friction.
- Materials entering the room.
- Cleaning and maintenance activities.
- Air entering from outside or adjacent spaces.
- Leakage through walls, ceilings, doors and service penetrations.
- Filter bypass and damaged seals.
- Outgassing and condensation that later produces particles.

Terminal HEPA or ULPA filters control particles in the supply air, but they do not stop a person from shedding particles inside the room, a machine from generating wear debris, or a poorly sealed door from admitting contaminated air. This is why cleanroom design combines source control, room pressurization, garments, cleaning and airflow organization with filtration.

The system-level implication is that more filter efficiency cannot compensate for an uncontrolled internal source. If the particle load is dominated by people or process activity, improving the terminal filter class may have less effect than reducing the source, improving the airflow pattern or correcting the pressure relationship. The [air filter performance pillar](/knowledge/air-filter-performance/) provides the general efficiency framework, but cleanroom decisions must include the room's source profile.

### Particle size and sampling plan belong to the target

"Cleanroom class" is not a single particle-size requirement detached from the process. The classification standard defines classes across specified particle sizes, and the project must identify which sizes and operating conditions are relevant. A process sensitive to fine particles may need a different control emphasis from one dominated by larger airborne debris, even if both rooms carry the same class label.

The sampling plan also matters. A classification result depends on where samples are taken, how many locations are used, the sample volume and the operating state. A room with a favorable average count can still have a local contamination problem near a critical operation. The design should place the filtration and airflow strategy around the actual critical zone, not only around the room's nominal average.

## 4. Air-Change Rate Connects Airflow to Room Volume

Cleanrooms are often described by air changes per hour. The relationship is:

$$
Q = \frac{NV}{3600}
$$

where $Q$ is supply airflow in cubic metres per second, $N$ is air changes per hour, and $V$ is room volume in cubic metres. The unit conversion changes if other units are used. The equation shows that a larger room needs more airflow to achieve the same nominal air-change rate.

Air changes alone do not guarantee a cleanliness class. They are a design indicator, not a complete performance statement. The airflow pattern, supply location, return location, obstructions, thermal plumes and operator activity determine whether the supplied clean air actually protects the critical zone. A room can have a high air-change rate and still have stagnant zones or particle transport into a critical area.

The equation is still useful for checking whether a filtration and fan design can deliver the intended air volume. A terminal filter system that cannot supply the required flow will not meet the room's needs regardless of its filter class. An FFU layout with insufficient coverage or an unsuitable outlet pattern can create local conditions that differ from the average.

## 5. Unidirectional and Non-Unidirectional Airflow Need Different Terminal Strategies

Cleanroom airflow is often described as unidirectional or non-unidirectional. In a unidirectional zone, air moves in a controlled direction across the protected area, typically from a ceiling filter array toward returns. The intent is to carry particles away from the critical surface and to reduce mixing. In a non-unidirectional room, supply air mixes with room air to dilute particle concentration.

The filtration strategy should follow the airflow concept:

- A unidirectional zone usually needs terminal filter coverage and an outlet pattern that supports the designed flow field.
- A non-unidirectional room may use fewer terminal filters and rely on dilution, provided the air-change and mixing design are adequate.
- Local protection, such as a clean bench or isolator, may be more appropriate than trying to make an entire large room unidirectional.
- Returns and obstructions must be considered; a filter array cannot correct a short-circuited air path.

The [terminal filtration selection article](/knowledge/terminal-filtration-selection/) compares FFUs, terminal boxes and ceiling-grid filters. Those forms are not interchangeable solely on filter class. Their fan, housing, outlet and service access determine how they contribute to the airflow strategy.

## 6. Where Filtration Sits in the Cleanroom Air Path

A cleanroom air-handling system may include:

1. Outdoor-air and recirculation pre-filtration.
2. Secondary filtration to protect coils and terminal filters.
3. Cooling, heating, humidification and dehumidification.
4. Ductwork and pressure-control devices.
5. Terminal HEPA or ULPA filtration at the room boundary.
6. Return paths, exhaust and pressure relationships.

The terminal stage is closest to the protected zone, but it is not the only stage. A loaded or bypassing pre-filter can increase pressure and reduce the terminal airflow. A poorly designed duct can introduce contamination after the final AHU filter. A terminal housing can leak at its seal even when the filter's factory test was satisfactory.

The [HEPA filter category](/products/hepa-filters/) and [cleanroom equipment category](/products/cleanroom-equipment/) show the range of finished filters and equipment forms. A catalogue-listed [gel-seal HEPA filter](/products/hepa-filters/airy-gel-hepa/) may be considered for a terminal position with the appropriate housing. A [fan filter unit](/products/cleanroom-equipment/klc-ffu/) may be considered where a self-contained fan and terminal filter are appropriate. Neither catalogue listing proves the room class; the installed system and its verification do.

The [HVAC filtration staging article](/knowledge/hvac-filtration-staging/) explains how upstream stages protect downstream filters. In cleanrooms, staging also protects the terminal filter from unnecessary loading and helps maintain the designed airflow over the service interval.

## 7. The Filter Class Must Match the Terminal Duty and the Room Risk

Once the room target and airflow strategy are defined, the filter class can be selected. The choice should account for:

- The particle-size range that matters to the product or process.
- The required terminal efficiency and its test basis.
- The consequences of a leak or bypass.
- The housing and seal type.
- The pressure drop and fan capacity.
- The required in-situ leak test.
- The service and replacement procedure.

For many cleanroom applications, HEPA-class filters are the terminal baseline and ULPA-class filters may be considered where the process requires greater capture at the most penetrating particle size or where the contamination consequence justifies the additional system burden. That is a system trade-off, not a universal rule. The [HEPA versus ULPA system trade-off article](/knowledge/hepa-ulpa-system-tradeoff/) examines the costs and benefits.

The catalogue can describe a filter as H13, H14 or another class, but the buyer should ask for the exact model, test basis, dimensions, airflow, pressure drop and seal interface. The [test report guide](/knowledge/read-filter-test-report/) and [test standard selection guide](/knowledge/filter-test-standard-selection/) help make that request precise. A high-efficiency class that cannot be verified in the installed housing is not a robust cleanroom decision.

## 8. Verification Is Part of the Filtration Design

ISO 14644-3 provides test methods for cleanrooms. The project should define which tests are required, at which operating state, and with what acceptance criteria. Typical verification questions include:

- Does the installed terminal filter and housing pass the specified leak test?
- Is the airflow volume within the design range?
- Is the pressure relationship between rooms as intended?
- Is the particle concentration within the required class under the agreed conditions?
- Does the room recover to its required condition after an agreed disturbance?
- Are filters, seals, frames and access panels intact after installation and maintenance?

An in-situ leak test is not the same as a filter's factory test. The factory test may characterize the filter under controlled conditions; the installed test checks the filter, seal, frame and housing as assembled in the room. The [HEPA and ULPA integrity testing guide](/knowledge/hepa-ulpa-integrity-testing/) explains the interface issues that can invalidate an otherwise suitable filter.

| Verification question | Method family | Record that should exist |
|---|---|---|
| Is the installed terminal filter and housing leak-tight? | In-situ leak detection appropriate to the filter and installation | Test method, instrument, acceptance criterion, location, result and corrective action |
| Is the supply airflow within the design range? | Airflow or velocity measurement at the agreed positions | Design value, measured value, instrument and operating state |
| Are pressure relationships maintained? | Differential-pressure measurement between defined spaces | Setpoint, measured value, reference space and alarm response |
| Does the room meet the required particle class? | Particle-counting method under ISO 14644-3 | Sample locations, sample volume, operating state and result |
| Does the room recover after disturbance? | Recovery test under the agreed procedure | Disturbance, recovery criterion, time and result |
| Are filters and seals intact after maintenance? | Visual inspection plus the specified leak test | Replacement record, seal condition and retest result |

The table is a planning aid, not a list of tests that every project must perform. The applicable tests and acceptance criteria come from the standard, the project specification and the room's risk assessment.

The [batch consistency guide](/knowledge/filter-batch-consistency/) is relevant because a cleanroom's approved performance depends on repeatable filters. A change in media, pleat geometry, seal or frame can alter both efficiency and pressure. The [quality agreement guide](/knowledge/filter-quality-agreement/) can define notification and requalification expectations.

## 9. Design Changes Can Invalidate a Classification Assumption

A cleanroom classification is not a permanent property of the room. Changes in layout, equipment, occupancy, garments, cleaning chemicals, air balance, filter type, fan speed or maintenance access can affect particle concentration and airflow. A filter replacement that seems identical may have different pressure characteristics or a different seal. A new machine may generate more particles or obstruct the airflow path.

This is why change control belongs in the cleanroom management system. The filter supplier and the facility team should agree on:

- Which filter attributes are critical to the approved design.
- What constitutes a change requiring notification.
- Whether a new sample or batch must be validated.
- How installed performance will be checked after the change.

The [change management guide](/knowledge/filter-change-management/) and the [batch consistency guide](/knowledge/filter-batch-consistency/) describe the supplier-side controls. The room owner retains responsibility for the cleanroom's continued classification and operational control.

A seemingly minor maintenance change can be significant. Replacing a terminal filter with a model that has a different pressure curve may alter the airflow balance across a group of terminals. Changing a fan speed to reduce noise may reduce air changes below the design value. Replacing a gasket with a different material may change compression or chemical compatibility. These changes should be assessed before they are made, not discovered during the next classification test. The room's approved baseline should include the filter model, seal type, fan setting and test criteria that were part of the original verification.

The maintenance record should also capture the condition found during replacement. A damaged gasket, dust trail, distorted frame or loose access panel is evidence about the installed system, not merely a service note. If the same issue appears repeatedly, the room may need a design correction rather than another filter change. Linking maintenance findings to the verification record helps the facility learn from the installation.

## 10. A Procurement Sequence for Cleanroom Filtration

The sequence below keeps the room target ahead of the product choice:

1. State the required ISO 14644 class, particle sizes and operating state.
2. Define the airflow pattern, air-change rate and pressure relationships.
3. Identify internal and external particle sources.
4. Decide where terminal filtration belongs and how it will be serviced.
5. Select filter class, housing, seal and test method together.
6. Define factory and in-situ verification.
7. Review pressure, fan energy and replacement access.
8. Approve a sample and batch control plan.
9. Verify the installed room under the agreed conditions.
10. Control changes after approval.

Use the [RFQ page](/rfq/) to provide the room target, airflow, filter position, housing, test expectations and documentation requirements. A request that contains only a filter class and a face dimension leaves the supplier to guess the system duty.

The central judgment is this: **cleanroom filtration should be selected from the room's classified performance requirement, not from a filter catalogue's highest available label.** The room target determines the airflow, terminal strategy and verification plan; the filter is one controlled contributor to that plan.

## The practical position

The practical position is that a cleanroom filtration proposal should be judged at its weakest boundary, not by the terminal filter's class. We would require the supplier to show how the filter, housing, seal, airflow and verification fit together before discussing a grade. A strong element cannot compensate for a bypass path, and a room test cannot repair a poorly specified interface. We would prefer a slightly lower-performing assembly that can be installed and leak-tested repeatably over a premium filter whose performance depends on site improvisation. If the proposal cannot name what the supplier excludes, it is not a system proposal.

## 11. What this page does not claim.

This page is a system-selection explanation, not a cleanroom design or validation protocol. It does not state that any filter, FFU or equipment item will achieve a particular ISO class in a specific room. It does not replace ISO 14644 methods, project engineering, risk assessment or commissioning by qualified professionals. It is not a recommendation to use a particular filter class for a particular cleanroom application.
