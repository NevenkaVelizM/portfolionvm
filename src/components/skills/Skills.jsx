import React from 'react';
import './skills.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Skills = () => {
  return (
    <section id='skills'>
      {/* <h5>Front-End Development</h5> */}
      <h2>Mis Habilidades</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Técnicas</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>HTML</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>CSS</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>JavaScript</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>React JS</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>VsCode</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>GIT</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Github</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Firebase</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Figma</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Slack</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Metodologia SCRUM</h4>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience_softskills">
          <h3>Blandas</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Colaboración</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Autoaprendizaje</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Empatía</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Adaptabilidad</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Flexibilidad</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Organización</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Trabajo en equipo</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <h4>Comunicación asertiva</h4>
            </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Skills