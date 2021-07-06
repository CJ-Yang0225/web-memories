import React from "react";
import { useDispatch } from "react-redux";
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
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";

import { Post } from "../../types";
import { DEFAULT_IMAGE } from "../../lib/constants";
import { deletePost } from "../../actions/posts";

type Props = {
  post: Post;
  onSelect: (id: string) => void;
};

const checkImage = (base64: string) => {
  if (base64.indexOf("data:image/") === -1) {
    return DEFAULT_IMAGE;
  }
  return base64;
};

function PostCard({ post, onSelect: emitSelect }: Props) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    emitSelect(post._id);
  };

  return (
    <Container>
      <Thumbnail image={checkImage(post.selectedFile)} title={post.title} />
      <Overlay top="16px" left="16px">
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </Overlay>
      <Overlay top="16px" right="16px">
        <Button style={{ color: "white" }} onClick={handleEdit}>
          <Edit />
        </Button>
      </Overlay>
      <TagBox>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </TagBox>
      <Title variant="h5" color="textPrimary" component="h2">
        {post.title}
      </Title>
      <CardContent>
        <Typography
          variant="body2"
          component="p"
          title={post.message}
          style={{ color: "rgba(0, 0, 0, 0.77)", overflowWrap: "break-word" }}
        >
          {post.message}
        </Typography>
      </CardContent>
      <ActionBar>
        <Button size="medium" color="primary">
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;Like
        </Button>
        <Button
          size="medium"
          color="secondary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          &nbsp;Delete
        </Button>
      </ActionBar>
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
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.0125);
    box-shadow: 2px 4px 4px 1px rgba(0, 0, 0, 0.3);
  }
`;

const Thumbnail = styled(CardMedia)`
  padding-top: 50%;
  background-size: contain;
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

const ActionBar = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding: 8px;

  button {
    padding: 8px 0;
    width: 40%;
  }
`;

export default PostCard;
