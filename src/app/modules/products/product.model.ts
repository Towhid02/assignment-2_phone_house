import mongoose, { Schema } from 'mongoose'
import { Inventory, TProduct, Variant } from './product.interface'

// Product Variant Schema
const VariantSchema = new Schema<Variant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
})

// Product Inventory Schema
const InventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
})

// Product Schema
const ProductSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [VariantSchema],
    required: true,
  },
  inventory: {
    type: InventorySchema,
    required: true,
  },
})

export const Product = mongoose.model<TProduct>('Product', ProductSchema)
