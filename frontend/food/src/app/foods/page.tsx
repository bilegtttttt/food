import React from "react";
import { Stack, Typography } from "@mui/material";
import SaleFoods from "./saleFoods/page";
import MainFoods from "./mainFoods/page";
import Salaad from "./salaad/page";
import Dessert from "./dessert/page";

function Foods() {
  return (
    <Stack>
      <SaleFoods />
      <MainFoods />
      <Salaad />
      <Dessert />
    </Stack>
  );
}

export default Foods;
