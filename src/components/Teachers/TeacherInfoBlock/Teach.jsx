import React from 'react'
import s from '../PageTeach.module.css'
const Teach = props => {
	return (
		<div>
			<div className={s.information}>
				<div className={s.name}>
					<p>{props.name}</p>
				</div>
				<div className={s.status}>
					<div className={s.description}>
						<p>{props.description}</p>
					</div>
					<div className={s.email}>
						<p>{props.email}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Teach
