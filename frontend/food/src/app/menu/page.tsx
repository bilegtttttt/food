import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import AllCategories from "@/components/menu/MenuMap";
import { Container } from "@mui/material";

const GetAllCategories = async () => {
  try {
    const { data } = await axios.get<FoodCategory[]>(
      "http://localhost:8000/categories"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

async function Menu() {
  const categories = await GetAllCategories();

  return <AllCategories categories={categories as FoodCategory[]} />;
}

export default Menu;
