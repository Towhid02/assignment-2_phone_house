import { TProduct } from './product.interface'
import { Product } from './product.model'

// Create a new product
const createProductIntoDB = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad)
  return result
}

// Retrieve all Products
const getAllProductFromDB = async (searchTerm: string | undefined) => {
  let products

  if (searchTerm) {
    const searchRegex = new RegExp(searchTerm as string, 'i')

    products = await Product.find({
      $or: [
        { name: searchRegex },
        { description: searchRegex },
        { category: searchRegex },
        { tags: searchRegex },
      ],
    })
  } else {
    products = await Product.find()
  }

  return products
}

// Retrieve a specific product by ID
const getProductByIdFromDB = async (id: string) => {
  const result = await Product.findById(id)
  return result
}

// Update Product Information

const updateProductIntoDB = async (
  id: string,
  updateProductIntoDB: TProduct,
) => {
  const result = await Product.findByIdAndUpdate(id, updateProductIntoDB, {
    new: true,
    runValidators: true,
  })
  return result
}

// Delete Product
const productDeleteFromDB = async (deleteId: string) => {
  const result = await Product.findByIdAndDelete(deleteId)
  return result
}

export const productServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getProductByIdFromDB,
  updateProductIntoDB,
  productDeleteFromDB,
}
