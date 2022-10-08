import { Fragment } from "react";
import MealSummary from "../Meals/MealSummary";
import Available from "../Meals/Available";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <Available />
    </Fragment>
  );
};

export default Meals;
