import { Model, model, Schema, models } from "mongoose";

export type CategoryModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  FoodId: Schema.Types.ObjectId[];
};

const CategorySchema = new Schema<CategoryModelType>({
  name: { type: String, required: true },
  FoodId: { type: [Schema.Types.ObjectId], required: true },
});

export const CategoryModel: Model<CategoryModelType> =
  models["Category"] || model("Category", CategorySchema);
