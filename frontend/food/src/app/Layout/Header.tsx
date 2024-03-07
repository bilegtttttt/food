import React from "react";
import Image from "next/image";
import { Stack, Typography, boxClasses } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import InputBase from "@mui/material/InputBase";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        borderRadius: "10px",
        maxHeight: "57px",
        gap: "250px",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <Box component="section" sx={{ p: 2, border: "1px" }}>
        <Stack direction="row" sx={{ gap: "40px" }}>
          <Image src="/Pinecone.png" alt="" width={20} height={20} />
          <Typography sx={{}}>НҮҮР</Typography>
          <Typography sx={{}}>ХООЛНЫ ЦЭС</Typography>
          <Typography sx={{}}>ХҮРГЭЛТИЙН БҮС</Typography>
        </Stack>
      </Box>
      <Stack direction="row" sx={{ gap: "30px" }}>
        <Stack
          direction="row"
          sx={{
            border: "1px solid black",
            borderRadius: "10px",
            width: "260px",
            height: "40px",
            padding: "15px",
            gap: "3px",
            mt: "4px",
          }}
        >
          <SearchOutlinedIcon className="-mt-2" />
          <InputBase placeholder="Хайх" />
        </Stack>
        <Stack direction="row" sx={{ gap: "20px" }}>
          <ShoppingBasketOutlinedIcon className="mt-2" />
          <Typography sx={{ paddingTop: "10px" }}>Сагс</Typography>
          <PermIdentityOutlinedIcon className="mt-2" />
          <Typography sx={{ paddingTop: "10px" }}>Нэвтрэх</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
