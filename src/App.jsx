import React from 'react'
import LoginPage from './pages/LoginPage'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Categories from './pages/Categories'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
  )
}
