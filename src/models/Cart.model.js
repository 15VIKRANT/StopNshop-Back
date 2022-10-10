const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name: { type: String, required: true, default: true },
    shortDescription: { type: String, required: false },
    bestSellingRank: { type: Number, required: false },
    thumbnailImage: { type: String, required: false },
    salePrice: { type: Number, required: false },
    manufacturer: { type: String, required: false },
    url: { type: String, required: false },
    type: { type: String, required: false },
    image: { type: String, required: false },
    customerReviewCount: { type: Number, required: false },
    shipping:{ type: String, required: false },
    salePrice_range:{ type: String, required: false },
    objectID:{ type: String, required: false },
    categories:{ type: String, required: false },
    count:{type:Number, default:1},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'users'}
}
)

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;


  
