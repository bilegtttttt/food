"use client";
import React, { useState } from "react";
import { Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { FoodPng } from "../foods/foodPng/FoodPng";

interface OrderProps {}

const Order: React.FC<OrderProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };

  const handlePrev = () => {
    setCount(count - 1);
  };

  return (
    <Stack>
      <Button onClick={toggleModal}>haha</Button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <Typography variant="h3" color="white">
            Order
          </Typography>
          <OrderDetails
            count={count}
            handlePlus={handlePlus}
            handlePrev={handlePrev}
          />
        </Modal>
      )}
    </Stack>
  );
};

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <Stack
      className="fixed top-1 left-1/2 -translate-x-1/2 z-50 bg-[#00000080] w-screen h-screen"
      onClick={onClose}
    >
      <Stack
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <Button onClick={onClose}>Close</Button>
      </Stack>
    </Stack>
  );
};

interface OrderDetailsProps {
  count: number;
  handlePlus: () => void;
  handlePrev: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
  count,
  handlePlus,
  handlePrev,
}) => {
  return (
    <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
      <Stack
        direction="row"
        sx={{
          width: "981px",
          height: "564px",
          padding: "32px",
          gap: "33px",
          borderRadius: "16px",
          bgcolor: "#FFFFFF",
          zIndex: "51",
        }}
      >
        <Stack>
          <Image src="/pizza.png" alt="" width={500} height={500} />
        </Stack>
        <Stack>
          <Stack sx={{ alignItems: "end" }}>
            <CloseIcon />
          </Stack>
          <Stack sx={{ gap: "32px" }}>
            <Typography sx={{ fontSize: "28px" }}>Main Pizza </Typography>
            <Typography sx={{ color: "#18BA51" }}>34,800₮ </Typography>

            <Stack sx={{ gap: "5px" }}>
              <Typography sx={{ fontSize: "20px" }}>Орц </Typography>
              <Typography sx={{ bgcolor: "#F6F6F6", fontSize: "16px" }}>
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
              </Typography>
            </Stack>

            <Stack sx={{ gap: "5px" }}>
              <Stack>
                <Typography sx={{ fontSize: "20px" }}>Тоо</Typography>
              </Stack>
              <Stack sx={{ justifyContent: "space-between" }} direction="row">
                <Button
                  className="w-[3px] h-[25px] bg-[#18BA51] "
                  onClick={handlePrev}
                >
                  -
                </Button>
                <Typography>{count}</Typography>
                <Button
                  className="w-[3px] h-[25px] bg-[#18BA51] "
                  onClick={handlePlus}
                >
                  +
                </Button>
              </Stack>
            </Stack>

            <Stack
              sx={{
                alignItems: "center",
                width: "410px",
                height: "48px",
                borderRadius: "4px",
                padding: "8px",
                bgcolor: "#18BA51",
                color: "white",
              }}
            >
              Сагслах
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Order;
