import React from 'react'
import s from '../PageTeach.module.css'
const Teach = props => {
	return (
		<div>
			<div className={s.information}>
				<div className={s.name}>
					<p>{props.name}</p>
				</div>
				<div className={s.description}>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	)
}
export default Teach
