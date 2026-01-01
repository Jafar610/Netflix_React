import '../assets/images/logo.png'
function Header() {
  return (
    <>
    <div className='logo'>
        <img src={logo} />
        <h1>Netflix</h1>
    </div>
    </>
  )
}

export default Header
