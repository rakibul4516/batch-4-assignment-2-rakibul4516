import Order from "./order.model";
import Car from "../cars/car.model";
import { Request, Response } from "express";

// Create a new order
const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    //Destructured data
    const { email, car, quantity, totalPrice } = req.body;

    // Find the car by id
    const findCar = await Car.findById(car);

    if (!findCar) {
      res.status(404).json({
        success: false,
        message: "Car not found",
      });
      return;
    }

    // Use condition to check stock available or unavailable
    if (!findCar.inStock || findCar.quantity < quantity) {
      res.status(400).json({
        success: false,
        message: "Insufficient stock",
      });
      return;
    }

    //Update the quantity from database
    findCar.quantity -= quantity;

    //Update the stock from database
    findCar.inStock = findCar.quantity > 0;

    //Save the changes on database
    await findCar.save();

    // Create a object
    const orderData = {
      email,
      car: findCar._id,
      quantity,
      totalPrice,
    };

    //Create a new order
    const order = await Order.create(orderData);
    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error,
    });
  }
};

// Get total price of all orders
const getOrders = async (req: Request, res: Response) => {
  try {
    // Implement mongoose aggregation
    const result = await Order.aggregate([
      {
        $project: {
          TotalPriceOfQuantity: { $multiply: ["$quantity", "$totalPrice"] },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$TotalPriceOfQuantity" },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
        },
      },
    ]);

    const totalPrice = result[0];

    res.status(200).json({
      success: true,
      message: "Revenue calculated successfully",
      totalPrice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to calculate revenue",
      error: error,
    });
  }
};

export const orderController = {
  createOrder,
  getOrders,
};
