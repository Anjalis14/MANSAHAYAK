import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button } from '@mui/material';

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/patients')
      .then(res => setPatients(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <Typography variant="h4">Doctor Dashboard</Typography>
      {patients.length === 0 ? <Typography>No patients yet</Typography> : 
        patients.map(patient => (
          <div key={patient._id}>
            <Typography>Name: {patient.name}</Typography>
            <Typography>Disease: {patient.disease}</Typography>
            <Button variant="contained" color="primary">View Details</Button>
          </div>
        ))
      }
    </Container>
  );
};

export default DoctorDashboard;
