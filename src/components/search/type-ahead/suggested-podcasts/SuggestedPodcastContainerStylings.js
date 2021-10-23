import styled from "styled-components";
import { Link } from "react-router-dom";

const SuggestedPodcastsContainerStyles = styled(Link)`
  border-radius: 5px;
  background-color: white;
  text-decoration: none;
`;
const SuggestPocastImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;
const SuggestedPodcastStyles = styled.div`
  display: flex;
  width: 800px;
  height: 50px;
  /* background-color: blue;
  border: 1px solid black; */
`;
const SuggestedPodcastTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  height: 40px;
  width: 100%;
`;
const SuggestedPodcastTitle = styled.h2`
  width: 100%;
  /* padding: 15px 15px; */
  margin-top: 0px;
  font-size: 0.75rem;
  background-color: white;
`;

const SuggestedPodcastPublisher = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.5rem;
  background-color: white;
`;

const SuggestedPodcastImageStyles = styled.img`
  width: 50px;
  height: auto;
`;

export {
  SuggestedPodcastsContainerStyles,
  SuggestPocastImageContainer,
  SuggestedPodcastStyles,
  SuggestedPodcastImageStyles,
  SuggestedPodcastPublisher,
  SuggestedPodcastTitle,
  SuggestedPodcastTitleContainer,
};
