import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard";
import { getPosts } from "./postSlice";

const PostList = ({ userId }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { currentPagePost, postsById, totalPosts, isLoading } = useSelector(
    (state) => state.post
  );

  const posts = currentPagePost.map((postId) => postsById[postId]);
  useEffect(() => {
    if (userId) {
      dispatch(getPosts({ userId, page }));
    }
  }, [userId, page, dispatch]);

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {totalPosts ? (
          <LoadingButton
            size="small"
            loading={isLoading}
            onClick={() => setPage((page) => page + 1)}
          >
            Load more
          </LoadingButton>
        ) : (
          <Typography variant="j6">No Post Yet</Typography>
        )}
      </Box>
    </>
  );
};

export default PostList;
