import React, {  useState } from "react";
import {
  Box,
  Link,
  Card,
  Stack,
  Avatar,
  Typography,
  CardHeader,
  IconButton,
  Menu,
  Divider,
  MenuItem,
  Modal,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { fDate } from "../../utils/formatTime";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import PostReaction from "./PostReaction";
import CommentForm from "../comment/CommentForm";
import CommentList from "../comment/CommentList";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { deletePost, getPosts } from "./postSlice";
import PostFormChange from "./PostFormChange";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
};

function PostCard({ post }) {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    handleCloseMenu();
  };
  const userId = user._id;
  const postId = post._id;
  const [openModalChange, setOpenModalChange] = useState(false);
  const handleOpenModalChange = () => setOpenModalChange(true);
  const handleCloseModalChange = () => {
    setOpenModalChange(false);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleOpenMenu = (event) => {
    if (userId === post.author._id) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleDeletePost = () => {
    handleClose();
    
    if (post.author._id === user._id) {
      dispatch(deletePost({ postId }));
      dispatch(getPosts({ userId }));
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
      onClose={handleCloseMenu}
    >
      <MenuItem onClick={handleOpenModalChange} sx={{ mx: 1 }}>
        {" "}
        Change
      </MenuItem>
      <Divider sx={{ boderyStyle: "dashed" }} />
      <MenuItem onClick={handleOpen} sx={{ mx: 1 }}>
        {" "}
        Delete
      </MenuItem>
    </Menu>
  );

  const renderModalDelete = (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          You want delete this post???
        </Typography>
        <Button onClick={handleDeletePost}>DELETE</Button>
        <Button onClick={handleClose}>LATER</Button>
      </Box>
    </Modal>
  );

  const renderModalChange = (
    <Modal
      open={openModalChange}
      onClose={handleCloseModalChange}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <PostFormChange postId={post._id} userId={userId} />
      </Box>
    </Modal>
  );
  return (
    <Card>
      <CardHeader
        disableTypography
        avatar={
          <Avatar src={post?.author?.avatarUrl} alt={post?.author?.name} />
        }
        title={
          <Link
            variant="subtitle2"
            color="text.primary"
            component={RouterLink}
            sx={{ fontWeight: 600 }}
            to={`/user/${post.author._id}`}
          >
            {post?.author?.name}
          </Link>
        }
        subheader={
          <Typography
            variant="caption"
            sx={{ display: "block", color: "text.secondary" }}
          >
            {fDate(post.createdAt)}
          </Typography>
        }
        action={
          <IconButton onClick={handleOpenMenu}>
            <MoreVertIcon sx={{ fontSize: 30 }} />
          </IconButton>
        }
      />
      {renderMenu}

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography>{post.content}</Typography>

        {post.image && (
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              height: 300,
              "& img": { objectFit: "cover", width: 1, height: 1 },
            }}
          >
            <img src={post.image} alt="post" />
          </Box>
        )}

        <PostReaction post={post} />
        <CommentList postId={post._id} />
        <CommentForm postId={post._id} />
      </Stack>
      {renderModalDelete}
      {renderModalChange}
    </Card>
  );
}

export default PostCard;
