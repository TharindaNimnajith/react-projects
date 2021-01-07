const express = require("express");

const bookCtrl = require("../controllers/book.controller");


const router = express.Router();

router.route("/")
    .post(bookCtrl.createBook)
    .get(bookCtrl.getBooks);

router.route("/:id")
    .get(bookCtrl.getBookById)
    .put(bookCtrl.updateBook)
    .delete(bookCtrl.deleteBook);

module.exports = {
    router
}
