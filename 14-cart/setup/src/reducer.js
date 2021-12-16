const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CARTS':
      return { ...state, cart: [] };

    case 'REMOVE_CART':
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload),
      };

    case 'INCREASE_DECREASE_AMOUNT':
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.method === 'increase') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }

          if (action.payload.method === 'decrease') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      });

      return { ...state, cart: tempCart };

    case 'CALCULATE_TOTAL_AMOUNT':
      //   if (state.cart === []) return state;
      let { total, amount } = state.cart.reduce(
        (acc, cart) => {
          const { price, amount } = cart;
          acc.total += price * amount;
          acc.amount += 1;
          return acc;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case 'LOADING':
      return { ...state, loading: true };

    case 'DISPLAY_FETHED_CART':
      return { ...state, loading: false, cart: action.payload };

    default:
      //   return state;
      throw new Error('No matching Action found, please try it again');
  }
};

export default reducer;
