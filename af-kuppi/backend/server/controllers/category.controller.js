const { CategoryModel } = require("../models/category.model");


const createCategory = async (req, res) => {
    const formData = {
        name: req.body.name,
        status: req.body.status
    }

    try {
        const createdCategory = await CategoryModel.create(formData);

        res.status(201).json({ data: createdCategory });
    } catch (err) {
        res.status(500).json({ errors: err });
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find();

        res.status(200).json({ data: categories });
    } catch (err) {
        res.status(500).json({ errors: err });
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await CategoryModel.findOne({ _id: req.params.id });

        if (category) {
            res.status(200).json({ data: category });
        } else {
            res.status(404).json({ errors: "Category Not Found" });
        }
    } catch (err) {
        res.status(500).json({ errors: err });
    }
}

const updateCategory = async (req, res) => {
    const formData = {
        name: req.body.name,
        status: req.body.status,
        updated_at: new Date()
    }

    if (!req.body.name) {
        delete formData.name;
    }

    if (!req.body.status) {
        delete formData.status;
    }

    try {
        const category = await CategoryModel.findOne({ _id: req.params.id });

        if (category) {
            let updatedCategory = Object.assign(category, formData);
            updatedCategory = await updatedCategory.save();

            res.status(200).json({ data: updatedCategory });
        } else {
            res.status(404).json({ errors: "Category Not Found" });
        }
    } catch (err) {
        res.status(500).json({ errors: err });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findOne({ _id: req.params.id });

        if (category) {
            await CategoryModel.deleteOne({ _id: req.params.id });
            res.status(204).json({ data: {} });
        } else {
            res.status(404).json({ errors: "Category Not Found" });
        }
    } catch (err) {
        res.status(500).json({ errors: err });
    }
}

module.exports = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}
