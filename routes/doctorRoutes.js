import express from 'express';
import Doctor from '../models/Doctor.js';

const router = express.Router();

// Get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching doctors' });
  }
});

// Get top 10 doctors based on specialty
router.get('/top', async (req, res) => {
  try {
    const { specialty } = req.query;
    const doctors = await Doctor.find({ specialty }).limit(10);
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching top doctors' });
  }
});

export default router;
