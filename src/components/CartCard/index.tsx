import Image from "next/image";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { decrementItemFromCart, incrementItemToCart } from "../../store/ducks/cart/actions";
import { CartItem } from "../../store/ducks/cart/types";
import { Product } from "../../store/ducks/products/types";
import { formatCurrency } from "../../utils/formatBRL";
import { Container, Counter, FirstContent, ImageContainer, SecondContent } from "./styles";

interface Props {
	item: CartItem
}

export function CartCard({ item }: Props) {

	const dispatch = useDispatch()
	
	const price = useMemo(() => {
		return item.quantity * Number(item.price)
	},[item.quantity])

	return (
		<Container>
			<FirstContent >
				<ImageContainer>
					<Image src={item.photo} layout='fill' objectFit="contain" />
				</ImageContainer>
				<div className="title">
					<p>{item.name}</p>
				</div>
			</FirstContent>
			<SecondContent>
				<Counter>
					<p>Qtd: </p>
					<ul className="buttons-container">
						<li className="custom-button" onClick={() => dispatch(decrementItemFromCart(item))}>-</li>
						<li>
							<span>|</span>							
							{item.quantity}	
							<span>|</span>						
						</li>
						<li className="custom-button" onClick={() => dispatch(incrementItemToCart(item))}>+</li>
					</ul>
				</Counter>
				<div className="price">
					<h2>{formatCurrency(String(price))}</h2>
				</div>
			</SecondContent>
		</Container>
	)
}