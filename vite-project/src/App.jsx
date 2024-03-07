import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div class="contenedor">
                <div class="barra">
                    <a class="logo" href="index.html">
                        <h1 class="logo__nombre no-margin centrar-texto">Pet-<span class="logo__bold">Shop</span></h1>
                    </a>

                    <nav class="navegacion">
                        <a href="nosotros.html" class="navegacion__enlace">Nosotros</a> 
                        <a href="cursos.html" class="navegacion__enlace">Alimento</a>
                        <a href="contacto.html" class="navegacion__enlace">Contacto</a>
                    </nav>
            </div>
        
        </div>
            
              )
}

export default App
