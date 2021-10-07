function NavBar() {
  return (
    <div id="first" className='navbar-container'>
      <h1 className="navbar-first">
        Plantsy
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
      <button className="navbar-third">View Plants</button>
      <button className="navbar-second">Add Plant</button>
      <button className="navbar-fourth">Home</button> 
    </div>
  )
}
export default NavBar;