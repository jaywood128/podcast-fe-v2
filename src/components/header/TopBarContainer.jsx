import React from "react";
import {
  TopBarStylesContainer,
  TitleLink,
  IconContainer,
} from "./TopBarStylesContainer";
// import { IconContainer } from "../vertical-nav-bar/VerticalNavBarStyles";
// eslint-disable-next-line import/no-named-as-default
import UserIcon from "./UserIcon";

const TopBarContainer = () => (
  <TopBarStylesContainer>
    <TitleLink to="/">
      <IconContainer>
        <i className="fas fa-podcast fa-1x" />
      </IconContainer>{" "}
    </TitleLink>
    <UserIcon />
  </TopBarStylesContainer>
);

export default TopBarContainer;
