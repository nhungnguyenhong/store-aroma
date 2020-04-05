import React, {Component} from 'react';
import  './Home.css';
import suicase1 from './../../assets/img/luggage/suicase1.jpeg';
import suicase2 from './../../assets/img/luggage/suicase2.jpg';
import suicase3 from './../../assets/img/luggage/suicase3.jpeg';
import suicase4 from './../../assets/img/luggage/suicase4.jpeg';
import suicase5 from './../../assets/img/luggage/suicase5.jpg';
import {NavLink} from 'react-router-dom';
import {Slide} from 'react-slideshow-image';

const slideImages = [suicase1, suicase2, suicase3, suicase4, suicase5];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log (`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

export default class Home extends Component {
  render () {
    return (
      <div>
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[0]})`}}>
              <div className="Overlay" />
              <div className="Headding">
                <h1 className="title-home ">
                  Thoughtful standards for modern travel
                </h1>
                <NavLink to="/shop">
                  <button className="btn-home">shop now</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[1]})`}}>
              <div className="Overlay" />
              <div className="Headding">
                <h1 className="title-home ">
                  Thoughtful standards for modern travel
                </h1>
                <NavLink to="/shop">
                  <button className="btn-home">shop now</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[2]})`}}>
              <div className="Overlay" />
              <div className="Headding">
                <h1 className="title-home ">
                  Thoughtful standards for modern travel
                </h1>
                <NavLink to="/shop">
                  <button className="btn-home">shop now</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[3]})`}}>
              <div className="Overlay" />
              <div className="Headding">
                <h1 className="title-home ">
                  Thoughtful standards for modern travel
                </h1>
                <NavLink to="/shop">
                  <button className="btn-home">shop now</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[4]})`}}>
              <div className="Overlay" />
              <div className="Headding">
                <h1 className="title-home ">
                  Thoughtful standards for modern travel
                </h1>
                <NavLink to="/shop">
                  <button className="btn-home">shop now</button>
                </NavLink>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}
