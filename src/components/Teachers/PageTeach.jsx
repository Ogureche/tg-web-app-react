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
					<Subject subject='Кафедра Индустриального программирования' />
				</div>

				<Teach
					name='Макиевский Станислав Евгеньевич'
					description='Преподаватель МИРЭА  и fullstack-разработчик'
				/>

				<Teach
					name='Шамин Роман Вячеславович'
					description='Профессор, доктор физико-математических наук'
				/>

				<Teach
					name='Грошева Полина Юрьевна'
					description='Доцент, кандидат экономиче- ских наук'
				/>

				<Teach
					name='Евдошенко Олег Игоревич'
					description='Доцент, кандидат технических Наук'
				/>

				<Teach
					name='Закожурников Сергей Сергеевич'
					description='Доцент, кандидат технических Наук'
				/>

				<Teach
					name='Зарипова Виктория Мадияровна'
					description='Доцент, кандидат технических Наук'
				/>

				<Teach
					name='Лежнина Юлия Аркадьевна'
					description='Доцент, кандидат технических Наук'
				/>

				<Teach
					name='Осипов Алексей Викторович'
					description='Доцент, кандидат технических Наук'
				/>

				<Teach
					name='Плешакова Екатерина Сергеевна'
					description='Доцент, кандидат технических Наук'
				/>

				<Teach
					name='Астафьев Рустам Уралович'
					description='Преподаватель'
				/>

				<Teach
					name='Кузьмин Глеб Николаевич'
					description='Преподаватель'
				/>

				<Teach
					name='Гиматдинов Дамир Маратович'
					description='Ассистент'
				/>

				<Teach
					name='Макиевский Станислав Евгеньевич'
					description='Ассистент'
				/>

				<div className={s.sub}>
					<Subject subject='Кафедра Индустриального программирования' />
				</div>

				<Teach
					name='Зуев Сергей Михайлович'
					description='Заведующий кафедрой'
				/>

				<Teach
					name='Шишаков Константин Валентинович'
					description='Профессор'
				/>

				<Teach
					name='Белкин Михаил Евсеевич'
					description='Профессор'
				/>

				<Teach
					name='Бузылев Федор Николаевич'
					description='Доцент'
				/>

				<Teach
					name='Величко Александр Павлович'
					description='Доцент'
				/>

				<Teach
					name='Карпов Максим Александрович'
					description='Доцент'
				/>

				<Teach
					name='Кретушев Александр Викторович'
					description='Доцент'
				/>
				
				<Teach
					name='Кузнецов Владимир Викторович'
					description='Доцент'
				/>

				<Teach
					name='Умнов Владимир Олегович'
					description='Доцент'
				/>

				<Teach
					name='Шестакова Анастасия Павловна'
					description='Доцент'
				/>

				<Teach
					name='Блеко Витольд Владиславович'
					description='Доцент'
				/>


			</div>
		</div>
	)
}

export default PageTeach
