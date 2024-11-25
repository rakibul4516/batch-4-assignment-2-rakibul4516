"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "Provide a valid email like 'rakibulislam@gmail.com'"],
    },
    car: {
        type: String,
        ref: "Car",
        required: [true, "Provide an id of a car"],
    },
    quantity: {
        type: Number,
        required: [true, "quantity must be a positive number"],
        min: 1,
    },
    totalPrice: {
        type: Number,
        required: [true, "totalPrice must be a positive number"]
    },
}, {
    timestamps: true,
});
const Order = (0, mongoose_1.model)("Order", orderSchema);
exports.default = Order;
