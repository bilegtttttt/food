type FoodType = {
  _id: string;
  id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

type FoodCategory = {
  id: string;
  _id: string;
  name: string;
  foodId: string;
};
