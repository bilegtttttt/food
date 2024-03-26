import { Request, Response } from "express";
import { createOrderQuery } from "../../queries";

export const CreateOrderController = async (req: Request, res: Response) => {
  try {
    const result = await createOrderQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
