// "use client";

// import React from "react";
// import { Stack, Typography, Box, Button } from "@mui/material";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { BiBorderRadius } from "react-icons/bi";
// import Link from "next/link";
// import { FoodModal } from "@/components/FoodModal";
// import Modal from "@mui/material/Modal";
// import FoodFng2 from "@/components/FoodFng2";

// type FoodCatalog = {
//   _id: string;
//   name: string;
//   image: string;
//   ingredients: string;
//   price: string;
// };

// const getFoods = async () => {
//   try {
//     const url = "http://localhost:8000/foods";
//     const { data } = await axios.post<FoodCatalog[]>(url);
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const FoodPng = async () => {
//   const data = await getFoods();
//   return <FoodFng2 data={data as FoodCatalog[]} />;
// };

import React from "react";
import { Stack, Typography } from "@mui/material";
import axios from "axios";

type FoodCatalog = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

async function HomeFood() {
  try {
    const { data } = await axios.post<FoodCatalog[]>(
      "http://localhost:8000/foods",
      {}
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
  return <Stack>FoodPng</Stack>;
}

export default HomeFood;
