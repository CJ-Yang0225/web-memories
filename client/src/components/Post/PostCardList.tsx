import React from "react";
import { useSelector } from "react-redux";

import PostCard from "./PostCard";
import { Grid, CircularProgress } from "@material-ui/core";
import { RootState } from "../../store";

function PostCardList() {
  const posts = useSelector((state: RootState) => state.postsReducer);
  const isLoading = posts.length === 0;
  const renderPosts = () =>
    posts.map((post) => (
      <Grid key={post._id} item sm={6} md={6} xs={12}>
        <PostCard post={post} />
      </Grid>
    ));

  return (
    <Grid container spacing={3}>
      {isLoading ? <CircularProgress /> : renderPosts()}
    </Grid>
  );
}

export default PostCardList;
