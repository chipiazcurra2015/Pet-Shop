import React from 'react'
import './card.css'

const Card = ({nombre,kg,marca,precio,imagen}) => {
  return (
    <div className='card-conteiner'>
        <div>
          <h1>{nombre}</h1>
        
          <h1>{imagen}</h1>
      
          <h3>Kg: {kg}</h3>
        
          <h3>Marca: {marca}</h3>
      
          <h3>Precio: {precio}</h3>
          <h1> Se Actulizo todo</h1>
        </div>
        
    </div>
  )
}

export default Card