import { Route } from "react-router-dom";
import classes from "../../styles/mainContent.module.css";
import Contact from "./contact";
import Contribute from "./contribute";
import Landingpage from "./landingpage";
import Products from "./products";

function MainContent() {
  return (
    <main className={classes.main}>
      <Route>
        <Landingpage />
      </Route>
      <Route>
        <Contribute />
      </Route>
      <Route>
        <Products />
      </Route>
      <Route>
        <Contact />
      </Route>
    </main>
  );
}

export default MainContent;
