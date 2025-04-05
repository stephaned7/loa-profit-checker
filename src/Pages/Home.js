import React from "react";

import { recipes } from "../recipes.js";
import categories from "../categories.js";

import { checkProfit } from "../methodStore.js";


const Home = () => {
    return (
      <>
        <div className="App">
          <h1>Recipes</h1>

            <a href="/bestcrafts">Best crafts</a>

          <label>Cost reduction %</label>

          {categories.map((category) => (
            <div key={category.id}>
              <h2>{category.name}</h2>
              <input type="number" id={category.id}></input>
            </div>
          ))}

          <h1>Recipes</h1>

          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <h2>{recipe.name}</h2>

              <h3>Category: {recipe.category.name}</h3>

              <ul>
                {recipe.recipe.map((item, index) => (
                  <li key={index}>
                    {item.material.name} x {item.quantity}
                    <br />
                    <label>
                      Price (Bundle of {item.material.bundleQuantity})
                    </label>
                    <input type="number" id={item.material.id}></input>
                  </li>
                ))}
                <label>{recipe.itemCrafted.name}</label>
                <input type="number" id={recipe.itemCrafted.id}></input>
              </ul>

              <button onClick={() => alert(checkProfit(recipe))}>
                Check profit
              </button>
            </div>
          ))}
        </div>
      </>
    );
}

export default Home;