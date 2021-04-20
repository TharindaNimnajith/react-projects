const express = require('express');
const router = express.Router();
const Event = require('../schemas/Event');
const auth = require("../Authentication/Auth");

router.post('/newEvent', auth, function (req, res, next) {
  Event.create({

    name: req.body.name,
    description: req.body.description,
    venue: req.body.venue,
    pPrice: req.body.pPrice,
    image: req.body.image
  }
  ).then(function (item) {
    res.send(item);
  }).catch(next);

});

router.get('/events', function (req, res, next) {
  Event.find({}).then(function (item) {
    res.send(item);
  });
});

router.delete("/events", auth, function (req, res, next) {
  Event.findByIdAndRemove({ _id: req.body.id }).then(function (item) {
    res.send(item);
  });
});

module.exports = router;