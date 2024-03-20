"use client";
import { useState } from "react";
import Image from "next/image";
import { Stack, Typography, boxClasses } from "@mui/material";
import Box from "@mui/material/Box";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import InputBase from "@mui/material/InputBase";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export function Header() {
  const [search, setSearch] = useState("");
  console.log(search);
  const { push } = useRouter();

  const handlerClick = () => {
    if (search === "") {
      push("/");
    } else {
      push(`/searchNotFound?id=${search}`);
    }
  };

  const header = [
    {
      title: "НҮҮР",
      href: "/",
    },
    { title: "ХООЛНЫ ЦЭС", href: "/menu" },
    { title: "ХҮРГЭЛТИЙН БҮС", href: "/delivery" },
  ];

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
          {header.map((el, index) => {
            return (
              <Stack key={index}>
                <Link href={el.href}>{el.title}</Link>
              </Stack>
            );
          })}
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
          <div onClick={handlerClick}>
            <SearchOutlinedIcon className="-mt-2" />
          </div>
          <InputBase
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Хайх"
          />
        </Stack>

        <Stack direction="row" sx={{ gap: "20px" }}>
          <ShoppingBasketOutlinedIcon className="mt-2" />
          <Link href="/basket">
            <Typography sx={{ paddingTop: "10px" }}>Сагс</Typography>
          </Link>
          <Link href="/profile">
            <PermIdentityOutlinedIcon className="mt-2" />
          </Link>

          <Link href="/login">
            <Typography sx={{ paddingTop: "10px" }}>Нэвтрэх</Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
