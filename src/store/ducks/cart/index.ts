import { AnyAction, Reducer } from "redux";
import { CartItem, CartState, CartType } from "./types";

const initialState: CartState = {
  cart: [],
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CartType.ADD_ITEM_TO_CART:
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        const newItem: CartItem = {
          ...action.payload,
          quantity: 1,
        };

        return { cart: [...state.cart, newItem] };
      }
      return {
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity ? item.quantity + 1 : 1,
            };
          }
          return item;
        }),
      };
    case CartType.REMOVE_ITEM_FROM_CART:
      return {
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case CartType.INCREMENT_ITEM_TO_CART:
      return {
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    case CartType.DECREMENT_ITEM_FROM_CART:
      return {
        cart: state.cart.reduce((acc: CartItem[], item) => {
          if (item.id === action.payload.id) {
            if (item.quantity === 1) {
              return acc;
            }
            const itemRemoved = {
              ...item,
              quantity: item.quantity - 1,
            };
            acc.push(itemRemoved);

            return acc;
          }
          acc.push(item);
          return acc;
        }, []),
      };
    default:
      return state;
  }
};

export default reducer;
