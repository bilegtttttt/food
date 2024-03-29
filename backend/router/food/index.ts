import { Router, query } from "express";
import { CreateFoodController, GetFoodController } from "../../controller";

export const FoodRouter = Router();

FoodRouter.post("/foods", GetFoodController);
FoodRouter.post("/create-food", CreateFoodController);
