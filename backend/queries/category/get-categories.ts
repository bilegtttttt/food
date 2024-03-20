import { CategoryModel } from "../../db";

export const getCategoriesQuery = async () => {
  const categories = await CategoryModel.find();
  const newCategories = categories.map((item) => {
    return { name: item.name, id: item.id };
  });

  return categories;
};
