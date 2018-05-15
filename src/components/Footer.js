import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './footer.css';

class Footer extends Component {
  render(){
    return (
      <div style={{backgroundColor: '#31393f'}}>
      <div style={{paddingTop: '50px'}}></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
                <a href="/"><img src="" alt="logo"/></a>
            </div>
            <div className="col-sm-3">
                <p style={{color: 'white'}}>40 E Cross Street</p>
                <p style={{color: 'white'}}>Oakland, CA 90000</p>
                <p><a href="mailto:and.c.wil@gmail.com" style={{color: 'white'}}>and.c.will@gmail.com</a></p>
                <p style={{color: 'white'}}>408.966.2725</p>
                <div className="social">
                  <a href=""><i className="fa fa-facebook" style={fontStyles}></i></a>
                  <a href=""><i className="fa fa-twitter" style={fontStyles}></i></a>
                  <a href=""><i className="fa fa-google-plus" style={fontStyles}></i></a>
                  <a href=""><i className="fa fa-linkedin" style={fontStyles}></i></a>
                </div>
            </div>
            <div className="col-sm-3">
                <ul className="footer-links">
                    <li className="footer-link"><Link to='/'>Work</Link></li>
                    <li className="footer-link"><Link to='/capabilites'>Capabilites</Link></li>
                    <li className="footer-link"><Link to='/get'>Get in Touch</Link></li>
                    <li className="footer-link"><Link to='/about'>About Us</Link></li>
                    <li className="footer-link"><Link to='/notes'>Key Notes</Link></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <h4 style={{color: 'white'}}>NEWSLETTER</h4>
                <form action="">
                  <input type="text" name="email" placeholder="Your email address"/>
                  <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
          </div>
        </div>
        <div style={{paddingBottom: '50px'}}></div>
      </div>
    )
  }
}

const fontStyles = {
  color: 'white',
  fontSize: '25px',
  paddingRight: '10px'
}

export default Footer;