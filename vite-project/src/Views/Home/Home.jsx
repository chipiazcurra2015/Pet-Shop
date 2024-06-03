import React from 'react'
import Cards from '../../Component/Cards/Cards'
import Slider from '../../Component/Slider/Slider'
 
const Home = () => {
  const productos= [{price:50,stock:"hay",id:1, brand:"Sabrosito",kilogram:50,description:["premium"," grasas"],image:'imagen'},
              {price:50,stock:"hay", id:2,brand:"Quality",kilogram:70,description:["perro"," grasas"],image:"imagen"},
              {price:50,stock:"hay",id:3,brand:"Mishi",kilogram:100,description:["gato","cero grasas"],image:"imagen"},
              {price:50,stock:"hay",id:4,brand:"Perritos",kilogram:85,description:["premium"," grasas"],image:"imagen"}]
  return (
    <div>
      <Slider/>
      <Cards productos={productos}/>
    </div>
  )
}

export default Home