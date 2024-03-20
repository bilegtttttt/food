import { Request, Response } from "express";
import { getFoodQuery } from "../../queries";
export const GetFoodController = async (req: Request, res: Response) => {
  try {
    const allFoods = await getFoodQuery(req);
    res.status(200).send(allFoods);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
