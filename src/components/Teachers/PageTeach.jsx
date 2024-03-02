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
				<Admin
					name='Пушкин Павел Юрьевич'
					position='Директор Института'
					description='Кандидат технических наук, доцент'
				/>
				<Admin
					name='Боровик Татьяна Николаевна'
					position='Заместитель директора по учебно-методической работе
					'
					
				/>
				<Admin
					name='Останина Ольга Ивановна'
					position='Заместитель директора по общим вопросам'
					description='Кандидат химических наук'
				/>
				<Admin
					name='Головченко Дарья Андреевна'
					position='Заместитель директора по профориентационной работе'
					
				/>
				<Admin
					name='Конышев Михаил Юрьевич'
					position='Заместитель директора по стратегическому развитию'
					description='доктор технических наук, доцент'
				/>
				<Admin
					name='Заместитель директора по научной работе'
					position='Заместитель директора по научной работе'
					description='Кандидат технических наук, доцент'
				/>
				
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
