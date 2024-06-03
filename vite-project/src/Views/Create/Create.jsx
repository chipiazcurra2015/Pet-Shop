import React, { useState } from 'react'
import './create.css'

const Create = () => {
  const [state, setState] = useState({
      brand:"",
      kilogram:0,
      stock:0,
      price:0,
      image:"",
      description:"",
  })
  
  const handleChange = (event) => {
  setState({
    ...state,
    [event.target.name]: event.target.value
  })
}
const handleSubmit = (event) => {
  event.preventDefault();
}
  return (
    <div className='create-conteiner'>
        <form onSubmit={handleSubmit}>
          <input  onChange={handleChange} type="text" name ='brand' placeholder='Brand'/>
          <input  onChange={handleChange} type="text" name ='description' placeholder='Description'/>
          <input  onChange={handleChange} type="number" name ='kilogram' placeholder='kilogram'/>
          <input  onChange={handleChange} type="number" name ='stock' placeholder='Stock'/>
          <input  onChange={handleChange} type="number" name ='price' placeholder='Price'/>
          <input  onChange={handleChange} type="text" name ='image' placeholder='Image'/>
          <input  type="submit" />
        </form>
    </div>
  )
}

export default Create