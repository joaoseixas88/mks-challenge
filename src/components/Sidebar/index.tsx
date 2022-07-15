import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useMediaQuery } from 'react-responsive'
import { useTheme } from 'styled-components'
import { CartItem } from '../../store/ducks/cart/types'
import { Product } from '../../store/ducks/products/types'
import { formatCurrency } from '../../utils/formatBRL'
import { CartCard } from '../CartCard'
import { MobileCartCard } from '../MobileCartCard'
import { Button, Container, Content } from './styles'

interface Props {
	isOpen: boolean
	closeSideBar: () => void
	products: CartItem[]
}



export function Sidebar({ isOpen, closeSideBar, products }: Props) {

	const total = products.reduce((acc, item) => {
		return acc + item.quantity * Number(item.price)
	},0)
	
	
	const { colors } = useTheme()

	const sm = useMediaQuery({ query: "(max-width: 600px)" })
	
	return (
		<Drawer
			open={isOpen}
			onClose={closeSideBar}
			direction='right'
			size={sm ? '22rem' : '32rem'}
			style={{ background: colors.primaryBlue }}

		>
			<Container>
				<Content>
					<div className="top">
						<div className="title">
							<h1>Carrinho de compras</h1>
						</div>
						<div className="icon" onClick={closeSideBar}>
							<AiOutlineClose color='white' size={20} />
						</div>
					</div>
					<div className='wrapper'>
						<div className="cards">
							{
								products.map(item => {
									return (
										<div style={{ height: '100%' }} key={item.id}>
											{!sm ? <CartCard item={item} /> : <MobileCartCard item={item} />}
										</div>
									)
								})

							}
						</div>
					</div>
					<div className="total">
						<h1>Total:</h1>
						<h1>{formatCurrency(String(total))}</h1>
					</div>
				</Content>
				<Button>Finalizar Compra</Button>
			</Container>
		</Drawer>
	)
}