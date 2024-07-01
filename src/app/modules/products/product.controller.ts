import { Request, Response } from "express";
import { productServices } from "./product.services";



const createProduct = async (req: Request, res: Response) => {
    try {
      const productData = req.body;
  
    //   const zodparseData = ProductValidationSchema.parse(productData);
      const result = await productServices.createProductIntoDB(productData);
  
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
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
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


  

  export const productControllers = {
    createProduct, getAllProducts, getProductById
   
  };