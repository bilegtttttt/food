import { Model, model, Schema, models } from "mongoose";

export type FoodModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  image: string;
  ingeredients: string;
  price: string;
};

const FoodSchema = new Schema<FoodModelType>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingeredients: { type: String, required: true },
  price: { type: String, required: true },
});

export const FoodModel: Model<FoodModelType> =
  models["Foods"] || model("Foods", FoodSchema);
