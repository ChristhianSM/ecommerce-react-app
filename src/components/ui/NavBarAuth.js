import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export const NavBarAuth = () => {
    return (
        <nav className = "bg-yellow-200">
      <div className="container mx-auto py-2 flex justify-between items-center">
          <Link to = "/">
            <div className="logo h-20 animate__animated animate__fadeInDown">
                <img src={logo} alt="" className = "h-full"/>
            </div>
          </Link>
      </div>
    </nav>
    )
}
