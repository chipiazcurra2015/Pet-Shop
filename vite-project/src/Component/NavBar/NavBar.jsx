import React from 'react'
import logo_perritos from '../../assets/logo_perrito.png'
import "./navBar.css"

const NavBar = () => {
  return (
<div className='nav-conteiner'>
    <div className='nav-img'>
        <img src={logo_perritos} alt="logo_perritos" />
    </div>
    <div className='nav-cont-link'>
        <a href="/home">Home</a>
        <a href="/create">Formulario</a>
    </div>
    <div className='nav-cont-search'>
        <input type="text" name='' />
        <input type="submin" />
    </div>
</div>
  )
}

export default NavBar