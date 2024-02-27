import React from 'react'
import s from '../styles/PageTeach.module.css'

const PageTeach = () => {
	return (
		<div>
			<div className={s.Admin}>
				<div className={s.header}>
					<p className={s.text}>Администрация</p>
				</div>

				<div className={s.info}>
					<div className={s.name}>
						<p>Пушкин Павел Юрьевич</p>
					</div>
					<div>
						<p>Директор института</p>
					</div>
					<div className={s.info}>
						<p>Описание</p>
					</div>
				</div>
			</div>

			{/* <div className={s.header}>
				<p>Преподаватели</p>
				<div className={s.sub}>
					<p>Создание программного обеспечения</p>
				</div>
				<div>
					<img src='./image/arrow.png' />
				</div>
				<div className={s.name}>
					<p>Макиевский Станислав Евгеньевич</p>
					<div className={s.info}>
						<p>Описание</p>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default PageTeach
