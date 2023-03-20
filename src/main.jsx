import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Show from './pages/Show'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/:id' element={< Show />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
