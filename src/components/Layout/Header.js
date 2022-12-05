import React, {Fragment} from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assests/meals.jpg";
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious meals."/>
            </div>
        </Fragment>
    );
}

export default Header;