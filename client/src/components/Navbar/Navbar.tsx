import React from "react";
import styled from "@emotion/styled";
import { AppBar, Typography } from "@material-ui/core";

import { memories } from "../../assets";

function Navbar() {
  return (
    <NavbarContainer position="static" color="inherit">
      <Heading variant="h2" align="center">
        Web Memories
      </Heading>
      <Logo src={memories} alt="Memories.png" height="60" />
    </NavbarContainer>
  );
}

const NavbarContainer = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 16px 24px;
  border-radius: 16px;
`;

const Heading = styled(Typography)`
  font-size: calc(1rem + 4vh);
  color: rgb(0, 183, 255);
`;

const Logo = styled.img`
  margin-left: 16px;
`;

export default Navbar;
