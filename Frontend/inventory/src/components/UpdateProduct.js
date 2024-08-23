import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import convertToDatetimeLocalFormat from "../utils/dateConversion";

const UpdateProduct = () => {
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

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/products/`,{id});
        console.log("Fetched product data:", response.data); // Debugging log
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        alert("There was an error fetching the product data.");
      }
    };
    fetchProduct();
  }, [id]);
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/products/`,{product,id});
      console.log(response.status);
      if (response.status === 200) {
        navigate("/productlist");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("There was an error updating the product.");
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Update Product</h2>
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
            disabled
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
            value={convertToDatetimeLocalFormat(product.CreatedDate)}
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
            value={convertToDatetimeLocalFormat(product.UpdatedDate)}
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
            <option value={true}>True</option>
            <option value={false}>False</option>
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
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
