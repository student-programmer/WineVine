import React from 'react';
import a from './Auth.module.css';
import auth_image from '../../assets/images/auth.png';
import registration_image from '../../assets/images/registration.png';

const Auth = ({ toggleModal, auth, modal }) => {
	return (
		<div className={a.wrapper} onClick={toggleModal}>
			{modal ? (
				<div
					onClick={event => event.stopPropagation()}
					className={a.modalContent}
				>
					<img src={auth_image} alt='' />
					<p className={a.text1}>Авторизация</p>
					<form action=''>
						<label for='email' className={a.input_text1}>
							Введите e-mail
						</label>
						<input type='text' name='email' className={a.email_input} />
						<label for='password' className={a.input_text2}>
							Введите пароль
						</label>
						<input type='text' name='password' className={a.password_input} />
					</form>
					<button className={a.yes} onClick={toggleModal}>
						Войти
					</button>
				</div>
			) : (
				<div
					onClick={event => event.stopPropagation()}
					className={a.modalContent2}
				>
					<img src={registration_image} alt='' />
					<p className={a.text2}>Регистрация</p>
					<form action='' className={a.forms}>
						<div className={a.box}>
							{' '}
							<label for='email' className={a.input_text}>
								Введите фамилию
							</label>
							<input type='text' name='email' className={a.sirname_input} />
						</div>
						<div>
							{' '}
							<label for='password' className={a.input_text}>
								Введите имя
							</label>
							<input type='text' name='password' className={a.input} />
						</div>
						<div>
							{' '}
							<label for='password' className={a.input_text}>
								Введите отчество
							</label>
							<input type='text' name='password' className={a.input} />
						</div>
						<div>
							{' '}
							<label for='password' className={a.input_text}>
								E-mail
							</label>
							<input type='text' name='password' className={a.input} />
						</div>
						<div>
							{' '}
							<label for='password' className={a.input_text}>
								Номер телефона
							</label>
							<input type='text' name='password' className={a.input} />
						</div>
						<div>
							{' '}
							<label for='password' className={a.input_text}>
								Введите пароль
							</label>
							<input type='text' name='password' className={a.input} />
						</div>
						<div>
							{' '}
							<label for='password' className={a.input_text}>
								Подтвердите пароль
							</label>
							<input type='text' name='password' className={a.input} />
						</div>
					</form>
					<button className={a.yes2} onClick={toggleModal}>
						ЗАРЕГИСТРИРОВАТЬСЯ
					</button>
				</div>
			)}
		</div>
	);
};

export default Auth;
