const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const connect=require("./config/db");
app.use(express.json())
const port=process.env.PORT || 5100;
const dotenv = require('dotenv');
dotenv.config();
app.listen(port,async()=>{
    try
        {
            await connect();
        }
    catch(err)
        {
            console.log({err:err.message})
        }

    console.log(`listening on port ${port}`)
   
})


module.exports = app;