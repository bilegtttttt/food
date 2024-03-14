import { connectDb } from "./db/database";
import express from "express";
import cors from "cors";
import userRouter from "./router/user";
import { FoodRouter } from "./router";

const app = express();
app.use(cors());
app.use(express.json());
connectDb();

app.use(userRouter);
app.use(FoodRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
