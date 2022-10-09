import { Fragment } from "react";
import mealPic from "../../assets/victoria.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "../style.css/Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealPic} alt="Tasty Food" />
      </div>
    </Fragment>
  );
};

export default Header;
