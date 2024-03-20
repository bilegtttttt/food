import React from "react";
import { Stack, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";

export default function writeEmail() {
  return (
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
  );
}
