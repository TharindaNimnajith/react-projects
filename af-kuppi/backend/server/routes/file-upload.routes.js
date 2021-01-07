const express = require("express");

const fileUploadCtrl = require("../controllers/file-upload.controller");
const { upload } = require("../configs/file-upload.configs");

const router = express.Router();

router.route("/")
    .post(upload.single("file"), fileUploadCtrl.fileUpload);

module.exports = {
    router
}
