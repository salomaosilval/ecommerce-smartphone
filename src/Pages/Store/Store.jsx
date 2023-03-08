import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { BsCartPlus, BsCartCheck } from "react-icons/bs";

import { setItem, getItem } from "../../services/LocalStorageFuncs";

import { formatCurrency } from "../../utils/FormatCurrency";
import { priceOnCard } from "../../utils/PriceOnCard";

import { ProductsArea, GreenBsCartCheck, RedBsCartPlus } from "./styles";

import { Header } from "../../components/Header/Header";

export const Store = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem("Carrinho") || []);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
      const response = await axios.get(url);

      setData(response.data.results);

      console.log(response.data.results);
    };

    fetchAPI();
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id);

    if (element) {
      const arrayFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrayFilter);
      setItem("Carrinho", arrayFilter);
    } else {
      setCart([...cart, obj]);
      setItem("Carrinho", [...cart, obj]);
    }
  };

  return (
    <div>
      <Header />
      <ProductsArea>
        {data.map((smartphone) => (
          <div key={smartphone.id}>
            <h4>{smartphone.title}</h4>
            <img src={smartphone.thumbnail} alt={smartphone.title} />
            <h3>{formatCurrency(smartphone.price)}</h3>
            <p>ou 12x de {formatCurrency(priceOnCard(smartphone.price))}</p>
            <button onClick={() => handleClick(smartphone)}>
              {cart.some((item) => item.id === smartphone.id) ? <GreenBsCartCheck /> : <RedBsCartPlus />}
            </button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};
