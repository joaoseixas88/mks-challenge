import Image from "next/image";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { decrementItemFromCart, incrementItemToCart } from "../../store/ducks/cart/actions";
import { CartItem } from "../../store/ducks/cart/types";
import { Product } from "../../store/ducks/products/types";
import { formatCurrency } from "../../utils/formatBRL";
import { PriceBadge } from "../PriceBadge";
import { Counter, ImageContainer, PriceContainer } from "./styles";
import { Container } from "./styles";

interface Props {
	item: CartItem
}

export function MobileCartCard({ item }: Props) {
	const dispatch = useDispatch()

	const price = useMemo(() => {
		return item.quantity * Number(item.price)
	},[item.quantity])
	
	return (
		<Container>
			<ImageContainer>
				<Image src={item.photo} layout='fill' objectFit="contain" />
			</ImageContainer>
			<div className="title">
				<p>{item.name}</p>
			</div>
			<PriceContainer>
				<Counter>
					<div className="buttons-container">
						<div className="custom-button" onClick={() => dispatch(decrementItemFromCart(item))}>
							-
						</div>
						<div className='quantity'>
							<span>|</span> {item.quantity} <span>|</span>
						</div>
						<div className="custom-button" onClick={() => dispatch(incrementItemToCart(item))}>
							+
						</div>
					</div>
				</Counter>
				<div className="price">
					<PriceBadge price={formatCurrency(String(price))} />
				</div>
			</PriceContainer>
		</Container>
	)
}