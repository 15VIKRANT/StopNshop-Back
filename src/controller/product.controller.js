const express = require('express');
const authenticate = require("../middlewares/authenticate")
const router = express.Router();
const Product = require("../models/product.model")
const authorized = require('../middlewares/authorized')

router.post("", authenticate, async (req, res) => {
    req.body.user_id = req.user._id
    console.log(req.body.user_id);

    try {
        const product = await Product.create(req.body);
        return res.status(200).send(product)

    } catch (error) {
        return res.status(400).send(error)
    }
})


router.patch("/:id", authenticate, authorized(["admin", "customer"]), async (req, res) => {

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(product)

    } catch (error) {
        return res.status(400).send(error)
    }
});


router.get("", async (req, res) => {

    try {
        const product = await Product.find(req.body);
       
        return res.status(200).send(product)

    } catch (error) {
        return res.status(400).send(error)
    }
})

router.get("/:id", async (req, res) => {
 
       const id=req.params.id
    try {
        const product = await Product.findOne({_id:id});
       
        return res.status(200).send(product)

    } catch (error) {
        return res.status(400).send(error)
    }
})

module.exports = router;