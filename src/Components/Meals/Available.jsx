import React from "react";
import Card from "../UI/Card";
import Mealitem from "../Meals/MealItem/Mealitem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Available = () => {
  const item = DUMMY_MEALS.map((item) => (
    <Mealitem
      id={item.id}
      key={item.id}
      name={item.name}
      describe={item.description}
      price={item.price}
    />
  ));
  return (
    <section className="meals">
      <Card>
        <ul>{item}</ul>
      </Card>
    </section>
  );
};

export default Available;
