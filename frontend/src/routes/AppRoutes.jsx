import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserRegister from '../components/UserRegister'
import UserLogin from '../components/UserLogin'
import FoodPartnerRegister from '../components/FoodPartnerRegister'
import FoodPartnerLogin from '../components/FoodPartnerLogin'
import CreateFood from '../pages/CreateFood'
import RegisterChoice from '../components/RegisterChoice'
import Home from '../pages/Home'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path="/register" element={<RegisterChoice />} />
            <Route path="/user/register" element={<UserRegister />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/foodpartner/register" element={<FoodPartnerRegister />} />
          <Route path="/foodpartner/login" element={<FoodPartnerLogin />} />
          <Route path="/create-food" element={<CreateFood />} />

        </Routes>
    </Router>
  )
}

export default AppRoutes