import React from "react";
import styled from "@emotion/styled";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "../images/memories.png";
import PostCardList from "./PostCard";
import Form from "./Form";

function Home() {
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
          <Grid container justify="space-between" spacing={3}>
            <Grid item sm={7} xs={12}>
              <PostCardList />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Form />
            </Grid>
          </Grid>
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
  margin: 24px 0;
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

export default Home;
