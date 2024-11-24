import { Request, Response } from "express";
import { carServices } from "./car.service";

// Handel req and res for post method
const createCar = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await carServices.createCarData(payload);
    res.status(200).json({
      success: true,
      message: "Car created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create data",
      error: error,
    });
  }
};
// Handel req and res for get method
const getCars = async (req: Request, res: Response) => {
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

    const result = await carServices.getAllCarData(filter);
    res.status(200).json({
      success: true,
      message: "Successfully getting all data",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get data",
      error: error,
    });
  }
};

// Handel req and res for get method
const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await carServices.getSingleCarData(carId);
    res.status(200).json({
      success: true,
      message: "Single car getting successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get single data",
      error: error,
    });
  }
};

// Handel req and res for put method
const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const payload = req.body;
    const result = await carServices.updateCarData(carId, payload);
    res.status(200).json({
      success: true,
      message: "Car updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update car data",
      error: error,
    });
  }
};

//Handel req and res for delete method
const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await carServices.deleteCarData(carId);
    res.status(200).json({
      success: true,
      message: "Car deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete data ",
      error: error,
    });
  }
};
export const carController = {
  createCar,
  getSingleCar,
  getCars,
  updateCar,
  deleteCar,
};
