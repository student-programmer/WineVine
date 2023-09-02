import React from 'react';
import c from './Cart.module.css';
import cart from '../../api/cart.json';
import bot from '../../assets/images/bot.png';
const Cart = () => {
	return (
		<div className={c.wrapper}>
			<div className={c.cart_body}>
				<h1 className={c.name}>КОРЗИНА</h1>
				<div className={c.line}></div>
				<p className={c.text1}>ТОВАР</p>
				<p className={c.text2}>КОЛИЧЕСТВО</p>
				<p className={c.text3}>СТОИМОСТЬ</p>
				{cart.data.map(item => (
					<div className={c.item}>
						<img src={bot} alt='' />
						<p className={c.item_name}>{item.name}</p>
						<p className={c.item_price}>{item.price}</p>
						<p className={c.item_description}>{item.description}</p>
						<div className={c.item_count}>{item.count}</div>
					</div>
				))}
				<p className={c.all}>ИТОГО: 3 114 РУБ.</p>
			</div>
			<form action='' className={c.cart_form}>
				<h1 className={c.form_name}>КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
				<div>
					<div className={c.on_input}>
						<label htmlFor='' className={c.input_label}>
							{' '}
							Телефон
						</label>
						<input type='text' className={c.input_cart} />
					</div>
					<div className={c.on_input}>
						<label htmlFor='' className={c.input_label}>
							ФИО
						</label>
						<input type='text' className={c.input_cart} />
					</div>
					<div className={c.on_input}>
						<label htmlFor='' className={c.input_label}>
							E-mail
						</label>
						<input type='text' className={c.input_cart} />
					</div>
				</div>
				<div className={c.last_wrapper}>
					<div className={c.last}>
						<p>Варианты оплаты</p>
						<input type='radio' className={c.radio} />
						<p>Наличными</p>

						<p>Магазин</p>
						<input type='radio' className={c.radio} />
						<p>Богомягова 27</p>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Cart;
