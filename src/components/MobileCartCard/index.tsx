import Image from "next/image";
import { PriceBadge } from "../PriceBadge";
import { Counter, ImageContainer, PriceContainer } from "./styles";
import { Container } from "./styles";


export function MobileCartCard() {
	return (
		<Container>
			<ImageContainer>
				<Image src={'https://m.media-amazon.com/images/I/71rmYWczG6L._AC_SX679_.jpg'} layout='fill' objectFit="contain" />
			</ImageContainer>
			<div className="title">
				<p>Apple Watch Series 4 GPS</p>
			</div>
			<PriceContainer>
				<Counter>
					<div className="buttons-container">
						<div className="custom-button">
							-
						</div>
						<div className='quantity'>
							<span>|</span> 1 <span>|</span>
						</div>
						<div className="custom-button">
							+
						</div>
					</div>
				</Counter>
				<div className="price">
					<PriceBadge price="300" />
				</div>
			</PriceContainer>
		</Container>
	)
}