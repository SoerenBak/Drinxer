import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="">
      <div className="text-center">
        <Link to="/">
            <span className="main-logo">Drinxer</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
