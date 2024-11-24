"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_model_1 = __importDefault(require("./order.model"));
const car_model_1 = __importDefault(require("../cars/car.model"));
// Create a new order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Destructured data
        const { email, car, quantity, totalPrice } = req.body;
        // Find the car by id
        const findCar = yield car_model_1.default.findById(car);
        if (!findCar) {
            return res.status(404).json({
                success: false,
                message: "Car not found",
            });
        }
        // Use condition to check stock available or unavailable
        if (!findCar.inStock || findCar.quantity < quantity) {
            return res.status(400).json({
                success: false,
                message: "Insufficient stock",
            });
        }
        //Update the quantity from database
        findCar.quantity -= quantity;
        //Update the stock from database
        findCar.inStock = findCar.quantity > 0;
        //Save the changes on database
        yield findCar.save();
        // Create a object
        const orderData = {
            email,
            car: findCar._id,
            quantity,
            totalPrice,
        };
        //Create a new order
        const order = yield order_model_1.default.create(orderData);
        console.log(order);
        res.status(200).json({
            success: true,
            message: "Order created successfully",
            data: order,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create order",
            error: error
        });
    }
});
// Get total price of all orders
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Implement mongoose aggregation
        const result = yield order_model_1.default.aggregate([
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to calculate revenue",
            error: error,
        });
    }
});
exports.orderController = {
    createOrder,
    getOrders,
};
