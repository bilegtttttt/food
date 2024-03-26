import { Model, model, Schema, models } from "mongoose";

export type OrderModelType = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  orderNumber: number;
  foods: [Schema.Types.ObjectId];
  totalPrice: string;
  process: String;
  createdAt: Date;
  updatedAt: Date;
  district: string;
  khoroo: string;
  apartment: string;
};

const OrderSchema = new Schema<OrderModelType>({
  userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  orderNumber: { type: Number, required: true },
  foods: { type: [Schema.Types.ObjectId], ref: "Foods", required: true },
  totalPrice: { type: String, required: true },
  process: { type: String, required: true },
  district: { type: String, required: true },
  khoroo: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  updatedAt: Date,
});

export const OrderModel: Model<OrderModelType> =
  models["Orders"] || model("Orders", OrderSchema);
