import React from 'react'
import s from './PageHaha.module.css'

function InviteHacatons() {
	const teams = ['Team A', 'Team B', 'Team C', 'Team D'] // Example team names

	return (
		<div className={s.app}>
			<div className={s.modal}>
				<div className={s['modal-header']}>
					<div className={s['modal-title']}>Вступить в команду</div>
				</div>
				<div className={s['modal-content']}>
					<input
						type='text'
						className={s['input-field']}
						placeholder='Введите название команды'
						list='team-list'
					/>
					<datalist id='team-list'>
						{teams.map((team, index) => (
							<option key={index} value={team} />
						))}
					</datalist>
					<button className={s['create-button']}>Создать</button>
				</div>
			</div>
		</div>
	)
}

export default InviteHacatons
