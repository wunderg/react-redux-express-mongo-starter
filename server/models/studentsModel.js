import mongoose from 'mongoose';

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  lesson: {
    type: Number,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  interview: {
    type: String,
    required: true
  },
  decision: {
    type: String,
    required: true
  },
  contacted: {
    type: String,
    default: ''
  },
  instructor: {
    type: String,
    default: ''
  },
  sessions: {
    type: Array,
    default: []
  },
  notes: {
    type: Array,
    default: []
  },
  ratings: {
    type: Object,
    default: {
      logic: 0,
      motiv: 0,
      ethic: 0,
      effort: 0,
      confid: 0,
      explain: 0
    }
  }
});

export default mongoose.model('students', studentsSchema);
