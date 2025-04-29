import lifeskills from "./lifeskills.js";

const findLifeskillByName = (name) => {
  return lifeskills.find((lifeskill) => lifeskill.name === name);
}

let materials = [
  
  {
    id: "mat1",
    name: "Wild Flower",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Foraging"),
  },
  
  {
    id: "mat2",
    name: "Shy Wild Flower",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Foraging"),
  },
  
  {
    id: "mat3",
    name: "Bright Wild Flower",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Foraging"),
  },
  
  {
    id: "mat4",
    name: "Abidos Wild Flower",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Foraging"),
  },
  
  {
    id: "mat5",
    name: "Timber",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Logging"),
  },

  {
    id: "mat6",
    name: "Tender Timber",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Logging"),
  },

  {
    id: "mat7",
    name: "Sturdy Timber",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Logging"),
  },

  {
    id: "mat8",
    name: "Abidos Timber",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Logging"),
  },

  {
    id: "mat9",
    name: "Iron Ore",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Mining"),
  },

  {
    id: "mat10",
    name: "Heavy Iron Ore",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Mining"),
  },

  {
    id: "mat11",
    name: "Strong Iron Ore",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Mining"),
  },

  {
    id: "mat12",
    name: "Abidos Iron Ore",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Mining"),
  },

  {
    id: "mat13",
    name: "Thick Raw Meat",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Hunting"),
  },

  {
    id: "mat14",
    name: "Treated Meat",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Hunting"),
  },

  {
    id: "mat15",
    name: "Orea Thick Meat",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Hunting"),
  },

  {
    id: "mat16",
    name: "Abidos Thick Raw Meat",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Hunting"),
  },

  {
    id: "mat17",
    name: "Exotic Leather",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Hunting"),
  },

  {
    id: "mat18",
    name: "Fish",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Fishing"),
  },

  {
    id: "mat19",
    name: "Redflesh Fish",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Fishing"),
  },

  {
    id: "mat20",
    name: "Oreha Solar Carp",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Fishing"),
  },

  {
    id: "mat21",
    name: "Abidos Solar Carp",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Fishing"),
  },

  {
    id: "mat22",
    name: "Ancient Relic",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Excavating"),
  },

  {
    id: "mat23",
    name: "Rare Relic",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Excavating"),
  },

  {
    id: "mat24",
    name: "Oreha Relic",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Excavating"),
  },

  {
    id: "mat25",
    name: "Abidos Relic",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Excavating"),
  },

  {
    id: "mat26",
    name: "Exotic Relic",
    bundleQuantity: 100,
    lifeskillType: findLifeskillByName("Excavating"),
  }
];

export default materials;
