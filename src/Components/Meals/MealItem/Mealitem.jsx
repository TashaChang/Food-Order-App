import React, { useContext } from "react";
import MealitemForm from "../MealItem/MealitemForm";
import classes from "../../style.css/MealItem.module.css";
import CartContext from "../../../store/cart-context";

const Mealitem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.describe}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealitemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Mealitem;
