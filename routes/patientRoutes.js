import express from 'express';
import Patient from '../models/Patient.js';

const router = express.Router();

// Register a new patient
router.post('/register', async (req, res) => {
  try {
    const { name, age, disease, currentDoctor } = req.body;
    const patient = new Patient({ name, age, disease, currentDoctor });
    await patient.save();
    res.json({ message: 'Patient registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering patient' });
  }
});

// Update patient details
router.put('/:id', async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Error updating patient' });
  }
});

export default router;
