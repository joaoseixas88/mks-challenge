import { ProductCard } from "../ProductCard";
import { Container } from "./styles";

export function Main(){
	return(
		<Container>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</Container>
	)
}