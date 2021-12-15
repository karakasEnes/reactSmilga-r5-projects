const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CARTS':
      return { ...state, cart: [] };

    case 'REMOVE_CART':
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
