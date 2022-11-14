import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "../style.css/HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnAnimation, setbtnAnimation] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const buttonNumber = items.reduce((accumulate, currentnumber) => {
    return accumulate + currentnumber.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnAnimation(true);

    const timer = setTimeout(() => {
      setbtnAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.click} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{buttonNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
