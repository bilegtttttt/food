"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function NuutsUg() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const handleClickShowPasswordTwo = () => setShowPasswordTwo((show) => !show);

  return (
    <Stack>
      <Typography>Нууц үг</Typography>
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
      <Typography>Нууц үг давтах</Typography>
      <FormControl sx={{ width: "384px", bgcolor: "#ECEDF0" }}>
        <OutlinedInput
          type={showPasswordTwo ? "text" : "password"}
          endAdornment={
            <IconButton onClick={handleClickShowPasswordTwo}>
              {showPasswordTwo ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          }
        />
      </FormControl>
    </Stack>
  );
}

export default NuutsUg;
