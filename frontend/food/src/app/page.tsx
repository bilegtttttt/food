import Image from "next/image";
import { Container } from "postcss";
import { Stack, TextField, Typography } from "@mui/material";
import NuurPage from "./nuur/page";
import Foods from "./foods/page";

export default function Home() {
  return (
    <Stack>
      <NuurPage />
      <Foods />
    </Stack>
  );
}
