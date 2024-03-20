"use client";
import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { FoodPng } from "../foods/foodPng/FoodPng";

function Menu() {
  const changeColor = {
    bg: "green",
    color: "white",
  };

  const categoryStyle = {
    border: "1px solid gray",
    width: "280px",
    height: "43px",
    borderRadius: "8px",
    padding: "8px",
    textAlign: "center",
  };

  const [color, setColor] = useState();
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        gap: "60px",
        mt: "30px",
        mb: "30px",
      }}
    >
      <Stack direction="row" sx={{ gap: "25px" }}>
        <Typography sx={categoryStyle}>Breakfast</Typography>
        <Typography sx={categoryStyle}>Soup</Typography>
        <Typography sx={categoryStyle}>Main Course</Typography>
        <Typography sx={categoryStyle}>Dessert</Typography>
      </Stack>
      <Stack>
        <FoodPng />
      </Stack>
    </Stack>
  );
}

export default Menu;

// import React, { useState } from "react";
// import { Stack, Typography } from "@mui/material";
// import { FoodPng } from "../foods/foodPng/FoodPng";

// function Menu() {
//   // State to track the selected category
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   // Function to handle category click
//   const handleCategoryClick = (category: string) => {
//     setSelectedCategory(category);
//   };

//   // Inline style object for category
//   const categoryStyle = {
//     border: "1px solid gray",
//     width: "280px",
//     height: "43px",
//     borderRadius: "8px",
//     padding: "8px",
//     textAlign: "center",
//     cursor: "pointer", // Add cursor pointer to indicate clickable
//     backgroundColor: selectedCategory === category ? "green" : "transparent",
//     color: selectedCategory === category ? "white" : "black",
//   };

//   return (
//     <Stack
//       sx={{
//         alignItems: "center",
//         justifyContent: "center",
//         gap: "60px",
//         mt: "30px",
//         mb: "30px",
//       }}
//     >
//       <Stack direction="row" sx={{ gap: "25px" }}>
//         <Typography
//           sx={categoryStyle}
//           onClick={() => handleCategoryClick("Breakfast")}
//         >
//           Breakfast
//         </Typography>
//         <Typography
//           sx={categoryStyle}
//           onClick={() => handleCategoryClick("Soup")}
//         >
//           Soup
//         </Typography>
//         <Typography
//           sx={categoryStyle}
//           onClick={() => handleCategoryClick("Main Course")}
//         >
//           Main Course
//         </Typography>
//         <Typography
//           sx={categoryStyle}
//           onClick={() => handleCategoryClick("Dessert")}
//         >
//           Dessert
//         </Typography>
//       </Stack>
//     </Stack>
//   );
// }

// export default Menu;
