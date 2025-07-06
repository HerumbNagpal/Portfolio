import React from 'react'
import { Link } from 'react-router-dom'
import './Styles.css'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='name'>
            <span className='firstName'>HERUMB NAGPAL</span>
        </div>
        <div className='menu'>
            <span className='menuItem'><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/home" > HOME</Link></span>
            <span className='menuItem'><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/resume"> RESUME </Link> </span>
            <span className='menuItem'><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/projects" >PROJECTS</Link></span>
        </div>
    </div>
  )
}
