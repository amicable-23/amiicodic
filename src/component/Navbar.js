import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
 <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#"><img style={{height: "70px"}} src="icon.png" alt="logo" /> <p>AmiIgbo hub</p></a>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
       
        <Link className="nav-item nav-link">
          <Link className='nav-link' to="/login">login</Link>
        </Link>
        <Link className="nav-item nav-link">
          <Link className="nav-link" to="/signup">Sign-up</Link>
        </Link>

        <Link className="nav-item dropdown nav-link">
          <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu" aria-labelledby="dropdownId">
            <Link className="dropdown-item" to="/activities">Activities</Link>
            <Link className="dropdown-item" to="/courses">Courses</Link>
          </div>
        </Link>
      </ul>
      <form className="d-flex my-2 my-lg-0">
        <input className="form-control me-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

   
  )
}

export default Navbar