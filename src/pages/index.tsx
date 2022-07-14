import type { NextPage } from 'next'
import { useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Sidebar } from '../components/Sidebar'
import { Container } from '../styles/homeStyle'

function Home() {

	const [isSideBarOpen, setIsSideBarOpen] = useState(false)

	function handleCloseSideBar() {
		setIsSideBarOpen(false)
	}

	function handleOpenSideBar() {
		setIsSideBarOpen(true)
	}


	return (
		<Container>
			<Header openSideBar={handleOpenSideBar} />
			<Main />
			<Footer />
			<Sidebar isOpen={isSideBarOpen} closeSideBar={handleCloseSideBar} />
		</Container>
	)
}

export default Home
