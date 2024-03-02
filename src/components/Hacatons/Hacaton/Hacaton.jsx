import React from 'react'
import s from '../PageHaha.module.css'
const Hacaton = props => {
	return (
		<div className={s.hacaton}>
			<div className={s.head}>
				<p className={s.main_text}>{props.name_text}</p>
			</div>
			<div className={s.description}>
				<p className={s.info}>{props.info_text}</p>
			</div>
		</div>
	)
}
export default Hacaton
