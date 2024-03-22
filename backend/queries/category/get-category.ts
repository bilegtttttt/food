import { Request } from "express";
import { CategoryModel } from "../../db";

export const getCategoryQuery = async (req: Request) => {
  const { id } = req.params;

  const category = await CategoryModel.findOne({ _id: id }).populate("foodId");
  console.log(category);

  return category;
};
