import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model('data', dataSchema);
