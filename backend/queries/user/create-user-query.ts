import { Request } from "express";
import { UserModel } from "../../db";
import { passwordHash } from "../../utils";

export const createUserQuery = async (req: Request) => {
  try {
    const { name, email, address, password } = req.body;

    const hash = await passwordHash(password);

    const user = await UserModel.create({
      name,
      email,
      address,
      password: hash,
    });

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
