import React from 'react'
import Card from '../Card/Card'
import './cards.css'

const Cards = ({productos}) => {
  return (
    <div className='cards-conteiner'>
       {productos.map(p => <Card nombre={p.nombre} kg={p.kg} marca={p.marca} imagen={p.imagen}/> )}
    </div>
  )
}

export default Cards