import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './ProductList.css';
import ProductService from '../services/ProductService';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/products/");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = (id) => {

    ProductService.deleteProductById(id).then((response) => {
      alert("Deleted successfully")
      
      fetchProducts();

    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">List Products</h2>

      <div className='row mb-3'>
        <div className='col'>
          <Link className='btn btn-primary me-1' to='/productlist/create' role='button'>Create Product</Link>
          <button type='button' className='btn btn-outline-primary' onClick={fetchProducts}>Refresh</button>
        </div>
        <div className='col'>
        </div>
      </div>
      
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ProductID</th>
            <th>ProductCode</th>
            <th>ProductName</th>
            <th>CreatedDate</th>
            <th>UpdatedDate</th>
            <th>CreatedUser</th>
            <th>IsFavourite</th>
            <th>HSNCode</th>
            <th>TotalStock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(product => (
            <tr key={product.id}>
              <td>{product.ProductID}</td>
              <td>{product.ProductCode}</td>
              <td>{product.ProductName}</td>
              <td>{product.CreatedDate}</td>
              <td>{product.UpdatedDate}</td>
              <td>{product.CreatedUser}</td>
              <td>{product.IsFavourite ? "Yes" : "No"}</td>
              <td>{product.HSNCode}</td>
              <td>{product.TotalStock}</td>
              <td>
                <Link to={`/productlist/edit/${product.id}`} className='btn btn-primary me-2'>Edit</Link>
                <button 
                  className='btn btn-danger' 
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
