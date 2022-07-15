import { CartItem } from "../store/ducks/cart/types";



export const cartCounter = (cart: CartItem[]) => {
	const quantity = cart.reduce((acc, item) =>{
		return acc + item.quantity
	},0)

	return quantity
}