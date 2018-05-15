import React, { Component } from 'react';
import { render } from 'react-dom';
import CountUp from 'react-countup';


class Count extends Component {
  render(){
    return (
      <div>
        <div className="container-fluid" style={{backgroundColor: '#2e9dba', textAlign: 'center'}}>
        <h4>EXPERINCED PRODUCT DEVELOPMENT TEAMS ON DEAMND.</h4>
          <div className="row">
            <div className="col-md-3">
              <CountUp>start={0} end={160526}</CountUp>
              <h4>Years</h4>
            </div>
            <div className="col-md-3">
              <CountUp>start={0} end={160526}</CountUp>
              <h4>Clients</h4>          
            </div>
            <div className="col-md-3">
              <CountUp>start={0} end={160526}</CountUp>
              <h4>Projects</h4>          
            </div>
            <div className="col-md-3">
              <CountUp>start={0} end={160526}</CountUp>
              <h4>Pattens</h4>          
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Count;
