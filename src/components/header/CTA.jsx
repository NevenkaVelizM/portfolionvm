import React from 'react';
import CV from '../../assets/cv_NevenkaVeliz.pdf';


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Contáctame</a>
    </div>
  )
}

export default CTA