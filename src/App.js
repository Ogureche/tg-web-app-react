import { Route, Routes, Navigate } from 'react-router-dom'

import MainPage from './pages/MainPage'
import LearnPath from './pages/LearnPath'
import PageCyber from './components/Cybersport/PageCyber'
import PageLaby from './pages/PageLaby'
import PageTeach from './components/Teachers/PageTeach'
import PageHaha from './components/Hacatons/PageHaha'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Navigate to='/MainPage' />} />
				<Route path='/MainPage' element={<MainPage />} />
				<Route path='/PageTeach' element={<PageTeach />} />
				<Route path='/LearnPath' element={<LearnPath />} />
				<Route path='/PageHaha' element={<PageHaha />} />
				<Route path='/PageCyber' element={<PageCyber />} />
				<Route path='/PageLaby' element={<PageLaby />} />
			</Routes>
		</div>
	)
}

export default App
