import { TOrder } from "./order.interface";
import { Order } from "./order.model";


// Create a new order in the database
const createOrderIntoDB = async (validatedOrderData: TOrder) => {
  try {
    const result = await Order.create(validatedOrderData);
    return result;
  } catch (error) {
    throw new Error("Failed to create order in the database.");
  }
};

// Retrieve All Orders

const getOrderFromDB = async (queryEmail: string | undefined) => {
  try {
    let orders;

    if (queryEmail) {
      orders = await Order.find({ email: queryEmail });
    } else {
      orders = await Order.find();
    }

    return orders;
  } catch (error) {
    // console.error("Error fetching orders from DB:", error);
  }
};

export const orderServices = {
  createOrderIntoDB,
  getOrderFromDB,
};