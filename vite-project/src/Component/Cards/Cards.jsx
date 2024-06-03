import React from 'react'
import Card from '../Card/Card'
import './cards.css'

const Cards = ({productos}) => {
  return (
    <div className='cards-conteiner'>
       {productos.map(p => <Card key={p.id} id={p.id} brand={p.brand} price={p.price} kilogram={p.kilogram} description={p.description} image={p.image} stock={p.stock}/> )}
    </div>
  )
}

export default Cards