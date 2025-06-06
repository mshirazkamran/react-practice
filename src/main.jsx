import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import './css/index.css'
import App from './App.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar /> */}
    <App />
    <Footer />
  </StrictMode>,
)
