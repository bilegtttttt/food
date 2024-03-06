import { Response, Request } from "express";
import { createUserQuery } from "../../queries";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserQuery(req);
    res.send({ message: "Success", user });
  } catch (error: any) {
    res.send(error.message);
  }
};
