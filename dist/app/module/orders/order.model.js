"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    car: {
        type: String,
        ref: "Car",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
const Order = (0, mongoose_1.model)("Order", orderSchema);
exports.default = Order;
