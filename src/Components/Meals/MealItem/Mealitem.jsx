import React from "react";
import MealitemForm from "../MealItem/MealitemForm";
import classes from "../../style.css/MealItem.module.css";

const Mealitem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.describe}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealitemForm />
      </div>
    </li>
  );
};

export default Mealitem;
