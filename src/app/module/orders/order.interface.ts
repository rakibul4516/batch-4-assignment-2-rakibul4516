interface IOrder {
  email: string;
  car: string;
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default IOrder;
