import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ModalProvider from './context/ModalContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </ModalProvider>
  </React.StrictMode>,
)
