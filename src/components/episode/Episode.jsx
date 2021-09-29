/* eslint-disable react/destructuring-assignment */
import React from "react";
import { EpisodeContainer } from "./EpisodeStylings";
import { TitleContainer, ImageContainer } from "../podcast/PodcastStyles";

const Episode = (episode) => (
  <EpisodeContainer id={episode.id}>
    <TitleContainer>{episode.title} </TitleContainer>
    <ImageContainer> {episode.image} </ImageContainer>
    <p>{episode.description}</p>
    <a href={episode.audio}>Audio</a>
  </EpisodeContainer>
);

export default Episode;
