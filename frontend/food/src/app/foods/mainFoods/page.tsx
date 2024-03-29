import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HomeFood from "@/components/homeFood/HomeFood";

function MainFoods() {
  return (
    <Stack sx={{ gap: "30px" }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", px: "300px" }}
      >
        <Stack direction="row" sx={{ gap: "5px" }}>
          <Image src="/Star.png" alt="" width={32} height={32} />
          <Typography sx={{ fontSize: "22px", color: "#272727" }}>
            Үндсэн хоол
          </Typography>
        </Stack>
        <Stack direction="row">
          <Stack sx={{ fontSize: "14px", color: "#18BA51" }}>
            Бүгдийг харах
          </Stack>
          <KeyboardArrowRightIcon sx={{ color: "#18BA51" }} />
        </Stack>
      </Stack>
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <HomeFood />
      </Stack>
    </Stack>
  );
}

export default MainFoods;
