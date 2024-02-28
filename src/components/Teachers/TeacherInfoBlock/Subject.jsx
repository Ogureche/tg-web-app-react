import React from 'react'
import s from '../PageTeach.module.css'
const Subject = props => {
	return (
		<div>
			<div className={s.subject}>
				<p>{props.subject}</p>
			</div>
		</div>
	)
}
export default Subject
