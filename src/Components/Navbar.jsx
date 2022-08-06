import React from 'react'
import Button from './Button'
const Navbar = (prop) => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <button type="button" className="btn btn-sm"><a href="http://metaladmin.herokuapp.com/newProduct"><span>+</span>Add a New Product</a></button>
          </li>
        </ul>
        <form className="d-flex navend ">
        <Button type="button" className="btn btn-sm" text="View Website" />
        </form>
        <i className="bi bi-search fs-4 p-4"></i>
        <i className="bi bi-bell fs-4 p-4"></i>
        <i className="bi bi-envelope fs-4 p-4"></i>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;