import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = { items: [], totalAmount: 0 };

const cartReducer = (preState, action) => {
  if (action.type === "ADD") {
    const updateAmount =
      preState.totalAmount + action.item.price * action.item.amount;

    const indexN = preState.items.findIndex(
      (item) => item.id === action.item.id
    );
    const sameItem = preState.items[indexN];

    let updateItems;
    if (sameItem) {
      const updateItem = {
        ...sameItem,
        amount: sameItem.amount + action.item.amount,
      };
      updateItems = [...preState.items];
      updateItems[indexN] = updateItem;
    } else {
      updateItems = preState.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalAmount: updateAmount,
    };
  }

  if (action.type === "REMOVE") {
    const indexN = preState.items.findIndex((item) => item.id === action.id);
    const sameItem = preState.items[indexN];
    const updateAmount = preState.totalAmount - sameItem.price;
    let updateItems;
    if (sameItem.amount === 1) {
      updateItems = preState.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = { ...sameItem, amount: sameItem.amount - 1 };
      updateItems = [...preState.items];
      updateItems[indexN] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updateAmount,
    };
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [newState, cartDispatch] = useReducer(cartReducer, defaultState);

  const addItemHandler = (item) => {
    cartDispatch({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    cartDispatch({ type: "REMOVE", id: id });
  };

  const cartItem = {
    items: newState.items,
    totalAmount: newState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartItem}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
