const { Thought, User } = require("../models");

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find()
      // sorting from newest to oldest
      .sort({ createdAt: -1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
