import { IconButton, Stack } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { sendPostReaction } from "./postSlice";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';

function PostReaction({ post }) {
  const dispatch = useDispatch();
  const [emoji, setEmoji] = useState("dislike");
  const handleClick = (emoji) => {
    dispatch(sendPostReaction({ postId: post._id, emoji }));
  };

  return (
    <Stack direction="row" alignItems="center">
      <IconButton
        onClick={() => {
          handleClick(emoji);
          setEmoji(emoji === "like" ? "dislike" : "like");
        }}
      >
        {emoji === "like" ? (
          <FavoriteIcon sx={{ fontSize: "30px", color: "#e6255d" }} />
        ) : (
          <FavoriteBorderIcon sx={{ fontSize: "30px", color: "#111" }} />
        )}
      </IconButton>
      {/* <Typography variant="h6" mr={1}>
        {post?.reactions?.like}
      </Typography> */}

      {/* <IconButton onClick={() => handleClick("dislike")}>
        <ThumbDownAltRoundedIcon sx={{ fontSize: 20, color: "error.main" }} />
      </IconButton> */}
      {/* <Typography variant="h6">{post?.reactions?.dislike}</Typography> */}
    </Stack>
  );
}

export default PostReaction;
