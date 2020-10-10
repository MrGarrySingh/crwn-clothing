// Utility functions allow us to keep our files clean and organise functions that we may need in multiple files in one location.
// We need to return new versions of our state so that our components can re render

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // The quantity property gets attached the first time around since the if block above won't run when it's a new item.
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
