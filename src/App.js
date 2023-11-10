import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import pizzas from "./assets/pizzas.json";

import "./scss/App.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map(({ title, price, imageUrl, sizes, types }) => (
              <PizzaBlock
                key={title}
                price={price}
                title={title}
                imageUrl={imageUrl}
                sizes={sizes}
                types={types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
