import styled from "@emotion/styled";

type Props = {
  src: string;
};

const Icon = styled.div<Props>`
  width: 20px;
  height: 20px;
  background-image: url(${({ src }) => src});
  background-size: cover;
`;

export default Icon;
