import { TProduct } from "./product.interface";
import { Product } from "./product.model";


// Create a new product
const createProductIntoDB = async (product: TProduct) => {
    const result = Product.create(product);
    return result;
  };


  // Retrieve all Products
const getAllProductFromDB = async (searchTerm: string | undefined) => {
  let products;

  if (searchTerm) {
    const searchRegex = new RegExp(searchTerm as string, "i");

    products = await Product.find({
      $or: [
        { name: searchRegex },
        { description: searchRegex },
        { category: searchRegex },
        { tags: searchRegex },
      ],
    });
  } else {
    products = await Product.find();
  }

  return products;
};

// Retrieve a specific product by ID
const getProductByIdFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

  export const productServices = {
    createProductIntoDB, getAllProductFromDB, getProductByIdFromDB
  };