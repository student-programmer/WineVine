import React from 'react';
import f from './Footer.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    const clickLogo = () =>{
      navigate('/')
    }
  
    return (
			<div className={f.wrapper}>
				<div className={f.reactangle}>
					<div className={f.logo} onClick={clickLogo}>
						<h1 className={f.logo1}>WINE</h1>
						<h1 className={f.logo2}>VIBE</h1>
					</div>
					<h1 className={f.description}>все права защищены</h1>
					<div className={f.number}>18+</div>

					<div className={f.list}>
						<ul>
							<li className={f.information}>информация</li>
							<li className={f.list_item}>
								<Link to={'catalog'}>каталог</Link>
							</li>
							<li className={f.list_item}>
								<Link to={'conditions'}>условия продажи</Link>
							</li>
							<li className={f.list_item}>
								<Link to={'company'}>о компании</Link>
							</li>
							<li className={f.list_item}>
								<Link to={'club'}>клубная программа</Link>
							</li>
							<li className={f.list_item}>
								<Link to={'contact'}>контакты</Link>
							</li>
						</ul>
					</div>
					<p className={f.phone}>+7(924)653-73-71</p>
					<p className={f.email}>wInEvibe@mail.ru</p>
				</div>
			</div>
		);
};

export default Footer;
