import React from "react";
import { TopBarStylesContainer, TitleLink } from "./TopBarStylesContainer";
// eslint-disable-next-line import/no-named-as-default
import UserIcon from "./UserIcon";

const TopBarContainer = () => (
  <TopBarStylesContainer>
    <TitleLink to="/home">P-Cast Blast</TitleLink>
    <UserIcon />
  </TopBarStylesContainer>
);

export default TopBarContainer;