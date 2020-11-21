const mongoose = require("mongoose");
const Schema = mongoose.Schema


const productSchema = new Schema({

    title: { type: "string", required: true },
    image: { type: "string", required: true },
    price: { type: "string", required: true },
    description: { type: "string", required: true },

});

const product = mongoose.model('Product', productSchema);
module.exports = product;
