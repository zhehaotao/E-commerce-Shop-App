import { createSelector } from 'reselect';

// pass state in here
const selectCart = state => state.cart;

// reference selectCart
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// reference selectCartItems
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuatity, cartItem) => accumalatedQuatity + cartItem.quantity, 0
  )
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuatity, cartItem) => accumalatedQuatity + cartItem.quantity * cartItem.price, 0
  )
)

