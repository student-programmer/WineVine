import React from 'react'
import c from './Contact.module.css'
import map from '../../assets/images/map.jpg'

const Contact = () => {
  return (
    <div className={c.wrapper}>
        <div className={c.contact}>
            <h1 className={c.name}>КОНТАКТЫ</h1>
            <p className={c.phone}>Телефон</p>
            <p className={c.number}>+7(924)653-73-71</p>
            <p className={c.mail_text}>Электронная почта</p>
            <p className={c.mail}>wInEvibe@mail.ru</p>
            <p className={c.time}>Время работы</p>
            <p className={c.time_text}>Магазин г. Чита, ул.Богомягкова 27 Пн-Вс с 10:00 до 22:00</p>
            <p className={c.rek}>Реквизиты</p>
            <p className={c.rek_text}>ООО «Вайн» <br /> ИНН: 7716703783 <br /> КПП: 771601001 <br /> ОГРН: 1117746982715</p>
            <p className={c.schema}>Схема проезда в наш магазин</p>
            <img src={map} alt="map" className={c.map}/>

        </div>
    </div>
  )
}

export default Contact