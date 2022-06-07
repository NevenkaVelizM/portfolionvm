import React from 'react';
import './projects.css';
import IMG1 from '../../assets/portfolio_1.png';
import IMG2 from '../../assets/portfolio_2.png';
import IMG3 from '../../assets/portfolio_3.png';
import IMG4 from '../../assets/portfolio_4.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title:'Burger Queen: Suburger',
    demo:'https://burgerqueen-suburger-ecb17.web.app/',
    github:'https://github.com/NevenkaVelizM/SCL019-burger-queen'
     },
     {
    id: 2,
    image: IMG2,
    title: 'Social Network: codeZan',
    demo: 'https://nevenkavelizm.github.io/SCL019-social-network/',
    github: 'https://github.com/NevenkaVelizM/SCL019-social-network'
     },
     {
    id: 3,
    image: IMG3,
    title: 'Data Lovers: Rick and Morty',
    demo: 'https://nevenkavelizm.github.io/SCL019-data-lovers/',
    github: 'https://github.com/NevenkaVelizM/SCL019-data-lovers'
     },
     {
    id: 4,
    image: IMG4,
    title: 'Card Validation: Covelina Minerals',
    demo: 'https://nevenkavelizm.github.io/SCL019-card-validation/',
    github: 'https://github.com/NevenkaVelizM/SCL019-card-validation'
     }
  ]

const Projects = () => {
  return (
    <section id='projects'>
      <h2>Proyectos</h2>

      <div className="container portfolio_container">
       {
         data.map(({id, image, title, demo, github}) => {
           return (
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={demo} className='btn' target='_blank'>Sitio</a>
               <a href={github} className='btn btn-primary' target='_blank'>Github</a>
            </div>
          </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default Projects