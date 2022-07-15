import Image from "next/image";
import { Container } from "./styles";
import Cart from '../../../public/assets/images/cart.svg'
import { Dispatch, SetStateAction } from "react";


interface Props {
	openSideBar: () => void
	quantity: number
}


export function Header({ openSideBar, quantity  }: Props) {

	
	
	return (
		<Container>
			<div className='title-container'>
				<h1>MKS</h1>
				<p>Sistemas</p>
			</div>
			<div className='cart-container' onClick={openSideBar}>
				<Image src={Cart} />
				<p>{quantity}</p>
			</div>
		</Container>
	)
}