import React from "react";
import Image from "next/image";
import { Stack, Typography, boxClasses } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function Footer() {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        bgcolor: ["#18BA51"],
        width: "full",
        height: ["450px"],
      }}
    >
      <Stack direction="row" sx={{ gap: "10px" }}>
        <Image src="/Main.png" alt="" width={20} height={20} />
        <Typography sx={{ color: "white", fontSize: "20px" }}>
          Food Delivery
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ gap: "120px" }}>
        <Typography
          sx={{
            color: "white",
            borderBottom: "1px solid white",
            fontSize: "16px",
          }}
        >
          Food Delivery
        </Typography>
        <Typography
          sx={{
            color: "white",
            borderBottom: "1px solid white",
            fontSize: "16px",
          }}
        >
          Food Delivery
        </Typography>
        <Typography
          sx={{
            color: "white",
            borderBottom: "1px solid white",
            fontSize: "16px",
          }}
        >
          Food Delivery
        </Typography>
        <Typography
          sx={{
            color: "white",
            borderBottom: "1px solid white",
            fontSize: "16px",
          }}
        >
          Food Delivery
        </Typography>
        <Typography
          sx={{
            color: "white",
            borderBottom: "1px solid white",
            fontSize: "16px",
          }}
        >
          Food Delivery
        </Typography>
        <Typography
          sx={{
            color: "white",
            borderBottom: "1px solid white",
            fontSize: "16px",
          }}
        >
          Food Delivery
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          gap: "15px",
        }}
      >
        <Image src="/facebook.png" alt="" width={40} height={46} />
        <Image src="/instagram.png" alt="" width={40} height={46} />
        <Image src="/twitter.png" alt="" width={40} height={46} />
      </Stack>
      <Stack
        sx={{
          borderTop: "1px solid white",
          width: "1200px",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <Typography
          sx={{ color: "white", fontSize: "25px", alignContent: "center" }}
        >
          © 2024 Pinecone Foods LLC
        </Typography>
        <Typography sx={{ color: "white", fontSize: "20px" }}>
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Typography>
      </Stack>
    </Stack>
  );
}
