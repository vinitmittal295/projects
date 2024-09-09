import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const rootvar=document.getElementById('root')
createRoot(rootvar).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
