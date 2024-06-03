import React from 'react'
import './card.css'

const Card = ({id,brand,description,kilogram,stock,price,image}) => {
  return (
    <div className='card-conteiner'>
        <div>
          <h1>{image}</h1>
          <h3>Marca: {brand}</h3>
          <h3>Precio: {price}</h3>
          <h3>Kg: {kilogram}</h3>
          <h3>Descripción: {description}</h3>
          <h3>Stock: {stock}</h3>
        </div>
        
    </div>
  )
}

export default Card