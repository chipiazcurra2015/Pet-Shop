import React from 'react'
import Cards from '../../Component/Cards/Cards'
import Slider from '../../Component/Slider/Slider'
 
const Home = () => {

  const productos= [{nombre:"Sabrosito",kg:50,marca:["premium"," grasas"],imagen:'imagen'},
              {nombre:"Quality",kg:70,marca:["perro"," grasas"],imagen:"imagen"},
              {nombre:"Mishi",kg:100,marca:["gato","cero grasas"],imagen:"imagen"},
              {nombre:"Perritos",kg:85,marca:["premium"," grasas"],imagen:"imagen"}]
  return (
    <div>
      <Slider/>
      <Cards productos={productos}/>
    </div>
  )
}

export default Home