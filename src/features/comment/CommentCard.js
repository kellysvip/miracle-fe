import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { fDate } from "../../utils/formatTime";
import CommentReaction from "./CommentReaction";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch } from "react-redux";
import { deleteComment, getComments } from "./commentSlice";

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

function CommentCard({ comment }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    handleCloseMenu();
  };

  const handleDeleteComment = () => {
    handleClose();
    const commentId = comment._id;
    const postId = comment.post;

    dispatch(deleteComment({ commentId }))
      .then(dispatch(getComments({ postId })))
      .then(dispatch(getComments({ postId })));
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
      <MenuItem onClick={handleCloseMenu} sx={{ mx: 1 }}>
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

  const renderModal = (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          You want delete this comment???
        </Typography>
        <Button onClick={handleDeleteComment}>DELETE</Button>
        <Button onClick={handleClose}>LATER</Button>
      </Box>
    </Modal>
  );
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt={comment.author?.name} src={comment.author?.avatarUrl} />
      <Paper sx={{ p: 1.5, flexGrow: 1, bgcolor: "background.neutral" }}>
        <Stack
          direction="row"
          alignItems={{ sm: "center" }}
          justifyContent="space-between"
          sx={{ mb: 0.5 }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {comment.author?.name}
          </Typography>
          <Stack alignItems={{ sm: "center" }} direction="row">
            <Typography variant="caption" sx={{ color: "text.disabled" }}>
              {fDate(comment.createdAt)}
            </Typography>
            <IconButton onClick={handleOpenMenu}>
              <MoreVertIcon sx={{ fontSize: 20 }} />
            </IconButton>
            {renderMenu}
          </Stack>
        </Stack>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {comment.content}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CommentReaction comment={comment} />
        </Box>
      </Paper>
      {renderModal}
    </Stack>
  );
}

export default CommentCard;
