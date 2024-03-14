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
import Button from "@mui/material/Button";
import axios from "axios";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showPasswordSecond, setShowPasswordSecond] = useState(false);
  const handleClickShowPasswordSecond = () =>
    setShowPasswordSecond((show) => !show);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        address,
        password,
        rePassword,
      });
      router.push("/login");

      console.log(res.data);
    } catch (error) {}
  };

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
            onChange={(event) => setName(event.target.value)}
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
            onChange={(event) => setEmail(event.target.value)}
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
            onChange={(event) => setAddress(event.target.value)}
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
              onChange={(event) => setPassword(event.target.value)}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <IconButton onClick={handleClickShowPassword}>
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
              onChange={(event) => setRePassword(event.target.value)}
              type={showPasswordSecond ? "text" : "password"}
              endAdornment={
                <IconButton onClick={handleClickShowPasswordSecond}>
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
          <Button
            onClick={handleSubmit}
            className="w-[384px] h-[48px] bg-[#18BA51] p-[15px] rounded-xl"
          >
            <Typography sx={{ color: "black" }}>Бүртгүүлэх</Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SignUp;
