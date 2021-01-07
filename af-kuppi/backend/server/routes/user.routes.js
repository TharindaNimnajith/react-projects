const express = require("express");

const userCtrl = require("../controllers/user.controller");


const router = express.Router();

router.route("/")
    .post(userCtrl.createUser)
    .get(userCtrl.getAllUsers);

router.route("/:id")
    .get(userCtrl.getUserById)
    .put(userCtrl.updateUser)
    .delete(userCtrl.deleteUser);


module.exports = {
    router
}
