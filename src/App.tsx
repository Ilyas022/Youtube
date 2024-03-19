import { Route, Routes } from 'react-router'

import { Layout } from 'components/Layout'
import { HomePage } from 'src/pages/HomePage'
import { NotFoundPage } from 'src/pages/NotFoundPage'

const App: React.FC = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default App
