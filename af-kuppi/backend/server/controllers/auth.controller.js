const bcrypt = require("bcrypt");

const { UserModel } = require("../models/user.model");


const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });

        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            res.status(200).json({
                status: "AUTHORIZED",
                data: user
            })
        } else {
            res.status(401).json({
                status: "UNAUTHORIZED"
            })
        }
    } catch (err) {
        res.status(401).json({
            status: "UNAUTHORIZED"
        })
    }
}

module.exports = {
    login
}
