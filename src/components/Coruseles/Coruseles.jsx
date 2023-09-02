import Carousel from 'react-bootstrap/Carousel';
import catalogImg from '../../assets/images/catalog.png'
import catalogImg2 from '../../assets/images/catalog2.png'
import c from './Coruseles.module.css'


function Coruseles() {
	return (
		<Carousel>
			<Carousel.Item>
				<img src={catalogImg} alt='first slide' />
				<Carousel.Caption>
					<h3 className={c.text2}>ВСТУПИ В КЛУБНУЮ ПРОГРАММУ, </h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img src={catalogImg2} alt='second slide' />
				<Carousel.Caption>
					<h3 className={c.text}>СКИДКА 5% ПРИ ОНЛАЙН-ЗАКАЗЕ</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Coruseles;
