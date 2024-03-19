import { Outlet } from 'react-router'

import Footer from 'components/Footer'
import { Header } from 'components/Header'

import { StyledWrapper } from './styled'

export const Layout = () => {
	return (
		<StyledWrapper>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</StyledWrapper>
	)
}
