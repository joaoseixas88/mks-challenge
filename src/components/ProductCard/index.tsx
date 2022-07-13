import { Container } from "./styles";

import { PrimaryButton } from "../PrimaryButton";
import Image from "next/image";
import { PriceBadge } from "../PriceBadge";
import ShoppingBag from '../../../public/assets/images/shopping-bag.svg'



export function ProductCard() {
	return (
		<Container>			
			<div className="image-container">
				<Image src={'https://m.media-amazon.com/images/I/71rmYWczG6L._AC_SX679_.jpg'} layout='fill' objectFit="contain" />
			</div>
			<div className="price-container">
				<div >
					<h3>Apple iPad Pro 64GB</h3>
				</div>
				<div className='price'>
					<PriceBadge price="R$ 300" />
				</div>
			</div>
			<div className="description">
				<p>Redesigned from scratch and completely revised.</p>
			</div>
			<div className="btn-container">
				<PrimaryButton label="COMPRAR" icon={ShoppingBag}/>
			</div>
		</Container>
	)
}