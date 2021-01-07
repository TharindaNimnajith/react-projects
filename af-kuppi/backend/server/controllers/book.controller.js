const { BookModel } = require("../models/book.model");

const createBook = async (req, res) => {
    const formData = {
        name: req.body.name,
        author: req.body.author,
        published_date: req.body.published_date,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image,
        file: req.body.file,
    }

    try {
        const createdBook = await BookModel.create(formData);

        res.status(201).json({ data: createdBook });
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

const getBooks = async (req, res) => {
    try {
        const books = await BookModel.find()
            .populate({
                path: "category",
                model: "Category"
            });

        res.status(201).json({ data: books });
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await BookModel.findOne({ _id: req.params.id })
            .populate({
                path: "category",
                model: "Category"
            });

        if (book) {
            res.status(200).json({ data: book });
        } else {
            res.status(404).json({ errors: "Book has not found" });
        }
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

const updateBook = async (req, res) => {
    const formData = {
        name: req.body.name,
        author: req.body.author,
        published_date: req.body.published_date,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image,
        file: req.body.file,
        updated_at: new Date()
    }

    if (!req.body.name) {
        delete formData.name;
    }

    if (!req.body.author) {
        delete formData.author;
    }

    if (!req.body.published_date) {
        delete formData.published_date;
    }

    if (!req.body.category) {
        delete formData.category;
    }

    if (!req.body.description) {
        delete formData.description;
    }

    if (!req.body.image) {
        delete formData.image;
    }

    if (!req.body.file) {
        delete formData.file;
    }

    try {
        const book = await BookModel.findOne({ _id: req.params.id });

        if (book) {
            let updatedBook = Object.assign(book, formData);
            updatedBook = await updatedBook.save();

            res.status(200).json({ data: updatedBook });
        } else {
            res.status(404).json({ errors: "Book has not found" });
        }
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await BookModel.findOne({ _id: req.params.id });

        if (book) {
            await BookModel.deleteOne({ _id: req.params.id });
            res.status(204).json({ data: {} });
        } else {
            res.status(404).json({ errors: "Book has not found" });
        }
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
}
