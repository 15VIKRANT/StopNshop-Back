const express = require('express');
const authenticate = require("../middlewares/authenticate")
const router = express.Router();
const Client = require("../models/client.model")

router.post("", async (req, res) => {
    try 
    {
        const client = await Client.create(req.body);
        return res.status(200).send(client)
    } 
       catch(error) 
    {
        return res.status(401).send({error:error.message})
    }
})


router.patch("/:id", async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).send(user)

    } catch (error) {
        return res.status(400).send({err:error.message});
    }
});


module.exports = router;