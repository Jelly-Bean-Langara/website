import React from 'react';
import { Link } from 'react-scroll';
import logoIcon from '../assets/static/logo-icon.png';
import logoText from '../assets/static/logo-text.png';

const Footer = () => (
  <footer>
    <div className="inner">
      <nav>
        <img src={logoIcon} alt="OFFBeat Logo" />
        <img src={logoText} alt="OFFBeat Logo" />
        <ul>
          <li><Link to="second" spy smooth offset={0} duration={500}>Features</Link></li>
          <li><Link to="team" spy smooth offset={0} duration={500}>Team</Link></li>
          <li><Link to="contact" spy smooth offset={0} duration={500}>Contact</Link></li>
        </ul>
      </nav>

      <p>© Jelly Bean, 2020</p>
    </div>
  </footer>
);

export default Footer;
