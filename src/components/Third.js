import React from 'react';
import plus from '../assets/static/plus.svg';
import leonartGutz from '../assets/static/Leonart_Gutz.jpg';
import gustavo from '../assets/static/Gustavo_Palladini.jpg';
import julia from '../assets/static/Julia_Francese.jpg';
import marina from '../assets/static/Marina_Lemos.jpg';
import liz from '../assets/static/Liz_Brito.jpg';
import rakesh from '../assets/static/Rakesh.jpg';
import jaspreet from '../assets/static/Jaspreet_Kaur.jpg';
import lalit from '../assets/static/Lalit_Kumar.jpg';
import mandeep from '../assets/static/Mandeep_Kaur.jpg';
import yuvraj from '../assets/static/Yuvraj_Singh.jpg';

const Third = () => (
  <section className="third">
    <div className="third__inner">
      <h2>Meet the team</h2>

      <div className="third__team">

        <div className="third__box">
          <img src={gustavo} alt="OFFbeat Gustavo Palladini" />
          <h3>Gustavo Palladini</h3>
          <p>Lead Designer</p>
          <button type="button"><img src={plus} alt="OFFbeat Plus" /></button>
        </div>

        <div className="third__box">
          <img src={julia} alt="OFFbeat Julia Francese" />
          <h3>Julia Francese</h3>
          <p>Project Manager</p>
          <button type="button"><img src={plus} alt="OFFbeat Plus" /></button>
        </div>

        <div className="third__box">
          <img src={leonartGutz} alt="OFFbeat Leonart Gutz" />
          <h3>Leonart Gutz</h3>
          <p>Lead Full Stack Developer</p>
          <button type="button"><img src={plus} alt="OFFbeat Plus" /></button>
        </div>

        <div className="third__box">
          <img src={marina} alt="OFFbeat Marina Lemos" />
          <h3>Marina Lemos</h3>
          <p>Lead UI/UX Designer</p>
          <button type="button"><img src={plus} alt="OFFbeat Plus" /></button>
        </div>

        <div className="third__box">
          <img src={liz} alt="OFFbeat Liz Brito" />
          <h3>Liz Brito</h3>
          <p>Front-end Developer</p>
          <button type="button"><img src={plus} alt="OFFbeat Plus" /></button>
        </div>

        <div className="third__box">
          <img src={rakesh} alt="OFFbeat Rakesh" />
          <h3>Rakesh</h3>
          <p>Back-end Developer</p>
          <button type="button"><img src={plus} alt="OFFbeat Plus" /></button>
        </div>

        <div className="third__box">
          <img src={jaspreet} alt="OFFbeat Jaspreet Kaur" />
          <h3>Jaspreet Kaur</h3>
          <p>Content Designer</p>
          <button type="button"><img src={plus} alt="OFFbeat Plus" /></button>
        </div>

        <div className="third__box">
          <img src={lalit} alt="OFFbeat Lalit Kumar" />
          <h3>Lalit Kumar</h3>
          <p>UI/UX Designer</p>
          <button type="button"><img src={plus} alt="OFFbeat Plus" /></button>
        </div>

        <div className="third__box">
          <img src={mandeep} alt="OFFbeat Mandeep Kaur" />
          <h3>Mandeep Kaur</h3>
          <p>Content Designer</p>
          <button type="button"><img src={plus} alt="OFFbeat Plus" /></button>
        </div>

        <div className="third__box">
          <img src={yuvraj} alt="OFFbeat Yuvraj Singh" />
          <h3>Yuvraj Singh</h3>
          <p>Content Designer</p>
          <button type="button"><img src={plus} alt="OFFbeat Plus" /></button>
        </div>
      </div>
    </div>
  </section>
);

export default Third;
