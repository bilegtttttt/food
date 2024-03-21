type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

type FoodCategory = {
  _id: string;
  name: string;
  foodId: string;
};
