import React from "react";
import { Stack, Typography } from "@mui/material";
import MainFoods from "./mainFoods/page";

function Foods() {
  return (
    <Stack sx={{ gap: "50px", mb: "100px" }}>
      <MainFoods />
    </Stack>
  );
}

export default Foods;
