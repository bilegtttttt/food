import { Router } from "express";
import { createUserController, loginController } from "../../controller";

const userRouter = Router();

userRouter.post("/signup", createUserController);
userRouter.post("/login", loginController);

export default userRouter;
