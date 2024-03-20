import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const profileFields = [
  {
    icon: <PersonOutlineIcon />,
    label: "Таны нэр",
    value: "УгтахБаяр",
  },
  {
    icon: <LocalPhoneOutlinedIcon />,
    label: "Утасны дугаар",
    value: "88883345",
  },
  {
    icon: <MarkEmailUnreadOutlinedIcon />,
    label: "Имэйл хаяг",
    value: "Ugtakhbayr@gmail.com",
  },
  // Add more fields as needed
];

export default function Profile() {
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center", my: "50px" }}>
      <Stack>
        <Stack sx={{ gap: "30px", alignItems: "center" }}>
          <Image src="/gay.png" alt="" width={120} height={120} />
          <Typography sx={{ fontSize: "28px" }}>Jigii</Typography>
        </Stack>
        <Stack sx={{ gap: "20px" }}>
          {profileFields.map((field, index) => (
            <Stack
              key={index}
              direction="row"
              sx={{
                justifyContent: "center",
                width: "392px",
                height: "64px",
                bgcolor: "#F6F6F6",
                borderRadius: "4px",
                padding: "10px",
                gap: "200px",
                px: "30px",
              }}
            >
              <Stack sx={{ gap: "10px" }} direction="row">
                <Stack
                  sx={{
                    width: "48px",
                    height: "48px",
                    bgcolor: "white",
                    borderRadius: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {field.icon}
                </Stack>
                <Stack>
                  <Typography sx={{ fontSize: "12px", color: "#888A99" }}>
                    {field.label}
                  </Typography>
                  <Typography sx={{ fontSize: "16px", color: "#0D1118" }}>
                    {field.value}
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <ModeEditOutlineOutlinedIcon
                  sx={{ color: "#18BA51", mt: "7px" }}
                />
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack direction="row" sx={{ my: "30px", gap: "10px" }}>
          <Stack
            sx={{
              width: "48px",
              height: "48px",
              border: "1px solid gray",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AccessTimeOutlinedIcon />
          </Stack>

          <Typography sx={{ mt: "13px" }}>Захиалгын түүх</Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: "10px" }}>
          <Stack
            sx={{
              width: "48px",
              height: "48px",
              border: "1px solid gray",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LoginOutlinedIcon />
          </Stack>

          <Typography sx={{ mt: "13px" }}>Гарах</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
