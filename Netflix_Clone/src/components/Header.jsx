import logo from '../assets/images/logo.png'
import '../components/Header.css'
import React, {Component} from 'react'


class Header extends Component {
  render() {
  return (
    <>
    <div className="header">
      <img src={logo} alt="Netflix Logo" />
      <button>Login</button>
    </div>
    <br />
    <br />
    
    </>
  )
  }
}

export default Header