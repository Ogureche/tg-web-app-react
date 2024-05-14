import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './BurgerMenu.module.css' // Создайте файл стилей для бургер-меню

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={s.burgerMenu}>
			<button className={s.burgerButton} onClick={toggleMenu}>
				☰
			</button>
			{isOpen && (
				<div className={s.menu}>
					<Link to='/Profile' className={s.menuItem} onClick={toggleMenu}>
						Профиль
					</Link>
					<Link to='/MyHackathons' className={s.menuItem} onClick={toggleMenu}>
						Мои хакатоны
					</Link>
					<Link to='/Profile' className={s.menuItem} onClick={toggleMenu}>
						Просмотр команды
					</Link>
				</div>
			)}
		</div>
	)
}

export default BurgerMenu
