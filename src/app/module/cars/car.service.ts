import { ICar } from "./car.interface";
import carModel from "./car.model";

//Create a data
const createCarData = async (payload: ICar) => {
  try {
    const result = await carModel.create(payload);
    return result;
  } catch (error) {
    throw error;
  }
};

//Get all data method
const getAllCarData = async (filter: any = {}) => {
  try {
    const result = await carModel.find(filter);
    return result;
  } catch (error) {
    throw error;
  }
};
//Get single data method
const getSingleCarData = async (id: string) => {
  try {
    const result = await carModel.findById(id);
    return result;
  } catch (error) {
    throw error;
  }
};

//Update data method
const updateCarData = async (id: string, payload: Partial<ICar>) => {
  try {
    const result = await carModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

//Delete Data method
const deleteCarData = async (id: string) => {
  try {
    const result = await carModel.findByIdAndDelete(id);
    return result;
  } catch (error) {
    throw error;
  }
};

export const carServices = {
  createCarData,
  getAllCarData,
  getSingleCarData,
  updateCarData,
  deleteCarData,
};
