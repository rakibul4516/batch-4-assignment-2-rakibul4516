"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//Create schema model 
const carSchema = new mongoose_1.Schema({
    brand: {
        type: String,
        required: [true, "Brand is required"],
        trim: true,
    },
    model: {
        type: String,
        required: [true, "Model is required"],
        trim: true,
    },
    year: {
        type: Number,
        required: [true, "Year is required"],
        min: [1886, "Year must be 1886 or later"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ["Sedan", "SUV", "Truck", "Coupe", "Convertible"],
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, "Description cannot exceed 500 characters"], // Optional limit
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity cannot be negative"],
    },
    inStock: {
        type: Boolean,
        default: function () {
            return this.quantity > 0;
        },
    },
}, {
    timestamps: true,
});
const carModel = (0, mongoose_1.model)("Car", carSchema);
exports.default = carModel;
