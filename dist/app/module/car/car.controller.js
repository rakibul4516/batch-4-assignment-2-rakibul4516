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
Object.defineProperty(exports, "__esModule", { value: true });
exports.carController = void 0;
const car_service_1 = require("./car.service");
//Handel req and res for post method
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        console.log(payload);
        const result = yield car_service_1.carServices.createCar(payload);
        res.status(200).json({
            success: true,
            message: "Car data created successfully",
            result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something is going wrong",
            error,
        });
    }
});
//Handel req and res for get method
const getCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_service_1.carServices.getCarData();
        res.status(200).json({
            success: true,
            message: "successfully get all data",
            result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something is going wrong",
            error,
        });
    }
});
//Handel req and res for get method
const getSingleCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.id;
        console.log(carId);
        const result = yield car_service_1.carServices.getSingleCarData(carId);
        res.status(200).json({
            success: true,
            message: "successfully get single data",
            result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something is going wrong",
            error,
        });
    }
});
//Handel req and res for put method
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.id;
        const payload = req.body;
        const result = yield car_service_1.carServices.updateCarData(carId, payload);
        res.status(200).json({
            message: "Car updated successfully",
            success: true,
            result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something is going wrong",
            error,
        });
    }
});
//Handel req and res for delete method
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.id;
        console.log(carId);
        const result = yield car_service_1.carServices.deleteCarData(carId);
        res.status(200).json({
            message: "Car deleted successfully",
            status: true,
            data: {},
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something is going wrong",
            error,
        });
    }
});
exports.carController = {
    createCar,
    getCar,
    getSingleCar,
    updateCar,
    deleteCar,
};
