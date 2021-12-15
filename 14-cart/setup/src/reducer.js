const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CARTS':
      return { ...state, cart: [] };

    default:
      return state;
  }
};

export default reducer;
