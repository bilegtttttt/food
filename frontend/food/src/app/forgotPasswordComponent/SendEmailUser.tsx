"use client";
import React from "react";
import { useState } from "react";
import { Stack, Typography, boxClasses } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function sendEmailUser({ email }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Stack sx={{ gap: "40px" }}>
      <Stack>
        <Typography sx={{ color: "#695C08", width: "384px" }}>
          Таны <Typography sx={{ color: "#18BA51" }}>{email}</Typography> хаяг
          руу сэргээх код илгээх болно.
        </Typography>
      </Stack>

      <Stack>
        <Typography>Нууц үг сэргээх код</Typography>
        <FormControl sx={{ width: "384px", bgcolor: "#ECEDF0" }}>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
          />
        </FormControl>
      </Stack>
    </Stack>
  );
}

export default sendEmailUser;
