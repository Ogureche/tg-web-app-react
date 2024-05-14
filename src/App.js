import { Route, Routes, Navigate } from 'react-router-dom'

import MainPage from './pages/MainPage'
import LearnPath from './pages/LearnPath'
import PageCyber from './components/Cybersport/PageCyber'
import PageLaby from './pages/PageLaby'
import PageTeach from './components/Teachers/PageTeach'
import PageHaha from './components/Hacatons/PageHaha'
import InviteHacatons from './components/Hacatons/InviteHacatons'
import CreateGroupHacatons from './components/Hacatons/CreateGroupHacaton'

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
				<Route path='/InviteHacatons' element={<InviteHacatons />} />
				<Route path='/CreateGroupHacatons' element={<CreateGroupHacatons />} />
			</Routes>
		</div>
	)
}

export default App
