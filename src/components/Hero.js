import React from 'react';
import { Link } from 'react-scroll';
import logoIcon from '../assets/static/logo-icon.png';
import logoText from '../assets/static/logo-text.png';
import appStore from '../assets/static/app-store.png';
import googlePlay from '../assets/static/google-play.png';
import screens from '../assets/static/screens.png';

const Hero = () => (
  <section className="hero" name="hero">
    <div className="hero__inner">
      <nav className="hero__nav">
        <img src={logoIcon} alt="OFFBeat Logo" />
        <img src={logoText} alt="OFFBeat Logo" />
        <ul>
          <li><Link to="second" spy smooth offset={0} duration={500}>Features</Link></li>
          <li><Link to="team" spy smooth offset={0} duration={500}>Team</Link></li>
          <li><Link to="contact" spy smooth offset={0} duration={500}>Contact</Link></li>
        </ul>
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
        <img src={screens} alt="OFFbeat Screens" />
      </div>
    </div>
  </section>
);

export default Hero;
