import { Route, Switch } from "react-router-dom";
import classes from "../../styles/mainContent.module.css";
import Contact from "./contact";
import Contribute from "./contribute";
import Landingpage from "./landingpage";
import Products from "./products";

function MainContent() {
  return (
    <main className={classes.main}>
      <Switch>
        <Route path="/" exact>
          <Landingpage />
        </Route>
        <Route path="/contribute">
          <Contribute />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </main>
  );
}

export default MainContent;
