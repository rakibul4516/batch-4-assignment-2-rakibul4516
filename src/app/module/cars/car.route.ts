import { Router } from "express";
import { carController } from "./car.controller";

const carRouter = Router();

carRouter.post("/create-car", carController.createCar);
carRouter.get("/:carId", carController.getSingleCar);
carRouter.put("/:carId", carController.updateCar);
carRouter.delete("/:carId", carController.deleteCar);
carRouter.get("/", carController.getCars);

export default carRouter;
