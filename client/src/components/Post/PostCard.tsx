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

`;

export default PostCard;
