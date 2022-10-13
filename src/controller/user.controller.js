const express = require('express');

const router = express.Router();

const User =require('../models/user.model')

router.post("", async (req, res) => {
    req.body.user_id = req.user._id
    console.log(req.body.user_id);

    try {
        const product = await Product.create(req.body);
        return res.status(200).send(product)

    } catch (error) {
        return res.status(400).send(error)
    }
})


router.patch("/:id", async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true});
        return res.status(200).send(user)

    } catch (error) {
        return res.status(400).send({err:error.message});
    }
});

router.get("/:id", async (req, res) => {

    try {
        const user = await User.findOne({_id:req.params.id});
        return res.status(200).send(user)

    } catch (error) {
        return res.status(400).send({err:error.message});
    }
});

module.exports = router;