// Product Interface
  export type TProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: Variant[];
    inventory: Inventory;
  };
 // Product Variant Interface
export type Variant = {
    type: string;
    value: string;
  };
  
 // Product Inventory Interface
  export type Inventory = {
    quantity: number;
    inStock: boolean;
  };
  