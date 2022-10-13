const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const connect=require("./config/db");
app.use(express.json())
const port=process.env.PORT || 5100;
const dotenv = require('dotenv');
dotenv.config();
const { register, login, newToken, getUser } = require('./controller/auth.controller')
const productController = require("./controller/product.controller")
const cartcontroller =require('./controller/cart.controller')
const userController= require('./controller/user.controller')
const clientController = require('./controller/Client.controller')
const orderController = require('./controller/orderController')






app.use('/product', productController);
app.get('/user', getUser);
app.post("/register", register);
app.post("/login", login);
app.use("/cart", cartcontroller);
app.use('/updateuser', userController);
app.use('/users', userController);
app.use('/client',clientController); 
app.use('/orders', orderController);

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