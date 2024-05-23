import { useState } from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css'
import Landing from './Views/Landing/Landing'
import Home from './Views/Home/Home'
import Create from './Views/Create/Create'
import Detail from './Views/Detail/Detail'
import NavBar from './Component/NavBar/NavBar'

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
  </BrowserRouter>
     )
}

export default App
