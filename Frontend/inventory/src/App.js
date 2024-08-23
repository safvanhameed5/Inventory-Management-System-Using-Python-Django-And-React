import React from 'react'
import ProductList from './components/ProductList'
import ProductHome from './components/ProductHome'
import FooterComponent from './components/FooterComponent'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateProduct from './components/CreateProduct'
import About from './components/About'
import UpdateProduct from './components/UpdateProduct'

const App = () => {
  return (
    <BrowserRouter>
      <ProductHome />
      <Routes>
        <Route path='/contact' element={ <Contact />} />
        <Route path='/productlist' element={ <ProductList />} />
        <Route path='/productlist/create' element={ <CreateProduct />} />
        <Route path='/productlist/edit/:id' element={ <UpdateProduct />} />
        <Route path='/about' element={ <About />} />
        <Route path='/' element={ <ProductList />} />
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  )
}

export default App
