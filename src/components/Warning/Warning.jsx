import React from 'react';
import w from './Warning.module.css';

const Warning = ({ toggleModal }) => {
	return (
		<div onClick={toggleModal} className={w.wrapper}>
			<div
				onClick={event => event.stopPropagation()}
				className={w.modalContent}
			>
				<p className={w.text1}>
					Данный сайт содержит контент, предназначенный для лиц старше 18 лет.
				</p>
				<p className={w.text2}>Чтобы продолжить, подтвердите свой возраст.</p>
				<p className={w.text3}>Вам уже есть 18?</p>
				<button className={w.yes} onClick={toggleModal}>Да</button>
				<button className={w.no} onClick={toggleModal}>Нет</button>
			</div>
		</div>
	);
};

export default Warning;
