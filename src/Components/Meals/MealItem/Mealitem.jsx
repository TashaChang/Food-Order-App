import React from "react";
import MealitemForm from "../MealItem/MealitemForm";

const Mealitem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.describe}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealitemForm />
      </div>
    </li>
  );
};

export default Mealitem;
