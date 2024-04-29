import React from 'react'
import { Link } from 'react-router-dom'
import s from '../styles/PageI.module.css'

const MainPage = ({ showButtons }) => {
	return (
		<div className={s.main}>
			<div className={s.a1}>
				<img src='./image/iptip1.png' className={s.a2} alt='' />
			</div>
			<section className={s.b}>
				<div className={s.b1}>
					<div className={s.b1_1}>
						<Link to='/PageTeach'>
							<button>
								<p className={s.text_button}>Преподаватели </p>
							</button>
						</Link>
					</div>
					<div className={s.b1_2}>
						<Link to='/LearnPath'>
							<button>
								<p className={s.text_button}>Траектория обучения</p>
							</button>
						</Link>
					</div>
				</div>
				<div className={s.b2}>
					<div className={s.b2_1}>
						<Link to='/PageHaha'>
							<button>
								<p className={s.text_button}>Хакатоны</p>
							</button>
						</Link>
					</div>
					<div className={s.b2_2}>
						<Link to='/PageCyber'>
							<button>
								<p className={s.text_button}>Киберспорт</p>
							</button>
						</Link>
					</div>
				</div>
			</section>
			<div className={s.b3}>
				<div className={s.b3_1}>
					<iframe
						src='https://vlabs.mirea.ru/mash/'
						width='100%'
						height='100%'
						style={{ marginLeft: '0px', paddingLeft: '0px' }}
						title='Mirea Mash'
						rel='noopener noreferrer'
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default MainPage
