import React from 'react'
import { Link } from 'react-router-dom'

const GetInTouch = () => (
  <div style={touchStyle}>
    <h3>Every challenge is different - Tell us about yours</h3>
    <Link to="/get" style={contactStyle}>GET IN TOUCH</Link>
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