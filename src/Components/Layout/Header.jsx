import { Fragment } from "react";
import mealPic from "../../assets/victoria.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="image">
        <img src={mealPic} alt="Tasty Food" />
      </div>
    </Fragment>
  );
};

export default Header;
