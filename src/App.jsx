import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './main.css';
import Home from "./pages/Home";

function App() {

  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <Home />
    </div>
  )
}

export default App
