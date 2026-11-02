---
title: "HVAC, HEPA and Cleanroom Filtration: A System-Level Selection Guide"
metaTitle: "HVAC, HEPA and Cleanroom Selection Guide"
description: "A system-level method for choosing HVAC, HEPA and cleanroom filtration by application, air target, pressure budget, energy use and verification."
slug: "hvac-hepa-cleanroom-selection"
keyword: "HVAC HEPA cleanroom filtration selection"
order: 0
isPillar: true
pillarSlug: "hvac-hepa-cleanroom-selection"
published: 2026-11-01
series: hvac-hepa-cleanroom
seriesTitle: HVAC, HEPA and cleanroom systems
---

An air filter is usually bought as an object, but it operates as part of a system. The same filter can be a sound choice in one air handling unit and a poor choice in another because the surrounding decisions differ: what is being removed, how much air must pass, how much pressure the fan can supply, how the filter is sealed into its frame, how often it can be changed, and what evidence is needed to prove that the installation performs as intended.

That is why a catalogue class alone cannot answer a selection question. A G4 panel filter, an F7 pocket filter, an H13 terminal filter and a U15 ULPA filter are not points on a single "good-better-best" scale. They belong to different duties. The useful question is not "Which class is highest?" It is "Which combination of stages, airflow paths, pressure drops, seals and verification steps delivers the required environment at an acceptable operating cost?"

This guide sets out a system-level method for answering that question. It is deliberately broader than a definition guide. The existing [filter efficiency grades guide](/guides/filter-efficiency-grades/) explains the main classification systems; the [HEPA versus ULPA guide](/guides/hepa-vs-ulpa/) explains the conceptual difference between those two families. This page assumes those distinctions and focuses on the engineering decisions that follow: where filtration should sit, how many stages are justified, how pressure and energy interact, how cleanroom targets change the architecture, and where a normal HVAC approach stops being adequate.

## 1. Define the System Boundary Before the Filter

A filtration system starts where contaminated air enters and ends where the protected space or process receives it. That boundary may include an outdoor-air louvre, a pre-filter, a mixing box, a heating or cooling coil, a secondary filter, ductwork, a final filter, a terminal housing, return grilles and recirculation paths. The filter is only one resistance in that network.

Start by writing down five facts:

- The contaminant or contaminant mixture that matters.
- The required condition of the protected space or process.
- The design airflow and its normal operating range.
- The available pressure budget and the fan's control method.
- The access, changeout and verification constraints.

Without those facts, class selection becomes a habit. A buyer may specify a higher class because it feels safer, or retain an old class because it worked in another building. Neither is a design method.

The table below is a useful way to expose missing information early. It does not prescribe filter classes; it assigns the questions that must be answered before a class is chosen.

| Decision layer | Question to settle | Evidence needed before selection |
|---|---|---|
| Source | What is generated, and where? | Process description, outdoor-air data, internal activity, pollutant inventory |
| Exposure | Who or what is protected? | Occupancy, product sensitivity, regulatory or company limit, duration of exposure |
| Air path | Where does supply, return and exhaust air go? | Airflow diagram, pressure relationships, recirculation fraction |
| Filtration duty | Which particles or gases must be removed at which stage? | Particle-size range, gas or odour problem, loading expectation |
| Energy | What pressure can the fan tolerate over the service interval? | Fan curve, design airflow, allowable pressure rise, control strategy |
| Installation | How will the filter be sealed, supported and replaced? | Housing drawing, frame dimensions, access clearance, changeout procedure |
| Verification | How will performance be demonstrated? | Test standard, report requirements, acceptance criteria, in-situ leak test plan |

The first useful deliverable is therefore not a filter list but a short system brief. Even a one-page brief prevents a common failure: selecting a final filter on aerosol efficiency while ignoring the pressure and access consequences that make the system unmaintainable.

### Separate requirements from preferences

A requirement is an outcome with a verifiable acceptance method. "The room must meet the agreed ISO 14644 class under the specified operating state" is a requirement. "The terminal filter should be H14" may be a design preference or a consequence of the requirement, depending on the evidence. "The last project used a V-bank" is a habit.

The distinction matters during value engineering. If a preferred filter class is treated as a requirement, the project may reject a lower-class option that still meets the room target with a better housing and seal. If a true requirement is treated as a preference, a cost reduction may remove the protection that the room actually needs. Writing the brief in terms of outcomes makes it possible to test substitutions against evidence rather than against opinion.

The brief should also identify who accepts each outcome. Filtration decisions can cross engineering, facilities, quality, safety, procurement and the process owner. When no one owns the room target, a supplier's catalogue becomes the de facto specification. When the owner is explicit, the supplier can be asked for a system that supports the target rather than a product that happens to be available.

A third distinction is between design facts and assumptions. Airflow, housing dimensions and contaminant chemistry should be facts where possible. Filter loading, operating hours and future process changes may be assumptions. Label them. An assumption that is visible can be tested during commissioning or adjusted in the maintenance plan. An assumption hidden in a quotation becomes a false certainty.

This is also where the commercial boundary should be clarified. The page on [industrial HVAC filtration](/pillars/industrial-hvac/) frames the broader application and sourcing context. The filter selection itself must still be made against the actual air path, not against a generic application label.

## 2. Start With the Required Environment, Not a Filter Class

The most reliable sequence is to define the required environment first, then work backward to the filtration stages. The reverse sequence - choose a fashionable filter class, then find a justification - creates class inflation, unnecessary pressure drop and false confidence.

Consider four simplified outcomes:

1. **Acceptable indoor air for ordinary occupancy.** The goal is to reduce particulate matter and protect the HVAC equipment without imposing an unreasonable energy or maintenance burden.
2. **Enhanced protection for sensitive occupants or processes.** The goal may include lower particle concentration, better odour control, pressure relationships or local protection at a critical zone.
3. **A classified cleanroom or controlled environment.** The goal is defined by a cleanliness classification and supported by airflow organization, room construction, garments, cleaning and monitoring, not by filters alone.
4. **Protection of a process or equipment from a specific contaminant.** The goal may be removal of grease, metal fume, oil mist, high-temperature particles, corrosive aerosol or molecular contamination, and may require a technology outside ordinary ventilation filtration.

These outcomes imply different system questions. The first is primarily an air-quality and energy decision. The second adds risk assessment and perhaps carbon or local filtration. The third requires a cleanroom design, commissioning and verification process. The fourth requires a contaminant-specific process solution and should not be treated as a stronger version of the first.

For the first two outcomes, ISO 16890 provides a particulate classification framework organized around ePM1, ePM2.5 and ePM10 groups, with a coarse group. ASHRAE 52.2 provides MERV classifications. These are not interchangeable with each other or with the EN 1822 E10-U17 family used for high-efficiency filters. A responsible specification names the classification system, the test method and the operating airflow instead of writing "high efficiency" as if it were a universal quantity.

For cleanrooms, ISO 14644-1 defines classes by the maximum permitted concentration of airborne particles at specified sizes, and ISO 14644-3 provides test methods. The classification is a property of the room under defined conditions, not a certificate that a filter automatically confers. A cleanroom filter is part of the route to that condition, but room air changes, airflow pattern, pressurization, garments, cleaning and particle generation all affect the result. The [cleanroom filtration guide](/guides/cleanroom-filtration-solutions/) covers those system elements in more detail.

The important judgment is this: **first establish the target environment and the dominant contamination mechanism; only then decide the stages and classes.** If the target is "lower particulate exposure in an office," a terminal HEPA system is usually not a proportionate response. If the target is a classified zone with a defined particle concentration and a validated airflow pattern, a general HVAC filter alone cannot be the response either.

## 3. Use a Five-Layer Selection Model

A system-level review can be organized into five layers. Not every project needs all five, but every project should test whether one of them is missing.

### Layer 1: source control and housekeeping

The cheapest particle is the one that never enters the air stream. Local exhaust at a process, enclosure of a dust-generating operation, better cleaning, and control of outdoor-air intake location can reduce the filtration burden more reliably than adding another filter stage. Source control also protects workers before the air reaches a general ventilation system.

### Layer 2: pre-filtration

Pre-filtration captures coarse dust and protects downstream coils, ductwork and filters. It should be selected for high dust-holding capacity at the expected loading rate, not merely for a nominal class. A pre-filter that is efficient but loads quickly can increase maintenance frequency and pressure rise. The relationships between efficiency, dust loading and service life are developed in the [air filter performance pillar](/knowledge/air-filter-performance/) and the [dust-holding capacity guide](/knowledge/air-filter-dust-holding-capacity/).

### Layer 3: secondary or main filtration

The secondary stage performs the main particulate duty for the occupied space or protects the final stage. Its selection depends on the outdoor-air quality, recirculation ratio, particle-size target and the pressure budget. A pocket or V-bank arrangement may be appropriate where media area and airflow capacity matter; the [pocket filter category](/products/pocket-filters/) and [HVAC filter category](/products/hvac-filters/) show available form factors.

### Layer 4: final or terminal filtration

Final filtration provides the last controlled barrier before supply air enters the protected zone. In a cleanroom this is often a HEPA or ULPA filter mounted at the terminal position, such as an FFU or terminal housing. The [HEPA filter category](/products/hepa-filters/) and [cleanroom equipment category](/products/cleanroom-equipment/) illustrate the equipment interface. This layer is discussed further in section 7.

### Layer 5: gas, vapour or odour control

Particulate filters do not remove gases and vapours by size exclusion. Where odour, corrosive gases, solvent vapour or other molecular contaminants matter, a separate adsorption or chemical-media stage is required. The [activated carbon filter category](/products/activated-carbon/) is relevant only after the contaminant, concentration, humidity and required changeout strategy have been checked. Carbon selection is a separate engineering problem, not an automatic accessory to a HEPA filter.

A simplified series-efficiency expression shows why stages are not additive in the way buyers sometimes expect:

$$
\eta_{\mathrm{system}} = 1 - \prod_{i=1}^{n}\left(1-\eta_i\right)
$$

Here, $\eta_i$ is the fractional efficiency of stage $i$ for the same particle-size range and test basis. A downstream stage cannot compensate for a large upstream bypass, a poor seal or an incorrectly characterized aerosol. The formula describes the ideal series result; the installed system still depends on the air actually passing through the filter.

## 4. HVAC Staging Is a Load-Sharing Decision

HVAC filtration staging is often described as pre-filter, secondary and final. The labels are useful, but the engineering logic is load sharing. The upstream stages should carry the coarse burden and protect the downstream stages; the downstream stages should deliver the performance that the occupied space or process requires.

The common mistake is to specify all three stages by class alone. A better specification states what each stage is expected to do:

| Stage | Primary job | Design questions | Failure mode to avoid |
|---|---|---|---|
| Pre-filter | Protect coils, ductwork and downstream filters; capture coarse load | How much dust, how fast, and at what humidity? What pressure rise triggers changeout? | High initial efficiency with low dust capacity; long intervals causing bypass or collapse |
| Secondary | Deliver the main indoor-air or equipment-protection duty | What particle-size range dominates? What final efficiency is needed after the pre-filter? | Class chosen without checking actual airflow and pressure drop |
| Final | Protect the occupied space or terminal process | Is the final filter the last barrier, or is a terminal HEPA required? How is it sealed? | Treating a high-class filter as a substitute for cleanroom design |

A useful starting point is to calculate the downstream particle load after each stage. If the pre-filter removes most of the coarse mass, the secondary filter's loading rate and service interval change. If the secondary stage removes the fine fraction needed by the application, a final stage may be justified mainly by the consequence of failure or by a specific terminal requirement, not by a vague preference for more filtration.

Staging also changes fan energy. Each stage adds resistance, and the pressure drop of every stage changes with loading. A three-stage system may have a lower-particulate downstream environment but a higher total fan pressure than a two-stage system. Whether that trade is justified depends on the value of the protected outcome, the fan's ability to deliver the flow, and the maintenance frequency. The [HVAC filtration staging article](/knowledge/hvac-filtration-staging/) examines the selection logic stage by stage.

For many ordinary ventilation systems, a well-matched pre-filter and secondary filter can meet the particulate target without a final HEPA stage. For a cleanroom or a highly sensitive process, the terminal stage may be non-negotiable. The difference is the required outcome, not a hierarchy in which every system should progress toward the highest possible class.

## 5. Pressure Drop Is the Filter's Operating Price

The purchase price of a filter is visible at the transaction. Its pressure drop is visible every hour the fan runs. A filter with a lower initial resistance can still be the more expensive choice over its service life if it loads quickly or if its final resistance is high. Conversely, a filter with a higher initial resistance may be justified if it provides a longer service interval and the fan has pressure margin.

For a fan moving air at volumetric flow $Q$ against a pressure difference $\Delta P$, the useful hydraulic power can be approximated as:

$$
P_{\mathrm{air}} = Q\,\Delta P
$$

The electrical input is larger because fan, motor and drive efficiency are never perfect:

$$
P_{\mathrm{electric}} \approx \frac{Q\,\Delta P}{\eta_{\mathrm{fan}}}
$$

The exact unit conversion depends on the units used; the engineering point is the proportional relationship. For a fixed airflow, fan power rises approximately in proportion to total pressure drop. The filter's resistance is therefore part of the energy equation, not a secondary data point.

Filters are normally specified at an initial pressure drop and replaced at a final pressure drop. The relevant operating resistance is somewhere between those values, influenced by dust loading and airflow control. A variable-speed fan may reduce flow as resistance rises, which can change both room conditions and energy use. A constant-volume fan may consume more energy to maintain flow. The [pressure drop guide](/knowledge/air-filter-pressure-drop/) and the [life-cycle cost article](/knowledge/filter-fan-energy-lifecycle-cost/) explain how to read and compare those values.

For system selection, ask three questions:

- Is the quoted pressure drop measured at the design airflow, or at a convenient catalogue airflow?
- What final pressure drop is assumed, and does the fan remain within its stable operating range?
- Does the maintenance plan measure pressure rise, or does it rely on a fixed calendar interval?

The answers often distinguish a plausible catalogue comparison from a defensible system choice. A [medium V-bank filter](/products/hvac-filters/klc-med-vbank/) or a [pocket filter](/products/pocket-filters/airy-merv-pocket/) may be catalogued in a similar class range, but their pressure, media area and loading behaviour are not interchangeable. The form-factor comparison belongs in the system decision, not in a footnote.

## 6. Cleanroom Classification Changes the Architecture

A cleanroom is not simply a room with a high-efficiency filter. It is a controlled environment in which particle concentration, airflow, pressure, temperature, humidity, cleaning, garments and operational discipline are designed and verified together. ISO 14644-1 defines cleanliness classes in terms of permitted particle concentrations; ISO 14644-3 describes test methods. Neither standard tells a buyer which filter to install without considering the room, the process and the contamination-control strategy.

The first cleanroom decision is the required classification at the relevant operating state, followed by the airflow organization that can maintain it. A unidirectional-flow zone may need terminal filters distributed across the ceiling, with airflow and room geometry designed to protect the critical area. A non-unidirectional room may rely on dilution and mixing, with terminal filters and return paths arranged to avoid stagnant zones. The [cleanroom classification article](/knowledge/cleanroom-classification-filtration/) sets out the relationship between class, air changes and filtration, and the existing [cleanroom filtration solutions guide](/guides/cleanroom-filtration-solutions/) covers FFU and contamination-control choices.

The filter class that appears in a catalogue is a filter property, not a room classification. A catalogue-listed H13 or H14 filter may be appropriate for a terminal position, but the room's cleanliness still depends on installed leakage, gasket compression, frame integrity, airflow balance and operational control. This is why a terminal HEPA filter should be selected together with its housing and commissioning method, not as a loose component.

The same logic applies to pressure relationships. A cleanroom may need positive pressure relative to an adjacent area to control ingress, or negative pressure to contain a hazard. Those relationships are established by differential air volumes and room sealing, not by a filter class. Filtration supports the strategy; it does not replace it.

ISO 14644-3 is relevant because a system-level selection should specify how performance will be verified. A filter that is correct on paper but impossible to leak-test, access or replace cleanly is not a good system choice.

## 7. Terminal Filtration Is an Interface, Not Just a Filter

Terminal filtration places the final filter close to the protected zone. The common forms are a fan filter unit (FFU), a terminal filter box fed by ducted air, or a filter mounted in a ceiling grid or gel-seal housing. Each form changes the pressure responsibility, installation tolerances, service access and fan energy.

An FFU contains its own fan, so it can be used in a ceiling grid without a central ducted supply to each terminal. Its airflow and outlet pattern must be matched to the room, and its fan energy must be included in the system calculation. A ducted terminal box relies on the central air handler to overcome the filter and duct resistance; the fan may be remote, but the pressure still has to be available. A ceiling-grid filter in a gel-seal housing depends on the housing, knife edge or gasket interface and installation technique for a leak-free seal.

The selection question is not "Which is best?" It is "Which interface can be installed, sealed, balanced, tested and maintained in this room?" The [terminal filtration selection article](/knowledge/terminal-filtration-selection/) compares the forms in detail. The [HEPA and ULPA integrity testing guide](/knowledge/hepa-ulpa-integrity-testing/) explains why the installation interface deserves as much attention as the filter medium.

This is also where the catalogue should be read carefully. A [gel-seal mini-pleat HEPA filter](/products/hepa-filters/airy-gel-hepa/) is catalogued as H14; a [24x24 HEPA filter](/products/hepa-filters/klc-24x24-hepa/) is catalogued with an H13/H14 span; an [FFU](/products/cleanroom-equipment/klc-ffu/) is catalogued with configurable H13/H14 filtration. Those are catalogue descriptions, not a statement that an installed system will achieve a particular room class. The buyer should verify the exact model, test basis, housing interface and acceptance test.

The practical judgment: **most terminal filtration failures are not caused by the filter medium alone. They come from the interface between the filter, housing, ceiling, duct and installation team.** That is why a system-level buyer asks for a leak-test plan and a service procedure before approving the terminal design.

## 8. Treat HEPA and ULPA as System Trade-offs

The difference between HEPA and ULPA is a difference in classified performance at the most penetrating particle size, not a simple upgrade from "good" to "better." The existing [HEPA versus ULPA guide](/guides/hepa-vs-ulpa/) covers the definitions. In system terms, moving to a higher class changes the filter's pressure drop, media area, fan requirement, test burden and perhaps the size of the terminal housing.

A higher-efficiency filter can be the right choice when the protected process is sensitive to the particle fraction that the lower class does not reliably capture, or when the consequence of a leak is high enough to justify the additional controls. It is not automatically the right choice when the dominant room particle load comes from people, equipment or cleaning, or when the installation bypass dominates the filter's rated performance. The [HEPA versus ULPA system trade-off article](/knowledge/hepa-ulpa-system-tradeoff/) develops that comparison.

The system calculation should include the fan power associated with the filter's resistance, the available pressure in the duct or FFU, the effect on airflow and air-change rate, and the verification method. A higher class that reduces airflow below the room's requirement is not a better system. A lower class that leaves a critical process exposed is not an acceptable saving.

This is a place where commercial pressure can distort the decision. If a buyer asks only for the highest class, the supplier may respond with a class label rather than an optimized system. If the buyer asks for a room outcome, an experienced supplier can discuss the trade-off openly. The right purchasing question is "What system evidence supports this class for this room?" rather than "Can you offer a higher number?"

## 9. Match the Form Factor to the Duty and the Housing

Form factor is not cosmetic. It determines the media area available in a given face size, the pressure drop at design airflow, the dust-holding pattern, the rigidity of the filter under load, and the way the filter fits the housing.

Panels are compact and inexpensive to handle, but their media area is limited unless they are pleated or otherwise expanded. Pocket filters provide more media area in a compact face size and can be well suited to medium-efficiency duties, but pocket geometry, stitching and bag support affect pressure and loading. V-bank filters provide a large media area with a rigid frame and are often used where high airflow and lower resistance are required. Compact HEPA filters use dense mini-pleat media to achieve high-efficiency performance in a controlled depth.

The [form-factor selection article](/knowledge/filter-form-factor-selection/) compares the four families. The important system point is that a filter should be selected against the actual housing and airflow, not only against a face dimension. A filter that is too deep for the available space, difficult to seat, or incompatible with the frame can create bypass and maintenance problems.

The catalogue examples are useful for orientation rather than automatic selection. An [FB panel filter](/products/hvac-filters/airy-fb-panel/) may suit a simple pre-filter position; a [pleated pre-filter](/products/hvac-filters/airy-pleated-pre/) offers more media area for a similar envelope; a [rigid pocket filter](/products/pocket-filters/airy-rigid-pocket/) may suit a medium-efficiency stage with a defined pocket depth. The correct choice depends on the pressure budget, loading environment and housing. The [filter-media category](/products/filter-media/) is relevant when the media itself is being specified or replaced rather than a finished filter.

A useful check is to ask what happens at the end of the service interval. Does the filter remain structurally stable? Can it be removed without contaminating the clean side? Is the replacement identical in dimensions and seal? A form factor that saves initial cost but makes clean changeout difficult can be a false economy.

Replacement compatibility is a system property, not a purchasing convenience. A filter model can change internally while keeping the same nominal face size, and a replacement with a different pocket depth, pleat count or media resistance can alter airflow. The approved specification should retain the model identity, pressure data, seal type and housing interface, not only the class and dimensions. Otherwise a future maintenance purchase may quietly change the system that was originally verified.

## 10. Where Ordinary HVAC Filtration Stops Working

Standard ventilation filters are designed for airborne particulate matter in relatively conventional air-handling systems. They are not a universal solution for grease, oil mist, welding fume, corrosive aerosol, high-temperature process exhaust, explosive dust, molecular contaminants or biological hazards.

The boundary is not a single temperature or concentration. It is defined by the contaminant, the filter materials, the housing, the fire and explosion strategy, worker protection and the relevant code. A grease-laden kitchen exhaust, for example, requires a grease-specific exhaust system and cleaning regime; a standard pleated filter is not a substitute. A welding operation may require source extraction and a suitable fume-control device. A laboratory with corrosive vapours may require a chemical filter or scrubbing system whose media and changeout are selected for that chemistry.

This boundary matters commercially because a product class can be marketed into the wrong application. A "HEPA" label does not make a filter suitable for hot, wet, oily or chemically aggressive air. A carbon panel does not automatically solve an odour problem if the residence time, humidity and contaminant concentration are wrong. The [application boundaries article](/knowledge/filtration-application-boundaries/) provides a checklist for deciding when to stop treating the problem as a conventional HVAC selection.

The correct response at the boundary is to involve the process owner, the ventilation designer and the safety or environmental function, then select a technology that matches the contaminant. In some cases, a filter can still be part of the solution, but it must be a filter specified for that condition and installed in an appropriate housing. In other cases, source control, separation, exhaust treatment or a different process is the only defensible route.

Even inside the ordinary boundary, the supply scope needs definition. The filter, housing, terminal unit, fan, controls and verification support may come from different parties. If the interfaces are not assigned, the buyer may receive components that fit no single system. The request should state which party is responsible for the filter-to-housing seal, the airflow balance, the installed test and the replacement procedure. Those assignments belong with the technical selection because they determine whether the selected performance can be installed and maintained.

## 11. Verification Must Match the Selection Claim

A system-level selection is incomplete until the evidence plan is defined. The evidence should match the claim:

- If the claim is a particulate classification, the test standard and report must use the same class family and test basis.
- If the claim is a cleanroom class, the room must be tested under the applicable ISO 14644 method, with the agreed acceptance criteria.
- If the claim is a leak-free terminal installation, the installed filter and housing need an in-situ leak test appropriate to the filter and application.
- If the claim is a batch or model consistency, the receiving inspection and batch records must be defined.
- If the claim is a service-life or energy benefit, the pressure-drop basis, airflow and changeout criterion must be stated.

The [filter test standard selection guide](/knowledge/filter-test-standard-selection/) and the [filter test report guide](/knowledge/read-filter-test-report/) help separate a relevant report from a decorative certificate. The [sample validation guide](/knowledge/filter-sample-validation/) and [batch consistency guide](/knowledge/filter-batch-consistency/) cover the transition from an approved sample to repeatable production. For high-efficiency filters, the [integrity testing guide](/knowledge/hepa-ulpa-integrity-testing/) is the relevant starting point.

A common procurement failure is to ask for a report after the supplier has quoted, rather than making the test basis part of the request. Another is to accept a report for a different model, airflow or class and treat it as evidence for the delivered product. A system-level buyer specifies the model, the test basis and the acceptance record together.

The [quality agreement guide](/knowledge/filter-quality-agreement/) is useful here because it turns these expectations into a documented control. For a cleanroom project, the quality plan should also define who witnesses the leak test, how failures are corrected, and what records accompany the filters. The [incoming inspection guide](/knowledge/filter-incoming-inspection/) addresses the receiving side of the same problem.

## 12. A Practical Selection Sequence

The following sequence is a defensible order for most HVAC, HEPA and cleanroom projects. It is not a substitute for engineering design, but it prevents the most common category errors.

1. **Define the protected outcome.** State the indoor-air target, process requirement or cleanliness class before discussing a filter class.
2. **Characterize the contaminant.** Identify particle-size range, gas or vapour, temperature, humidity, oil, grease, corrosivity and loading pattern.
3. **Draw the air path.** Mark outdoor air, recirculation, exhaust, pressure relationships and the location of each filtration stage.
4. **Set the airflow and pressure budget.** Use design airflow, fan curve, allowable total pressure and the intended final pressure drop.
5. **Select stage duties.** Decide what the pre-filter, secondary, final and gas stages must each accomplish.
6. **Choose the form factor and housing together.** Check dimensions, seal, access, structural load and clean changeout.
7. **Compare energy over a realistic service interval.** Use initial and final pressure, loading behaviour and fan control, not only purchase price.
8. **Define verification.** Name the test standard, report, sample approval, batch record and in-situ test.
9. **Check the boundary.** If the contaminant or duty is outside ordinary ventilation filtration, change the technology rather than stretching a standard product.
10. **Review the commercial path.** Use the [RFQ page](/rfq/) to state the system facts, quantities, documentation and acceptance requirements clearly.

The resulting specification may be simple. A commercial HVAC system may need only a well-matched pre-filter and secondary filter. A cleanroom may need a staged air-handling system, terminal HEPA filters, defined air changes and a commissioning plan. The value of the method is that each choice is connected to a requirement and an evidence path.

Two judgments summarize the approach. First, **choose the filtration architecture from the required environment, not from a preferred product category.** Second, **treat the installed interface and verification plan as part of the filter selection.** A filter is not proven by its label; it is proven by the system evidence around it.

## The practical position

The practical position is that the buyer should procure a system brief before procuring filters. We would require the supplier to map each proposed stage to a protected outcome, a pressure allowance and a verification method, then price the interfaces and commissioning support that make the claim real. A proposal that lists classes without that map is an equipment quote, not a filtration design. The buyer should retain authority over the acceptance decision because the supplier cannot own the room's process risk. If the brief cannot survive a change in occupancy or airflow, the selection is still provisional.

## 13. What this page does not claim.

This page is a selection framework, not a design specification for a particular building, cleanroom or process. It does not replace ventilation design, fire and life-safety review, cleanroom validation, or the judgment of a qualified engineer. It does not certify that any catalogue item will achieve a stated room class or application performance in a specific installation. It is not a recommendation to buy a particular filter or to use a particular class without project-specific verification.
