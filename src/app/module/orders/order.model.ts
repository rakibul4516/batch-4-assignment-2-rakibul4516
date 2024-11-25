import { model, Schema } from "mongoose";
import IOrder from "./order.interface";

const orderSchema = new Schema<IOrder>(
  {
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
      required: [true,"totalPrice must be a positive number"]
    },
  },
  {
    timestamps: true,
  }
);

const Order = model<IOrder>("Order", orderSchema);

export default Order;
