import Data from './dataModel.js';

export default {
  get(req, res) {
    Data
      .find({})
      .exec()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  post(req, res) {
    const { name } = req.body;

    new Data({
      name
    })
    .save()
    .then(result => res.json(result))
    .catch(err => res.json(err));
  },

  delete(req, res) {
    Data
    .findById(req.params.id)
    .then(result => {
      result.remove();
      res.json({ removed: true });
    })
    .catch(err => res.json(err));
  }
};
