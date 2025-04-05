import materials from "./materials";
import categories from "./categories";
import craftedItems from "./crafts";

const findMaterialByName = (name) => {
  return materials.find((material) => material.name === name);
};

const findCategoryByName = (name) => {
  return categories.find((category) => category.name === name);
};

const findRecipeByName = (name) => {
  return recipes.find((recipe) => recipe.name === name);
};

const findItemByName = (name) => {
  return craftedItems.find((item) => item.name === name);
};

const recipes = [
  {
    id: 1,
    name: "Abidos fusion material x10 (Logging)",
    recipe: [
      { material: findMaterialByName("Timber"), quantity: 86 },
      { material: findMaterialByName("Tender Timber"), quantity: 45 },
      { material: findMaterialByName("Abidos Timber"), quantity: 33 },
    ],
    category: findCategoryByName("Special"),
    craftingCost: 400,
    itemCrafted: findItemByName("Abidos fusion material"),
    quantityCrafted: 10,
  },

  {
    id: 2,
    name: "Abidos fusion material x10 (Foraging)",
    recipe: [
      { material: findMaterialByName("Wild Flower"), quantity: 86 },
      { material: findMaterialByName("Shy Wild Flower"), quantity: 45 },
      { material: findMaterialByName("Abidos Wild Flower"), quantity: 33 },
    ],
    category: findCategoryByName("Special"),
    craftingCost: 400,
    itemCrafted: findItemByName("Abidos fusion material"),
    quantityCrafted: 10,
  },

  {
    id: 3,
    name: "Abidos fusion material x10 (Mining)",
    recipe: [
      { material: findMaterialByName("Iron Ore"), quantity: 86 },
      { material: findMaterialByName("Heavy Iron Ore"), quantity: 45 },
      { material: findMaterialByName("Abidos Iron Ore"), quantity: 33 },
    ],
    category: findCategoryByName("Special"),
    craftingCost: 400,
    itemCrafted: findItemByName("Abidos fusion material"),
    quantityCrafted: 10,
  },

  {
    id: 4,
    name: "Abidos fusion material x10 (Hunting)",
    recipe: [
      { material: findMaterialByName("Thick Raw Meat"), quantity: 86 },
      { material: findMaterialByName("Treated Meat"), quantity: 45 },
      { material: findMaterialByName("Abidos Thick Raw Meat"), quantity: 33 },
    ],
    category: findCategoryByName("Special"),
    craftingCost: 400,
    itemCrafted: findItemByName("Abidos fusion material"),
    quantityCrafted: 10,
  },
  
  {
    id: 5,
    name: "Abidos fusion material x10 (Fishing)",
    recipe: [
      { material: findMaterialByName("Fish"), quantity: 86 },
      { material: findMaterialByName("Redflesh Fish"), quantity: 45 },
      { material: findMaterialByName("Abidos Solar Carp"), quantity: 33 },
    ],
    category: findCategoryByName("Special"),
    craftingCost: 400,
    itemCrafted: findItemByName("Abidos fusion material"),
    quantityCrafted: 10,
  },
  
    {
      id: 6,
      name: "Abidos fusion material x10 (Excavating)",
      recipe: [
        { material: findMaterialByName("Ancient Relic"), quantity: 86 },
        { material: findMaterialByName("Rare Relic"), quantity: 45 },
        { material: findMaterialByName("Abidos Relic"), quantity: 33 },
      ],
      category: findCategoryByName("Special"),
      craftingCost: 400,
      itemCrafted: findItemByName("Abidos fusion material"),
      quantityCrafted: 10,
    },
];

export { recipes, findRecipeByName };
