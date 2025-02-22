import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  description: String,
  fileUrl: String, // Store report file path
  date: { type: Date, default: Date.now }
});

const Report = mongoose.model('Report', reportSchema);
export default Report;
