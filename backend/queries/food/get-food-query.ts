import { FoodModel } from "../../db";
import { Request } from "express";

export const getFoodQuery = async (req: Request) => {
  const { filter = {} } = req.body;

  const allFoods = await FoodModel.find(filter);
  return allFoods;
};
