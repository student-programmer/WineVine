import React from 'react'
import h from './Header.module.css'
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Header = () => {
 const navigate = useNavigate()
  const clickLogo = () =>{
    navigate('/')
  }

  return (
    <div className={h.header_wrapper}>
        <div className={h.logo} onClick={clickLogo}>
            <h1 className={h.logo1}>WINE</h1>
            <h1 className={h.logo2}>VIBE</h1>
        </div>
    <div className={h.list}>
        <ul>
            <li className={h.list_item}>каталог</li>
            <li className={h.list_item}><Link to={'conditions'}>условия продажи</Link></li>
            <li className={h.list_item}>о компании</li>
            <li className={h.list_item}><Link to={'club'}>клубная программа</Link></li>
            <li className={h.list_item}>контакты</li>
        </ul>
        </div>

        <div className={h.map}><GlobalSvgSelector id='map'/> <p className={h.city}>Чита</p></div>
        <div className={h.entrance}><GlobalSvgSelector id='entrance'/></div>
        <div className={h.cart}><GlobalSvgSelector id='cart'/></div>
    </div>
  )
}

export default Header