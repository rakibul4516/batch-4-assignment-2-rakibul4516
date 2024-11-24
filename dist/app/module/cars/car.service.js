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
//Create a data
const createCarData = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.default.create(payload);
        return result;
    }
    catch (error) {
        throw error;
    }
});
//Get all data method
const getAllCarData = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (filter = {}) {
    try {
        const result = yield car_model_1.default.find(filter);
        return result;
    }
    catch (error) {
        throw error;
    }
});
//Get single data method
const getSingleCarData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.default.findById(id);
        return result;
    }
    catch (error) {
        throw error;
    }
});
//Update data method
const updateCarData = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.default.findByIdAndUpdate(id, payload, {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw error;
    }
});
//Delete Data method
const deleteCarData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.default.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw error;
    }
});
exports.carServices = {
    createCarData,
    getAllCarData,
    getSingleCarData,
    updateCarData,
    deleteCarData,
};
