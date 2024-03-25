import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

function FoodMap({ data }: any) {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        mb: "50px",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data?.foodId.map((el: any, index: number) => (
          <Stack
            key={index}
            sx={{
              flexWrap: "wrap",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              height: "256px",
            }}
          >
            <Image
              className="rounded-xl "
              alt=""
              src={el.image}
              width={282}
              height={186}
            />
            <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
              {el.name}
            </Typography>
            <Typography sx={{ color: "#18BA51" }}>{el.price}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default FoodMap;
