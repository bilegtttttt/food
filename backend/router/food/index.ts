import { Router, query } from "express";
import { CreateFoodController, GetFoodController } from "../../controller";

export const FoodRouter = Router();

FoodRouter.get("/foods", GetFoodController);
FoodRouter.post("/food-create", CreateFoodController);
