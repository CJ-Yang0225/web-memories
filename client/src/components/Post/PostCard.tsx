import React from "react";
import moment from "moment";
import styled from "@emotion/styled";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";

import { Post } from "../../api";

type Props = {
  post: Post;
};

const defaultImage =
  "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png";

function PostCard({ post }: Props) {
  return (
    <Container>
      <Thumbnail image={post.selectedFile || defaultImage} title={post.title} />
      <Overlay top="16px" left="16px">
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </Overlay>
      <Overlay top="16px" right="16px">
        <Button style={{ color: "white" }}>
          <Edit />
        </Button>
      </Overlay>
      <TagBox>
        <Typography
          variant="body2"
          color="textSecondary"
          component="h2"
        >{post.tags.map(tag => `#${tag} `)}</Typography>
      </TagBox>
      <Title variant="h5" component="h2">
        {post.title}
      </Title>
      <CardContent>
        <Typography variant="body2" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Container>
  );
}

const Container = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  height: 100%;
`;

const Thumbnail = styled(CardMedia)`
  padding-top: 56.25%;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
`;

type OverlayProps = {
  top?: string;
  left?: string;
  right?: string;
};

const Overlay = styled.div<OverlayProps>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  color: white;

  .MuiButton-root {
    border-radius: 100%;
    padding: 8px;
    min-width: min-content;

    &:hover {
      background-color: #0000003d;
    }
  }
`;

const Title = styled(Typography)<{ component: React.ElementType }>`
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const TagBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;
`;

export default PostCard;
