const mongoose = require("mongoose");
const Schema = mongoose.Schema


const ordersSchema = new Schema({

    fullName: { type: "string", required: true },
    email: { type: "string", required: true },
    address1: { type: "string", required: true },
    address2: { type: "string", required: true },
    phoneNumber: { type: "integer", required: true },

});

const product = mongoose.model('Product', ordersSchema);
module.exports = product; 