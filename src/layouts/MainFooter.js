import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" p={1}>
      {"Copyright @"}
      <Link  color="inherit" href="https://www.facebook.com/tri.nguyenhuu.3979">
        Kelly
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default MainFooter;
