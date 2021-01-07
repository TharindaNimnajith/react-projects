const bcrypt = require("bcrypt");

const { UserModel } = require("../models/user.model");


const createUser = async (req, res) => {
    const formData = {
        full_name: req.body.full_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
    }

    try {
        const createdUser = await UserModel.create(formData);

        res.status(201).json({ data: createdUser });
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();

        res.status(200).json({ data: users});
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.params.id })
            .select("_id full_name email created_at updated_at");

        if (user) {
            res.status(200).json({ data: user });
        } else {
            res.status(404).json({ error: "User not found "});
        }
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

const updateUser = async (req, res) => {
    const formData = {
        full_name: req.body.full_name,
        email: req.body.email,
        updated_at: new Date()
    }

    if (!req.body.full_name) {
        delete formData.full_name;
    }

    if (!req.body.email) {
        delete formData.email;
    }

    try {
        const user = await UserModel.findOne({ _id: req.params.id });

        if (user) {
            let updatedUser = Object.assign(user, formData);
            updatedUser = await updatedUser.save();

            res.status(200).json({ data: updatedUser });
        } else {
            res.status(404).json({ error: "User not found "});
        }
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.params.id });

        if (user) {
            await UserModel.deleteOne({ _id: req.params.id });

            res.status(204).json({ data: {} });
        } else {
            res.status(404).json({ error: "User not found "});
        }
    } catch (error) {
        res.status(500).json({ errors: error });
    }
}


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}
