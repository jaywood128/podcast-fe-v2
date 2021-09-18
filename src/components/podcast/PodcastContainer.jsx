import React from "react";

import {
  PodcastStylesContainer,
  TitleContainer,
  ImageContainer,
  StyledImage,
  CardTop,
  StyledTitle,
} from "./PodcastStylesContainer";

const PodcastContainer = ({ podcast }) => (
  <PodcastStylesContainer
    key={podcast.id}
    to={`/episodes/${podcast.title}/${podcast.id}`}
  >
    <CardTop>
      <ImageContainer>
        <StyledImage src={podcast.image} />
      </ImageContainer>
    </CardTop>
    <TitleContainer>
      <StyledTitle>{podcast.title}</StyledTitle>
    </TitleContainer>
  </PodcastStylesContainer>
);

export default PodcastContainer;
