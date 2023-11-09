import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
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
            <PizzaBlock price="555" title="Пицца 1" />
            <PizzaBlock price="666" title="Пицца 2" />
            <PizzaBlock price="777" title="Пицца 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
