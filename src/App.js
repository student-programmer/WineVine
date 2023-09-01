import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Conditions from './pages/Conditions/Conditions';
import Club from './pages/Club/Club';
import Company from './pages/Company/Company';
import Contact from './pages/Contact/Contact';
import Catalog from './pages/Catalog/Catalog';
import Product from './pages/Product/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Warning from './components/Warning/Warning';
import Cart from './pages/Cart/Cart';

function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/' element={<Main />} />
				<Route path='/conditions' element={<Conditions />} />
				<Route path='/club' element={<Club />} />
				<Route path='/company' element={<Company />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/catalog/product' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
