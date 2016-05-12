import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  name: {
    type: String
  },
});

export default mongoose.model('data', dataSchema);
