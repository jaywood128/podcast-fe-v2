import React from "react";
import TopBarStylesContainer from "./TopBarStylesContainer";
// eslint-disable-next-line import/no-named-as-default
import UserIcon from "./UserIcon";

const TopBarContainer = () => (
  <TopBarStylesContainer>
    <header>
      Header
      <UserIcon />
    </header>
  </TopBarStylesContainer>
);

export default TopBarContainer;
