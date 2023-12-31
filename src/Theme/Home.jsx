import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const Home = () => {
  const data = useSelector((storeData) => {
    return storeData;
  });
  return (
    <Box
      height={"92vh"}
      textAlign={"center"}
      padding={"20px"}
      backgroundColor={data.themeMode === "dark" ? "#3a3b3f" : "#fff"}
      color={data.themeMode === "dark" ? "#fff" : "#3a3b3f"}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Box>
  );
};