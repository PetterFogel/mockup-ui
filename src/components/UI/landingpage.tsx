import classes from "../../styles/landingpage.module.css";

function Landingpage() {
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
                {/* <button className={classes.primary}>Contact</button>
                <button className={classes.secondary}>Confirm</button> */}
                <button className="primary-btn">Contact</button>
                <button className="secondary-btn">Contribute</button>
            </div>

        </div>        
    )
}

export default Landingpage
