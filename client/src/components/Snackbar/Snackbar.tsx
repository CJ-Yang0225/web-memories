import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";

import { Paper, Icon } from "../Shared";
import { success, close } from "../../assets";

type Props = {
  visible: boolean;
  message: string;
  onClose: () => void;
};

function Snackbar({ visible: isVisible, message, onClose: emitClose }: Props) {
  useEffect(() => {
    setTimeout(() => emitClose(), 5000);
  }, [emitClose]);

  return (
    <Paper
      visible={isVisible}
      style={{
        position: "fixed",
        right: "calc((100% - 240px) / 2)",
        bottom: "16px",
      }}
    >
      <Icon src={success} style={{ marginRight: "8px" }} />
      <Typography variant="body1" component="p">
        {message}
      </Typography>
      <CloseButton onClick={emitClose}>
        <Icon src={close} style={{ width: "16px", height: "16px" }} />
      </CloseButton>
    </Paper>
  );
}

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background-color: inherit;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

export default Snackbar;
