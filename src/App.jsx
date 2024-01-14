import React from 'react'
import LoginPage from './pages/LoginPage'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Categories from './pages/Categories'
import { UserContextProvider } from './context/userContextProvider'

export default function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
    </UserContextProvider>
  )
}
