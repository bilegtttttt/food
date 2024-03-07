"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        mt: "50px",
        mb: "70px",
      }}
    >
      <Stack>
        <Typography sx={{ fontSize: "25px" }}>Нэвтрэх</Typography>
      </Stack>
      <Stack>
        <Stack sx={{ gap: "30px" }}>
          <Stack sx={{ gap: "2px" }}>
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
          <Stack sx={{ gap: "2px" }}>
            <Typography>Нууц үг</Typography>
            <FormControl sx={{ width: "384px", bgcolor: "#ECEDF0" }}>
              <InputLabel>Нууц үгээ оруулна уу</InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                }
              />
            </FormControl>
            <Typography sx={{ ml: "250px", color: "#3F4145" }}>
              Нууц үг сэргээх
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: "20px", mt: "50px" }}>
          <Stack sx={{ bgcolor: "#ECEDF0" }}>
            <Button variant="outlined" disabled>
              <Typography> Нэвтрэх</Typography>
            </Button>
          </Stack>
          <Stack>
            <Button sx={{ color: "#3F4145" }} disabled>
              <Typography> Эсвэл</Typography>
            </Button>
          </Stack>
          <Stack>
            <Button variant="outlined" sx={{ color: "#3F4145" }} disabled>
              <Typography> Бүртгүүлэх</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Login;
