import React from 'react';
import c from './Company.module.css';
import glass from '../../assets/images/glass.png';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';

const Company = () => {
    return (
        <div className={c.wrapper}>
            <div className={c.company}>
                <h1 className={c.name}>О КОМПАНИИ</h1>
                <p className={c.text}>
                    Магазин «Wine Vibe» предлагает широкий выбор алкоголя на все
                    случаи жизни. Дополните ужин изысканными вкусами, порадуйте
                    друзей вкусными подарками и теплой атмосферой праздника. Для
                    удобства клиентов мы создали интернет-витрину, чтобы вы
                    могли уточнить наличие товара в магазине, а также
                    зарезервировать его. Зарезервированный товар вы можете
                    забрать в нашем бутике в любой день недели. Мы делаем все,
                    чтобы наши цены были самыми низкими, а покупки самыми
                    приятными, поэтому у нас действует скидочная система, по
                    которой ваша скидка может расти с каждым заказом. Кроме
                    того, мы стараемся найти индивидуальный подход к каждому
                    клиенту и с удовольствием поможем вам с выбором продукции.
                    <br />
                    Мы предоставляем максимально полную информацию о товаре,
                    чтобы вам было проще делать покупки у нас в магазине.
                </p>
                <img src={glass} alt='glasses' className={c.glasses} />
                <p className={c.our}>НАШИ ПРЕИМУЩЕСТВА</p>
            </div>
            <div className={c.many}>
                <div className={c.grid_items}>
                    <div>
                        <GlobalSvgSelector id='vector' />
                    </div>
                    <div>
                        {' '}
                        <h3 className={c.our_name}>Широкий ассортимент</h3>
                        <p className={c.our_text}>более 1 000 <br/> наименований товаров</p>
                    </div>
                </div>
                <div className={c.grid_items}>
                    <div>
                        <GlobalSvgSelector id='vector2' />
                    </div>
                    <div>
                        {' '}
                        <h3 className={c.our_name}>Только качественная продукция</h3>
                        <p className={c.our_text}>каждый товар <br /> регистрируется в <br />системе ЕГАИС</p>
                    </div>
                </div>
                <div className={c.grid_items}>
                    <div>
                        <GlobalSvgSelector id='vector3' />
                    </div>
                    <div>
                        {' '}
                        <h3 className={c.our_name}>Накопительные скидки</h3>
                        <p className={c.our_text}>“Клубная программа” <br /> для постоянных <br /> клиентов</p>
                    </div>
                </div>
                <div className={c.grid_items}>
                    <div>
                        <GlobalSvgSelector id='vector4' />
                    </div>
                    <div>
                        {' '}
                        <h3 className={c.our_name}>Работаем без выходных</h3>
                        <p className={c.our_text}>7 дней в неделю</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
