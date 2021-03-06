import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../images/andrewLogo.png';

// The Header creates links that can be used to navigate
// between routes.
class Header extends Component {
    render(){
        return (
            <div>
                <div className="top-bar-wrapper">
                    <header className="container" >
                        <nav className="row">
                            <div className="col-md-5">
                                <a href="/"><img src={logo} alt="logo"/></a>
                            </div>
                            <div className="col-md-7">
                            <ul className="nav-right">
                                <li id='nav-work' className="nav-right-links"><Link to='/work'>Work</Link>
                                <div className="work-dropdown">
                                    <h4>hi!</h4>
                                </div>
                                </li>
                                <li className="nav-right-links"><Link to='/capabilites'>Capabilites</Link></li>
                                <li className="nav-right-links"><Link to='/services'>Services</Link></li>
                                <li className="nav-right-links"><Link to='/about'>About Us</Link></li>
                                <li className="nav-right-links"><Link to='/get'>Get in Touch</Link></li>
                                <li className="nav-right-links"><Link to='/notes'>Key Notes</Link></li>
                            </ul>
                            </div>
                        </nav>
                    </header>
                </div>
                <div style={{height: '100px'}}></div>
            </div>  
        )
    }
}

export default Header
