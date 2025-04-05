import React, { useState } from "react";

import materials from "../materials.js";
import { recipes } from "../recipes.js";
import categories from "../categories.js";
import craftedItems from "../crafts.js";
import { getCraftingCost, getSellingPrice } from "../methodStore.js";

const BestCrafts = () => {
  const [prices, setPrices] = useState({});

  const handlePriceChange = (id, value) => {
    setPrices((prevPrices) => ({
      ...prevPrices,
      [id]: parseFloat(value) || 0,
    }));
  };

const calculateProfits = () => {
  return recipes
    .map((recipe) => {
      const hasAllPrices = recipe.recipe.every(
        (item) => prices[item.material.id] !== undefined && prices[item.material.id] > 0
      );

      if (!hasAllPrices) {
        return null; // Exclude recipes with missing material prices
      }

      const craftingCost = getCraftingCost(recipe, prices);
      const sellingPrice = getSellingPrice(recipe, prices);
      const profit = sellingPrice - craftingCost;

      return {
        ...recipe,
        profit, // Always return the recipe object with the profit value
      };
    })
    .filter((recipe) => recipe !== null); // Remove null values
};

const sortedRecipes = calculateProfits().sort((a, b) => b.profit - a.profit);

  return (
    <div className="App">
      <h1>Best Crafts</h1>

      <a href="/">Recipes</a>

      <label>Cost reduction %</label>

      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <input
            type="number"
            id={category.id}
            onChange={(e) => handlePriceChange(category.id, e.target.value)}
          ></input>
        </div>
      ))}

      <h2>Materials</h2>
      {materials.map((material) => (
        <div key={material.id}>
          <label>{material.name}</label>
          <input
            type="number"
            id={material.id}
            onChange={(e) => handlePriceChange(material.id, e.target.value)}
          ></input>
        </div>
      ))}

      <h2>Items prices</h2>
      {craftedItems.map((item) => (
        <div key={item.id}>
          <label>{item.name}</label> {/* Ensure item.name is accessed */}
          <input
            type="number"
            id={item.id}
            onChange={(e) => handlePriceChange(item.id, e.target.value)}
          ></input>
        </div>
      ))}

      <h2>Most profitable crafts</h2>
      {sortedRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
          <p>
            {recipe.profit < 0
              ? `${Math.abs(recipe.profit)} gold loss per bundle`
              : recipe.profit === 0
              ? "Break even"
              : `${recipe.profit} gold profit per bundle`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BestCrafts;
