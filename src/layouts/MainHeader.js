import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import useAuth from "../hooks/useAuth";
import Logo from "../components/Logo";
import { Avatar, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
function MainHeader() {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleProfileOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    try {
      handleMenuClose();
      await logout(() => {});
    } catch (error) {
      console.log(error);
    }
  };

  const renderMenu = (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <Box sx={{ my: 1.5, px: 1.5 }}>
        <Typography variant="subtitle2" noWrap>
          {user?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
          {user?.email}
        </Typography>
      </Box>

      <Divider sx={{ boderyStyle: "dashed" }} />
      <MenuItem
        onClick={handleMenuClose}
        to="/newfeed"
        component={RouterLink}
        sx={{ mx: 1 }}
      >
        {" "}
        NewFeeds
      </MenuItem>

      <MenuItem
        onClick={handleMenuClose}
        to="/"
        component={RouterLink}
        sx={{ mx: 1 }}
      >
        {" "}
        My Profile
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        to="/account"
        component={RouterLink}
        sx={{ mx: 1 }}
      >
        {" "}
        Account
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        to="/dashboard"
        component={RouterLink}
        sx={{ mx: 1 }}
      >
        {" "}
        Dashboard
      </MenuItem>

      <Divider sx={{ boderyStyle: "dashed" }} />
      <MenuItem onClick={handleLogout} sx={{ mx: 1 }}>
        {" "}
        Log out
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ mb: 3 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="/newfeed"
          >
            <Logo />
          </IconButton>
          <Link href="/newfeed" sx={{textDecoration: "none", color: "black"}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MIRACLE
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Avatar
              src={user.avatarUrl}
              alt={user.name}
              onClick={handleProfileOpen}
            />
          </Box>
          {renderMenu}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
