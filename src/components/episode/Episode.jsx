/* eslint-disable react/destructuring-assignment */
import React from "react";
import EpisodeContainer from "./EpisodeContainer";
import {
  TitleContainer,
  ImageContainer,
} from "../podcast/PodcastStylesContainer";

const Episode = (episode) => (
  // eslint-disable-next-line react/destructuring-assignment
  <EpisodeContainer id={episode.id}>
    <TitleContainer>{episode.title} </TitleContainer>
    <ImageContainer> {episode.image} </ImageContainer>
    <p>{episode.description}</p>
    <a href={episode.audio}>Audio</a>
  </EpisodeContainer>
);

export default Episode;
