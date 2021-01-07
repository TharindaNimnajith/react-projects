const express = require("express");

const categoryCtrl = require("../controllers/category.controller");


const router = express.Router();

router.route("/")
    .post(categoryCtrl.createCategory)
    .get(categoryCtrl.getCategories);

router.route("/:id")
    .get(categoryCtrl.getCategoryById)
    .put(categoryCtrl.updateCategory)
    .delete(categoryCtrl.deleteCategory);

module.exports = {
    router
}
