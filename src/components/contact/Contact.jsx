import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contáctame</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>nvelizm@gmail.com</h5>
            <a href="mailto:nvelizm@gmail.com">Enviar un mensaje</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact