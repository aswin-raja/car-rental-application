import React, { useState } from 'react';

const AddCarForm = ({ onAddCar }) => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    price: '',
    automatic: '',
  });

  const [imgFile, setImgFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = new FormData();
      postData.append('name', formData.name);
      postData.append('model', formData.model);
      postData.append('price', formData.price);
      postData.append('automatic', formData.automatic);
      if (imgFile) {
        postData.append('image', imgFile);
      }

      await onAddCar(postData); // Call the onAddCar function passed from AdminPanel
    } catch (error) {
      alert('Error adding car');
      console.error('Add car error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <select name="automatic" value={formData.automatic} onChange={handleChange} required>
        <option value="">Select Transmission</option>
        <option value="Manual">Manual</option>
        <option value="Automatic">Automatic</option>
      </select>
      <input type="file" name="image" onChange={handleFileChange} />
      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCarForm;
