import styled from "styled-components";
import { Link } from "react-router-dom";

const SuggestedPodcastsContainerStyles = styled.div`
  border-radius: 5px;
  background-color: white;
  text-decoration: none;
  margin-left: 17px;
`;

const SuggestedPodcastContainer = styled.div`
  div:hover {
    color: grey;
  }
`;
const SuggestPocastImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 350px;
  margin-top: 12px;
  margin-left: 8px;
  border-radius: 25px;
`;
const SuggestedPodcastStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  height: 80px;
  background-color: white;
  /* border: solid; */
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
  width: 100%;
  font-size: 0.8rem;
  background-color: white;
`;

const SuggestedPodcastPublisher = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 10px;
  width: 100%;
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
