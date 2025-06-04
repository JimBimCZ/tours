import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TourContextProvider from "./context/AppContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <TourContextProvider >
          <App />
      </TourContextProvider>

  </StrictMode>,
)
