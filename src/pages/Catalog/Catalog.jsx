import React, { useState } from 'react';
import c from './Catalog.module.css';

import data from '../../api/data.json';
import eleven from '../../assets/images/11.png';
import Coruseles from '../../components/Coruseles/Coruseles';
import { Link, useNavigate } from 'react-router-dom';
const Catalog = () => {
	const [count, setCount] = useState(1);

	const countUpdate = () => {
		setCount(count => (count += 1));
	};

	const countUpdateMinus = () => {
		setCount(count => (count -= 1));
	};

  const navigator = useNavigate()
  
  const handleClick = () =>{
    navigator('product');
  }

	return (
		<div className={c.wrapper}>
			<div className={c.slider}>
				<Coruseles />
			</div>
			<div className={c.search_wrapper}>
				{' '}
				<input type='text' className={c.search} />
				{/* <GlobalSvgSelector id='search'className={c.search_icon}/> */}
				<svg
					className={c.search_icon}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C3 7.68333 3.62933 6.146 4.888 4.888C6.14667 3.63 7.684 3.00067 9.5 3C11.3167 3 12.854 3.62933 14.112 4.888C15.37 6.14667 15.9993 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5623 12.688 12.687C13.5633 11.8117 14.0007 10.7493 14 9.5C14 8.25 13.5623 7.18733 12.687 6.312C11.8117 5.43667 10.7493 4.99933 9.5 5C8.25 5 7.18733 5.43767 6.312 6.313C5.43667 7.18833 4.99933 8.25067 5 9.5C5 10.75 5.43767 11.8127 6.313 12.688C7.18833 13.5633 8.25067 14.0007 9.5 14Z'
						fill='#CACACA'
					/>
				</svg>
			</div>
			<div className={c.catalog}>
				{data.data.map(item => (
					<div className={c.item} onClick={handleClick}>
						<p className={c.item_name}>{item.name}</p>
						<p className={c.item_description}>{item.description}</p>
						<p className={c.item_price}>{item.price}</p>
						<img src={eleven} alt='bottle' />
						<div
							className={c.counter}
							onClick={event => event.stopPropagation()}
						>
							<p className={c.buttons_text}>{count}</p>{' '}
							<div className={c.buttons}>
								<button onClick={countUpdate} className={c.button1}>
									<svg
										width='11'
										height='6'
										viewBox='0 0 11 6'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M1 5L6 1L9.58515 4.58515L10 5' stroke='#DBDBDB' />
									</svg>
								</button>
								<button onClick={countUpdateMinus} className={c.button2}>
									<svg
										width='11'
										height='6'
										viewBox='0 0 11 6'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M10 1L5 5L1.41485 1.41485L1 1' stroke='#DBDBDB' />
									</svg>
								</button>
							</div>
						</div>
						<button
							className={c.item_button}
							onClick={event => event.stopPropagation()}
						>
							<Link to='../cart'>{item.button}</Link>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Catalog;
