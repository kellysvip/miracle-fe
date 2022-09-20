import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

const MainLayout = () => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />
      <Outlet />
      <Box sx={{flexGrow: 1}}/>
      <MainFooter />
    </Stack>
  );
};

export default MainLayout;
