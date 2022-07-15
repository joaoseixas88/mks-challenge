import { Action } from "redux";
import { Product } from "../products/types";
import { CartItem, CartType } from "./types";

export const addItemToCart = (payload: Product) => {
  return {
    type: CartType.ADD_ITEM_TO_CART,
    payload,
  };
};

export const removeItemFromCart = (payload: Product) => {
  return {
    type: CartType.REMOVE_ITEM_FROM_CART,
    payload,
  };
};

export const incrementItemToCart = (payload: Product) => {
  return {
    type: CartType.INCREMENT_ITEM_TO_CART,
    payload,
  };
};

export const decrementItemFromCart = (payload: Product) => {
  return {
    type: CartType.DECREMENT_ITEM_FROM_CART,
    payload,
  };
};
