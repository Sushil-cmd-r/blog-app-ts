import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'
import ModalProvider from './context/ModalContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </ModalProvider>
  </React.StrictMode>,
)
