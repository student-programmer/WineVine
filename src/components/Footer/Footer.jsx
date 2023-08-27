import React from 'react';
import f from './Footer.module.css';

const Footer = () => {
    return (
        <div className={f.wrapper}>
            <div className={f.reactangle}>
            <div className={f.logo}>
                <h1 className={f.logo1}>WINE</h1>
                <h1 className={f.logo2}>VIBE</h1>
            </div>
            <h1 className={f.description}>все права защищены</h1>
            <div className={f.number}>18+</div>
            
            <div className={f.list}>
                <ul><li className={f.information}>информация</li>
                    <li className={f.list_item}>каталог</li>
                    <li className={f.list_item}>условия продажи</li>
                    <li className={f.list_item}>о компании</li>
                    <li className={f.list_item}>клубная программа</li>
                    <li className={f.list_item}>контакты</li>
                </ul>
            </div>
            <p className={f.phone}>+7(924)653-73-71</p>
            <p className={f.email}>wInEvibe@mail.ru</p>
            </div>
        </div>
    );
};

export default Footer;
