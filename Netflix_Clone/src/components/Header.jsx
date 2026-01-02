import logo from '../assets/images/logo.png'
import 'header.css'

function Header() {
  return (
    <>
    <div className="header">
      <img src={logo} alt="Netflix Logo" />

      <button>Login</button>
    </div>
    </>
  )
}

export default Header