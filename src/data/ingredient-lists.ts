export enum Effect {
  Spicy = 'spicy',
  Chilly = 'chilly',
  Fireproof = 'fireproof',
  Electro = 'electro',
  Mighty = 'mighty',
  Tough = 'tough',
  Hasty = 'hasty',
  Sneaky = 'sneaky',
  Energizing = 'energizing',
  Enduring = 'enduring',
  Hearty = 'hearty'
}

export enum Tag {
  Critical = 'critical',
  Critter = 'critter'
}

export type Ingredient = {
  name: string
  check?: string
  image: string
  price: number
  hp: number
  duration: number
  effect?: { [key in Effect]?: number }
  tags?: Tag[]
}

export type IngredientList = {
  [key: string]: Ingredient
}

export const ingredients: IngredientList = {
  // Basic
  apple: {
    name: 'Apple',
    image: 'apple.png',
    price: 3,
    hp: 1,
    duration: 30
  },
  shroom: {
    name: 'Shroom',
    image: 'shroom.png',
    price: 3,
    hp: 1,
    duration: 30
  },
  wildberry: {
    name: 'Wildberry',
    image: 'wildberry.png',
    price: 3,
    hp: 1,
    duration: 30
  },
  bass: {
    name: 'Bass',
    image: 'bass.png',
    price: 6,
    hp: 1,
    duration: 30
  },
  sankeCarp: {
    name: 'Sanke Carp',
    image: 'sanke-carp.png',
    price: 20,
    hp: 1,
    duration: 30
  },
  herb: {
    name: 'Herb',
    image: 'herb.png',
    price: 3,
    hp: 2,
    duration: 30
  },
  palmFruit: {
    name: 'Palm Fruit',
    image: 'palm-fruit.png',
    price: 4,
    hp: 2,
    duration: 30
  },
  rawMeat: {
    name: 'Raw Meat',
    image: 'raw-meat.png',
    price: 8,
    hp: 2,
    duration: 30
  },
  rawBirdDrumstick: {
    name: 'Raw Bird Drumstick',
    image: 'raw-bird-drumstick.png',
    price: 8,
    hp: 2,
    duration: 30
  },
  rawPrimeMeat: {
    name: 'Raw Prime Meat',
    image: 'raw-prime-meat.png',
    price: 15,
    hp: 3,
    duration: 30
  },
  rawBirdThigh: {
    name: 'Raw Bird Thigh',
    image: 'raw-bird-thigh.png',
    price: 15,
    hp: 3,
    duration: 30
  },
  rawGourmetMeat: {
    name: 'Raw Gourmet Meat',
    image: 'raw-gourmet-meat.png',
    price: 35,
    hp: 6,
    duration: 30
  },
  rawWholeBird: {
    name: 'Raw Whole Bird',
    image: 'raw-whole-bird.png',
    price: 35,
    hp: 6,
    duration: 30
  },
  // Hunting
  woodlandBoar: {
    name: 'Raw Meat',
    image: 'raw-meat.png',
    check: 'Woodland Boar',
    price: 8,
    hp: 2,
    duration: 30
  },
  woodlandDeer: {
    name: 'Raw Meat',
    image: 'raw-meat.png',
    check: 'Woodland Deer',
    price: 8,
    hp: 2,
    duration: 30
  },
  woodlandElk: {
    name: 'Raw Prime Meat',
    image: 'raw-prime-meat.png',
    check: 'Woodland Elk',
    price: 15,
    hp: 3,
    duration: 30
  },
  // Duration Boosting
  treeNut: {
    name: 'Tree Nut',
    image: 'tree-nut.png',
    price: 3,
    hp: 0.5,
    duration: 40
  },
  acorn: {
    name: 'Acorn',
    image: 'acorn.png',
    price: 2,
    hp: 0.5,
    duration: 50
  },
  rice: {
    name: 'Rice',
    image: 'rice.png',
    price: 3,
    hp: 2,
    duration: 60
  },
  rockSalt: {
    name: 'Rock Salt',
    image: 'rock-salt.png',
    price: 2,
    hp: 0,
    duration: 60
  },
  wheat: {
    name: 'Wheat',
    image: 'wheat.png',
    price: 3,
    hp: 2,
    duration: 60
  },
  caneSugar: {
    name: 'Cane Sugar',
    image: 'cane-sugar.png',
    price: 3,
    hp: 0,
    duration: 80
  },
  freshMilk: {
    name: 'Fresh Milk',
    image: 'fresh-milk.png',
    price: 3,
    hp: 1,
    duration: 80
  },
  goatButter: {
    name: 'Goat Butter',
    image: 'goat-butter.png',
    price: 3,
    hp: 0,
    duration: 80
  },
  birdEgg: {
    name: 'Bird Egg',
    image: 'bird-egg.png',
    price: 3,
    hp: 2,
    duration: 90
  },
  currySpice: {
    name: 'Curry Spice',
    image: 'curry-spice.png',
    price: 4,
    hp: 0,
    duration: 90
  },
  // Critical
  starFragment: {
    name: 'Star Fragment',
    image: 'star-fragment.png',
    price: 300,
    hp: 3,
    duration: 90,
    tags: [ Tag.Critical ]
  },
  dragonScale: {
    name: 'Dragon Scale',
    image: 'dragon-scale.png',
    price: 150,
    hp: 1,
    duration: 90,
    tags: [ Tag.Critical ]
  },
  dragonClaw: {
    name: 'Dragon Claw',
    image: 'dragon-claw.png',
    price: 180,
    hp: 2,
    duration: 210,
    tags: [ Tag.Critical ]
  },
  dragonFang: {
    name: 'Dragon Fang',
    image: 'dragon-fang.png',
    price: 250,
    hp: 3,
    duration: 630,
    tags: [ Tag.Critical ]
  },
  dragonHorn: {
    name: 'Dragon Horn',
    image: 'dragon-horn.png',
    price: 300,
    hp: 4,
    duration: 1800,
    tags: [ Tag.Critical ]
  },
  // Spicy
  spicyPepper: {
    name: 'Spicy Pepper',
    image: 'spicy-pepper.png',
    price: 3,
    hp: 1,
    duration: 150,
    effect: { spicy: 1 }
  },
  warmSafflina: {
    name: 'Warm Safflina',
    image: 'warm-safflina.png',
    price: 3,
    hp: 0,
    duration: 150,
    effect: { spicy: 1 }
  },
  sizzlefinTrout: {
    name: 'Sizzlefin Trout',
    image: 'sizzlefin-trout.png',
    price: 6,
    hp: 2,
    duration: 150,
    effect: { spicy: 2 }
  },
  sunshroom: {
    name: 'Sunshroom',
    image: 'sunshroom.png',
    price: 4,
    hp: 1,
    duration: 150,
    effect: { spicy: 2 }
  },
  summerwingButterfly: {
    name: 'Summerwing Butterfly',
    image: 'summerwing-butterfly.png',
    check: 'Sleight of hand 10',
    price: 2,
    hp: 0,
    duration: 150,
    effect: { spicy: 1 },
    tags: [ Tag.Critter ]
  },
  warmDarner: {
    name: 'Warm Darner',
    image: 'warm-darner.png',
    check: 'Sleight of hand 15',
    price: 2,
    hp: 0,
    duration: 150,
    effect: { spicy: 2 },
    tags: [ Tag.Critter ]
  },
  // Chilly
  coolSafflina: {
    name: 'Cool Safflina',
    image: 'cool-safflina.png',
    price: 3,
    hp: 0,
    duration: 150,
    effect: { chilly: 1 }
  },
  hydromelon: {
    name: 'Hydromelon',
    image: 'hydromelon.png',
    price: 4,
    hp: 1,
    duration: 150,
    effect: { chilly: 1 }
  },
  chillfinTrout: {
    name: 'Chillfin Trout',
    image: 'Chillfin-trout.png',
    price: 6,
    hp: 2,
    duration: 150,
    effect: { chilly: 2 }
  },
  chillshroom: {
    name: 'Chillshroom',
    image: 'chillshroom.png',
    price: 4,
    hp: 1,
    duration: 150,
    effect: { chilly: 2 }
  },
  winterwingButterfly: {
    name: 'Winterwing Butterfly',
    image: 'winterwing-butterfly.png',
    check: 'Sleight of hand 10',
    price: 2,
    hp: 0,
    duration: 150,
    effect: { chilly: 1 },
    tags: [ Tag.Critter ]
  },
  coldDarner: {
    name: 'Cold Darner',
    image: 'cold-darner.png',
    check: 'Sleight of hand 15',
    price: 2,
    hp: 0,
    duration: 150,
    effect: { chilly: 2 },
    tags: [ Tag.Critter ]
  },
  // Fireproof
  fireproofLizard: {
    name: 'Fireproof Lizard',
    image: 'fireproof-lizard.png',
    check: 'Sleight of hand 10',
    price: 5,
    hp: 0,
    duration: 150,
    effect: { fireproof: 1 },
    tags: [ Tag.Critter ]
  },
  smotherwingButterfly: {
    name: 'Smotherwing Butterfly',
    image: 'smotherwing-butterfly.png',
    check: 'Sleight of hand 10',
    price: 2,
    hp: 0,
    duration: 150,
    effect: { fireproof: 2 },
    tags: [ Tag.Critter ]
  },
  // Electro
  electricSafflina: {
    name: 'Electric Safflina',
    image: 'electric-safflina.png',
    price: 3,
    hp: 0,
    duration: 150,
    effect: { electro: 1 }
  },
  voltfruit: {
    name: 'Voltfruit',
    image: 'voltfruit.png',
    price: 4,
    hp: 1,
    duration: 150,
    effect: { electro: 1 }
  },
  voltfinTrout: {
    name: 'Voltfin Trout',
    image: 'Voltfin-trout.png',
    price: 6,
    hp: 2,
    duration: 150,
    effect: { electro: 2 }
  },
  zapshroom: {
    name: 'Zapshroom',
    image: 'zapshroom.png',
    price: 4,
    hp: 1,
    duration: 150,
    effect: { electro: 2 }
  },
  thunderwingButterfly: {
    name: 'Thunderwing Butterfly',
    image: 'thunderwing-butterfly.png',
    check: 'Sleight of hand 10',
    price: 2,
    hp: 0,
    duration: 150,
    effect: { electro: 1 },
    tags: [ Tag.Critter ]
  },
  electricDarner: {
    name: 'Electric Darner',
    image: 'electric-darner.png',
    check: 'Sleight of hand 15',
    price: 2,
    hp: 0,
    duration: 150,
    effect: { electro: 2 },
    tags: [ Tag.Critter ]
  },
  // Mighty
  mightyThistle: {
    name: 'Mighty Thistle',
    image: 'mighty-thistle.png',
    price: 5,
    hp: 0,
    duration: 50,
    effect: { mighty: 1 },
  },
  mightyBananas: {
    name: 'Mighty Bananas',
    image: 'mighty-bananas.png',
    price: 5,
    hp: 1,
    duration: 50,
    effect: { mighty: 2 },
  },
  mightyCarp: {
    name: 'Mighty Carp',
    image: 'mighty-carp.png',
    price: 10,
    hp: 2,
    duration: 50,
    effect: { mighty: 2 },
  },
  razorclawCrab: {
    name: 'Razorclaw Crab',
    image: 'razorclaw-crab.png',
    price: 8,
    hp: 2,
    duration: 50,
    effect: { mighty: 2 },
  },
  mightyPorgy: {
    name: 'Mighty Porgy',
    image: 'mighty-porgy.png',
    price: 10,
    hp: 2,
    duration: 50,
    effect: { mighty: 3 },
  },
  bladedRhinoBeetle: {
    name: 'Bladed Rhino Beetle',
    image: 'bladed-rhino-beetle.png',
    check: 'Stealth 15',
    price: 4,
    hp: 0,
    duration: 50,
    effect: { mighty: 1 },
    tags: [ Tag.Critter ]
  },
  // Tough
  armoranth: {
    name: 'Armoranth',
    image: 'armoranth.png',
    price: 5,
    hp: 0,
    duration: 50,
    effect: { tough: 1 }
  },
  armoredCarp: {
    name: 'Armored Carp',
    image: 'armored-carp.png',
    price: 10,
    hp: 2,
    duration: 50,
    effect: { tough: 2 },
  },
  fortifiedPumpkin: {
    name: 'Fortified Pumpkin',
    image: 'fortified-pumpkin.png',
    price: 5,
    hp: 1,
    duration: 50,
    effect: { tough: 2 },
  },
  ironshellCrab: {
    name: 'Ironshell Crab',
    image: 'ironshell-crab.png',
    price: 8,
    hp: 2,
    duration: 50,
    effect: { tough: 2 },
  },
  ironshroom: {
    name: 'Ironshroom',
    image: 'ironshroom.png',
    price: 5,
    hp: 1,
    duration: 50,
    effect: { tough: 2 },
  },
  armoredPorgy: {
    name: 'Armored Porgy',
    image: 'armored-porgy.png',
    price: 10,
    hp: 2,
    duration: 50,
    effect: { tough: 3 },
  },
  ruggedRhinoBeetle: {
    name: 'Rugged Rhino Beetle',
    image: 'rugged-rhino-beetle.png',
    check: 'Stealth 15',
    price: 4,
    hp: 0,
    duration: 50,
    effect: { tough: 1 },
    tags: [ Tag.Critter ]
  },
  // Hasty
  rushroom: {
    name: 'Rushroom',
    image: 'rushroom.png',
    price: 3,
    hp: 1,
    duration: 50,
    effect: { hasty: 1 }
  },
  swiftCarrot: {
    name: 'Swift Carrot',
    image: 'swift-carrot.png',
    price: 4,
    hp: 1,
    duration: 50,
    effect: { hasty: 1 }
  },
  fleetLotusSeeds: {
    name: 'Fleet Lotus Seeds',
    image: 'fleet-lotus-seeds.png',
    price: 5,
    hp: 1,
    duration: 50,
    effect: { hasty: 2 }
  },
  swiftViolet: {
    name: 'Swift Violet',
    image: 'swift-violet.png',
    price: 10,
    hp: 0,
    duration: 50,
    effect: { hasty: 2 }
  },
  hightailLizard: {
    name: 'Hightail Lizard',
    image: 'hightail-lizard.png',
    check: 'Stealth 10',
    price: 2,
    hp: 0,
    duration: 50,
    effect: { hasty: 1 },
    tags: [ Tag.Critter ]
  },
  hotFootedFrog: {
    name: 'Hot-Footed Frog',
    image: 'hot-footed-frog.png',
    check: 'Stealth 10',
    price: 2,
    hp: 0,
    duration: 50,
    effect: { hasty: 2 },
    tags: [ Tag.Critter ]
  },
  // Sneaky
  blueNightshade: {
    name: 'Blue Nightshade',
    image: 'blue-nightshade.png',
    price: 4,
    hp: 0,
    duration: 120,
    effect: { sneaky: 1 }
  },
  sneakyRiverSnail: {
    name: 'Sneaky River Snail',
    image: 'sneaky-river-snail.png',
    price: 6,
    hp: 2,
    duration: 120,
    effect: { sneaky: 1 }
  },
  silentShroom: {
    name: 'Silent Shroom',
    image: 'silent-shroom.png',
    price: 3,
    hp: 1,
    duration: 120,
    effect: { sneaky: 2 }
  },
  stealthfinTrout: {
    name: 'Stealthfin Trout',
    image: 'stealthfin-trout.png',
    price: 10,
    hp: 2,
    duration: 120,
    effect: { sneaky: 2 }
  },
  silentPrincess: {
    name: 'Silent Princess',
    image: 'silent-princess.png',
    price: 10,
    hp: 0,
    duration: 120,
    effect: { sneaky: 3 }
  },
  sunsetFirefly: {
    name: 'Sunset Firefly',
    image: 'sunset-firefly.png',
    price: 2,
    hp: 0,
    duration: 120,
    effect: { sneaky: 1 },
    tags: [ Tag.Critter ]
  },
  // Energizing
  stamellaShroom: {
    name: 'Stamella Shroom',
    image: 'stamella-shroom.png',
    price: 5,
    hp: 1,
    duration: 120,
    effect: { energizing: 1 }
  },
  brightEyedCrab: {
    name: 'Bright-Eyed Crab',
    image: 'bright-eyed-crab.png',
    price: 10,
    hp: 2,
    duration: 120,
    effect: { energizing: 2 }
  },
  courserBeeHoney: {
    name: 'Courser Bee Honey',
    image: 'courser-bee-honey.png',
    check: 'Swarm of Insects 50%',
    price: 10,
    hp: 4,
    duration: 120,
    effect: { energizing: 2 }
  },
  staminokaBass: {
    name: 'Staminoka Bass',
    image: 'staminoka-bass.png',
    price: 18,
    hp: 2,
    duration: 120,
    effect: { energizing: 4 }
  },
  restlessCricket: {
    name: 'Restless Cricket',
    image: 'restless-cricket.png',
    check: 'Stealth 10',
    price: 2,
    hp: 0,
    duration: 120,
    effect: { energizing: 1 },
    tags: [ Tag.Critter ]
  },
  energeticRhinoBeetle: {
    name: 'Energetic Rhino Beetle',
    image: 'energetic-rhino-beetle.png',
    check: 'Stealth 15',
    price: 30,
    hp: 0,
    duration: 120,
    effect: { energizing: 6 },
    tags: [ Tag.Critter ]
  },
  // Enduring
  enduraShroom: {
    name: 'Endura Shroom',
    image: 'endura-shroom.png',
    price: 6,
    hp: 2,
    duration: 30,
    effect: { enduring: 1 }
  },
  enduraCarrot: {
    name: 'Endura Carrot',
    image: 'endura-carrot.png',
    price: 30,
    hp: 4,
    duration: 30,
    effect: { enduring: 4 }
  },
  tirelessFrog: {
    name: 'Tireless Frog',
    image: 'tireless-frog.png',
    check: 'Stealth 10',
    price: 20,
    hp: 4,
    duration: 50,
    effect: { enduring: 2 },
    tags: [ Tag.Critter ]
  },
  // Hearty
  heartyTruffle: {
    name: 'Hearty Truffle',
    image: 'hearty-truffle.png',
    price: 6,
    hp: Infinity,
    duration: 30,
    effect: { hearty: 1 }
  },
  heartyBass: {
    name: 'Hearty Bass',
    image: 'hearty-bass.png',
    price: 18,
    hp: Infinity,
    duration: 30,
    effect: { hearty: 2 }
  },
  heartyBlueshellSnail: {
    name: 'Hearty Blueshell Snail',
    image: 'hearty-blueshell-snail.png',
    price: 15,
    hp: Infinity,
    duration: 30,
    effect: { hearty: 3 }
  },
  heartyRadish: {
    name: 'Hearty Radish',
    image: 'hearty-radish.png',
    price: 8,
    hp: Infinity,
    duration: 30,
    effect: { hearty: 3 }
  },
  bigHeartyTruffle: {
    name: 'Big Hearty Truffle',
    image: 'big-hearty-truffle.png',
    price: 15,
    hp: Infinity,
    duration: 30,
    effect: { hearty: 4 }
  },
  heartyDurian: {
    name: 'Hearty Durian',
    image: 'hearty-durian.png',
    price: 15,
    hp: Infinity,
    duration: 30,
    effect: { hearty: 4 }
  },
  heartySalmon: {
    name: 'Hearty Salmon',
    image: 'hearty-salmon.png',
    price: 10,
    hp: Infinity,
    duration: 30,
    effect: { hearty: 4 }
  },
  bigHeartyRadish: {
    name: 'Big Hearty Radish',
    image: 'big-hearty-radish.png',
    price: 15,
    hp: Infinity,
    duration: 30,
    effect: { hearty: 5 }
  },
  heartyLizard: {
    name: 'Hearty Lizard',
    image: 'hearty-lizard.png',
    check: 'Stealth 10',
    price: 20,
    hp: Infinity,
    duration: 30,
    effect: { hearty: 4 },
    tags: [ Tag.Critter ]
  }
}
