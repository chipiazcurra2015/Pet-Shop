import React from 'react'
import logo_perritos from '../../assets/logo_perrito.png'
import "./navBar.css"
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
<div className='nav-conteiner'>
    <div className='nav-img'>
      <Link to="/home">
        <img src={logo_perritos} alt="logo_perritos" />
      </Link>
    </div>
    <div className='nav-cont-link'>
      <Link to={"/home"}>Home</Link>
      <Link to={"/create"}>Create</Link>
    </div>
    <div className='nav-cont-search'>
        <input type="text" name='' />
        <input type="submin" />
    </div>
</div>
  )
}

export default NavBar