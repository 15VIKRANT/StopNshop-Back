const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://vvraut010:vikrant@cluster0.deqljzu.mongodb.net/ShopnStop"
  )
};