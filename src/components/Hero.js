/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoIcon from '../assets/static/logo-icon.png';
import logoText from '../assets/static/logo-text.png';
import appStore from '../assets/static/app-store.png';
import googlePlay from '../assets/static/google-play.png';
import screens from '../assets/static/screens.png';
import screensMobile from '../assets/static/screens-mobile.png';
import logoIconAlt from '../assets/static/logo-icon-alt.svg';
import logoTextAlt from '../assets/static/logo-text-alt.svg';

const Hero = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <section className="hero" name="hero">
        <div className="hero__inner">
          <nav className="hero__nav">
            <img src={logoIcon} alt="OFFBeat Logo" />
            <img src={logoText} alt="OFFBeat Logo" />
            <ul>
              <li><Link to="second" spy smooth offset={0} duration={500}>Features</Link></li>
              <li><Link to="team" spy smooth offset={150} duration={500}>Team</Link></li>
              <li><Link to="contact" spy smooth offset={0} duration={500}>Contact</Link></li>
            </ul>
            <button onClick={handleMenu} type="button"><FaBars /></button>
          </nav>

          <div className="hero__slogan">
            <h1>
              Get off the
              <br />
              beaten track.
              <span>Get OFFbeat.</span>
            </h1>

            <p>Turn your travels into an amazing adventure journal.</p>

            <div className="hero__download">
              <img src={appStore} alt="OFFbeat App Store" />
              <img src={googlePlay} alt="OFFbeat Google Play" />
            </div>
          </div>

          <div className="hero__screens">
            <img src={screens} className="desktop" alt="OFFbeat Screens" />
            <img src={screensMobile} className="mobile" alt="OFFbeat Screens" />
          </div>
        </div>
      </section>

      <div className={menu ? 'mobile-menu mobile-menu--active' : 'mobile-menu'}>
        <button onClick={handleMenu} type="button"><FaTimes /></button>

        <ul>
          <li><Link onClick={handleMenu} to="second" spy smooth offset={0} duration={500}>Features</Link></li>
          <li><Link onClick={handleMenu} to="team" spy smooth offset={150} duration={500}>Team</Link></li>
          <li><Link onClick={handleMenu} to="contact" spy smooth offset={0} duration={500}>Contact</Link></li>
        </ul>

        <div className="mobile-menu__logo">
          <img src={logoIconAlt} alt="OFFBeat Logo" />
          <img src={logoTextAlt} alt="OFFBeat Logo" />
        </div>
      </div>
    </>
  );
};

export default Hero;
