const reducer = (state, action) => {
  if (action.type === 'DISPLAY_DATA') {
    return { ...state, cart: action.payload };
  }
  if (action.type === 'CLEAR') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === 'INC_DEC') {
    const tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === 'GET_TOTAL') {
    // remember cartTotal for return value obj.
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        // destruct
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        // for adding items on navbar why? cz useEffect
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  return state;
};

export default reducer;
