import React from 'react'
import s from '../PageTeach.module.css'
const Admin = props => {
	return (
		<div>
			<div className={s.info}>
				<div className={s.name}>
					<p>{props.name}</p>
				</div>
				<div className={s.status}>
					<div className={s.position}>
						<p>{props.position}</p>
					</div>
					<div className={s.description}>
						<p>{props.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Admin
