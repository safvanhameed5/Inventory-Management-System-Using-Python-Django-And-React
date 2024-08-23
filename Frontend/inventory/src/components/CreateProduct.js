import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './CreateProduct.css'

const CreateProduct = () => {
  const [product, setProduct] = useState({
    ProductID: "",
    ProductCode: "",
    ProductName: "",
    CreatedDate: "",
    UpdatedDate: "",
    CreatedUser: "",
    IsFavourite: false,
    HSNCode: "",
    TotalStock: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/products/",
        product
      );
      console.log(response.status);  
      if (response.status === 200) {
        // After successful product creation, navigate to the product list
        navigate("/productlist");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert("There was an error creating the product.");
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="ProductID" className="form-label">
            Product ID
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductID"
            name="ProductID"
            value={product.ProductID}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductCode" className="form-label">
            Product Code
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductCode"
            name="ProductCode"
            value={product.ProductCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductName"
            name="ProductName"
            value={product.ProductName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="CreatedDate" className="form-label">
            Created Date
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="CreatedDate"
            name="CreatedDate"
            value={product.CreatedDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="UpdatedDate" className="form-label">
            Updated Date
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="UpdatedDate"
            name="UpdatedDate"
            value={product.UpdatedDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="CreatedUser" className="form-label">
            Created User
          </label>
          <input
            type="text"
            className="form-control"
            id="CreatedUser"
            name="CreatedUser"
            value={product.CreatedUser}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="IsFavourite" className="form-label">
            Is Favourite
          </label>
          <select
            className="form-select"
            id="IsFavourite"
            name="IsFavourite"
            value={product.IsFavourite}
            onChange={handleChange}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="HSNCode" className="form-label">
            HSN Code
          </label>
          <input
            type="text"
            className="form-control"
            id="HSNCode"
            name="HSNCode"
            value={product.HSNCode}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="TotalStock" className="form-label">
            Total Stock
          </label>
          <input
            type="number"
            className="form-control"
            id="TotalStock"
            name="TotalStock"
            value={product.TotalStock}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
