import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { PetProvider } from './context/PetContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PetProvider>
        <App />
      </PetProvider>
    </BrowserRouter>
  </StrictMode>
)
