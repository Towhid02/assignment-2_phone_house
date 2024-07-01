import { z } from "zod";



// Product variant validation schema
const VariantValidationSchema = z.object({
    type: z.string().nonempty("Variant type is required"),
    value: z.string().nonempty("Variant value is required"),
  });

  // Product inventory validation schema
const InventoryValidationSchema = z.object({
    quantity: z.number().min(0, "Quantity must be at least 0"),
    inStock: z
      .boolean()
      .refine((val) => typeof val === "boolean", "InStock must be a boolean"),
  });


  // Product validation schema
const ProductValidationSchema = z.object({
    name: z.string().nonempty("Name is required"),
    description: z.string().nonempty("Description is required"),
    price: z.number().positive("Price must be a positive number"),
    category: z.string().nonempty("Category is required"),
    tags: z.array(z.string()).nonempty("Tags must be a non-empty array"),
    variants: z
      .array(VariantValidationSchema)
      .nonempty("Variants must be a non-empty array"),
    inventory: InventoryValidationSchema,
  });


  export default ProductValidationSchema;