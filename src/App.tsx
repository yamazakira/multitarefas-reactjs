import { useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { Menu } from './components/menu';
import './App.css'

function App() {

  return (
    <div className='App'>
      <Menu />
      <Outlet />
    </div>
  )
}

export default App
