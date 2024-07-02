import mongoose, { Schema } from 'mongoose'
import { TOrder } from './order.interface'

// Create a Mongoose schema for the Order
const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
})

// Create a Mongoose model from the schema
export const Order = mongoose.model<TOrder>('Order', orderSchema)
