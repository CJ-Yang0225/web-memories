import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

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
      {isLoading ? <ProgressSpinner /> : renderPosts()}
    </Grid>
  );
}

const ProgressSpinner = styled(CircularProgress)`
  margin-left: calc((100% - 40px) / 2);
  margin-top: 16px;
`;

export default PostCardList;
