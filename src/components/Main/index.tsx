import { Product } from "../../store/ducks/products/types";
import { ProductCard } from "../ProductCard";
import { Skeleton } from "./Skeleton";
import { Container } from "./styles";


interface Props {
	products: Product[]
	loading: boolean
}

export function Main({ products, loading }: Props) {
	
	return (
		<Container>
			{
				loading ? <Skeleton /> :
					products.map(item => {
						return <ProductCard item={item} key={item.id} />
					})
			}
		</Container>
	)
}