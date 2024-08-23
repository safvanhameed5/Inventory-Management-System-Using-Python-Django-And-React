import React from 'react'
import { Link } from 'react-router-dom'
import './ProductHome.css'

const ProductHome = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Inventory Management</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/productlist">List<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default ProductHome
