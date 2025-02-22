import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  disease: String,
  currentDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  previousDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  medicines: [String],
  reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }]
});

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;
