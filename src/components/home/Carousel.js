import React from "react";
import Slider from "react-slick";
import HeroOne from '../../images/hero.jpg'

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <div style={{backgroundImage: `url(${HeroOne})`, height: '400px'}}>
            <h1 style={{color: 'white', margin: '0'}}>Hero One</h1>
          </div>
        </div>
        <div>
          <div style={{backgroundImage: `url(${HeroOne})`, height: '400px'}}>
            <h1 style={{color: 'white', margin: '0'}}>Hero Two</h1>
          </div>
        </div>
        <div>
          <div style={{backgroundImage: `url(${HeroOne})`, height: '400px'}}>
            <h1 style={{color: 'white', margin: '0'}}>Hero Three</h1>
          </div>
        </div>
        <div>
          <div style={{backgroundImage: `url(${HeroOne})`, height: '400px'}}>
            <h1 style={{color: 'white', margin: '0'}}>Hero Four</h1>
          </div>
        </div>
        <div>
          <div style={{backgroundImage: `url(${HeroOne})`, height: '400px'}}>
            <h1 style={{color: 'white', margin: '0'}}>Hero Five</h1>
          </div>
        </div>
        <div>
          <div style={{backgroundImage: `url(${HeroOne})`, height: '400px'}}>
            <h1 style={{color: 'white', margin: '0'}}>Hero Six</h1>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Carousel;