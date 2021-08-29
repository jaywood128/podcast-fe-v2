import React from "react";

import {
  PodcastStylesContainer,
  TitleContainer,
  ImageContainer,
  StyledImage,
} from "./PodcastStylesContainer";

const PodcastContainer = ({ podcast, id }) => (
  <PodcastStylesContainer key={id} to="/episodes">
    <TitleContainer>{podcast.title}</TitleContainer>
    <ImageContainer>
      <StyledImage src={podcast.image} />
    </ImageContainer>
  </PodcastStylesContainer>
);

export default PodcastContainer;
