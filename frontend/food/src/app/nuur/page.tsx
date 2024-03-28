import Image from "next/image";
import { Container } from "postcss";
import { Stack, TextField, Typography } from "@mui/material";
import { IoBookOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { GiCabbage } from "react-icons/gi";

function NuurPage() {
  return (
    <Stack>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mt: "20px",
        }}
      >
        <Image
          className="rounded-xl"
          src="/food1.png"
          width={1200}
          height={788}
          alt=""
        />
      </Stack>
      <Stack
        direction="row"
        sx={{
          gap: "47px",
          justifyContent: "center",
          alignItems: "center",
          my: "50px",
        }}
      >
        <Stack
          sx={{
            width: "264px",
            height: "155px",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid gray",
            gap: "15px",
          }}
        >
          <IoBookOutline className="text-[green]" />
          <Typography sx={{ fontSize: "18px" }}>
            Хүргэлтийн төлөв хянах
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "14px" }}>
            Захиалга бэлтгэлийн явцыг хянах
          </Typography>
        </Stack>

        <Stack
          sx={{
            width: "264px",
            height: "155px",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid gray",
            gap: "15px",
          }}
        >
          <IoMdTime className="text-[green]" />
          <Typography sx={{ fontSize: "18px" }}>
            Эрүүл, баталгаат орц
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "14px" }}>
            Захиалга бэлтгэлийн явцыг хянах
          </Typography>
        </Stack>

        <Stack
          sx={{
            width: "264px",
            height: "155px",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid gray",
            gap: "15px",
          }}
        >
          <GiCabbage className="text-[green]" />
          <Typography sx={{ fontSize: "18px" }}>
            Эрүүл, баталгаат орц
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "14px" }}>
            Захиалга бэлтгэлийн явцыг хянах
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: "264px",
            height: "155px",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid gray",
            gap: "15px",
          }}
        >
          <IoBookOutline className="text-[green]" />
          <Typography sx={{ fontSize: "18px" }}>
            Хоолны өргөн сонголт
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "14px" }}>
            Захиалга бэлтгэлийн явцыг хянах
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default NuurPage;
