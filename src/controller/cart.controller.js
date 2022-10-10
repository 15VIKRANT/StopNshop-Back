const express = require('express');
const authenticate = require("../middlewares/authenticate")
const router = express.Router();
const Cart = require("../models/Cart.model")
const authorized = require('../middlewares/authorized')

router.post("",async (req, res) => {
     try 
    {
        const cart = await Cart.create(req.body);
        return res.status(200).send(cart)
    } 
       catch(error) 
    {
        return res.status(401).send({error:error.message})
    }
})


router.delete("/deleteall/:id", async(req,res)=>{
    try {
        const cart = await Cart.deleteMany({userId:req.params.id});
        return res.status(200).send(cart)
    } 
    catch(error)
    {
        return res.status(401).send({error:error.message})
    }
})


router.patch("/:id", async (req, res) => {

    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).send(cart)

    } catch (error) {
        return res.status(400).send({err:error.message});
    }
});



router.get("", async (req, res) => {

    try {
        const cart = await Cart.find();
        
        return res.status(200).send(cart)

    } catch (error) {
        return res.status(400).send(error)
    }
})

router.delete("/:id", async (req, res) => {
         const id=req.params.id
    try {
        const cart = await Cart.findByIdAndDelete({_id:id});
        
        return res.status(200).send(cart)

    } catch (error) {
        return res.status(400).send({error:error.message})
    }
})

router.get("/:id", async (req, res) => {
 
       const id=req.params.id
    try {
        const cart = await Cart.find({userId:id});
       
        return res.status(200).send(cart)

    } catch (error) {
        return res.status(400).send({error:error.message})
    }
})
module.exports = router;