import IOrder from './order.interface';
import orderModel from './order.model'

//Create a new order 
const createOrderData = async (payload: IOrder) => {
    try {
      const result = await orderModel.create(payload);
      return result;
    } catch (error) {
      throw error;
    }
  };

  export const orderService = {
    createOrderData,
  }