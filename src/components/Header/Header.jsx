import { Link } from "react-router-dom";

import { HeaderArea } from "./styles";

export const Header = () => {
  return (
    <HeaderArea>
      <p>E Commerce - Smartphones</p>
      <Link to="/">Store</Link>
      <Link to="/cart">Carrinho</Link>
    </HeaderArea>
  );
};
