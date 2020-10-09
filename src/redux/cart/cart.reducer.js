import { cartActionTypes } from "./cart.types.js";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currentState,
        // Convert to the opposite value of the state
        hidden: !currentState.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...currentState,
        // Spread in existing items in our state and add the action payload at the end of the array
        cartItems: [...currentState.cartItems, action.payload],
      };
    default:
      return currentState;
  }
};

export default cartReducer;
