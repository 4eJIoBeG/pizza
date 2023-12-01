import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FullPizza:React.FC = () => {
  const [pizza, setPizza] = useState<{
		imageUrl:string;
		title:string;
		price:number;
	}>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://646a5e6270b2302c85e3c2b2.mockapi.io/items/" + id,
        );
        setPizza(data);
      } catch {
        alert("Такой пиццы нет!");
        navigate("/");
      }
    }

    fetchPizza();
  }, []); // eslint-disable-line

  if (!pizza) {
    return <div className="container">Загрузка...</div>;
  }

  return (
    <div className="container">
      <div className="pizza-block">
        <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{pizza.title}</h4>
        <div className="pizza-block__price">от {pizza.price} ₽</div>
        <div className="pizza-block__bottom">
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullPizza;
