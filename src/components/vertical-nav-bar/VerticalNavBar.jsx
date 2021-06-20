import React from "react";
import {
  VerticalNavBarContainer,
  IconContainer,
  LinkContainer,
  LinkTitle,
  LinkList,
  LinkItem,
  LinkIcon,
  StyledLink,
} from "./VerticalNavBarStyles";
// import { Link } from 'react-router-dom';
const VerticalNavBar = () => (
  <VerticalNavBarContainer>
    <IconContainer>
      <i className="fas fa-podcast fa-5x" />
    </IconContainer>
    <LinkContainer>
      <LinkTitle>Sidebar </LinkTitle>

      <LinkList>
        <LinkItem>
          <StyledLink to="#">
            <LinkIcon className="fas fa-search" />
            Search
          </StyledLink>
        </LinkItem>
        <LinkItem>
          {" "}
          <StyledLink to="/library" bsClass="link">
            <LinkIcon className="fas fa-list" />
            Shows
          </StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="#">
            <LinkIcon className="fas fa-star" />
            Favorites
          </StyledLink>
        </LinkItem>
        <LinkItem>Explore</LinkItem>
      </LinkList>
    </LinkContainer>
  </VerticalNavBarContainer>
);

export default VerticalNavBar;
