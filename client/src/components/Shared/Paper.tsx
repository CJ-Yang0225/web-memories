import styled from "@emotion/styled";

import { fadeIn } from "../../lib/animations";

type Props = {
  visible: boolean;
};

const Paper = styled.div<Props>`
  display: ${({ visible: isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  min-width: 256px;
  color: white;
  background-color: rgba(0, 183, 255, 0.9);
  box-sizing: border-box;
  animation: ${fadeIn} 0.25s;
`;

export default Paper;
