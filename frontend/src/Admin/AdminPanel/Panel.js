import React, { useState } from 'react';
// import axios from 'axios';
import './Panel.css';

function AdminPanel() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
    };

    // try {
    //    const response = await axios.post('http://localhost:5000/api/products', newProduct);
    //   if (response.status === 200) {
    //     setMessage('Product added successfully!');
    //     setProductName('');
    //     setProductPrice('');
    //     setProductDescription('');
    //   }
    // } catch (error) {
    //   setMessage('Error adding product');
    // }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Add Product</h2>

      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default AdminPanel;
