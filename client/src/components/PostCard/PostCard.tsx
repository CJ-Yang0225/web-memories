import styled from "@emotion/styled";
import { Post } from "../../api";

type Props = {
  post?: Post;
};

function PostCard({ post }: Props) {
  return <PostCard.Container>Post</PostCard.Container>;
}

PostCard.Container = styled.div`
  margin: 8px 0;
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 16px;
`;

export default PostCard;
