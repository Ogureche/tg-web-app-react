import React from 'react'
import s from '../PageCyber.module.css'
const Competitions = props => {
	return (
		<div>
			<div className={s.info}>
				<div className={s.name}>
					<p>{props.name}</p>
				</div>
					<div className={s.registration}>
						<p>{props.registration}</p>
					</div>
					<div className={s.datestart}>
						<p>{props.datestart}</p>
					</div>
                    <div className={s.mainjudge}>
						<p>{props.mainjudge}</p>
					</div>
					<div className={s.link}>
				<a href={props.link} target='_blank' rel='noopener noreferrer'>
					<button className={s.button}>Зарегистрироваться</button>
				</a>
			</div>
			</div>
		</div>
	)
}
export default Competitions
