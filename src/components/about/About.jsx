import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h2>Sobre Mí</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Egresada de Laboratoria</h5>
              <small>Bootcamp Front-End 6 meses </small>
            </article>

            
            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
              <h5>4 Proyectos</h5>
              <small>2 individuales / 2 en equipo</small>
            </article>
          </div>
          <p>
          Soy una Desarrolladora Front-End que gusta aprender y analizar, para ser de ayuda en el mejoramiento continuo. Por lo cual, me comprometo y 
          esfuerzo para que existan buenos resultados.
          Mi experiencia laboral en diferentes áreas, me ha ayudado a reforzar el trabajo en equipo, la empatía y las habilidades comunicativas.
          Estar en Laboratoria me ayudo a descubrir que puedo complementar estas habilidades con el mundo tech, donde a través del trabajo con 
          metodología ágil e integrando herramientas y lenguaje de programación puedo crear soluciones.
          </p>

          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About