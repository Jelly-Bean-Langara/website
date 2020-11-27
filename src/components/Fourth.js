import React from 'react';
import screens3 from '../assets/static/screens3.png';
import appStore from '../assets/static/app-store.png';
import googlePlay from '../assets/static/google-play.png';

const Fourth = () => (
  <section className="fourth">
    <div className="fourth__inner">
      <div className="fourth__left">
        <img src={screens3} alt="OFFbeat Screens 3" />
      </div>

      <div className="fourth__right">
        <h2>Get OFFbeat.</h2>
        <p>Download for free on the app stores and start your new travel journal.</p>
        <div className="fourth__download">
          <img src={appStore} alt="OFFbeat App Store" />
          <img src={googlePlay} alt="OFFbeat Google Play" />
        </div>
      </div>
    </div>
  </section>
);

export default Fourth;
