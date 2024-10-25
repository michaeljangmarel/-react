import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Data from '../components/Data'

const RouteConfig = () => {
  return (
     <> 
     <Routes>
     <Route path='/' element={<Layout/>}/>
     <Route path='home' element={<Home/>}/>
     <Route path='data' element={<Data/>}/>
     </Routes>
      </>
   )
}

export default RouteConfig