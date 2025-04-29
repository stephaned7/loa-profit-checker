import React, { useState } from "react";

import { recipes } from "../recipes.js";
import categories from "../categories.js";
import { Link } from "react-router-dom";

const Home = () => {
  const [prices, setPrices] = useState({});

  const handlePriceChange = (id, value) => {
    setPrices((prevPirces) => ({
      ...prevPirces,
      [id]: parseFloat(value) || 0,
    }));
  };

  const getCraftingCost = (recipe) => {
    const materialCost = recipe.recipe.reduce((total, item) => {
      const inputValue = prices[item.material.id];
      const bundleQuantity = item.material.bundleQuantity;
      const costPerUnit = inputValue / bundleQuantity;
      return total + costPerUnit * item.quantity;
    }, 0);

    const reductionPercentage = prices[recipe.category.id] || 0;
    const reducedCraftingCost =
      recipe.craftingCost * (1 - reductionPercentage / 100);

    const totalCost = materialCost + reducedCraftingCost;

    return Math.ceil(totalCost);
  };

  const getSellingPrice = (recipe) => {
    const price = prices[recipe.itemCrafted.id] || 0;
    const sellingPrice = price * recipe.quantityCrafted;
    return Math.ceil(sellingPrice);
  };

  const checkProfit = (recipe) => {
    const sellingPrice = getSellingPrice(recipe);
    const craftingCost = getCraftingCost(recipe);

    console.log("Selling Price:", sellingPrice);
    console.log("Crafting Cost:", craftingCost);
    console.log("Profit:", sellingPrice - craftingCost);

    if (sellingPrice > craftingCost) {
      return `${sellingPrice - craftingCost} gold profit per bundle`;
    } else if (sellingPrice < craftingCost) {
      return `${craftingCost - sellingPrice} gold loss per bundle`;
    } else {
      return "No profit, no loss";
    }
  };

  return (
    <>
      <div className="App recipes-page">
        <div className="heading">
          <h1 className="title recipe-title">Recipes</h1>
          <Link to="/bestcrafts">Best crafts</Link>
          <h3 class="cost-reduction-title">Cost reduction %</h3>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="input-group reductions">
            <div className="heading">
              <h2 className="col-heading">{category.name}</h2>
              <input
                type="number"
                value={prices[category.id] || ""}
                onChange={(e) => handlePriceChange(category.id, e.target.value)}
              ></input>
            </div>
          </div>
        ))}

        <h1 className="recipe-header">Recipes</h1>

        <div className="recipes">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="inputs-group">
              <div className="heading">
                <h2>{recipe.name}</h2>
                <h3 className="categ-name">Category: {recipe.category.name}</h3>
              </div>
              <ul>
                {recipe.recipe.map((item, index) => (
                  <li key={item.material.id} className="input-group">
                    {item.material.name} x {item.quantity}
                    <br />
                    <label>
                      Price (Bundle of {item.material.bundleQuantity})
                    </label>
                    <input
                      type="number"
                      value={prices[item.material.id] || 0}
                      onChange={(e) =>
                        handlePriceChange(item.material.id, e.target.value)
                      }
                    ></input>
                  </li>
                ))}
                <div className="item-price-input">
                  <label>{recipe.itemCrafted.name}</label>
                  <input
                    type="number"
                    value={prices[recipe.itemCrafted.id] || ""}
                    onChange={(e) =>
                      handlePriceChange(recipe.itemCrafted.id, e.target.value)
                    }
                  ></input>
                </div>
              </ul>
              <div className="btn-group">
                <button
                  className="btn"
                  onClick={() => alert(checkProfit(recipe))}
                >
                  Check profit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
