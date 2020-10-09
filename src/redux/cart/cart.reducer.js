import { cartActionTypes } from "./cart.types.js";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currentState,
        // Convert to the opposite value of the state
        hidden: !currentState.hidden,
      };
    default:
      return currentState;
  }
};

export default cartReducer;
