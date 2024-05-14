import React from 'react'
import s from './PageHaha.module.css'

function Profile() {
	return (
		<div className={s.app}>
			<div className={s.modal}>
				<div className={s['modal-header']}>
					<div className={s['modal-title']}>Профиль</div>
				</div>
				<div className={s['modal-content']}>
					<input
						type='text'
						className={s['input-field']}
						placeholder='Введите имя пользователя'
					/>
					<input
						type='text'
						className={s['input-field']}
						placeholder='Введите группу'
					/>

					<button className={s['create-button']}>Сохранить</button>
				</div>
			</div>
		</div>
	)
}

export default Profile
