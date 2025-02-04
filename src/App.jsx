import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Blog from './Components/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/Blog" element={<Blog/>}/>
      </Routes>
      <Footer/>
        
    </BrowserRouter>
    
      
    </>
  )
}

export default App
