const getCraftingCost = (recipe) => {
  const materialCost = recipe.recipe.reduce((total, item) => {
    const inputElement = document.getElementById(item.material.id);
    const inputValue = inputElement ? parseFloat(inputElement.value) || 0 : 0;
    const bundleQuantity = item.material.bundleQuantity;
    const costPerUnit = inputValue / bundleQuantity;
    return total + costPerUnit * item.quantity;
  }, 0);

  const reductionPercentage = getCraftingCostReduction(recipe.category.id);
  const reducedCraftingCOst = recipe.craftingCost * (1 - reductionPercentage / 100);

  const totalCost = materialCost + reducedCraftingCOst;

  return Math.ceil(totalCost);
};

const getSellingPrice = (recipe) => {
    const itemPrice = document.getElementById(recipe.itemCrafted.id);
    const price = itemPrice ? parseFloat(itemPrice.value) || 0 : 0;
    const sellingPrice = price * recipe.quantityCrafted;
    return sellingPrice;
}

const checkProfit = (recipe) => {
  const sellingPrice = getSellingPrice(recipe);
  const craftingCost = getCraftingCost(recipe);

  console.log("Selling Price:", sellingPrice);
  console.log("Crafting Cost:", craftingCost);
  console.log("Profit:", sellingPrice - craftingCost);

  if (sellingPrice > craftingCost) {
    return `${sellingPrice-craftingCost} gold profit per bundle`;
  } else if (sellingPrice < craftingCost) {
    return `${craftingCost-sellingPrice} gold loss per bundle`;
  } else {
    return "No profit, no loss";
  }
};

const getCraftingCostReduction = (categoryId) => {
  const reduction = document.getElementById(categoryId);
  return reduction ? parseFloat(reduction.value) || 0 : 0;
};

export { getCraftingCost, getSellingPrice, checkProfit };
