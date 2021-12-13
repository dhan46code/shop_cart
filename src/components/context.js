import React, { useReducer, useContext, useEffect } from 'react';
import reducer from './reducer';
const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = React.createContext();

const initialState = {
  cart: [],
  loading: false,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearItem = () => {
    dispatch({ type: 'CLEAR' });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const inc_dec = (id, type) => {
    dispatch({ type: 'INC_DEC', payload: { id, type } });
  };

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: 'DISPLAY_DATA', payload: data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // forr total
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearItem,
        removeItem,
        inc_dec,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobal };
