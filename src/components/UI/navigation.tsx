import { Link } from "react-router-dom";
import classes from "../../styles/navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <div>
        <h2 className={classes.logo}>Noah</h2>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              to="/contribute"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Contribute
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.burgerMenu}>
        <div className={classes.burgerBar}></div>
        <div className={classes.burgerBar}></div>
        <div className={classes.burgerBar}></div>
      </div>
    </header>
  );
}

export default Navigation;
