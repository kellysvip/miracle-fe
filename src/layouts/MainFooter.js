import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" p={1}>
      {"Copuright @"}
      <Link  color="inherit" href="https://www.coderschool.vn/en/">
        CoderSchool
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default MainFooter;
