import { Stack } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";

const BlankLayout = () => {
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Logo />
      <Outlet />
    </Stack>
  );
};

export default BlankLayout;
