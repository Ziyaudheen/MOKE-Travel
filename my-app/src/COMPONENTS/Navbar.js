import React from 'react'
import logo from '../COMPONENTS/images/logo.svg'
import "../App.css";
export default function Navbar() {
  return (
    <div className='nav'>
       
        <h1><img src={logo} alt="not found" /></h1>
        <ul>
            <li>
                <button className='logo'>LOGIN</button>
            </li>
        </ul>

      
    </div>
  )
}
