import React from 'react'
import { Link } from 'react-router-dom'

const Legal = () => (
  <div className="legal-footer" style={footerStyle}>
    <p style={{fontSize: '16px'}}>&copy; 2018 Andrew Willams. All Rights Reserved. <Link to="/policy">Privacy Policy</Link> | <Link to="/terms">Terms of Use</Link> </p>
  </div>
)


const footerStyle = {
    backgroundColor: '#121212',
    height: '130px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default Legal;