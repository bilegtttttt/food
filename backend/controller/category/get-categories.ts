import { Request, Response } from "express";
import { getCategoriesQuery } from "../../queries";
export const GetCategoriesController = async (req: Request, res: Response) => {
  try {
    const result = await getCategoriesQuery();
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
