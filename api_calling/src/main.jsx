import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navebar from './Navbar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navebar/>
    
  </StrictMode>
)
