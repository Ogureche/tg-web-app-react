import React, { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useTelegram } from './hooks/useTelegram'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage'
import LearnPath from './pages/LearnPath'
import PageCyber from './components/Cybersport/PageCyber'
import PageLaby from './pages/PageLaby'
import PageTeach from './components/Teachers/PageTeach'
import PageHaha from './pages/PageHaha'

function App() {
	const { tg } = useTelegram()
	const [showButtons] = useState(true)

	useEffect(() => {
		tg.ready()
	})
	return (
		<div className='App'>
			<Header />

			<Routes>
				<Route path='/' element={<Navigate to='/MainPage' />} />
				<Route
					path='/MainPage'
					element={<MainPage showButtons={showButtons} />}
				/>
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
