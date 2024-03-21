"use client";
import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { MouseEvent } from "react";
import axios from "axios";
import Container from "@mui/material";

type Category = {
  categories: FoodCategory[];
};
function AllCategories({ categories }: Category) {
  const [color, setColor] = useState(false);
  const [foods, setFoods] = useState<FoodCategory[]>([]);

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const categoryId = event.currentTarget.id;

    try {
      const { data } = await axios.get<FoodCategory[]>(
        "http://localhost:8000/category",
        { id: categoryId }
      );
      console.log(data);

      return data;
      //   setFoods(data);
      //   setColor(true);
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
        {categories.map((el, index) => {
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
                onClick={handleClick}
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
    </Stack>
  );
}

export default AllCategories;
