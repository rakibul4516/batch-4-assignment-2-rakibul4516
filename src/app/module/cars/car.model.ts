import { model, Schema } from "mongoose";
import { ICar } from "./car.interface";

// Create the Mongoose schema
const carSchema = new Schema<ICar>(
  {
    brand: {
      type: String,
      required: [
        true,
        "Provide a brand or manufacturer name like Toyota, BMW, Ford etc",
      ],
      trim: true,
    },
    model: {
      type: String,
      required: [
        true,
        "Provide model of the car like Camry, 3 Series, Focus etc",
      ],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Year is required and must be a positive number"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must be a positive number"],
    },
    category: {
      type: String,
      required: [
        true,
        "Must provide one of them Sedan,SUV,Truck,Coupe,Convertible",
      ],
      enum: ["Sedan", "SUV", "Truck", "Coupe", "Convertible"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Write a description.Length must be less then 500"],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Quantity must be positive number"],
    },
    inStock: {
      type: Boolean,
      default: function () {
        return this.quantity > 0;
      },
    },
  },
  {
    timestamps: true,
  }
);

//Created the model of schema
const Car = model<ICar>("Car", carSchema);

export default Car;
