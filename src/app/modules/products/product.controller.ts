import { Request, Response } from "express";
import { productServices } from "./product.services";
import ProductValidationSchema from "./product.validation";



const createProduct = async (req: Request, res: Response) => {
    try {
      const productData = req.body;
  
      const zodparseData = ProductValidationSchema.parse(productData);
      const result = await productServices.createProductIntoDB(zodparseData);
  
      res.status(200).json({
        success: true,
        message: "Product created successfully!",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: err,
      });
    }
  };

  // Get all Products  and searchTerm
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    let searchTermString: string | undefined;

    if (typeof searchTerm === "string") {
      searchTermString = searchTerm;
    }
    const result = await productServices.getAllProductFromDB(searchTermString);
    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

// Get Product by Id
const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productServices.getProductByIdFromDB(id);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};


//For Update Product 
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const updatedProductData = req.body;

    const verifyUpdateData = ProductValidationSchema.parse(updatedProductData);

    const result = await productServices.updateProductIntoDB(
      id,
      verifyUpdateData
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
        data: null,
      });
    }

    return res.json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
//For  Delete Product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deleteId = req.params.productId;
    const result = await productServices.productDeleteFromDB(deleteId);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
        data: null,
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};

  

  export const productControllers = {
    createProduct, getAllProducts, getProductById, updateProduct, deleteProduct
   
  };