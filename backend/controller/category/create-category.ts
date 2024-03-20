import { Response, Request } from "express";
import { createCategoryQuery } from "../../queries";

export const CreateCategoryController = async (req: Request, res: Response) => {
  try {
    const result = await createCategoryQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
