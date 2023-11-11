import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import "./scss/App.scss";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://646a5e6270b2302c85e3c2b2.mockapi.io/items")
      .then((res) => res.json())
      .then((items) => {
        setItems(items);
      });
  }, []);

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
            {items.map(({ id, title, price, imageUrl, sizes, types }) => (
              <PizzaBlock
                key={id}
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
