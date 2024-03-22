import React from "react";
import { Stack, Typography } from "@mui/material";
import axios from "axios";
import HomeFoodMap from "@/components/homeFoodMap/HomeFoodMap";

type FoodCatalog = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

const getFoods = async () => {
  try {
    const { data } = await axios.post<FoodCatalog[]>(
      "http://localhost:8000/foods"
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function Menu() {
  const foodData = await getFoods();

  return <HomeFoodMap foodData={foodData as FoodCatalog[]} />;
}
export default Menu;
