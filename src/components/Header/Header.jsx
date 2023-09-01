import React, { useState } from 'react';
import h from './Header.module.css';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';
import { Link, useNavigate } from 'react-router-dom';
import Warning from '../Warning/Warning';
import Auth from '../Auth/Auth';

const Header = () => {
	const navigate = useNavigate();
	const clickLogo = () => {
		navigate('/');
	};

	const [auth, setAuth] = useState(false);
	const [modal, setMoadl] = useState(true);

	const toggleModal = () => {
		setAuth(!auth);
		localStorage.setItem('storedData', JSON.stringify(!auth));
	};
	if (auth) {
		document.body.classList.add('activeModal');
	} else {
		document.body.classList.remove('activeModal');
	}

	return (
		<div className={h.header_wrapper}>
			<div className={h.logo} onClick={clickLogo}>
				<h1 className={h.logo1}>WINE</h1>
				<h1 className={h.logo2}>VIBE</h1>
			</div>
			<div className={h.list}>
				<ul>
					<li className={h.list_item}>
						<Link to={'catalog'}>каталог</Link>
					</li>
					<li className={h.list_item}>
						<Link to={'conditions'}>условия продажи</Link>
					</li>
					<li className={h.list_item}>
						<Link to={'company'}>о компании</Link>
					</li>
					<li className={h.list_item}>
						<Link to={'club'}>клубная программа</Link>
					</li>
					<li className={h.list_item}>
						<Link to={'contact'}>контакты</Link>
					</li>
				</ul>
			</div>
			{auth && <Auth toggleModal={toggleModal} auth={auth} modal={modal} />}
			<div className={h.map}>
				<GlobalSvgSelector id='map' /> <p className={h.city}>Чита</p>
			</div>
			<div className={h.entrance} onClick={toggleModal}>
				<GlobalSvgSelector id='entrance' />
			</div>
			<div className={h.cart}>
				<Link to={'cart'}>
					<GlobalSvgSelector id='cart' />{' '}
				</Link>
			</div>
		</div>
	);
};

export default Header;
