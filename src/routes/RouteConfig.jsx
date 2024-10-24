import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'

const RouteConfig = () => {
  return (
     <> 
     <Routes>
     <Route path='/' element={<Layout/>}/>
     <Route path='home' element={<Home/>}/>
     </Routes>
      </>
   )
}

export default RouteConfig