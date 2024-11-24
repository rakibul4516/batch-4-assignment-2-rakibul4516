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
exports.carServices = void 0;
const car_model_1 = __importDefault(require("./car.model"));
//Create or add a car method
const createCar = (car) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.default.create(car);
        return result;
    }
    catch (error) {
        console.error("Error creating car:", error);
        throw error;
    }
});
//Get all data method
const getCarData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.default.find();
        return result;
    }
    catch (error) {
        console.error("Error creating car:", error);
        throw error;
    }
});
//Get a single data method
const getSingleCarData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.default.findById(id);
        return result;
    }
    catch (error) {
        console.error("Error creating car:", error);
        throw error;
    }
});
//Data update method
const updateCarData = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.default.findByIdAndUpdate(id, payload, { new: true });
        return result;
    }
    catch (error) {
        console.error("Error creating car:", error);
        throw error;
    }
});
//Delete method
const deleteCarData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.default.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        console.error("Error creating car:", error);
        throw error;
    }
});
exports.carServices = {
    createCar,
    getCarData,
    getSingleCarData,
    updateCarData,
    deleteCarData,
};
