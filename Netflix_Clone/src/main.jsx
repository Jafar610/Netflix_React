import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header.jsx'
// import App from './App.jsx'
// import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
