import React, { Component } from 'react'
import '../components/header.css'

class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <h1>Unlimited movies, TV shows, and more</h1>
        <h2>Starts at USD 2.99. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div>
            <input type="text" placeholder='Email address' />
            <button>Get Started</button>
        </div>
      </div>
    )
  }
}
export default Hero