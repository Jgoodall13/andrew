import React from 'react'

const GetInTouch = () => (
  <div style={touchStyle}>
    <h3>Every challenge is different - Tell us about yours</h3>
    <a href="" style={contactStyle}>GET IN TOUCH</a>
  </div>
)

const touchStyle = {
  height: '90px',
  backgroundColor: '#aadc15',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const contactStyle = {
  backgroundColor: '#31393f',
  padding: '10px 20px',
  color: '#aadc15'
}

export default GetInTouch;