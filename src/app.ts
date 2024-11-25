import express, { Request, Response } from "express";
import cors from "cors";
import carRouter from "./app/module/cars/car.route";
import orderRouter from "./app/module/orders/order.route";

const app = express();

//Parser setup
app.use(express.json());

//cors setup
app.use(cors());

//Application Route
app.use("/api/cars", carRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req: Request, res: Response) => {
  console.log(req.body);

  res.send("Server is running.....");
});

//Route mistake or not found
app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
