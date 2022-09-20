import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import useAuth from "../../hooks/useAuth";
import PostForm from "../posts/PostForm";
import PostList from "../posts/PostList";
import ProfileAbout from "./ProfileAbout";
import ProfileScorecard from "./ProfileScorecard";
import ProfileSocialInfo from "./ProfileSocialInfo";

const Profile = ({ profile }) => {
  const { user } = useAuth();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Stack spacing={3}>
          <ProfileScorecard profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileSocialInfo profile={profile} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={8}>
        <Stack spacing={3}>
          {user._id === profile._id && <PostForm />}
          <PostList userId={profile._id} />
        </Stack>
      </Grid>{" "}
    </Grid>
  );
};

export default Profile;
