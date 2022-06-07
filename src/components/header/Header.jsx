import React from 'react';
import './header.css';
import CTA from './CTA';
// import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hola soy</h5>
        <h1>Nevenka Véliz Morales</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA /> 
        <HeaderSocials />

        {/* <div className="me"></div> */}
          {/* <img src={ME} alt="me" /> */}
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </header>
  )
}

export default Header