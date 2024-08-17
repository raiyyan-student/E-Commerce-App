import React from 'react'
import './App.css'
import HomePage from './Components/HomePage'
import ProductListingPage from './Components/ProductListingPage'
import ProductDetailsPage from './Components/ProductDetailsPage'
import ShoppingCart from './Components/ShoppingCart'
import Checkout from './Components/Checkout'

const App = () => {
  return (
    <div>
      <HomePage/>
      <ProductListingPage/>
      <ProductDetailsPage/>
      <ShoppingCart/>
      <Checkout/>
    </div>
  )
}

export default App