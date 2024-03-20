import { Request } from "express";
import { FoodModel } from "../../db";

export const createFoodQuery = async (req: Request) => {
  try {
    const { name, price, image, ingeredients } = req.body;

    const result = await FoodModel.create({ name, price, image, ingeredients });

    console.log(result);
    return result._id;
  } catch (error: any) {
    throw new Error(error);
  }
};
