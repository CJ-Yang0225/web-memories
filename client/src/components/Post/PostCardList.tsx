import React from "react";
import { useSelector } from "react-redux";

import PostCard from "./PostCard";
import { Grid, CircularProgress } from "@material-ui/core";
import { RootState } from "../../store";
import { Post } from "../../types";

type Props = {
  setCurrentPostId: (id: string | null) => void;
};

function PostCardList({ setCurrentPostId }: Props) {
  const posts = useSelector((state: RootState) => state.postsReducer);
  const isLoading = posts.length === 0;
  const renderPosts = () =>
    posts.map((post: Post) => (
      <Grid key={post._id} item xs={12} sm={6} md={6}>
        <PostCard post={post} onSelect={setCurrentPostId} />
      </Grid>
    ));

  return (
    <Grid container spacing={2}>
      {isLoading ? (
        <>
          <CircularProgress
            style={{
              marginLeft: "calc((100% - 64px)/2)",
              marginTop: "2rem",
              width: "48px",
              height: "48px",
            }}
          />
        </>
      ) : (
        renderPosts()
      )}
    </Grid>
  );
}

export default PostCardList;
