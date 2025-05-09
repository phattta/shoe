import React from 'react'
import Navbar from './components/Navber'
import Home from './components/Home'
import ProductCard from './components/ProductCard'
import Step from './components/Step'
import Collection from './components/Collection'
import Footer from './components/Footer'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <ProductCard/>
      <Step/>
      <Collection/>
      <Footer/>
    </div>
  )
}
