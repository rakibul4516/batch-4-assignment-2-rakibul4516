import IOrder from "./order.interface";
import orderModel from "./order.model";

//Create a new order
const createOrderData = async (payload: IOrder) => {
  const result = await orderModel.create(payload);
  return result;
};

export const orderService = {
  createOrderData,
};
