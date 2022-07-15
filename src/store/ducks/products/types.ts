export enum ProductsTypes {
  PRODUCTS_REQUEST = "products/REQUEST",
  PRODUCTS_SUCCESS = "products/SUCCESS",
  PRODUCTS_FAILURE = "products/FAILURE",
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

export interface ProductsState {
  readonly data: Product[];
  loading: boolean;
  error: boolean;
}
