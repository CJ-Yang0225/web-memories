import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { memories } from "../assets";
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
    <Container maxWidth="lg">
      <Header position="static" color="inherit">
        <Title variant="h2" align="center">
          Web Memories
        </Title>
        <Image src={memories} alt="Memories.png" height="60" />
      </Header>
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
    </Container>
  );
}

const Header = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 16px 24px;
  border-radius: 16px;
`;

const Title = styled(Typography)`
  font-size: calc(1rem + 4vh);
  color: rgb(0, 183, 255);
`;

const Image = styled.img`
  margin-left: 16px;
`;

const GridContainer = styled(Grid)`
  position: relative;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export default Home;
