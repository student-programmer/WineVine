import React from 'react';
import c from './Club.module.css';
const Club = () => {
    return (
        <div className={c.wrapper}>
            <div className={c.one_display}>
                {' '}
                <h1 className={c.name_display}>Клубная программа Wine Vine</h1>
                <p className={c.text}>
                    Для наших постоянных покупателей действует Клубная
                    программа. Ее участники получают скидки на весь ассортимент
                    магазина Wine Vibe кроме товаров, которые участвуют в акциях
                    и спецпредложениях.
                </p>
                <p className={c.accept}>Вступи в клуб и получи скидку до 10%</p>
                <button className={c.common}>Вступить</button>{' '}
            </div>
            <div className={c.two_display}>
                <p className={c.text1}>
                    Клубная программа действует по накопительной системе
                </p>
                <p className={c.text2}>
                    Стоимость всех ваших заказов суммируется и учитывается в
                    Клубной программе. Чем больше сумма всех покупок, тем выше
                    скидка
                </p>
            </div>
            <div className={c.three_display}>
                <h1 className={c.text_last}>
                    Заполните форму и получите скидку прямо сейчас!
                </h1>
                <form action=''>
                    <p className={c.text_input1}>ФИО</p>
                    <p className={c.text_input2}>Телефон</p>
                    <p className={c.text_input3}>E-mail</p>
                    <p className={c.text_input4}>Пароль</p>
                    <p className={c.text_input5}>Подтвердите пароль</p>
                    <div className={c.inputs}>
                        {' '}
                        <input type='text' className={c.form_input} />
                        <input type='text' className={c.form_input} />
                        <input type='text' className={c.form_input} />
                        <input type='text' className={c.form_input} />
                        <input type='text' className={c.form_input} />
                    </div>

                    <button className={c.put}>Получить</button>
                </form>
            </div>
        </div>
    );
};

export default Club;
