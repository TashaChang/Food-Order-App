import React from "react";
import Card from "../UI/Card";
import Mealitem from "../Meals/MealItem/Mealitem";
import classes from "../style.css/AvailableMeals.module.css";

const MEALS = [
  {
    id: "m1",
    name: "APPLE PIE PANCAKES",
    description:
      "two pancakes, apple pie filling, caramel, cinnamon, whipped cream.",
    price: 14.99,
  },
  {
    id: "m2",
    name: "FARMHOUSE",
    description:
      "eggs, Hickory House bacon, American cheese, toasted sourdough bread.",
    price: 16.59,
  },
  {
    id: "m3",
    name: "HAM & CHEESE",
    description: "three eggs, ham, cheddar cheese.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "BRIOCHE FRENCH TOAST",
    description: "two pieces of brioche French toast, butter, syrup.",
    price: 10.99,
  },
];

const Available = () => {
  const item = MEALS.map((item) => (
    <Mealitem
      id={item.id}
      key={item.id}
      name={item.name}
      describe={item.description}
      price={item.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{item}</ul>
      </Card>
    </section>
  );
};

export default Available;
