import React, { useState, useEffect } from 'react';

const EditCarForm = ({ car, onUpdateCar }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    model: '',
    price: '',
    automatic: '',
  });

  const [imgFile, setImgFile] = useState(null);

  useEffect(() => {
    if (car) {
      setFormData({
        id: car.id || '',
        name: car.name || '',
        model: car.model || '',
        price: car.price || '',
        automatic: car.automatic || '',
      });
    }
  }, [car]);

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
      const putData = new FormData();
      putData.append('name', formData.name);
      putData.append('model', formData.model);
      putData.append('price', formData.price);
      putData.append('automatic', formData.automatic);
      if (imgFile) {
        putData.append('imgUrl', imgFile);
      }

      await onUpdateCar({ id: formData.id, formData: putData });
      
    } catch (error) {
      console.error('Update car error:', error);
    }
  };

  // Render form only if formData.id exists
  if (!formData.id) {
    return null;
  }

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
      <input type="file" name="imgUrl" onChange={handleFileChange} />
      <button type="submit">Update Car</button>
    </form>
  );
};

export default EditCarForm;
