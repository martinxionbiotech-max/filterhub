// Important-SKU depth (optim2): fitment framework + procurement conclusion for
// the highest-value OE models (about one to two per category). Content is grounded
// in each SKU's own published fields (OE reference, spec, material, application);
// no figure is fabricated. Rendered on the SKU page as two extra sections.

export interface SkuDepth {
  fitment: string;
  conclusion: string;
}

export const skuDepth: Record<string, SkuDepth> = {
  '42N-62-15470': {
    fitment:
      'Komatsu loader intake — round primary element, Ø110 x 220 mm, ISO 5011 grade. Confirm the OE drawing match and the housing form factor before ordering; the cross-reference is a discovery aid, not a verified fitment.',
    conclusion:
      'For high-dust off-highway duty, prioritise confirmed dust-holding capacity and intake-restriction control over a nominal efficiency label. Request the spec sheet for capacity and media construction before a bulk commitment.',
  },
  '1542743': {
    fitment:
      'Volvo truck intake, heavy-duty round element, triple OE reference (1542743 / 1660619 / 475388). Pin down the exact chassis and housing, since one OE family can span several housings.',
    conclusion:
      'Sustained high-dust truck intake makes capacity and restriction control the figures that decide service interval — verify dimensions and capacity against the OE drawing, not just the part number.',
  },
  P822768: {
    fitment:
      'Case / Caterpillar / Hitachi heavy-duty intake, dual OE reference (P822768 / P822769), Ø130 x 250 mm. Confirm the specific machine model and element form factor, as the same reference maps to different housings.',
    conclusion:
      'Across a multi-make range, treat the OE reference as a starting point and verify media type plus ISO 5011 efficiency/dust-capacity on the spec sheet before committing volume.',
  },
  '72880-FG000': {
    fitment:
      'Subaru Forester / WRX / Impreza / Crosstrek 2016-17 cabin filter, ISO 16890 ePM2.5 particle grade. Confirm the exact year and trim, and whether the housing takes a single or two-piece cartridge.',
    conclusion:
      'Cabin filters are fitment-driven: year and trim are the dominant failure points, so confirm the exact vehicle application and state particle-only versus carbon media before bulk ordering.',
  },
  '500-0957': {
    fitment:
      'Caterpillar construction-machinery cabin filter (CAT 5000957). Machine-cab duty is dust-heavy, so confirm the exact Cat model and single-piece versus two-piece housing.',
    conclusion:
      'In dust-heavy cab duty, particle-holding behaviour matters more than in passenger duty — request dimensions and ISO 16890 efficiency and verify against the OE drawing.',
  },
  '90915-YZZA3': {
    fitment:
      'Lexus IS300 / RX300 (99-03) and Toyota Highlander cabin filter. The cross-brand reference spans different cabins, so year and trim confirmation is the gating step.',
    conclusion:
      'A cross-brand OE reference is a discovery aid, not a fit: confirm the exact vehicle, year and trim, and specify particle-only versus carbon media before ordering.',
  },
  '15208-AD200': {
    fitment:
      'Spin-on oil filter for passenger cars, Ø76 x 100 mm, 20 µm removal rating. Confirm mounting thread pitch, gasket seat diameter and canister dimensions against the OE drawing.',
    conclusion:
      'On a spin-on element, thread and gasket decide whether it bolts up and seals, and the bypass valve decides protection — pull the spec sheet for thread, gasket and relief-valve setting.',
  },
  '03C115577A': {
    fitment:
      'Volkswagen cartridge oil filter, Ø65 x 90 mm, 20 µm rating. VW filter fits shift with engine generation, so match the exact powerplant rather than the number alone.',
    conclusion:
      'Confirm thread and gasket seat plus the relief-valve setting on the spec sheet, and supply the oil grade and change interval so the media lines up with the service schedule.',
  },
  '1S7J-6744-BA': {
    fitment:
      'Ford oil filter (1S7J-6744-BA), spin-on, Ø76 x 100 mm. Ford engines split across several filter families, so the exact engine must be matched, not assumed.',
    conclusion:
      'Ask for the spec sheet to verify gasket seat and thread, and state the oil grade and drain interval so media selection matches the actual service schedule.',
  },
  '23401-1441': {
    fitment:
      'Heavy-duty diesel fuel filter, Ø80 x 140 mm, 4-10 µm with water separation, 4 bar max. Confirm fuel type and system pressure against the injection specification.',
    conclusion:
      'Heavy-duty diesel lines need water separation in addition to particle retention — request the micron rating and water-separation efficiency, since these are not published and must be verified.',
  },
  FS19920: {
    fitment:
      'Heavy-duty water-separating fuel filter, Ø80 x 140 mm, 4-10 µm. Water separation is the headline feature; confirm fuel type and system pressure.',
    conclusion:
      'Where water ingress is a real risk, separation capability is the deciding factor — verify micron rating and water-separation efficiency against the injection specification.',
  },
  SH66279: {
    fitment:
      'Caterpillar 308C2 excavator hydraulic filter (SH66279 / 362-1163), Ø90 x 180 mm, 10 µm beta≥200, 210 bar. Provide system flow rate and operating pressure at inquiry.',
    conclusion:
      'Hydraulic selection turns on pressure, flow rate and circuit cleanliness target — supply flow and pressure, state the ISO 4406 target, then request pressure-drop and beta-ratio data.',
  },
  P177047: {
    fitment:
      'Bobcat skid-steer spin-on hydraulic filter (P177047 / 1G-8878 / 6668819), Ø80 x 150 mm, 10 µm. A spin-on element is thread- and pressure-specific.',
    conclusion:
      'Supply flow rate and operating pressure, state the ISO 4406 target, and request pressure-drop and beta-ratio data — a spin-on hydraulic element is not interchangeable across machines.',
  },
  '35330-60070': {
    fitment:
      'Automatic-transmission filter, pan-mounted model-specific, 25-40 µm. Confirm whether the filter is pan-mounted or external — they are never interchangeable.',
    conclusion:
      'Debris control for the valve body and clutches depends on matching the exact transmission model; confirm the mounting form and request media and micron data on the spec sheet.',
  },
  '25420-PR0-030': {
    fitment:
      'Honda transmission filter, external / pan-mounted (model-specific), 25-40 µm. Confirm the exact transmission model and mounting form.',
    conclusion:
      'Honda filters are model-specific and pan-mounted and external forms are not interchangeable — confirm the model and mounting form, then request media and micron data.',
  },
  'AIRY-GEL-HEPA': {
    fitment:
      'Gel-seal mini-pleat HEPA, H14, 610×610×90/93 · 915×610×90 · 1220×610×90 mm, up to 2400 m³/h. The gel seal suits knife-edge housings, so seal type is the key installation variable.',
    conclusion:
      'Confirm the seal type against the housing and whether a factory leakage-test certificate is required — the certificate is the evidence the H14 class was measured, not claimed.',
  },
  'EAWAY-HEPA-61061070': {
    fitment:
      'Cleanroom HEPA, 610×610×70 mm (24×24×2.75 in), H13/H14, aluminium frame. The 70 mm depth is a standard ceiling panel; quantity pricing USD 40/37/33 at 5/10/100 pcs.',
    conclusion:
      'Lock the efficiency class to the cleanroom ISO target and confirm the seal type against the housing; request a leakage-test certificate where required.',
  },
  'KLC-HT-SEPARATOR': {
    fitment:
      'High-temperature separator filter rated 260-350 °C, metal frame, synthetic media. Confirm the exact continuous operating temperature and the face size.',
    conclusion:
      'High-temperature ventilation needs the frame and media to survive the heat, not just the airflow — confirm the exact temperature and request pressure-drop data.',
  },
  'YT-METAL-CART': {
    fitment:
      'Metal cartridge in SS304 / SS316L / titanium, sintered or woven-mesh, 1-100 µm, 5-40 inch, silicon-to-Viton O-rings. Specify fluid, temperature and chemical compatibility first.',
    conclusion:
      'Metal media suits high-temperature and chemically aggressive process liquids — lead with fluid chemistry and temperature, then confirm micron rating, flow and end-fitting type.',
  },
  'EAWAY-FFU-4848': {
    fitment:
      'Fan filter unit, 48×48 in (320 mm), Class 100, H10-H14/U15, 4000-5000 CMH, 80 °C limit, AC/EC motor, galvanised or stainless housing. Confirm the cleanroom ISO class and coverage.',
    conclusion:
      'An FFU generates ceiling-down laminar airflow, so size the fleet to the room and coverage — confirm ISO class, airflow and specify AC or EC motor and voltage.',
  },
};
