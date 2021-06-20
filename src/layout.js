import { Switch, Route } from "react-router-dom";

import MainPage from "./containers/main/index";
import Article from "./components/article/index";

function Layout() {
  return (
    <Switch>
      <Route exact path={"/"} component={MainPage} />
      <Route exact path={"/article/:id"} component={Article} />
      <Route component={<div>404</div>} />
    </Switch>
  );
}

export default Layout;
