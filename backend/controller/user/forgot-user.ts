import { Request, Response } from "express";
import { forgotPasswordQuery } from "../../queries";

export const forgotController = async (req: Request, res: Response) => {
  try {
    const result = await forgotPasswordQuery(req);
    res.send({ message: "success", result });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
