"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Email from "../forgotPasswordComponent/Email";
import SendEmailUser from "../forgotPasswordComponent/SendEmailUser";
import NuutsUg from "../forgotPasswordComponent/NuutsUg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ForgotPassword() {
  const { push } = useRouter();

  const [email, setEmail] = useState("");
  const [data, setData] = useState({
    email: "",
    otp: "",
    password: "",
    name: "",
  });
  console.log(email, "dfgd");

  const [stage, setStage] = useState(0);

  const handlerClick = async () => {
    try {
      const res = await axios.post("http://localhost:8000/forgot", {
        email: email,
      });

      console.log(res);
    } catch (error) {}

    if (stage === 2) {
      push("/login");
    } else {
      setStage(stage + 1);
    }
  };

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
        {stage === 0 && <Email setEmail={setEmail} />}
        {stage === 1 && <SendEmailUser email={email} />}
        {stage === 2 && <NuutsUg />}

        <Stack sx={{ justifyContent: "center" }}>
          <Button
            onClick={handlerClick}
            className="w-[384px] h-[48px] bg-[#18BA51] p-[15px] rounded-xl"
          >
            <Typography sx={{ color: "black" }}>Үргэлжлүүлэх</Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
