import React from "react";
import Slider from "react-slick";
import HeroOne from '../../images/hero.jpg'
import { Link } from 'react-router-dom'
import '../../index.css';

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      className: "slides"
    };
    return (
      <div>
      <Slider {...settings}>
        <div>
          <div style={{backgroundImage: `url(${HeroOne})`, height: '400px'}}>
            <div style={boxStyle}>
              <h1 style={titleStyle}>Work</h1>
              <br />
              <div style={{height: '25px'}}></div>
              <Link to='/work' className="carousel-cta-btn" style={ctaStyle}>LEARN MORE</Link>
            </div>
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
      </div>
    );
  }
}

const titleStyle = {
  backgroundColor: 'rgba(0,0,0,0.6)',
  color: 'white',
  fontSize: '80px',
  fontWeight: '600',
  display: 'inline-block',
  padding: '0px 20px',
}

const boxStyle = {
  textAlign: 'center',
  paddingTop: '150px'
}

const ctaStyle = {
  backgroundColor: '#2e9bda',
  color: 'white',
  padding: '10px 20px',
  marginTop: '10px',
  fontSize: '20px',
  border: '2px solid #2e9bda',
  textDecoration: 'none',
  fontWeight: '300',
}

export default Carousel;