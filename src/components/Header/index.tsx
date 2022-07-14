import Image from "next/image";
import { Container } from "./styles";
import Cart from '../../../public/assets/images/cart.svg'
import { Dispatch, SetStateAction } from "react";


interface Props {
	openSideBar: () => void
}


export function Header({ openSideBar }: Props) {

	
	
	return (
		<Container>
			<div className='title-container'>
				<h1>MKS</h1>
				<p>Sistemas</p>
			</div>
			<div className='cart-container' onClick={openSideBar}>
				<Image src={Cart} />
				<p>0</p>
			</div>
		</Container>
	)
}