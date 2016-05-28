import mongoose from 'mongoose';

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model('data', studentsSchema);
