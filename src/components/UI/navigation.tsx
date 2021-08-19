import classes from "../../styles/navigation.module.css";

function Navigation() {
    return (
        <header className={classes.header}>
            <div>
                <h2 className={classes.logo}>Noah</h2>
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>Contribute</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
