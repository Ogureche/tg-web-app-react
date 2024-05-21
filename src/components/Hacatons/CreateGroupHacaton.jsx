import React from 'react'
import s from './PageHaha.module.css'

function InviteHacatons() {
	return (
		<div className={s.app}>
			<div className={s.modal}>
				<div className={s['modal-header']}>
					<div className={s['modal-title']}>Создать команду</div>
				</div>
				<div className={s['modal-content']}>
					<input
						type='text'
						className={s['input-field']}
						placeholder='Введите название команды'
					/>
					<button className={s['create-button']}>Создать</button>
				</div>
			</div>
		</div>
	)
}

export default InviteHacatons
