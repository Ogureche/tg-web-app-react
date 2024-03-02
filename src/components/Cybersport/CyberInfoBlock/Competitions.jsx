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
			</div>
		</div>
	)
}
export default Competitions
