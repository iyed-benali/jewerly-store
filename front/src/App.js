import React, { useState } from 'react'
import BuyerLogin from './buyerAuthentication/buyerLogin.jsx'
import BuyerSignUp from './buyerAuthentication/buyerSignUp.jsx'
import Welcome from './welcome/Welcome.jsx';
import { Routes, Route } from 'react-router-dom';
import ProductsList from './products/ProductsList.jsx';
import Contact from './contact/Contact.jsx'

const App = () => {

    
  return( 
    
    <Routes>
          <Route path="/" element={<Welcome />}  />
          <Route path='/products' element = {<ProductsList />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path="/buyerSign" element={<BuyerSignUp />} />
          <Route path="/buyerLogin" element={<BuyerLogin />} />
       </Routes>
  )
}

export default App
