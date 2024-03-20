"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

type IntrinsicAttributes = any;

type Foods = {
  data: FoodType[] & IntrinsicAttributes;
};

export const SearchMap = (props: Foods) => {
  const { data } = props;
  console.log(data);

  return (
    <Stack>
      {data?.length > 0 ? (
        <Stack
          direction="row"
          sx={{
            my: "50px",
            justifyContent: "center",
            alignItems: "center",
            gap: "17px",
          }}
        >
          {data?.map((el: FoodType, index: number) => (
            <Stack sx={{ width: "286px", height: "256px", gap: "14px" }}>
              <Stack
                sx={{
                  position: "relative",
                  width: "282px",
                  height: "186px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              >
                <Image className="absolute" src={el.image} alt="" fill />
              </Stack>

              <Stack
                sx={{
                  height: "56px",
                  gap: "2px",
                  paddingLeft: "10px",
                }}
              >
                <Typography
                  sx={{ color: "black", fontSize: "18px", fontWeight: "600" }}
                >
                  {el.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "#18BA51",
                  }}
                >
                  {el.price}₮
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      ) : (
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            padding: "170px 100px",
          }}
        >
          <Image alt="" src="/box.png" width={133} height={133} />
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", color: "#8B8E95" }}
          >
            Уучлаарай илэрц олдсонгүй...
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};
