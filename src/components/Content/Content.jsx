import { Switch, Route } from "react-router-dom";

import { Store } from "../../Pages/Store/Store";
import { Cart } from "../../Pages/Cart/Cart";

export const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Store} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};
