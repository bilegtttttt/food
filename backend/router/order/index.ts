import { Router } from "express";
import { CreateOrderController } from "../../controller";

export const OrderRouter = Router();

OrderRouter.post("/order", CreateOrderController);
