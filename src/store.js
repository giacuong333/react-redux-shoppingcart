import { createStore } from "redux";

const initialState = {
  cart: [],
};

const ADD_TO_CART = "ADD_TO_CART";
const QUANTITY_INCREMENT = "QUANTITY_INCREMENT";
const QUANTITY_DECREMENT = "QUANTITY_DECREMENT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addProduct = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: QUANTITY_INCREMENT,
    payload: id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: QUANTITY_DECREMENT,
    payload: id,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;

      const isExisting = state.cart.findIndex((item) => item.id === product.id);

      let updatedState = {};

      if (isExisting >= 0) {
        updatedState = {
          ...state,
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
              : item
          ),
        };
      } else {
        updatedState = {
          ...state,
          cart: [...state.cart, { ...product, totalPrice: product.price }],
        };
      }

      return updatedState;

    case DELETE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    case QUANTITY_INCREMENT:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1, totalPrice: (product.quantity + 1) * product.price }
            : product
        ),
      };

    case QUANTITY_DECREMENT:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity > 1 ? product.quantity - 1 : 1,
                totalPrice: (product.quantity > 1 ? product.quantity - 1 : 1) * product.price,
              }
            : product
        ),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState().cart);
});

export default store;
