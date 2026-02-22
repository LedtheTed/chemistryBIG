/* reactions.js
   Library/registry of possible reactions.
   Use getReaction(a, b) to look up a reaction, or access REACTIONS directly.
*/
(function (global) {
  const _norm = (s) => String(s).trim().toLowerCase();
  function pairKey(a, b) {
    const aa = _norm(a),
      bb = _norm(b);
    return aa < bb ? `${aa}|${bb}` : `${bb}|${aa}`;
  }

  // Reaction definitions (library of all available reactions)
  const REACTION_DEFINITIONS = [
    {
      reactants: ["H", "H"],
      products: ["He"],
      consumes: true,
      probability: 0.1,
      note: "H + H -> He",
    },
    {
      reactants: ["He", "He"],
      products: ["Be"],
      consumes: true,
      probability: 0.1,
      note: "He + He -> Be",
    },
    {
      reactants: ["Be", "H"],
      products: ["Li"],
      consumes: true,
      probability: 0.05,
      note: "Be + H -> Li",
    },
    {
      reactants: ["Li", "He"],
      products: ["B"],
      consumes: true,
      probability: 0.001,
      note: "Li + He -> B",
    },
    {
      reactants: ["Be", "He"],
      products: ["C"],
      consumes: true,
      probability: 0.09,
      note: "Be + He -> C",
    },
    {
      reactants: ["C", "H"],
      products: ["N"],
      consumes: true,
      probability: 0.1,
      note: "C + H -> N",
    },
    {
      reactants: ["C", "He"],
      products: ["O"],
      consumes: true,
      probability: 0.5,
      note: "C + He -> O",
    },
    {
      reactants: ["O", "H"],
      products: ["F"],
      consumes: true,
      probability: 0.05,
      note: "O + H -> F",
    },
    {
      reactants: ["F", "H"],
      products: ["Ne"],
      consumes: true,
      probability: 0.05,
      note: "F + H -> Ne",
    },
    {
      reactants: ["O", "O"],
      products: ["Ne"],
      consumes: true,
      probability: 0.01,
      note: "O + O -> Ne",
    },
    {
      reactants: ["Na", "Na"],
      products: ["Mg"],
      consumes: true,
      probability: 0.15,
      note: "Na + Na -> Mg",
    },
    {
      reactants: ["O", "Mg"],
      products: ["Si"],
      consumes: true,
      probability: 0.05,
      note: "O + Mg -> Si",
    },
    {
      reactants: ["Mg", "He"],
      products: ["Al"],
      consumes: true,
      probability: 0.05,
      note: "Mg + He -> Al",
    },
    {
      reactants: ["Si", "H"],
      products: ["S"],
      consumes: true,
      probability: 0.15,
      note: "Si + H -> S",
    },
    {
      reactants: ["Si", "He"],
      products: ["P"],
      consumes: true,
      probability: 0.15,
      note: "Si + He -> P",
    },
    {
      reactants: ["S", "He"],
      products: ["Ar"],
      consumes: true,
      probability: 0.15,
      note: "S + He -> Ar",
    },
    {
      reactants: ["Cl", "H"],
      products: ["Ar"],
      consumes: true,
      probability: 0.15,
      note: "Cl + H -> Ar",
    },
    {
      reactants: ["S", "H"],
      products: ["Cl"],
      consumes: true,
      probability: 0.15,
      note: "S + H -> Cl",
    },
  ];

  // Decay reactions (solo element reactions)
  const DECAY_DEFINITIONS = [
    {
      reactant: "Be",
      products: ["He", "He"],
      probability: 0.0001,
      note: "Be -> He + He",
    },
    {
      reactant: "Cl",
      products: ["S", "H"],
      probability: 0.0001,
      note: "Cl -> S + H",
    },
    {
      reactant: "Al",
      products: ["Mg", "Mg"],
      probability: 0.0001,
      note: "Al -> Mg + Mg",
    },
  ];

  // Build the REACTIONS Map from definitions
  const REACTIONS = new Map();
  REACTION_DEFINITIONS.forEach((def) => {
    const key = pairKey(def.reactants[0], def.reactants[1]);
    REACTIONS.set(key, {
      products: def.products.map((p) => _norm(p)),
      consumes: def.consumes,
      probability: def.probability,
      note: def.note,
    });
  });

  // Build the DECAY_REACTIONS Map from definitions
  const DECAY_REACTIONS = new Map();
  DECAY_DEFINITIONS.forEach((def) => {
    DECAY_REACTIONS.set(_norm(def.reactant), {
      products: def.products.map((p) => _norm(p)),
      probability: def.probability,
      note: def.note,
    });
  });

  function getReaction(a, b) {
    const key = pairKey(a, b);
    const entry = REACTIONS.get(key);
    if (!entry) return null;
    // Return a copy to prevent external mutation
    return { ...entry };
  }

  function getDecayReaction(element) {
    const entry = DECAY_REACTIONS.get(_norm(element));
    if (!entry) return null;
    return { ...entry };
  }

  function getAllReactions() {
    return Array.from(REACTIONS.entries()).map(([key, entry]) => ({
      key,
      ...entry,
    }));
  }

  global.ChemistryBIG = global.ChemistryBIG || {};
  global.ChemistryBIG.REACTIONS = REACTIONS;
  global.ChemistryBIG.REACTION_DEFINITIONS = REACTION_DEFINITIONS;
  global.ChemistryBIG.DECAY_REACTIONS = DECAY_REACTIONS;
  global.ChemistryBIG.DECAY_DEFINITIONS = DECAY_DEFINITIONS;
  global.ChemistryBIG.getReaction = getReaction;
  global.ChemistryBIG.getDecayReaction = getDecayReaction;
  global.ChemistryBIG.getAllReactions = getAllReactions;
})(window);
