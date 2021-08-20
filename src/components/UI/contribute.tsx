import classes from "../../styles/contribute.module.css";

function Contribute() {
  return (
    <div className={classes.container}>
      {/* <div className={classes.controller}> */}
        <form className={classes.form}>
          <h3>Sign up</h3>
          <input type="text" placeholder="Name..." id="nameInput" />
          <input type="text" placeholder="Adress..." id="adressInput" />
          <input type="text" placeholder="City..." id="cityInput" />
          <input type="email" placeholder="Email..." id="emailInput" />
          <input type="text" placeholder="Bank Account..." id="bankInput" />
          <button className="secondary-btn">Confirm</button>
        </form>
      {/* </div>
      <div className={classes.controller}> */}
        <div className={classes.caption}>
          <h2>Sign up for a monthly fee</h2>
          <p>
            Your gift you donate to our donation will go to the research to save
            the Antarctic. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi repellendus, quisquam vitae nulla maxime consequatur?
          </p>
          <button className="primary-btn">One time fee</button>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Contribute;
