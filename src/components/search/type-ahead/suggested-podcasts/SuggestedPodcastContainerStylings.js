import styled from "styled-components";
import { Link } from "react-router-dom";

const SuggestedPodcastsContainerStyles = styled.div`
  border-radius: 5px;
  height: auto;
  background-color: white;
  text-decoration: none;
  margin-left: 17px;
`;

const SuggestedPodcastContainer = styled.div`
  height: 60px;
  /* border: solid; */
  div:hover {
    color: grey;
  }
`;
const SuggestPocastImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 50px;
  width: 300px;
  margin-top: 12px;
  margin-left: 5px;
  border-radius: 25px;
`;
const SuggestedPodcastStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 65px;
  a:hover {
    color: grey;
  }
`;
const SuggestedPodcastLink = styled(Link)`
  background-color: white;
`;
const SuggestedPodcastTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
`;
const SuggestedPodcastTitle = styled.div`
  font-size: 0.5rem;
  background-color: white;
`;

const SuggestedPodcastPublisher = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 15px;
  height: 10px;
  font-size: 0.8rem;
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
  SuggestedPodcastContainer,
  SuggestedPodcastLink,
};
