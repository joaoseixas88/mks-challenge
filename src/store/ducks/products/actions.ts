import { action } from "typesafe-actions";
import { ProductsTypes, Product } from "./types";

export const productsRequest = () => action(ProductsTypes.PRODUCTS_REQUEST);

export const productsSuccess = (data: Product[]) =>
  action(ProductsTypes.PRODUCTS_SUCCESS, { data });

export const productsFailure = () => action(ProductsTypes.PRODUCTS_FAILURE);
