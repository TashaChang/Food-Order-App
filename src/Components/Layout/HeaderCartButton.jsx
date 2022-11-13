import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "../style.css/HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const buttonNumber = ctx.items.reduce((accumulate, currentnumber) => {
    return accumulate + currentnumber.amount;
  }, 0);

  return (
    <button onClick={props.click} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{buttonNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
