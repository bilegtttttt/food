import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BiBorderRadius } from "react-icons/bi";
import Link from "next/link";
import Order from "@/app/order/page";

type FoodCatalog = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

const getFoods = async () => {
  const url = "http://localhost:8000/foods";

  try {
    const { data } = await axios.post<FoodCatalog[]>(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const FoodPng = async () => {
  const data = await getFoods();
  console.log(data);
  return (
    <Stack>
      <Stack
        sx={{
          width: "1200px",
          height: "256px",
          gap: "24px",
          flexWrap: "wrap",
        }}
        direction="row"
      >
        {data?.map((el, index) => {
          return (
            <>
              <Stack key={index} sx={{ position: "relative" }}>
                <Stack
                  sx={{
                    width: "282px",
                    height: "186px",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    fill
                    src={el.image}
                    alt="img"
                    style={{ borderRadius: "16px" }}
                  />
                </Stack>
                <Stack sx={{ position: "absolute", top: "100%", left: "10%" }}>
                  <Stack sx={{ fontSize: "18px" }}>{el.name}</Stack>
                  <Stack sx={{ fontSize: "18px", color: "#18BA51" }}>
                    {el.price}
                  </Stack>
                </Stack>
              </Stack>
            </>
          );
        })}
      </Stack>
      <Order />
    </Stack>
  );
};
