import type { NextPage } from 'next'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Container } from '../styles/homeStyle'

const Home: NextPage = () => {
	return (
		<Container>
			<Header />
			<Main />
			<Footer/>
		</Container>
	)
}

export default Home
