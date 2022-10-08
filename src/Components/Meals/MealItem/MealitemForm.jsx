import React from "react";
import Input from "../../UI/Input";

const MealitemForm = (props) => {
  return (
    <form className="form">
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "0",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealitemForm;
