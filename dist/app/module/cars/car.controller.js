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
// Handel req and res for post method
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield car_service_1.carServices.createCarData(payload);
        res.status(200).json({
            success: true,
            message: "Car created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create data",
            error: error,
        });
    }
});
// Handel req and res for get method
const getCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        let filter = {};
        if (searchTerm) {
            //Filter the query using filter and or operator
            filter = {
                $or: [
                    { brand: { $regex: searchTerm, $options: "i" } },
                    { model: { $regex: searchTerm, $options: "i" } },
                    { category: { $regex: searchTerm, $options: "i" } },
                ],
            };
        }
        const result = yield car_service_1.carServices.getAllCarData(filter);
        res.status(200).json({
            success: true,
            message: "Successfully getting all data",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to get data",
            error: error,
        });
    }
});
// Handel req and res for get method
const getSingleCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const result = yield car_service_1.carServices.getSingleCarData(carId);
        res.status(200).json({
            success: true,
            message: "Single car getting successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to get single data",
            error: error,
        });
    }
});
// Handel req and res for put method
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const payload = req.body;
        const result = yield car_service_1.carServices.updateCarData(carId, payload);
        res.status(200).json({
            success: true,
            message: "Car updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update car data",
            error: error,
        });
    }
});
//Handel req and res for delete method
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const result = yield car_service_1.carServices.deleteCarData(carId);
        res.status(200).json({
            success: true,
            message: "Car deleted successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete data ",
            error: error,
        });
    }
});
exports.carController = {
    createCar,
    getSingleCar,
    getCars,
    updateCar,
    deleteCar,
};
