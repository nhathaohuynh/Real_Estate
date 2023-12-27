import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Modal } from './components'
import {
	AboutUs,
	Home,
	LayoutPublic,
	OurAgents,
	Properties,
	Search,
} from './pages/public'
import { useAppStore } from './stores/useAppStore'
import { useUserStore } from './stores/useUserStore'
import path from './utils/path'

function App() {
	const isShowModel = useAppStore((state) => state.isShowModel)

	const { getCurrentUser } = useUserStore()
	const token = useUserStore((state) => state.token)

	useEffect(() => {
		getCurrentUser()
	}, [token])

	return (
		<>
			{isShowModel && <Modal />}
			<Routes>
				<Route path={path.PUBLIC_LAYOUT} element={<LayoutPublic />}>
					<Route path={path.HOME} element={<Home />} />
					<Route path={path.ABOUT_US} element={<AboutUs />} />
					<Route path={path.PROPERTIES} element={<Properties />} />
					<Route path={path.OUR_AGENTS} element={<OurAgents />} />
					<Route path={path.SEARCH} element={<Search />} />
				</Route>
			</Routes>
			<ToastContainer
				position='top-left'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
			/>
		</>
	)
}

export default App
