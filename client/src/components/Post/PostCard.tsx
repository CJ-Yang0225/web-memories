import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";

import { Post } from "../../api";

type Props = {
  post?: Post;
};

function PostCard({ post }: Props) {
  return (
    <Card item sm={6} xs={12}>
      <div className="card__content">Post</div>
    </Card>
  );
}

const Card = styled(Grid)`

  .card__content {
    border: 1px solid black;
    border-radius: 16px;
    width: 100%;
    height: 250px;
  }
`;

export default PostCard;
