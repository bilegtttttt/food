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

  const [code, setCode] = useState("input value");
  console.log(code);

  const [email, setEmail] = useState("");
  const [result, setResult] = useState<any>();
  const [stage, setStage] = useState(0);

  const handlerClick = async () => {
    if (stage == 0) {
      try {
        const { data } = await axios.post("http://localhost:8000/forgot", {
          email: email,
        });
        setStage(stage + 1);
        console.log(data.result);
        setResult(data.result.toString());
      } catch (error) {}
    }
    if (stage == 1) {
      if (result !== code) {
        console.log("codoo dahin shalgan uu?");
      } else {
        setStage(stage + 1);
      }
    }
  };

  console.log(result);

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
        {stage === 1 && <SendEmailUser email={email} setCode={setCode} />}
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
