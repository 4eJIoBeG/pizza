import React, { useEffect, useState } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности🔽",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    const sortBy = sortType.sortProperty.replace("-", "");
    const orderBy = sortType.sortProperty.includes("-") ? "desc" : "asc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    fetch(
      `https://646a5e6270b2302c85e3c2b2.mockapi.io/items?${category}&sortBy=${sortBy}&order=${orderBy}`,
    )
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(index) => setCategoryId(index)}
        />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
