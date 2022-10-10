const User = require('../models/user.model');
const jwt = require("jsonwebtoken")

const newToken = (user) => {
    return jwt.sign({ user }, "ketan");
}

const register = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).send({ message: "Email alredy exists" })
        }
        user = await User.create(req.body);
        return res.status(200).send({ user });
    }
    catch (error) {
        return res.status(400).send(error)
    }
}

const getUser = async (req, res) => {
    try {
        let user = await User.find();
        return res.status(200).send({ user });
    }
    catch (error) {
        return res.status(400).send({error:error.message})
    }
}

const login = async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            return res.status(400).send("wrong email or password")
        }

        const match = user.checkPassword(req.body.password);

        if (!match) {
            return res.status(400).send("wrong email or password")
        }

        const token = newToken(user);
        const option = {
            httpOnly: true,
            expires: new Date(Date.now() + 1 * 60 * 60 * 1000)
        }

        res.status(201).cookie("stopnshop",token, option).send({user:user,token:token})
        
    }
    catch (error) {
        return res.status(400).send({error:error.message})
    }
}

module.exports = { register, login, getUser}