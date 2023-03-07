import { Switch, Route } from "react-router-dom";

import { Store } from "../../Pages/Store/Store";

export const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Store} />
    </Switch>
  );
};
