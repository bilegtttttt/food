import { Router } from "express";
import { createUserController } from "../../controller";

const userRouter = Router();

userRouter.post("/signup", createUserController);

export default userRouter;
