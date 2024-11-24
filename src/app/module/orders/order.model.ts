import { model, Schema } from "mongoose";
import IOrder from "./order.interface";

const orderSchema = new Schema<IOrder>(
    {
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
    },
    {
      timestamps: true,
    }
  );
  
  const Order = model<IOrder>("Order", orderSchema);
  
  export default Order;