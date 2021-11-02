import { SubcategoryProps } from "./SubcategoryProps";

export interface CategoryProps {
  category_id: number;
  name_zh: string;
  name_en: string;
  subcategories: SubcategoryProps[];
  created_at: string;
  updated_at: string;
}
