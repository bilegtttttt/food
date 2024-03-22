import { Router } from "express";
import { CreateCategoryController } from "../../controller/category/create-category";
import {
  GetCategoriesController,
  GetCategoryController,
} from "../../controller/category";

export const CategoryRouter = Router();

CategoryRouter.post("/category", CreateCategoryController);
CategoryRouter.get("/category/:id", GetCategoryController);
CategoryRouter.get("/categories", GetCategoriesController);
