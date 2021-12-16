import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  cart: cartItems,
  loading: false,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    calculateTotalAmount();
  }, [state.cart]);

  const clearCarts = () => {
    dispatch({ type: 'CLEAR_CARTS' });
  };

  const removeCart = (id) => {
    dispatch({
      type: 'REMOVE_CART',
      payload: id,
    });
  };

  const increaseAmount = (id) => {
    dispatch({
      type: 'INCREASE_AMOUNT',
      payload: id,
    });
  };

  const decreaseAmount = (id) => {
    dispatch({
      type: 'DECREASE_AMOUNT',
      payload: id,
    });
  };

  const calculateTotalAmount = () => {
    dispatch({
      type: 'CALCULATE_TOTAL_AMOUNT',
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCarts,
        removeCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
