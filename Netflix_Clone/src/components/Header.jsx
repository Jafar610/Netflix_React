import logo from '../assets/images/logo.png'

function Header() {
  return (
    <>
      <img src={logo} alt="Netflix Logo" />

      <button>Login</button>
    </>
  )
}

export default Header