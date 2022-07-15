import { Container } from "./styles";

import { PrimaryButton } from "../PrimaryButton";
import Image from "next/image";
import { PriceBadge } from "../PriceBadge";
import ShoppingBag from '../../../public/assets/images/shopping-bag.svg'
import { formatCurrency } from "../../utils/formatBRL";
import { Product } from "../../store/ducks/products/types";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/ducks/cart/actions";

interface Props {
	item: Product
}

export function ProductCard({ item }: Props) {

	const dispatch = useDispatch()
	

	

	return (
		<Container>
			<div className="image-container">
				<Image src={item.photo} layout='fill' objectFit="contain" />
			</div>
			<div className="price-container">
				<div >
					<h3>{item.name}</h3>
				</div>
				<div className='price'>
					<PriceBadge price={formatCurrency(item.price)} />
				</div>
			</div>
			<div className="description">
				<p>{item.description}</p>
			</div>
			<div className="btn-container">
				<PrimaryButton label="COMPRAR" icon={ShoppingBag} onClick={() => dispatch(addItemToCart(item))}/>
			</div>
		</Container>
	)
}