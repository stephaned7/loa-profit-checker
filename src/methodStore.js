const getCraftingCost = (recipe, prices = {}) => {
  const materialCost = recipe.recipe.reduce((total, item) => {
    const inputValue = prices[item.material.id] || 0;
    const bundleQuantity = item.material.bundleQuantity;
    const costPerUnit = inputValue / bundleQuantity;

    return total + costPerUnit * item.quantity;
  }, 0);

  const reductionPercentage = getCraftingCostReduction(recipe.category.id, prices);
  const reducedCraftingCost = recipe.craftingCost * (1 - reductionPercentage / 100);

  const totalCost = materialCost + reducedCraftingCost;

  return Math.ceil(totalCost);
};

const getSellingPrice = (recipe, prices = {}) => {
  const price = prices[recipe.itemCrafted.id] || 0;
  const sellingPrice = price * recipe.quantityCrafted;
  return sellingPrice;
};

const checkProfit = (recipe, prices = {}) => {
  const sellingPrice = getSellingPrice(recipe, prices);
  const craftingCost = getCraftingCost(recipe, prices);
  const netRevenue = Math.floor(sellingPrice * 0.95);
  const profit = netRevenue - craftingCost;

  if (profit > 0) {
    return `${profit} gold profit per bundle`;
  } else if (profit < 0) {
    return `${Math.abs(profit)} gold loss per bundle`;
  } else {
    return "No profit, no loss";
  }
};

const getCraftingCostReduction = (categoryId, prices = {}) => {
  return prices[categoryId] || 0;
};

export { getCraftingCost, getSellingPrice, checkProfit };