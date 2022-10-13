const express = require('express');
const authenticate = require("../middlewares/authenticate")
const router = express.Router();
const Order = require("../models/Order.model")


router.post("", async (req, res) => {

    try {
        const order = await Order.insertMany(req.body, {new:true});
        return res.status(200).send(order)

    } catch (error) {
        return res.status(400).send({error: error.message});
    }
})


router.get("", async (req, res) => {

    try {
        const order = await Order.findById(req.body, {new:true});
        return res.status(200).send(order)

    } catch (error) {
        return res.status(400).send({error: error.message});
    }
})

router.get("/:id", async (req, res) => {

    try {
        const order = await Order.find({"userId":req.params.id});
        return res.status(200).send(order)

    } catch (error) {
        return res.status(400).send({error: error.message});
    }
})

router.patch("/updateorder/:id", async (req, res) => {
    try 
    {
        const order = await Order.findByIdAndUpdate({"_id":req.params.id},req.body,{new:true});
        return res.status(200).send(order);
    } 
    catch (error)
    {
        return res.status(400).send({error: error.message});
    }
})

module.exports = router;