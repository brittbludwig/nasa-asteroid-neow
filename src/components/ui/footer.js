import React from 'react';
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
      <h2>Contact</h2>

      <div className="footer-container">
        <div className="contact-info">

          <div className="contact-content">
            <span className="name">Brittany Ludwig</span>
            <span className="email">
              <span className="icon">
                <MdEmail />
              </span>
              brittludwig@gmail.com
            </span>
            <div className="clear" />
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer