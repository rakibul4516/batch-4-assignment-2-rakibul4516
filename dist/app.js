"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const car_route_1 = __importDefault(require("./app/module/cars/car.route"));
const order_route_1 = __importDefault(require("./app/module/orders/order.route"));
const app = (0, express_1.default)();
//Parser setup
app.use(express_1.default.json());
//cors setup
app.use((0, cors_1.default)());
//Application Route
app.use("/api/cars", car_route_1.default);
app.use("/api/orders", order_route_1.default);
app.get("/", (req, res) => {
    console.log(req.body);
    res.send("Server is running.....");
});
//Route mistake or not found
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route not found",
    });
});
exports.default = app;
