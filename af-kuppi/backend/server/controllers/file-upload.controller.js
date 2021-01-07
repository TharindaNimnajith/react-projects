const fileUpload = (req, res) => {
    res.status(200).json({
        data: {
            filename: req.file.filename
        }
    });
}

module.exports = {
    fileUpload
}
