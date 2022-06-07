import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre Mí</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      
    </footer>
  )
}

export default Footer