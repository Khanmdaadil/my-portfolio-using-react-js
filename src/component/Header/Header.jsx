import React from 'react'
import CTA from './CTA'
import ME from "../../assets/me.png"
import HeaderSocial from './HeaderSocial'
import './header.css'
const Header = () => {
  return (
   <header>
    <div className="container header__container">
    <h5>Hello I'm</h5>
    <h1>Aadil Khan</h1>
    <h5 className='text-light'>Full Stack Devloper</h5>
    <CTA />
    <HeaderSocial />
    <div className='me'>
      <img src={ME} alt='me' />
    </div>
    <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header