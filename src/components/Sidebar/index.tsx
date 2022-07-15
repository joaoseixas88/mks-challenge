import { AiOutlineClose } from 'react-icons/ai'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useMediaQuery } from 'react-responsive'
import { CartItem } from '../../store/ducks/cart/types'
import { formatCurrency } from '../../utils/formatBRL'
import { CartCard } from '../CartCard'
import { MobileCartCard } from '../MobileCartCard'
import { Button, Container, Content } from './styles'
import { useEffect, useState } from 'react'

interface Props {
	isOpen: boolean
	closeSideBar: () => void
	products: CartItem[]
}



export function Sidebar({ isOpen, closeSideBar, products }: Props) {

	const sm = useMediaQuery({ query: "(max-width: 789px)" })	
	
	const [isMobile, seIsMobile] = useState(false)

	useEffect(() => {
		seIsMobile(window.innerWidth < 789)		
	} ,[])

	const total = products.reduce((acc, item) => {
		return acc + item.quantity * Number(item.price)
	},0)
	
	return (

		<Drawer
			open={isOpen}
			onClose={closeSideBar}
			direction='right'
			style={{width: isMobile ? '23rem' : '32rem'}}
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