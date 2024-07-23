import React, { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button,
  CircularProgress,
  Snackbar
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import AddCarForm from './AddForm';
import EditCarForm from './EditForm';

const AdminPanel = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://3.108.61.37:5000/cars', {
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('admin_token')}`
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCars(data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching cars');
      console.error('Fetch cars error:', error);
      setLoading(false);
    }
  };

  const handleAddCar = async (postData) => {
    try {
      const response = await fetch('http://3.108.61.37:5000/cars', {
        method: 'POST',
        body: postData,
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('admin_token')}`
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newCar = await response.json();
      setCars([...cars, newCar]);
      setSnackbarMessage('Car added successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      fetchData(); // Refresh car list
    } catch (error) {
      setSnackbarMessage('Error adding car');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      console.error('Add car error:', error);
    }
  };

  const handleUpdateCar = async ({ id, formData }) => {
    try {
      const response = await fetch(`http://3.108.61.37:5000/cars/${id}`, {
        method: 'PUT',
        body: formData,
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('admin_token')}`
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedCar = await response.json();
      const updatedCars = cars.map(car => (car.id === updatedCar.id ? updatedCar : car));
      setCars(updatedCars);
      setSnackbarMessage('Car updated successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage('Error updating car');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      console.error('Update car error:', error);
    }
  };

  const handleDeleteCar = async (id) => {
    try {
      const response = await fetch(`http://3.108.61.37:5000/cars/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('admin_token')}`
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setCars(cars.filter(car => car.id !== id));
      setSnackbarMessage('Car deleted successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage('Error deleting car');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      console.error('Delete car error:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const renderCars = () => {
    if (loading) return (
      <TableRow>
        <TableCell colSpan={4} align="center">
          <CircularProgress />
        </TableCell>
      </TableRow>
    );
    if (error) return (
      <TableRow>
        <TableCell colSpan={4} align="center">
          {error}
        </TableCell>
      </TableRow>
    );
    return (
      cars.map(car => (
        <TableRow key={car.id}>
          <TableCell>{car.name}</TableCell>
          <TableCell>{car.model}</TableCell>
          <TableCell>{car.price}</TableCell>
          <TableCell>{car.automatic}</TableCell>
          <TableCell>
            <Button variant="contained" color="primary" onClick={() => handleDeleteCar(car.id)}>Delete</Button>
          </TableCell>
          <TableCell>
            <EditCarForm car={car} onUpdateCar={handleUpdateCar} />
          </TableCell>
        </TableRow>
      ))
    );
  };

  return (
    <div>
      <h3>Add New Car</h3>
      <AddCarForm onAddCar={handleAddCar} />
      <h3>Cars List</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Transmission</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderCars()}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default AdminPanel;
