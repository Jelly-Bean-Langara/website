/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import {
  FaBehance, FaGithub, FaGlobe, FaLinkedin,
} from 'react-icons/fa';
import plus from '../assets/static/plus.svg';
import minus from '../assets/static/minus.svg';
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

const Third = () => {
  const [overlay1, setOverlay1] = useState({});
  const [overlay2, setOverlay2] = useState({});
  const [overlay3, setOverlay3] = useState({});
  const [overlay4, setOverlay4] = useState({});
  const [overlay5, setOverlay5] = useState({});
  const [overlay6, setOverlay6] = useState({});
  const [overlay7, setOverlay7] = useState({});
  const [overlay8, setOverlay8] = useState({});
  const [overlay9, setOverlay9] = useState({});
  const [overlay10, setOverlay10] = useState({});

  const handleFlip = (overlay) => {
    const style = {
      opacity: '1',
      pointerEvents: 'all',
    };

    switch (overlay) {
      case 1:
        setOverlay1(style);
        break;
      case 2:
        setOverlay2(style);
        break;
      case 3:
        setOverlay3(style);
        break;
      case 4:
        setOverlay4(style);
        break;
      case 5:
        setOverlay5(style);
        break;
      case 6:
        setOverlay6(style);
        break;
      case 7:
        setOverlay7(style);
        break;
      case 8:
        setOverlay8(style);
        break;
      case 9:
        setOverlay9(style);
        break;
      case 10:
        setOverlay10(style);
        break;
      default:
        break;
    }
  };

  const handleFlipBack = (overlay) => {
    const style = {
      opacity: '0',
      pointerEvents: 'none',
    };

    switch (overlay) {
      case 1:
        setOverlay1(style);
        break;
      case 2:
        setOverlay2(style);
        break;
      case 3:
        setOverlay3(style);
        break;
      case 4:
        setOverlay4(style);
        break;
      case 5:
        setOverlay5(style);
        break;
      case 6:
        setOverlay6(style);
        break;
      case 7:
        setOverlay7(style);
        break;
      case 8:
        setOverlay8(style);
        break;
      case 9:
        setOverlay9(style);
        break;
      case 10:
        setOverlay10(style);
        break;
      default:
        break;
    }
  };

  return (
    <section className="third" name="team">
      <div className="third__inner">
        <h2>Meet the team</h2>

        <div className="third__team">

          <div className="third__box">
            <div className="third__content third__content--front">
              <img src={gustavo} alt="OFFbeat Gustavo Palladini" />
              <h3>Gustavo Palladini</h3>
              <p>Lead Designer</p>
              <button type="button" onClick={() => handleFlip(1)}><img src={plus} alt="OFFbeat Plus" /></button>
            </div>

            <div className="third__content third__content--back" style={overlay1}>
              <p>Art Director / Graphic Designer from Brazil, with over 12 years of experience. I am extending my expertise in UX and UI. I am a versatile professional.</p>
              <ul>
                <li><a href="https://www.linkedin.com/in/gpalladini/" target="blank"><FaLinkedin /></a></li>
                <li><a href="https://www.behance.net/gustavopalladini" target="blank"><FaBehance /></a></li>
              </ul>
              <button type="button" onClick={() => handleFlipBack(1)}><img src={minus} alt="OFFbeat Minus" /></button>
            </div>
          </div>

          <div className="third__box">
            <div className="third__content third__content--front">
              <img src={julia} alt="OFFbeat Julia Francese" />
              <h3>Julia Francese</h3>
              <p>Project Manager</p>
              <button type="button" onClick={() => handleFlip(2)}><img src={plus} alt="OFFbeat Plus" /></button>
            </div>

            <div className="third__content third__content--back" style={overlay2}>
              <p>UX/UI Designer with a background in public relations. As a project manager, I will be responsible for keeping the team on track.</p>
              <ul>
                <li><a href="https://www.linkedin.com/in/julia-francese/" target="blank"><FaLinkedin /></a></li>
                <li><a href="https://www.behance.net/juliafrancese" target="blank"><FaBehance /></a></li>
              </ul>
              <button type="button" onClick={() => handleFlipBack(2)}><img src={minus} alt="OFFbeat Minus" /></button>
            </div>
          </div>

          <div className="third__box">
            <div className="third__content third__content--front">
              <img src={leonartGutz} alt="OFFbeat Leonart Gutz" />
              <h3>Leonart Gutz</h3>
              <p>Lead Full Stack Developer</p>
              <button type="button" onClick={() => handleFlip(3)}><img src={plus} alt="OFFbeat Plus" /></button>
            </div>

            <div className="third__content third__content--back" style={overlay3}>
              <p>Lead Full Stack Developer with 10 years of experience. Skills in PHP, JavaScript, SQL, MySQL, PostgreSQL, HTML, CSS, Node.js, React and React Native. </p>
              <ul>
                <li><a href="https://www.linkedin.com/in/leonartgutz/" target="blank"><FaLinkedin /></a></li>
                <li><a href="https://github.com/leonartgutz" target="blank"><FaGithub /></a></li>
              </ul>
              <button type="button" onClick={() => handleFlipBack(3)}><img src={minus} alt="OFFbeat Minus" /></button>
            </div>
          </div>

          <div className="third__box">
            <div className="third__content third__content--front">
              <img src={marina} alt="OFFbeat Marina Lemos" />
              <h3>Marina Lemos</h3>
              <p>Lead UI/UX Designer</p>
              <button type="button" onClick={() => handleFlip(4)}><img src={plus} alt="OFFbeat Plus" /></button>
            </div>

            <div className="third__content third__content--back" style={overlay4}>
              <p>UX/UI designer with years of experience designing interfaces that address business needs, having always in mind user-centric design best practices.</p>
              <ul>
                <li><a href="https://www.linkedin.com/in/marinalemos/" target="blank"><FaLinkedin /></a></li>
                <li><a href="https://www.behance.net/lemos_marina" target="blank"><FaBehance /></a></li>
              </ul>
              <button type="button" onClick={() => handleFlipBack(4)}><img src={minus} alt="OFFbeat Minus" /></button>
            </div>
          </div>

          <div className="third__box">
            <div className="third__content third__content--front">
              <img src={liz} alt="OFFbeat Liz Brito" />
              <h3>Liz Brito</h3>
              <p>Front-end Developer</p>
              <button type="button" onClick={() => handleFlip(5)}><img src={plus} alt="OFFbeat Plus" /></button>
            </div>

            <div className="third__content third__content--back" style={overlay5}>
              <p>Front-End Developer with a background in Architecture and Planning. Currently working with React native, android, and IOS native</p>
              <ul>
                <li><a href="https://www.linkedin.com/in/lizcostafernandes" target="blank"><FaLinkedin /></a></li>
              </ul>
              <button type="button" onClick={() => handleFlipBack(5)}><img src={minus} alt="OFFbeat Minus" /></button>
            </div>
          </div>

          <div className="third__box">
            <div className="third__content third__content--front">
              <img src={rakesh} alt="OFFbeat Rakesh" />
              <h3>Rakesh</h3>
              <p>Back-end Developer</p>
              <button type="button" onClick={() => handleFlip(6)}><img src={plus} alt="OFFbeat Plus" /></button>
            </div>

            <div className="third__content third__content--back" style={overlay6}>
              <p>Backend developer with the ability to handle front end as well. I have experience in native android application development.</p>
              <ul>
                <li><a href="https://www.linkedin.com/in/rakesh07/" target="blank"><FaLinkedin /></a></li>
                <li><a href="https://www.rakesh-portfolio.com/" target="blank"><FaGlobe /></a></li>
              </ul>
              <button type="button" onClick={() => handleFlipBack(6)}><img src={minus} alt="OFFbeat Minus" /></button>
            </div>
          </div>

          <div className="third__box">
            <div className="third__content third__content--front">
              <img src={jaspreet} alt="OFFbeat Jaspreet Kaur" />
              <h3>Jaspreet Kaur</h3>
              <p>Content Designer</p>
              <button type="button" onClick={() => handleFlip(7)}><img src={plus} alt="OFFbeat Plus" /></button>
            </div>

            <div className="third__content third__content--back" style={overlay7}>
              <p>I am a UX/UI designer with a background in Computer Application. In this project, I will work on user research and design the assets.</p>
              <ul>
                <li><a href="https://www.linkedin.com/in/jaspreet-kaur-4692611a3/" target="blank"><FaLinkedin /></a></li>
              </ul>
              <button type="button" onClick={() => handleFlipBack(7)}><img src={minus} alt="OFFbeat Minus" /></button>
            </div>
          </div>

          <div className="third__box">
            <div className="third__content third__content--front">
              <img src={lalit} alt="OFFbeat Lalit Kumar" />
              <h3>Lalit Kumar</h3>
              <p>UI/UX Designer</p>
              <button type="button" onClick={() => handleFlip(8)}><img src={plus} alt="OFFbeat Plus" /></button>
            </div>

            <div className="third__content third__content--back" style={overlay8}>
              <p>UX/UI Designer with a background in electronics engineering. As a designer, my work is to produce excellent visual work based on requirements.</p>
              <ul>
                <li><a href="https://www.linkedin.com/in/lalit-kumar-manan/" target="blank"><FaLinkedin /></a></li>
              </ul>
              <button type="button" onClick={() => handleFlipBack(8)}><img src={minus} alt="OFFbeat Minus" /></button>
            </div>
          </div>

          <div className="third__box">
            <div className="third__content third__content--front">
              <img src={mandeep} alt="OFFbeat Mandeep Kaur" />
              <h3>Mandeep Kaur</h3>
              <p>Content Designer</p>
              <button type="button" onClick={() => handleFlip(9)}><img src={plus} alt="OFFbeat Plus" /></button>
            </div>

            <div className="third__content third__content--back" style={overlay9}>
              <p>UX/UI Designer with a background in Engineering Computer Science. 2 years of experience in the field and constantly improving my design skills.</p>
              <ul>
                <li><a href="https://www.linkedin.com/in/mandeep-kaur09/" target="blank"><FaLinkedin /></a></li>
                <li><a href="https://www.behance.net/mandeepkaur01" target="blank"><FaBehance /></a></li>
              </ul>
              <button type="button" onClick={() => handleFlipBack(9)}><img src={minus} alt="OFFbeat Minus" /></button>
            </div>
          </div>

          <div className="third__box">
            <div className="third__content third__content--front">
              <img src={yuvraj} alt="OFFbeat Yuvraj Singh" />
              <h3>Yuvraj Singh</h3>
              <p>Content Designer</p>
              <button type="button" onClick={() => handleFlip(10)}><img src={plus} alt="OFFbeat Plus" /></button>
            </div>

            <div className="third__content third__content--back" style={overlay10}>
              <p>UX/UI designer with background in Engineering Computer Science. I am learning the  different aspects of design like space, perspective, balance.</p>
              <ul>
                <li><a href="https://www.linkedin.com/in/yuvraj-tonk" target="blank"><FaLinkedin /></a></li>
                <li><a href="https://www.behance.net/yuvrajsingh31" target="blank"><FaBehance /></a></li>
              </ul>
              <button type="button" onClick={() => handleFlipBack(10)}><img src={minus} alt="OFFbeat Minus" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
