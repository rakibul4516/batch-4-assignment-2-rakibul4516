"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const orderRouter = (0, express_1.Router)();
orderRouter.post("/create-order", order_controller_1.orderController.createOrder);
orderRouter.get("/revenue", order_controller_1.orderController.getOrders);
exports.default = orderRouter;
