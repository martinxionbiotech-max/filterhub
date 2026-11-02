---
title: "Terminal Filtration: FFU, Terminal Box or Ceiling Grid"
metaTitle: "Terminal Filtration: FFU, Box or Ceiling Grid"
description: "How to choose between an FFU, ducted terminal box and ceiling-grid HEPA filter by airflow, seal, service access, pressure and cleanroom verification."
slug: "terminal-filtration-selection"
keyword: "terminal filtration selection"
order: 5
isPillar: false
pillarSlug: "hvac-hepa-cleanroom-selection"
published: 2026-11-01
series: hvac-hepa-cleanroom
seriesTitle: HVAC, HEPA and cleanroom systems
---

Terminal filtration is the last controlled filtration interface before air enters a cleanroom or protected zone. It is also where the filter, housing, ceiling, duct, fan and installation team meet. A filter that performs well in a factory test can fail to protect the room if the gasket is compressed unevenly, the housing is distorted, the ceiling grid is not sealed, or the filter is replaced without restoring the interface.

That is why the terminal selection question should be "Which architecture can be installed, sealed, balanced, tested and maintained in this room?" rather than "Which HEPA filter is best?" The three common answers are a fan filter unit (FFU), a ducted terminal filter box, and a filter mounted in a ceiling grid or gel-seal housing. They are not interchangeable. Each shifts the pressure responsibility, fan energy, control strategy and service access in a different direction.

This article compares the three forms and the selection questions that separate them. The [cleanroom classification article](/knowledge/cleanroom-classification-filtration/) explains how the room target drives airflow and terminal strategy. The [HEPA and ULPA integrity testing guide](/knowledge/hepa-ulpa-integrity-testing/) explains why the installed interface deserves the same attention as the filter's rated class.

## 1. Define What "Terminal" Means in the Project

Terminal filtration can mean several different things:

- A final filter in the air-handling unit, before supply ductwork.
- A filter box at the end of a duct, mounted in or near the ceiling.
- A filter in a ceiling grid, receiving air from a pressurized plenum.
- A filter integrated into an FFU, with its own fan and outlet.
- A local device, such as a clean bench or biological safety cabinet, that creates a protected zone independent of the room.

The boundaries carry different responsibilities. A final filter in the AHU cannot protect against contamination introduced downstream in the duct. A ceiling-grid filter can protect the room boundary but depends on the plenum and grid seal. An FFU combines fan and filter, so its electrical, control, vibration and service requirements become part of the room design. A clean bench creates a local zone and should not be treated as a whole-room solution without evidence.

Before comparing products, draw the interface and label who owns each part: filter, housing, gasket, grid, plenum, duct transition, fan, controller, test port and access panel. If ownership is unclear, the seal and verification usually become unclear too.

## 2. Compare the Three Main Architectures

The table below is a starting point, not a specification. The final choice depends on room airflow, cleanliness class, ceiling construction, available pressure, service access and validation method.

| Architecture | How air is moved | Main strength | Main constraint | Key verification question |
|---|---|---|---|---|
| Fan filter unit (FFU) | Integrated fan draws air through the HEPA/ULPA filter | Self-contained terminal airflow; flexible layout; can avoid long terminal ducts | Fan energy, electrical coordination, noise, vibration, control and service access | Does the installed unit deliver the intended airflow and outlet pattern, and can the filter be sealed and tested? |
| Ducted terminal box | Central air handler supplies air to a terminal filter housing | Uses central fan capacity; separates fan maintenance from the room interface | Duct pressure losses, balancing, space for ductwork, pressure variation between terminals | Is the available terminal pressure adequate at the filter's final pressure drop, and is the housing sealed? |
| Ceiling-grid / gel-seal filter | Air enters a pressurized plenum and passes through a filter in the grid | Simple room interface; good access for replacement in many designs | Depends on plenum pressure, grid rigidity and a reliable knife-edge or gasket seal | Is the filter-to-grid interface leak-free after installation and after maintenance? |

An FFU is not automatically better because it contains a fan. A ducted terminal box is not automatically more reliable because the fan is remote. A ceiling-grid filter is not automatically simpler because it has no fan. Each architecture has a different failure mode, and the project should choose the failure mode it can control.

## 3. FFU Selection: Size the Fleet to the Room

An FFU combines a fan, filter and housing in a ceiling-mounted unit. It is useful where the room needs distributed terminal airflow without a ducted supply to every filter position. The selection question is not only the filter class; it is the unit's airflow, outlet pattern, external static pressure, electrical input, control method, noise, vibration and service access.

For a first approximation, the number of units required is:

$$
N_{\mathrm{units}} = \frac{Q_{\mathrm{room}}}{q_{\mathrm{unit}}}
$$

where $Q_{\mathrm{room}}$ is the total supply airflow required by the room design and $q_{\mathrm{unit}}$ is the usable airflow per unit at the installed condition. The result must be checked for coverage, outlet velocity, airflow pattern and redundancy. Dividing the room's total airflow by a catalogue airflow is not enough if the units are poorly distributed or cannot deliver that flow against the actual outlet and filter resistance.

An FFU's electrical input can be approximated with the same fan-power relationship used elsewhere:

$$
P_{\mathrm{electric}} \approx \frac{Q\,\Delta P_{\mathrm{unit}}}{\eta_{\mathrm{fan}}}
$$

The pressure term includes the filter, housing and any outlet restriction. The [fan energy article](/knowledge/filter-fan-energy-lifecycle-cost/) explains why the operating pressure and control method matter more than a single catalogue point.

A [clean room AC/EC fan filter unit](/products/cleanroom-equipment/klc-ffu/) is catalogued with configurable H13/H14 filtration. That is a catalogue description, not evidence that a particular room will achieve a class. The buyer should confirm the unit's airflow, control, filter interface, test provision and replacement method. A [48-inch FFU](/products/cleanroom-equipment/eaway-ffu-4848/) is another catalogue form to compare, but its dimensions and airflow must fit the room's layout and ceiling system.

### Ceiling coverage is not the same as filter count

Two rooms with the same number of FFUs can have different protection because the units are distributed differently. Coverage, outlet velocity and the relationship between the filter array and the critical zone matter. A cluster of units over an aisle may leave the critical surface outside the intended flow field. A layout that looks adequate on a ceiling plan may perform poorly when equipment and operators disturb the air.

The selection should therefore be tested against the room layout, not only the total airflow. The designer should check whether the proposed units can be serviced without disturbing the critical zone, whether the ceiling structure can carry them, and whether the electrical and control distribution supports the intended grouping. The [cleanroom classification article](/knowledge/cleanroom-classification-filtration/) explains why airflow organization is part of classification, not an afterthought.

### Noise, vibration and controls are part of the interface

An FFU adds a fan and controls inside or above the room. Noise and vibration can affect operators, sensitive instruments and the room structure. The unit's mounting, isolation and maintenance access should be reviewed together with its airflow performance. A fan that meets the airflow requirement but creates an unacceptable noise level has not met the terminal duty.

Control coordination is equally important. Multiple FFUs may need grouped speed control, local adjustment or monitoring. A loss of one unit should be considered in the room's risk plan, particularly where coverage is designed without redundancy. The supplier should explain the control interface and the failure behavior, not only the unit's clean airflow rating.

## 4. Ducted Terminal Boxes: Check the Pressure at the Filter

A ducted terminal box receives air from a central air handler and delivers it through a terminal filter. The central fan must overcome the ductwork, terminal box, filter and outlet resistance. If the pressure available at the terminal is insufficient at the filter's final pressure drop, airflow will fall before the filter reaches its intended changeout point.

The selection should therefore include:

- The terminal's design airflow.
- The pressure drop of the filter when clean and at changeout.
- The pressure loss of the box, duct, transition and outlet.
- The balancing method and the effect of one terminal on another.
- The access route for filter replacement and leak testing.
- The seal between the filter and the box.

A ducted terminal box may be appropriate where the central air handler already has adequate pressure and where the room layout favors ducted supply. It may be less appropriate where long duct runs, tight ceiling space or many independently controlled zones would create balancing complexity. The [HVAC filtration staging article](/knowledge/hvac-filtration-staging/) explains how the central-stage pressure contributes to the terminal pressure budget.

### Terminal pressure is a shared resource

In a ducted system, the pressure available at one terminal is affected by the rest of the network. Closing a damper, changing a filter or adding a branch can shift airflow elsewhere. The terminal design should therefore be reviewed with the balancing strategy, not as an isolated branch. A terminal that receives adequate pressure on a test day may not receive it when another zone is at full demand or when the filters are near changeout.

The same issue appears in a pressurized ceiling plenum. The plenum pressure depends on the air supply, leakage and filter resistance. If the plenum is not robustly controlled, one row of filters can receive more air than another. The resulting room airflow may be uneven even though the filters themselves are identical.

The [HEPA filter category](/products/hepa-filters/) includes filter forms that may be compatible with terminal housings, including a [disposable hooded terminal filter](/products/hepa-filters/klc-e10-e14-terminal/) catalogued across a range of classes. Compatibility with the actual housing, gasket and test port must be confirmed; a catalogue filter dimension alone is not enough.

## 5. Ceiling-Grid Filters: The Seal Is the Product

A ceiling-grid or gel-seal installation places the filter in the room boundary. Air from a pressurized plenum passes through the filter into the room. The apparent simplicity of this arrangement can hide a demanding installation requirement: the filter must seal against the grid or housing along its entire perimeter, and the grid must remain rigid and clean during installation and replacement.

Gel-seal filters are often used with knife-edge housings, where the gel provides a conformable seal. The seal can be effective when the housing is clean, the knife edge is undamaged and the filter is seated correctly. It can also be compromised by old gel, debris, distortion or careless replacement. Gasket-seal arrangements have different compression and surface requirements. The correct choice depends on the housing design and the maintenance procedure.

A [gel-seal mini-pleat HEPA filter](/products/hepa-filters/airy-gel-hepa/) is catalogued as H14 and may be evaluated for a compatible housing. The class is not the whole selection. The buyer should confirm the gel or gasket type, frame dimensions, knife-edge condition, ceiling load, access method and leak-test procedure. A [24x24 HEPA filter](/products/hepa-filters/klc-24x24-hepa/) may suit a standard grid envelope, but its catalogue class span and face size do not establish the installed performance.

The [cleanroom equipment category](/products/cleanroom-equipment/) includes local equipment forms such as clean benches. These may be appropriate for a critical local zone, but they do not replace room-level terminal filtration or classification. A clean bench creates a controlled working area; it does not make the surrounding room clean.

## 6. The Installation Interface Is the Main Failure Mode

Terminal filtration failures often occur at interfaces:

- A gasket compressed too little, too much or unevenly.
- A filter frame distorted during handling.
- A ceiling grid deflected under filter or access load.
- A duct transition creating turbulence or bypass.
- A sealant or gel contaminated with dust or cleaning chemicals.
- A test port missing, poorly located or left open.
- A replacement filter that fits the opening but not the housing profile.
- An access panel that is not restored after maintenance.

These failures can exist with a filter that has a satisfactory factory test. The filter may be efficient, but the air path around it is not. This is why the [integrity testing guide](/knowledge/hepa-ulpa-integrity-testing/) treats the installed assembly as the object of verification. The [test report guide](/knowledge/read-filter-test-report/) helps check the filter's factory evidence, but it does not replace an in-situ leak test.

The design response is to make the interface inspectable and repeatable. Specify the housing, gasket, compression or gel interface, frame tolerance, access clearance and test method. Provide a replacement procedure that includes cleaning the sealing surface and verifying the seal after installation. A terminal filter that cannot be replaced without risking the seal is a maintenance problem, even if it is technically efficient.

## 7. Compare Service Access Before Comparing Class

Terminal filters are changed inside or near the protected zone. The service procedure can affect contamination, downtime and worker safety. Ask:

- Can the filter be removed without dragging it across the clean space?
- Is there a temporary enclosure or bagging method for the old filter?
- Can the new filter be inspected before it is seated?
- Is the sealing surface accessible and cleanable?
- Can the installed filter be leak-tested after replacement?
- Does the ceiling or duct design provide enough clearance?
- Are the replacement filters stored and handled to prevent damage?

An FFU may allow easier local replacement but requires electrical and fan checks. A ducted terminal box may allow service from outside the room but requires access to the duct and box. A ceiling-grid filter may be simple to reach but requires careful handling of the grid and seal. The best architecture is the one that supports the room's maintenance regime, not merely the lowest first cost.

Service access should be designed before the ceiling is closed. A filter that can be reached only through a crowded service corridor, or an FFU that requires a ladder in a controlled zone, creates a maintenance burden that can compromise the room. The replacement procedure should identify where the old filter goes, how it is contained, how the sealing surface is cleaned and how the new filter is inspected. If those steps are not practical, the installed system will drift from its original performance regardless of its filter class.

## 8. Verification and Procurement

The terminal filtration specification should include:

- Filter class and test basis.
- Exact model, dimensions and seal type.
- Housing or grid interface.
- Design airflow and pressure drop.
- Fan or central-system pressure responsibility.
- Required factory test and report.
- Required in-situ leak test.
- Replacement and access procedure.
- Batch or sample approval requirements.

The [filter test standard selection guide](/knowledge/filter-test-standard-selection/) explains how to align the standard with the claim. The [quality agreement guide](/knowledge/filter-quality-agreement/) can define notification and acceptance requirements. The [RFQ page](/rfq/) is the place to state the terminal architecture, room target, airflow and verification plan together, rather than sending a filter class and asking for a price.

Spare filters should match the approved model, not merely the opening size. A spare with a different frame, gasket, media or pressure curve can introduce a system change during a maintenance emergency. The spare strategy should identify the approved model, the acceptable alternatives and the verification required after a substitution. This is a small procurement detail with a direct effect on the seal and airflow that the terminal design depends on.

My judgment is that **the terminal interface should be selected before the filter model is finalized.** Once the housing, grid and service method are known, the filter's frame, seal and dimensions can be matched to a real boundary. Starting with a filter and then looking for a compatible housing is how bypass and access problems begin.

## 9. What this page does not claim.

This page is a comparison framework, not a cleanroom design specification. It does not state that an FFU, terminal box or ceiling-grid filter will achieve a particular room class in any installation. It does not replace airflow design, structural review, electrical coordination, cleanroom validation or the manufacturer's installation instructions. It is not a recommendation of a specific terminal architecture without project-specific verification.
