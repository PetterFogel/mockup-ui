import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/navigation.module.css";

function Navigation() {
  const [toggle, setToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggle(!toggle);
  };

  const handleBurgerMenuClose = () => {
    setToggle(false);
  }

  return (
    <header className={classes.header}>
      <div>
        <Link to="/" style={{ textDecoration: "none"}}>
          <h2 className={classes.logo}>Noah</h2>
        </Link>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.navLinks}
        style={{
          right: toggle ? "0%" : "-100%"
         }}
        >
          <li>
            <Link
              to="/contribute"
              style={{ textDecoration: "none", color: "#fff" }}
              onClick={handleBurgerMenuClose}
            >
              Contribute
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#fff" }}
              onClick={handleBurgerMenuClose}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#fff" }}
              onClick={handleBurgerMenuClose}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.burgerMenu} onClick={handleToggleMenu}>
        <div className={classes.burgerBar}></div>
        <div className={classes.burgerBar}></div>
        <div className={classes.burgerBar}></div>
      </div>
    </header>
  );
}

export default Navigation;
