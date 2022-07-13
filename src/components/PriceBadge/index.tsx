import { Container } from "./styles";


interface Props {
	price: string
	
}

export function PriceBadge({ price }: Props) {
	return (
		<Container>			
			<p>{price}</p>
		</Container>
	)
}