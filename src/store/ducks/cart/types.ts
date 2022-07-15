import { Product } from "../products/types";

export enum CartType {
	ADD_ITEM_TO_CART =  'ADD_ITEM_TO_CART',
	INCREMENT_ITEM_TO_CART = 'INCREMENT_ITEM_TO_CART',
	REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
	DECREMENT_ITEM_FROM_CART = 'DECREMENT_ITEM_FROM_CART'
}

export interface CartItem extends Product{
	quantity: number
}

export interface CartState{
	cart: CartItem[]
}

