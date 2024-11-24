"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_controller_1 = require("./car.controller");
const carRouter = (0, express_1.Router)();
//Api Routes
carRouter.post("/create-car", car_controller_1.carController.createCar);
carRouter.get("/:id", car_controller_1.carController.getSingleCar);
carRouter.put("/:id", car_controller_1.carController.updateCar);
carRouter.delete("/:id", car_controller_1.carController.deleteCar);
carRouter.get("/", car_controller_1.carController.getCar);
exports.default = carRouter;
