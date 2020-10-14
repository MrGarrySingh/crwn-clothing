import { cartActionTypes } from "./cart.types.js";
import { addItemToCart } from "./cart.utils.js";
import { removeItemFromCart } from "./cart.utils.js";

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
        cartItems: addItemToCart(currentState.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...currentState,
        cartItems: currentState.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...currentState,
        cartItems: removeItemFromCart(currentState.cartItems, action.payload),
      };
    default:
      return currentState;
  }
};

export default cartReducer;
