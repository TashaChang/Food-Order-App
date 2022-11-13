import { useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "../Components/Cart/Cart";
import CartProvider from "../store/CartProvider";

function App() {
  const [cartvisibility, setCartVisibility] = useState(false);

  const showCartHandler = () => {
    setCartVisibility(true);
  };
  const hideCartHandler = () => {
    setCartVisibility(false);
  };

  return (
    <CartProvider>
      {cartvisibility && <Cart off={hideCartHandler} />}
      <Header on={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
