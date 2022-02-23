import React from 'react'

import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src="/img/logo.jpg" alt="" width="100" height="100" class="d-inline-block align-text-center"/>
            Personal Budget App 
            </a>
        </div>
    </nav>
  )
}

export default Navbar