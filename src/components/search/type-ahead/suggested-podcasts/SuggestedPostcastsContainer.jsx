/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import {
  SuggestedPodcastsContainerStyles,
  SuggestPocastImageContainer,
  SuggestedPodcastStyles,
  SuggestedPodcastImageStyles,
  SuggestedPodcastPublisher,
  SuggestedPodcastTitle,
  SuggestedPodcastTitleContainer,
} from "./SuggestedPodcastContainerStylings";

const SuggestedPodcasts = (props) => (
  <SuggestedPodcastsContainerStyles>
    {props.podcasts.map((podcast) => {
      return (
        <SuggestedPodcastStyles key={podcast.id}>
          <SuggestPocastImageContainer>
            <SuggestedPodcastImageStyles src={podcast.image} />
          </SuggestPocastImageContainer>
          <SuggestedPodcastTitleContainer>
            <SuggestedPodcastTitle>
              {" "}
              {podcast.title_original}
            </SuggestedPodcastTitle>
            <SuggestedPodcastPublisher>
              <h3>{podcast.publisher_original} </h3>
            </SuggestedPodcastPublisher>
          </SuggestedPodcastTitleContainer>
        </SuggestedPodcastStyles>
      );
    })}
  </SuggestedPodcastsContainerStyles>
);

export default SuggestedPodcasts;
