import React, { Component } from 'react';
import { render } from 'react-dom';
import CountUp, { startAnimation } from 'react-countup';


class Count extends Component {

  onStarting = () => {
    startAnimation(this.myCountUp);
    startAnimation(this.myCountUpTwo);
    startAnimation(this.myCountUpThree);
    startAnimation(this.myCountUpFour);
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <div className="container-fluid" style={{backgroundColor: '#2e9bda', textAlign: 'center'}} onMouseEnter={this.onStarting}>
        <h4 style={headerStyle}>EXPERINCED PRODUCT DEVELOPMENT TEAMS ON DEAMND.</h4>
          <div className="row">
            <div className="col-md-3">
            <CountUp className="CountUp" style={numbersStyle} start={0} end={100} duration={3} ref={(countUp) => {
              this.myCountUp = countUp;
              }} />
              <h4 style={titleStyle}>Years</h4>
            </div>
            <div className="col-md-3">
            <CountUp className="CountUp" style={numbersStyle} start={0} end={200} duration={3} ref={(countUp) => {
              this.myCountUpTwo = countUp;
              }} />
              <h4 style={titleStyle}>Projects</h4>
            </div>
            <div className="col-md-3">
            <CountUp className="CountUp" style={numbersStyle} start={0} end={200} duration={3} ref={(countUp) => {
              this.myCountUpThree = countUp;
              }} />
              <h4 style={titleStyle}>Clients</h4>
            </div>
            <div className="col-md-3">
            <CountUp className="CountUp" style={numbersStyle} start={0} end={200} duration={3} ref={(countUp) => {
              this.myCountUpFour = countUp;
              }} />
              <h4 style={titleStyle}>Patents</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const headerStyle = {
  fontSize: '22px',
  color: 'white',
  padding: '50px',
  fontWeight: 'bold'
}

const numbersStyle = {
  color: 'white',
  fontSize: '80px',
  fontWeight: 'bold'
}

const titleStyle = {
  fontSize: '22px',
  color: 'white',
  fontWeight: 'bold',
  paddingBottom: '50px'
}

export default Count;
