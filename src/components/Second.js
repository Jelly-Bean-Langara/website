import React from 'react';
import screens from '../assets/static/screens2.png';
import journal from '../assets/static/journal.svg';
import map from '../assets/static/map.svg';
import pin from '../assets/static/pin.svg';

const Second = () => (
  <section className="second" name="second">
    <div className="second__inner">
      <h2>
        Plan ahead or make a
        <br />
        <span>time capsule</span>
        of your trip
      </h2>

      <div className="second__left">
        <img src={screens} alt="OFFbeat Screens 2" />
      </div>

      <div className="second__right">
        <div className="second__box">
          <img src={journal} alt="OFFbeat Journal" />
          <h3>Create and share a travel journal</h3>
          <p>You can add your own journal, save places that you recommend visiting on the way, write about your experience, and share the details of the trip with text and images with the world.</p>
        </div>

        <div className="second__box">
          <img src={map} alt="OFFbeat Map" />
          <h3>Search for new travel experiences</h3>
          <p>One of the most interesting possibilities is finding great things to do and places to explore, starting from the spot you are. You can find different kinds of activities beyond the obvious and well-known places.</p>
        </div>

        <div className="second__box">
          <img src={pin} alt="OFFbeat Pin" />
          <h3>Plan your route for the next trip</h3>
          <p>There are seven categories to help users find a new trip experience: weekend getaways, road trips, hiking, cycling, camping, international and sailing. This feature gives the user quick tips to help them start writing a journal.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Second;
