"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Stack, Typography, boxClasses } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showPasswordSecond, setShowPasswordSecond] = useState(false);
  const handleClickShowPasswordSecond = () =>
    setShowPasswordSecond((show) => !show);

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        gap: "35px",
        mt: "74px",
        mb: "100px",
      }}
    >
      <Stack>
        <Typography sx={{ fontSize: "25px" }}>Бүртгүүлэх</Typography>
      </Stack>
      <Stack sx={{ gap: "10px" }}>
        <Stack sx={{ gap: "2px" }}>
          <Typography>Нэр</Typography>
          <InputBase
            placeholder="Нэрээ оруулна уу"
            sx={{
              border: "1px solid gray",
              width: "384px",
              height: "48px",
              bgcolor: "#ECEDF0",
              padding: "15px",
              borderRadius: "3px",
            }}
          ></InputBase>
        </Stack>
        <Stack sx={{ gap: "2px" }}>
          <Typography>И-мэйл</Typography>
          <InputBase
            placeholder="И-мэйл хаягаа оруулна уу"
            sx={{
              border: "1px solid gray",
              width: "384px",
              height: "48px",
              bgcolor: "#ECEDF0",
              padding: "15px",
              borderRadius: "3px",
            }}
          ></InputBase>
        </Stack>
        <Stack sx={{ gap: "2px" }}>
          <Typography>Хаяг</Typography>
          <InputBase
            placeholder="Та хаягаа оруулна уу"
            sx={{
              border: "1px solid gray",
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
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
            />
          </FormControl>
        </Stack>

        <Stack sx={{ gap: "2px" }}>
          <Typography>Нууц үг давтах</Typography>
          <FormControl sx={{ width: "384px", bgcolor: "#ECEDF0" }}>
            <InputLabel>Нууц үгээ оруулна уу</InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordSecond}
                >
                  {showPasswordSecond ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
            />
          </FormControl>
        </Stack>

        <Stack direction="row">
          <Checkbox />
          <Typography sx={{ mt: "8px" }}>
            Үйлчилгээний нөхцөл зөвшөөрөх
          </Typography>
        </Stack>
        <Stack>
          <InputBase
            sx={{
              bgcolor: "#EEEFF2",
              height: "48px",
              padding: "20px",
              borderRadius: "10px",
            }}
            placeholder="Бүртгүүлэх"
          ></InputBase>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SignUp;
