import React from 'react'
import s from './PageTeach.module.css'
import Admin from './TeacherInfoBlock/Admin'
import Subject from './TeacherInfoBlock/Subject'
import Teach from './TeacherInfoBlock/Teach'
const PageTeach = () => {
	return (
		<div>
			<div className={s.Admin}>
				<div className={s.header}>
					<p className={s.text}>Администрация</p>
				</div>
				<div className={s.red}>
					<Admin
						name='Пушкин Павел Юрьевич'
						position='Директор'
						description='Кандидат технических наук, доцент'
					/>
				</div>
			</div>
			<div className={s.Admin}>
				<div className={s.header}>
					<p className={s.text}>Преподаватели</p>
				</div>
				<div className={s.sub}>
					<Subject subject='Создание программного обеспечения' />
				</div>

				<Teach
					name='Макиевский Станислав Евгеньевич'
					description='Преподаватель МИРЭА  и fullstack-разработчик'
				/>
			</div>
		</div>
	)
}

export default PageTeach
