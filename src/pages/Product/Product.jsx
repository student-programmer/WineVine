import React, { useState } from 'react'
import p from './Product.module.css'
import product from '../../assets/images/product.png'
const Product = () => {


    	const [count, setCount] = useState(1);

			const countUpdate = () => {
				setCount(count => (count += 1));
			};

			const countUpdateMinus = () => {
				setCount(count => (count -= 1));
			};

  return (
		<div className={p.wrapper}>
			<img src={product} alt='bottle' className={p.bottle} />
			<div className={p.description}>
				<h1 className={p.name}>Le Contesse Prosecco Brut Treviso DOC</h1>
				<p className={p.desc}>
					шампанское Ле Контессе Просекко Тревизо Брют ДОК 0.75 л
				</p>
				<p className={p.redy}>Есть в наличии</p>
				<div className={p.counter}>
					<p className={p.buttons_text}>{count}</p>{' '}
					<div className={p.buttons}>
						<button onClick={countUpdate} className={p.button1}>
							<svg
								width='21'
								height='10'
								viewBox='0 0 21 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0.999512 9.00012L11.5551 1.00012L19.1237 8.17043L19.9995 9.00012'
									stroke='#DBDBDB'
								/>
							</svg>
						</button>
						<button onClick={countUpdateMinus} className={p.button2}>
							<svg
								width='21'
								height='10'
								viewBox='0 0 21 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M19.9995 1.00012L9.44396 9.00012L1.8753 1.82981L0.999511 1.00012'
									stroke='#DBDBDB'
								/>
							</svg>
						</button>
					</div>
				</div>
				<button className={p.cart}>В КОРЗИНУ</button>
			</div>
			<p className={p.big_text}>
				Le Contesse, Prosecco Brut, Treviso DOC — сухое игристое вино, созданное
				из винограда сорта Глера (Просекко), который произрастает на
				виноградниках хозяйства в зонах Tezze di Piave, S.Polo di Piave, Mareno
				di Piave. После сбора урожая, который осуществляется вручную, ягоды
				проходят очистку и холодное осаждение. Часть сусла подвергается
				ферментации на осадке при контролируемой температуре, а часть —
				сохраняется при низкой температуре. Выдерживается игристое вино с
				выбранными дрожжами при строго контролируемой температуре. Prosecco
				Brut, Treviso DOC идеально в качестве аперитива, хорошо сочетается с
				белым мясом и рыбой, морепродуктами и средиземноморскими салатами, суши,
				свежими сливочными сырами.
			</p>
		</div>
	);
}

export default Product