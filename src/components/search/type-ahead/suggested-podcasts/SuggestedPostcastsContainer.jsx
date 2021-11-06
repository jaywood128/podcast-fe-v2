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
  SuggestedPodcastContainer,
  SuggestedPodcastLink,
} from "./SuggestedPodcastContainerStylings";

const SuggestedPodcastsContainer = (props) => (
  <SuggestedPodcastsContainerStyles>
    {props.podcasts.map((podcast) => {
      return (
        <SuggestedPodcastContainer key={podcast.id}>
          <SuggestedPodcastStyles>
            <SuggestedPodcastLink
              to={`/episodes/${podcast.title}/${podcast.id}`}
            >
              <SuggestPocastImageContainer>
                <SuggestedPodcastImageStyles src={podcast.image} />
                <SuggestedPodcastTitleContainer>
                  <SuggestedPodcastTitle>
                    <h2>{podcast.title_original}</h2>
                  </SuggestedPodcastTitle>
                  <SuggestedPodcastPublisher>
                    <h3>{podcast.publisher_original} </h3>
                  </SuggestedPodcastPublisher>
                </SuggestedPodcastTitleContainer>
              </SuggestPocastImageContainer>
            </SuggestedPodcastLink>
          </SuggestedPodcastStyles>
        </SuggestedPodcastContainer>
      );
    })}
  </SuggestedPodcastsContainerStyles>
);

export default SuggestedPodcastsContainer;
