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
    fetchData();
  }, []);
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

  const increaseAndDecreaseAmount = (id, method) => {
    dispatch({
      type: 'INCREASE_DECREASE_AMOUNT',
      payload: { id, method },
    });
  };

  const calculateTotalAmount = () => {
    dispatch({
      type: 'CALCULATE_TOTAL_AMOUNT',
    });
  };

  const fetchData = async () => {
    dispatch({
      type: 'LOADING',
    });

    const response = await fetch(url);
    const data = await response.json();

    dispatch({
      type: 'DISPLAY_FETHED_CART',
      payload: data,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCarts,
        removeCart,
        increaseAndDecreaseAmount,
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
