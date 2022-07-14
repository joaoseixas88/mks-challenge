import Image from "next/image";
import { Container, Counter, FirstContent, ImageContainer, SecondContent } from "./styles";

export function CartCard() {
	return (
		<Container>
			<FirstContent >
				<ImageContainer>
					<Image src={'https://m.media-amazon.com/images/I/71rmYWczG6L._AC_SX679_.jpg'} layout='fill' objectFit="contain" />
				</ImageContainer>
				<div className="title">
					<p>Apple Watch Series 4 GPS</p>
				</div>
			</FirstContent>
			<SecondContent>
				<Counter>
					<p>Qtd: </p>
					<ul className="buttons-container">
						<li className="custom-button">-</li>
						<li>
							<span>|</span> 1 <span>|</span>
						</li>
						<li className="custom-button">+</li>
					</ul>
				</Counter>
				<div className="price">
					<h2>R$ 200</h2>
				</div>
			</SecondContent>
		</Container>
	)
}