import { Router } from "express";
import {
  createUserController,
  loginController,
  forgotController,
} from "../../controller";

const userRouter = Router();

userRouter.post("/signup", createUserController);
userRouter.post("/login", loginController);
userRouter.post("/forgot", forgotController);

export default userRouter;
