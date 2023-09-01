import React, { useEffect, useState } from 'react'
import a from './Main.module.css';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';
import one from '../../assets/images/1.png';
import two from '../../assets/images/2.png';
import five from '../../assets/images/5.png';
import six from '../../assets/images/6.png';
import seven from '../../assets/images/7.png';
import Warning from '../../components/Warning/Warning';
const Main = () => {

    	const [modal, setModal] = useState(true);

			const toggleModal = () => {
				setModal(!modal);
                localStorage.setItem('storedData', JSON.stringify(modal));
			};
			if (modal) {
				document.body.classList.add('activeModal');
			} else {
				document.body.classList.remove('activeModal');
			}


    const data = JSON.parse(localStorage.getItem('storedData'));
  return (
    <div className={a.App}>
            <div className={a.one_display}>
                <img src={one} alt='bottle' className={a.bottle} />
                <img src={two} alt='glasses' className={a.glasses} />
                <p className={a.text1}>Наслаждайтесь каждым</p>
                <p className={a.text2}>глотком,</p>
                <p className={a.text3}>который вы делаете</p>
                <button className={a.by}>каталог</button>
                <button className={a.discount}>акции</button>
            </div>
            <div className={a.two_display}>
                <div className={a.history_img}></div>
                <div className={a.reactangle}>
                    <h1 className={a.name_display}>история</h1>
                    <p className={a.text_history}>
                        Говорят, что история вина началась примерно в 6000 году
                        до нашей эры, поскольку археологи смогли
                        идентифицировать виноград по древним семенам, найденным
                        в Турции, Грузии и Армении. Записи о вине действительно
                        берут свое начало из рассказов о жизни в Древнем Египте,
                        а затем и в Древней Греции. <br /> <br /> Дикие лозы
                        росли по всему миру, но именно вид Vitis Vinifera
                        распространил виноделие по всей Европе во главе с
                        Древними Греками. У греков и римлян были ритуалы,
                        посвященные их винным богам, Дионису и Вакху, которые
                        впоследствии стали ритуалами христианской практики, и
                        вино интегрировалось в историю как объект огромной
                        религиозной важности, сохраняя его и по сей день.
                    </p>
                </div>
            </div>
            <div className={a.three_display}>
                <img src={five} alt='notebook' className={a.laptop} />
                <img src={six} alt='display' className={a.display} />
                <div className={a.elipse}>
                    {' '}
                    <GlobalSvgSelector id='elipse' />
                </div>
                <p className={a.discount_text}>СКИДКА</p>
                <p className={a.discount_number}>5%</p>
                <p className={a.discount_description}>ПРИ ОНЛАЙН-ЗАКАЗЕ</p>
            </div>
            <div className={a.four_display}>
                <h1 className={a.four_name}>ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ</h1>
                <div className={a.question_list}>
                    <div className={a.question}>
                        <button className={a.plus_button}>
                            <GlobalSvgSelector id='plus' />
                        </button>
                        <p className={a.question_text}>КАК ОФОРМИТЬ ЗАКАЗ?</p>
                    </div>
                    <div className={a.question}>
                        <button className={a.plus_button}>
                            <GlobalSvgSelector id='plus' />
                        </button>
                        <p className={a.question_text}>КАК ПОЛУЧИТЬ ЗАКАЗ?</p>
                    </div>
                    <div className={a.question}>
                        <button className={a.plus_button}>
                            <GlobalSvgSelector id='plus' />
                        </button>
                        <p className={a.question_text}>
                            МОЖНО ОБМЕНЯТЬ ИЛИ ВЕРНУТЬ ТОВАР?
                        </p>
                    </div>
                    <div className={a.question}>
                        <button className={a.plus_button}>
                            <GlobalSvgSelector id='plus' />
                        </button>
                        <p className={a.question_text}>
                            У ВАС ЕСТЬ СКИДКИ ИЛИ НАКОПИТЕЛЬНЫЕ КАРТЫ?
                        </p>
                    </div>
                </div>
                {data && <Warning toggleModal={toggleModal} />}
                <img src={seven} alt='' className={a.seven} />
            </div>
        </div>
  )
}

export default Main