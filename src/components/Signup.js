import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', specialty: '', experience: '', contact: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert('Signup successful! Please login.');
      navigate('/login');
    } catch (err) {
      alert('Error signing up');
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4">Doctor Signup</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} margin="normal" />
        <TextField fullWidth label="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} margin="normal" />
        <TextField fullWidth type="password" label="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} margin="normal" />
        <TextField fullWidth label="Specialty" value={formData.specialty} onChange={(e) => setFormData({ ...formData, specialty: e.target.value })} margin="normal" />
        <TextField fullWidth label="Experience" type="number" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} margin="normal" />
        <TextField fullWidth label="Contact" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} margin="normal" />
        <Button type="submit" variant="contained" color="primary" fullWidth>Signup</Button>
      </form>
    </Container>
  );
};

export default Signup;
