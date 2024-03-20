import { Request, Response } from "express";
import { getCategoryQuery } from "../../queries";

export const GetCategoryController = async (req: Request, res: Response) => {
  try {
    const result = await getCategoryQuery(req);
    res.status(400).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
