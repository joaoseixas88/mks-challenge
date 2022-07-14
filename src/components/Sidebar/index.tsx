import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useMediaQuery } from 'react-responsive'
import { useTheme } from 'styled-components'
import { CartCard } from '../CartCard'
import { MobileCartCard } from '../MobileCartCard'
import { Button, Container, Content } from './styles'

interface Props {
	isOpen: boolean
	closeSideBar: () => void
}


export function Sidebar({ isOpen, closeSideBar }: Props) {

	let sm = false

	const { colors } = useTheme()

	sm = useMediaQuery({ query: '(max-width: 789px)' })

	return (
		<Drawer
			open={isOpen}
			onClose={closeSideBar}
			direction='right'
			size={!sm ? '32rem' : '23rem'}
			style={{ background: colors.primaryBlue}}
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
							<div style={{ height: '100%' }}>
								{!sm ? <CartCard /> : <MobileCartCard />}
							</div>
							<div style={{ height: '100%' }}>
								{!sm ? <CartCard /> : <MobileCartCard />}
							</div>
							<div style={{ height: '100%' }}>
								{!sm ? <CartCard /> : <MobileCartCard />}
							</div>
							<div style={{ height: '100%' }}>
								{!sm ? <CartCard /> : <MobileCartCard />}
							</div>
							<div style={{ height: '100%' }}>
								{!sm ? <CartCard /> : <MobileCartCard />}
							</div>
							<div style={{ height: '100%' }}>
								{!sm ? <CartCard /> : <MobileCartCard />}
							</div>
							<div style={{ height: '100%' }}>
								{!sm ? <CartCard /> : <MobileCartCard />}
							</div>
						</div>
					</div>
					<div className="total">
						<h1>Total:</h1>
						<h1>R$798</h1>
					</div>
				</Content>
				<Button>Finalizar Compra</Button>
			</Container>
		</Drawer>
	)
}