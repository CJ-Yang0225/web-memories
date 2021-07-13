import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { Container, Grow, Grid } from "@material-ui/core";

import { PostCardList } from "./Post";
import Form from "./Form";
import { getAllPosts } from "../actions/posts";
import { useModalState } from "../hooks/useModalState";
import { Snackbar } from "./Snackbar";

function Home() {
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const dispatch = useDispatch();
  const formSnackbar = useModalState();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <GridContainer container justify="space-between" spacing={2}>
          <Grid item sm={8} xs={12}>
            <PostCardList setCurrentPostId={setEditingPostId} />
          </Grid>
          <Grid item sm={4} xs={12}>
            <Form
              postId={editingPostId}
              setEditingPostId={setEditingPostId}
              onSubmit={formSnackbar.open}
            />
            <Snackbar
              visible={formSnackbar.isVisible}
              message="Operated successfully."
              onClose={formSnackbar.close}
            />
          </Grid>
        </GridContainer>
      </Container>
    </Grow>
  );
}

const GridContainer = styled(Grid)`
  position: relative;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export default Home;
