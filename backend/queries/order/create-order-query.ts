import { Request } from "express";
import { FoodModel, OrderModel, UserModel } from "../../db";
import { ORDER_PROCESS } from "../../constants";

const getFoodPrice = async (foodIds: string[]) => {
  const prices = Promise.all(
    foodIds.map(async (el) => {
      const result = await FoodModel.findById({ _id: el });
      return result?.price;
    })
  );

  return prices;
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

  const totalPrice = await getFoodPrice(foods);
  const sumOfTotalPrice = totalPrice.reduce(
    (accumulator: number, currentValue) => accumulator + Number(currentValue),
    0
  );

  const result = await OrderModel.create({
    userId,
    foods,
    khoroo,
    district,
    apartment,
    orderNumber: howManyAreThere + 1,
    totalPrice: sumOfTotalPrice.toString(),
    process: ORDER_PROCESS.PENDING,
  });

  return result;
};
