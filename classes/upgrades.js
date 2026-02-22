// ./classes/upgrades.js
export const UPGRADES = [
  // =========================
  // EARLY: get things moving
  // =========================
  {
    id: "auto_h_1",
    name: "Hydrogen Drip (Lv 1)",
    desc: "Auto-generate Hydrogen slowly.",
    cost: { H: 25 },
    effect: { type: "auto_element", element: "H", rate: 1.5 },
  },
  {
    id: "auto_h_2",
    name: "Hydrogen Drip (Lv 2)",
    desc: "Faster Hydrogen auto-generation.",
    cost: { H: 120, He: 10 },
    effect: { type: "auto_element", element: "H", rate: 4.7 },
  },

  // =========================
  // BUILD UP TO BORON
  // =========================
  {
    id: "auto_he_1",
    name: "Helium Tap (Lv 1)",
    desc: "Auto-generate Helium.",
    cost: { He: 15, H: 40 },
    effect: { type: "auto_element", element: "He", rate: 1.2 },
  },
  {
    id: "auto_li_1",
    name: "Lithium Seeder (Lv 1)",
    desc: "Auto-generate Lithium.",
    cost: { Li: 10, He: 35 },
    effect: { type: "auto_element", element: "Li", rate: 1.1 },
  },
  {
    id: "react_chance_1",
    name: "Catalyst Coating I",
    desc: "Increase reaction chance by +5% (absolute).",
    cost: { He: 25, H: 80 },
    effect: { type: "reaction_prob_add", add: 0.05 }
  },
  {
    id: "auto_be_1",
    name: "Beryllium Drill (Lv 1)",
    desc: "Auto-generate Beryllium.",
    cost: { Be: 8, Li: 25 },
    effect: { type: "auto_element", element: "Be", rate: 0.8 },
  },
  {
    id: "hydrogen_click_1",
    name: "Hydrogen Excitation",
    desc: "Increase chance to spawn Hydrogen on click.",
    cost: { H: 60 },
    effect: { type: "hydrogen_click_chance_add", add: 0.10 } // +10%
  },
  {
    id: "auto_b_1",
    name: "Boron Extractor (Lv 1)",
    desc: "Auto-generate Boron.",
    cost: { B: 7, Be: 20 },
    effect: { type: "auto_element", element: "B", rate: 0.75 },
  },

  // =========================
  // MID: tier-2 boosts BEFORE carbon appears
  // (still mostly using early elements + a little chain)
  // =========================
  {
    id: "auto_he_2",
    name: "Helium Tap (Lv 2)",
    desc: "Faster Helium auto-generation.",
    cost: { He: 60, H: 180, Li: 4 },
    effect: { type: "auto_element", element: "He", rate: 2.8 },
  },
  {
    id: "auto_li_2",
    name: "Lithium Seeder (Lv 2)",
    desc: "Faster Lithium auto-generation.",
    cost: { Li: 40, He: 120, Be: 3 },
    effect: { type: "auto_element", element: "Li", rate: 2.9 },
  },
  {
    id: "auto_be_2",
    name: "Beryllium Drill (Lv 2)",
    desc: "Faster Beryllium auto-generation.",
    cost: { Be: 30, Li: 90, B: 3 },
    effect: { type: "auto_element", element: "Be", rate: 2.1 },
  },
  {
    id: "react_chance_2",
    name: "Catalyst Coating II",
    desc: "Increase reaction chance by +8% (absolute).",
    cost: { Li: 20, He: 60, H: 150 },
    effect: { type: "reaction_prob_add", add: 0.08 }
  },
  {
    id: "auto_b_2",
    name: "Boron Extractor (Lv 2)",
    desc: "Faster Boron auto-generation.",
    cost: { B: 25, Be: 70, He: 35 }, // keep it early-element based
    effect: { type: "auto_element", element: "B", rate: 2.0 },
  },

  // =========================
  // CARBON UNLOCK MOMENT
  // =========================
  {
    id: "auto_c_1",
    name: "Carbon Press (Lv 1)",
    desc: "Auto-generate Carbon.",
    cost: { C: 6, B: 25 },
    effect: { type: "auto_element", element: "C", rate: 0.6 },
  },
  {
    id: "hydrogen_click_2",
    name: "Hydrogen Excitation 2",
    desc: "Increase chance to spawn Hydrogen on click.",
    cost: { H: 120 },
    effect: { type: "hydrogen_click_chance_add", add: 0.25 } // +25%
  },
  {
    id: "auto_h_3",
    name: "Hydrogen Drip (Lv 3)",
    desc: "High-output Hydrogen auto-generation (requires Carbon).",
    cost: { H: 350, He: 40, C: 5 },
    effect: { type: "auto_element", element: "H", rate: 10.3 },
  },
  {
    id: "auto_c_2",
    name: "Carbon Press (Lv 2)",
    desc: "Faster Carbon auto-generation.",
    cost: { C: 22, B: 80, He: 80 },
    effect: { type: "auto_element", element: "C", rate: 0.3 },
  },

  // =========================
  // LATE: fill out the rest of the first 10
  // =========================
  {
    id: "auto_n_1",
    name: "Nitrogen Condenser (Lv 1)",
    desc: "Auto-generate Nitrogen.",
    cost: { N: 6, C: 15 },
    effect: { type: "auto_element", element: "N", rate: 0.15 },
  },
  {
    id: "auto_o_1",
    name: "Oxygen Separator (Lv 1)",
    desc: "Auto-generate Oxygen.",
    cost: { O: 6, N: 15 },
    effect: { type: "auto_element", element: "O", rate: 0.1 },
  },
  {
    id: "auto_f_1",
    name: "Fluorine Channeler (Lv 1)",
    desc: "Auto-generate Fluorine.",
    cost: { F: 6, O: 15 },
    effect: { type: "auto_element", element: "F", rate: 0.12 },
  },
  {
    id: "auto_ne_1",
    name: "Neon Infuser (Lv 1)",
    desc: "Auto-generate Neon.",
    cost: { Ne: 6, F: 15 },
    effect: { type: "auto_element", element: "Ne", rate: 0.08 },
  },

  // =========================
  // LATE MID: tier-2 for (N/O/F/Ne)
  // =========================
  {
    id: "auto_n_2",
    name: "Nitrogen Condenser (Lv 2)",
    desc: "Faster Nitrogen auto-generation.",
    cost: { N: 22, C: 55, O: 2 },
    effect: { type: "auto_element", element: "N", rate: 1.35 },
  },
  {
    id: "auto_o_2",
    name: "Oxygen Separator (Lv 2)",
    desc: "Faster Oxygen auto-generation.",
    cost: { O: 22, N: 55, F: 2 },
    effect: { type: "auto_element", element: "O", rate: 1.2 },
  },
  {
    id: "auto_f_2",
    name: "Fluorine Channeler (Lv 2)",
    desc: "Faster Fluorine auto-generation.",
    cost: { F: 22, O: 55, Ne: 2 },
    effect: { type: "auto_element", element: "F", rate: 2.02 },
  },
  {
    id: "auto_ne_2",
    name: "Neon Infuser (Lv 2)",
    desc: "Faster Neon auto-generation.",
    cost: { Ne: 22, F: 55 },
    effect: { type: "auto_element", element: "Ne", rate: 7.018 },
  },

  // =========================
  // ENDGAME (for first 5): Lv3 gated by advanced elements
  // placed late so it feels like a payoff after full first-10 unlock
  // =========================
  {
    id: "auto_he_3",
    name: "Helium Tap (Lv 3)",
    desc: "High-output Helium auto-generation (requires Nitrogen).",
    cost: { He: 220, H: 400, N: 4 },
    effect: { type: "auto_element", element: "He", rate: 15.5 },
  },
  {
    id: "auto_li_3",
    name: "Lithium Seeder (Lv 3)",
    desc: "High-output Lithium auto-generation (requires Oxygen).",
    cost: { Li: 160, He: 260, O: 4 },
    effect: { type: "auto_element", element: "Li", rate: 12.22 },
  },
  {
    id: "auto_be_3",
    name: "Beryllium Drill (Lv 3)",
    desc: "High-output Beryllium auto-generation (requires Fluorine).",
    cost: { Be: 120, Li: 220, F: 3 },
    effect: { type: "auto_element", element: "Be", rate: 8.14 },
  },
  {
    id: "auto_b_3",
    name: "Boron Extractor (Lv 3)",
    desc: "High-output Boron auto-generation (requires Neon).",
    cost: { B: 110, Be: 180, Ne: 3 },
    effect: { type: "auto_element", element: "B", rate: 9.10 },
  },
];