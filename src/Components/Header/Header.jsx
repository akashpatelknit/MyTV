import React from 'react'
import logo from "../../logo.png"
// import { Link } from "react-router-dom"
// import { ImSearch } from "react-icons/im"

const Header = () => {
    return (
        <nav className="header">

            <img src={logo} alt="logo" />

            <div className='about'>
                
                <a href="https://akash-chi.vercel.app/">About Me</a>
             
            </div>

            

        </nav>
    )
}

export default Header
