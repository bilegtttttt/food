import { Request } from "express";
import { FoodModel, OrderModel, UserModel } from "../../db";

const getFoodPrice = async (foodIds: string[]) => {
  const price = Promise.all(
    foodIds.map(async (el) => {
      const result = await FoodModel.findById({ _id: el });
      return result?.price;
    })
  );
};

export const createOrderQuery = async (req: Request) => {
  const { userId, foods, khoroo, district, apartment } = req.body;

  const isUserExist = await UserModel.findById({ _id: userId });

  if (!isUserExist) {
    throw new Error("User not found");
  }

  const earlyToday = new Date();
  earlyToday.setHours(0, 0, 0, 0);

  const now = new Date();
  console.log(earlyToday);

  const howManyAreThere = await OrderModel.countDocuments({
    createdAt: {
      $gte: earlyToday,
      $lte: now,
    },
  });

  const foodPrices = await FoodModel.findById;

  const result = await OrderModel.create({
    userId,
    foods,
    khoroo,
    district,
    apartment,
    orderNumber: howManyAreThere + 1,
  });

  return result;
};
