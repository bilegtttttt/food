"use client";
import React, { useState } from "react";
import { Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import { MouseEvent } from "react";

interface FoodCatalog {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
}

interface FoodType {
  foodData: FoodCatalog[];
}

const HomeFoodMap: React.FC<FoodType> = ({ foodData }) => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePlus = () => setCount((prevCount) => prevCount + 1);
  const handlePrew = () => setCount((prevCount) => Math.max(prevCount - 1, 0));
  const [foundFood, setFoundFood] = useState<any>();
  console.log(foodData, "pasdaa");

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "961px",
    height: "524px",
    gap: "20px",
    p: 1,
    borderRadius: "16px",
    backgroundColor: "white",
  };
  const handleFoodClick = (event: MouseEvent<HTMLDivElement>) => {
    const foodId = event.currentTarget.id;

    const filteredFood = foodData.find(({ _id }) => _id === foodId);

    setFoundFood(filteredFood);
    handleOpen();
  };
  console.log(foundFood);

  return (
    <Stack direction="row" spacing={2}>
      {foodData?.map((el, index) => (
        <Stack
          key={index}
          spacing={2}
          sx={{
            width: "282px",
            height: "256px",
            border: "1px solid gray",
            cursor: "pointer",
            borderRadius: "10px",
            display: "flex",
            flexWrap: "wrap",
            position: "relative",
          }}
          onClick={handleFoodClick}
          id={el._id}
        >
          <Image
            className="rounded-xl absolute"
            // width={282}
            // height={256}
            fill
            src={el.image}
            alt={el.name}
          />
          <Stack>
            <Typography>{el.name}</Typography>
            <Typography sx={{ color: "#18BA51" }}>{el.price}₮</Typography>
          </Stack>
        </Stack>
      ))}
      <Modal open={open} onClose={handleClose}>
        <Stack
          direction="row"
          sx={{ justifyContent: "center", alignItems: "center", gap: "40px" }}
          style={style}
        >
          <Stack>
            <Image width={450} height={450} src={foundFood?.image} alt="" />
          </Stack>

          <Stack sx={{ gap: "20px" }}>
            <Stack sx={{ alignItems: "flex-end" }}>
              <ClearIcon onClick={handleClose} />
            </Stack>
            <Stack sx={{ gap: "50px" }}>
              <Stack sx={{ gap: "20px" }}>
                <Typography sx={{ fontSize: "26px" }}>
                  {foundFood?.name}
                </Typography>
                <Typography sx={{ fontSize: "18px", color: "#18BA51" }}>
                  {foundFood?.price}₮
                </Typography>
              </Stack>
              <Stack sx={{ gap: "20px" }}>
                <Typography sx={{ fontSize: "18px" }}>Орц</Typography>
                <Typography
                  sx={{
                    bgcolor: "#F6F6F6",
                    fontSize: "18px",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                >
                  {foundFood?.ingeredients}
                </Typography>
              </Stack>
              <Stack sx={{ gap: "17px" }}>
                <Stack>
                  <Typography>Тоо</Typography>
                </Stack>
                <Stack sx={{ justifyContent: "space-between" }} direction="row">
                  <Button
                    className="bg-[#18BA51] w-[45px] h-[45px] text-white"
                    onClick={handlePrew}
                  >
                    -
                  </Button>
                  <Typography sx={{ fontSize: "16px", mt: "10px" }}>
                    {count}
                  </Typography>
                  <Button
                    className="bg-[#18BA51] w-[45px] h-[45px] text-white"
                    onClick={handlePlus}
                  >
                    +
                  </Button>
                </Stack>
                <Stack
                  sx={{
                    width: "430px",
                    height: "48px",
                    borderRadius: "4px",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px",
                    bgcolor: "#18BA51",
                    color: "white",
                  }}
                >
                  Сагслах
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
};

export default HomeFoodMap;
