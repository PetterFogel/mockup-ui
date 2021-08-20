import { useHistory } from "react-router-dom";
import classes from "../../styles/landingpage.module.css";

function Landingpage() {
  const history = useHistory();

  const handleContactButtonClick = () => {
    history.push("/contact");
  };

  const handleContributeButtonClick = () => {
    history.push("/contribute");
  };

  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <div className={classes.symbol}></div>
        <div className={classes.slogan}>
          <h2>PROTECT</h2>
          <h2>THE ARCTIC</h2>
        </div>
      </div>
      <div className={classes.text}>
        <h3>With your contribute</h3>
        <h3>we can make a difference</h3>
      </div>
      <div>
        <button className="primary-btn" onClick={handleContactButtonClick}>
          Contact
        </button>
        <button className="secondary-btn" onClick={handleContributeButtonClick}>
          Contribute
        </button>
      </div>
    </div>
  );
}

export default Landingpage;
