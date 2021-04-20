const express = require('express');
const router = express.Router();
const Plan = require('../schemas/Plan');
const auth = require("../Authentication/Auth");

//book new package
router.post('/newPlan', auth, function (req, res, next) {
  Plan.create({

    name: req.body.name,
    address: req.body.address,
    contact: req.body.contact,
    date: req.body.date,
    time: req.body.time,
    package: req.body.package,
    venue: req.body.venue,
    price: req.body.price
  }
  ).then(function (item) {
    res.send(item);
  }).catch(next);

});

//get all booked plans
router.get('/plans', function (req, res, next) {
  Plan.find({}).then(function (item) {
    res.send(item);
  });
});



//delete booked plan
router.delete("/plans", auth, function (req, res, next) {
  Plan.findByIdAndRemove({ _id: req.body.id }).then(function (item) {
    res.send(item);
  });
});


//get booked plan for particular user
router.post('/plansUser', function (req, res, next) {

  const {
    name,
    address
  } = req.body

  Plan.find({
    name: name,
    address: address
  }).then(function (item) {
    console.log(item)
    res.send(item);


  });
});


//update a plan
router.post('/plan/update/:id', auth, function (req, res, next) {
  Plan.findById(req.params.id).then(function (item) {
    item.name = req.body.name,
      item.address = req.body.address,
      item.contact = req.body.contact,
      item.date = req.body.date,
      item.time = req.body.time,
      item.package = req.body.package,
      item.venue = req.body.venue,
      item.price = req.body.price

    item.save()
      .then(function () {
        res.send("Updated data to DB")
      }


      ).catch(next);
  })
});


//get one plan
router.get('/plan/:id', auth, function (req, res, next) {
  Plan.findById(req.params.id).then(function (item) {
    res.send(item);
  });
});

module.exports = router;