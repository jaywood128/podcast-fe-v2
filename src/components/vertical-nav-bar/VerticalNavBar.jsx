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
            <span>Search</span>
          </StyledLink>
        </LinkItem>

        <LinkItem>
          <StyledLink to="/library" bsClass="link">
            <LinkIcon className="fas fa-list" />
            <span>Shows</span>
          </StyledLink>
        </LinkItem>

        <LinkItem>
          <StyledLink to="#">
            <LinkIcon className="fas fa-star" />
            <span>Favorites</span>
          </StyledLink>
        </LinkItem>

        <LinkItem>
          <StyledLink>
            <LinkIcon className="fas fa-star" />
            <span>Explore</span>
          </StyledLink>
        </LinkItem>
      </LinkList>
    </LinkContainer>
  </VerticalNavBarContainer>
);

export default VerticalNavBar;
