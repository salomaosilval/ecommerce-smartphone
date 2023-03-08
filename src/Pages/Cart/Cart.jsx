import { useState } from "react";
import { getItem, setItem } from "../../services/LocalStorageFuncs";

import { BsCartDash } from "react-icons/bs";

import { ProductsArea, SubTotalDiv } from "./styles";

import { formatCurrency } from "../../utils/FormatCurrency";
import { priceOnCard } from "../../utils/PriceOnCard";

import { Header } from "../../components/Header/Header";

export const Cart = () => {
  const [data, setData] = useState(getItem("Carrinho") || []);

  const removeItem = (obj) => {
    const arrayFilter = data.filter((smartphone) => smartphone.id !== obj.id);

    setData(arrayFilter);
    setItem("Carrinho", arrayFilter);
  };

  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div>
      <Header />
      <ProductsArea>
        {data.map((smartphone) => {
          return (
            <div key={smartphone.id}>
              <h4>{smartphone.title}</h4>
              <img src={smartphone.thumbnail} alt={smartphone.title} />
              <h3>{formatCurrency(smartphone.price)}</h3>
              <p>ou 12x de {formatCurrency(priceOnCard(smartphone.price))}</p>
              <button onClick={() => removeItem(smartphone)}>
                <BsCartDash />
              </button>
            </div>
          );
        })}
      </ProductsArea>
      <SubTotalDiv>
        <h3>Subtotal: {formatCurrency(subTotal)}</h3>
      </SubTotalDiv>
    </div>
  );
};
