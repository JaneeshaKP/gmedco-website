export type ProductCategory = "Machines" | "Aesthetic";

export type MachineSubcategory = "Aesthetic" | "Facial" | "Laser" | "Slimming" | "Support";

export type AestheticSubcategory = "Aesthetic" | "Breast Implants" | "HA Fillers" | "Professional - Retail Products";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  subcategory: MachineSubcategory | AestheticSubcategory;
  description: string;
  features: string[];
  images: string[];
  banner?: string;
  bannerTagline?: string;
  beforeAfter?: { before: string; after: string; caption: string }[];
  specifications?: {
    [key: string]: string;
  };
}

export interface ProductBrand {
  name: string;
  logo?: string;
  description: string;
}
