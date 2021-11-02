import ActivitySubcategoryProps from "./ActivitySubcategoryProps";

export default interface ActivityCategoryProps {
  category_id: number;
  name_zh: string;
  name_en: string;
  subcategories: ActivitySubcategoryProps[];
  created_at: string;
  updated_at: string;
}
