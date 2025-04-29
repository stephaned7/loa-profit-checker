import React, { useState } from "react";

import materials from "../materials.js";
import { recipes } from "../recipes.js";
import { Link } from "react-router-dom";
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

  const groupedMaterials = materials.reduce((acc, material) => {
    const lifeskill = material.lifeskillType?.name;

    if (!acc[lifeskill]) {
      acc[lifeskill] = [];
    }
    acc[lifeskill].push(material);
    return acc;
  }, {});

const calculateProfits = () => {
  return recipes
    .map((recipe) => {
      const hasAllPrices = recipe.recipe.every(
        (item) => prices[item.material.id] !== undefined && prices[item.material.id] > 0
      );

      if (!hasAllPrices) {
        return null;
      }

      const craftingCost = getCraftingCost(recipe, prices);
      const sellingPrice = getSellingPrice(recipe, prices);
      const profit = sellingPrice - craftingCost;

      return {
        ...recipe,
        profit,
      };
    })
    .filter((recipe) => recipe !== null);
};

const sortedRecipes = calculateProfits().sort((a, b) => b.profit - a.profit);

  return (
    <div className="App best-crafts-page">
      <div className="heading">
        <h1>Best Crafts</h1>
        <Link to="/">Recipes</Link>

        <h3 className="title">Cost reduction %</h3>
      </div>

      {categories.map((category) => (
        <div key={category.id} className="reductions">
          <h2 className="title">{category.name}</h2>
          <div className="input-group">
            <input
              type="number"
              id={category.id}
              onChange={(e) => handlePriceChange(category.id, e.target.value)}
            ></input>
          </div>
        </div>
      ))}

      <h2 className="title-heading">Materials</h2>
      <div className="materials-container">
        {Object.entries(groupedMaterials).map(([lifeskill, materials]) => (
          <div key={lifeskill}>
            <h3 className="title">{lifeskill}</h3>

            {materials.map((material) => (
              <div key={material.id}>
                <div className="input-group">
                  <label className="material-name">{material.name}</label>
                  <input
                    type="number"
                    id={material.id}
                    onChange={(e) =>
                      handlePriceChange(material.id, e.target.value)
                    }
                  ></input>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <h2 className="title item-prices-title">Items prices</h2>
      {craftedItems.map((item) => (
        <div key={item.id} className="item-prices">
          <div className="input-group">
            <label>{item.name}</label>
            <input
              type="number"
              id={item.id}
              onChange={(e) => handlePriceChange(item.id, e.target.value)}
            ></input>
          </div>
        </div>
      ))}

      <h2 className="title best-crafts-title">Most profitable crafts</h2>
      {sortedRecipes.map((recipe) => (
        <div key={recipe.id} className="best-crafts-results">
          <h3 className="title">{recipe.name}</h3>
          <p className="title result-recipe">
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
