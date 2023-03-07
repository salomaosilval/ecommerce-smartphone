import { useEffect, useState } from "react";
import axios from "axios";
import { BsCartPlus, BsCartCheck } from "react-icons/bs";
import { setItem, getItem } from "../../services/LocalStorageFuncs";

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
      <h1>Store</h1>
      <div>
        {data.map((smartphone) => (
          <div key={smartphone.id}>
            <h4>{smartphone.title}</h4>
            <img src={smartphone.thumbnail} alt={smartphone.title} />
            <h4>{smartphone.price}</h4>
            <button onClick={() => handleClick(smartphone)}>
              {cart.some((item) => item.id === smartphone.id) ? <BsCartCheck /> : <BsCartPlus />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
