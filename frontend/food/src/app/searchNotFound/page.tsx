"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { SearchMap } from "../searchMap/page";

const getFilterFoods = async () => {
  const params = useSearchParams();
  const id = params.get("id");
  console.log(id);
  const body = {
    filter: {
      $or: [
        {
          name: {
            $regex: id,
            $options: "i",
          },
        },
        {
          price: {
            $regex: id,
          },
        },
      ],
    },
  };
  console.log(body);

  try {
    const { data } = await axios.post<FoodType[]>(
      "http://localhost:8000/foods",
      body
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function SearchNotFound() {
  const data: FoodType[] | undefined = await getFilterFoods();

  return (
    <Stack>
      <SearchMap data={data} />
    </Stack>
  );
}
