"use client";
import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { MouseEvent } from "react";
import axios from "axios";
import FoodMap from "./FoodMap";
type Category = {
  categories: FoodCategory[];
};
function AllCategories({ categories }: Category) {
  const [color, setColor] = useState(false);
  const [foods, setFoods] = useState<FoodCategory[]>([]);
  const [data, setData] = useState<any>();

  const handleClick = async (id: string) => {
    try {
      const { data } = await axios.get<FoodCategory[]>(
        `http://localhost:8000/category/${id}`
      );
      console.log(data);
      setData(data);
      return data;
    } catch (error: any) {
      console.log(error.message);
      setColor(false);
    }
  };

  return (
    <Stack>
      <Grid
        sx={{ justifyContent: "center", alignContent: "center" }}
        container
        gridRow={4}
        width={"100%"}
      >
        {categories?.map((el, index) => {
          return (
            <Grid
              sx={{
                justifyContent: "center",
                alignItems: "center",
                my: "40px",
              }}
              item
              rowSpacing={1}
              xs={2}
              key={index}
            >
              <Button
                onClick={() => handleClick(el.id)}
                className="bg-[#18BA51]"
                sx={{
                  width: "280px",
                  height: "43px",
                  border: "1px solid gray",
                  borderRadius: "8px",
                }}
              >
                {el.name}
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <div>
        <FoodMap data={data} />
      </div>
    </Stack>
  );
}

export default AllCategories;
