import Image from "next/image";
import { Container } from "./styles";
import Cart from '../../../public/assets/images/cart.svg'



export function Header(){
	return(
		<Container>
			<div className='title-container'>
				<h1>MKS</h1>
				<p>Sistemas</p>
			</div>
			<div className='cart-container'>
				<Image src={Cart}/>
				<p>0</p>
			</div>
		</Container>
	)
}