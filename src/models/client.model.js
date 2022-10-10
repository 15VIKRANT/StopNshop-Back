const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: {type: String, required: true, default: true },
    email: {type: String, required: true, default: true },
    message: {type: String, required: true, default: true }
    
})

const Client = mongoose.model("client", clientSchema);
module.exports = Client;


  