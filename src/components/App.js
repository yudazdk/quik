import React from 'react'
import ProductsSection from '../containers/ProductsSection'
import CartSection from '../containers/CartSection'
import SaleSection from '../containers/SaleSection'
import Header from '../components/Header'

const App = () => (
  <div>
    <Header />
    <ProductsSection />
    <CartSection />
    <SaleSection />
  </div>
)

export default App
