import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "../../style.css/MealItemForm.module.css";

const MealitemForm = (props) => {
  const [isVaild, setIsvaild] = useState(true);
  const amountInputRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setIsvaild(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submit}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isVaild && <p>Please enter a vaild amount.(1~10)</p>}
    </form>
  );
};

export default MealitemForm;
