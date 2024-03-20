import { Model, model, Schema, models } from "mongoose";

export type CategoryModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  FoodId: Schema.Types.ObjectId[];
  createdAt: Date;
  updateAt: Date;
};

const CategorySchema = new Schema<CategoryModelType>({
  name: { type: String, required: true },
  FoodId: { type: [Schema.Types.ObjectId], required: true },
  createdAt: { type: Date, default: new Date() },
  updateAt: { type: Date, default: new Date() },
});

export const CategoryModel: Model<CategoryModelType> =
  models["Category"] || model("Category", CategorySchema);
