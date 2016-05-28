import Student from '../../models/studentsModel.js';

export default {
  get(req, res) {
    Student
      .find({})
      .exec()
      .then(student => res.json(student))
      .catch(err => res.json(err));
  },

  post(req, res) {
    const { name, email, lesson, level, interview, decision, instructor } = req.body;

    new Student({
      name,
      email,
      lesson,
      level,
      interview,
      decision,
      instructor
    })
    .save()
    .then(result => res.json(result))
    .catch(err => res.json(err));
  },

  put(req, res) {
    const { _id } = req.body;

    Student.findByIdAndUpdate(_id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
  },

  delete(req, res) {
    Student
    .findById(req.params.id)
    .then(result => {
      result.remove();
      res.json({ removed: true });
    })
    .catch(err => res.json(err));
  }
};
