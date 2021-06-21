import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../../Styles/colors";
import { Title } from "../../Styles/title";

const NavBarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 20px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const Logo = styled(Title)`
  font-size: 25px;
  color: #fff;
  text-shadow: 2px 2px 4px #000;
`;

export function NavBar() {
  return (
    <NavBarStyled>
      <Logo>Onebrain Pizzaria </Logo>
    </NavBarStyled>
  );
}
