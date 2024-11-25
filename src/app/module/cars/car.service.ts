import { ICar } from "./car.interface";
import carModel from "./car.model";

//Create a data
const createCarData = async (payload: ICar) => {
  const result = await carModel.create(payload);
  return result;
};

//Get all data method
const getAllCarData = async (filter: object = {}) => {
  const result = await carModel.find(filter);
  return result;
};
//Get single data method
const getSingleCarData = async (id: string) => {
  const result = await carModel.findById(id);
  return result;
};

//Update data method
const updateCarData = async (id: string, payload: Partial<ICar>) => {
  const result = await carModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

//Delete Data method
const deleteCarData = async (id: string) => {
  const result = await carModel.findByIdAndDelete(id);
  return result;
};

export const carServices = {
  createCarData,
  getAllCarData,
  getSingleCarData,
  updateCarData,
  deleteCarData,
};
