import React from "react";
import { useSelector } from "react-redux";

import PostCard from "./PostCard";
import { Grid } from "@material-ui/core";
import { RootState } from "../../store";

function PostCardList() {
  const posts = useSelector((state: RootState) => state.postsReducer);

  console.log(posts);
  return (
    <Grid container spacing={3}>
      <PostCard />
      <PostCard />
      <PostCard />
    </Grid>
  );
}

export default PostCardList;
