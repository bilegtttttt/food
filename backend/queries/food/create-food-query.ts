import { Request } from "express";
import { FoodModel } from "../../db";

export const createFoodQuery = async (req: Request) => {
  const { name, price, image, ingeredients } = req.body;
  const result = await FoodModel.create({ name, price, image, ingeredients });
  return result._id;
};
