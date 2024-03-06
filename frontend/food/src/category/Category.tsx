import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function Category() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Image src="/Pinecone.png" alt="" width={41} height={41} />
        </div>
        <div className="flex gap-3">
          <div>
            <Typography className="text-[14px] ">НҮҮР</Typography>
          </div>
          <div>
            <Typography className="text-[14px] ">ХООЛНЫ ЦЭС</Typography>
          </div>
          <div>
            <Typography className="text-[14px] ">ХҮРГЭЛТИЙН БҮС</Typography>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
