import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Sidebar } from '../components/Sidebar'
import { cartCounter } from '../rules/cartCounter'
import { RootState } from '../store'
import { productsRequest } from '../store/ducks/products/actions'
import { Container } from '../styles/homeStyle'




function Home() {

	const [isSideBarOpen, setIsSideBarOpen] = useState(false)
	const { data, loading } = useSelector((store: RootState) => store.products)
	const { cart } = useSelector((store: RootState) => store.cart)

	const dispatch = useDispatch()

	function handleCloseSideBar() {
		setIsSideBarOpen(false)
	}

	function handleOpenSideBar() {
		setIsSideBarOpen(true)
	}


	useEffect(() => {
		dispatch(productsRequest())
	}, [])




	return (
		<>
			<Head>
				<title>MKS Challenge</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Container>
				<Header openSideBar={handleOpenSideBar} quantity={cartCounter(cart)} />
				<Main products={data} loading={loading} />
				<Footer />
				<Sidebar isOpen={isSideBarOpen} closeSideBar={handleCloseSideBar} products={cart} />
			</Container>
		</>
	)
}

export default Home
