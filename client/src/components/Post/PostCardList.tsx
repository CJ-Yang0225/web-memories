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
      {posts.map((post) => (
        <Grid key={post._id} item sm={6} md={6} xs={12}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PostCardList;
