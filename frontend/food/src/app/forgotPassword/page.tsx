import React from "react";
import { Stack, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import sendEmailUser from "./sendEmailUser";

export default function ForgotPassword() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        mt: "100px",
        mb: "100px",
        gap: "30px",
      }}
    >
      <Stack>
        <Typography sx={{ fontSize: "20px" }}>Нууц үг сэргээх</Typography>
      </Stack>

      <Stack sx={{ gap: "40px", mb: "20px" }}>
        <Stack>
          <Typography>Имэйл </Typography>
          <InputBase
            placeholder="Имэйл хаягаа оруулна уу"
            sx={{
              width: "384px",
              height: "48px",
              bgcolor: "#ECEDF0",
              padding: "15px",
              borderRadius: "3px",
            }}
          ></InputBase>
        </Stack>
        <Stack sx={{ justifyContent: "center" }}>
          <Button
            href="./sendEmailUser"
            className="w-[384px] h-[48px] bg-[#18BA51] p-[15px] rounded-xl"
          >
            <Typography sx={{ color: "black" }}>Үргэлжлүүлэх</Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
