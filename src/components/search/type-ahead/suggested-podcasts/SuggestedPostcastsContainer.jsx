/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";
import SuggestedPodcastsContainerStyles from "./SuggestedPodcastContainerStylings";

const SuggestedPodcastStyles = styled.div`
  display: flex;
`;
const SuggestedPodcastImageStyles = styled.img``;
const SuggestedPodcastPublisher = styled.h1``;

const SuggestedPodcasts = (props) => (
  <SuggestedPodcastsContainerStyles>
    {props.podcasts.map((podcast) => {
      return (
        <SuggestedPodcastStyles key={podcast.id}>
          <SuggestedPodcastImageStyles src={podcast.image} />
          <SuggestedPodcastStyles>
            {" "}
            {podcast.title_original}
          </SuggestedPodcastStyles>
          <SuggestedPodcastPublisher>
            {podcast.publisher_original}
          </SuggestedPodcastPublisher>
        </SuggestedPodcastStyles>
      );
    })}
  </SuggestedPodcastsContainerStyles>
);

export default SuggestedPodcasts;
