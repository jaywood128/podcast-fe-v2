import styled from "styled-components";

const RecentEpisodesStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 1000px;
  background-color: #484848;
  font-family: "Gothic A1", sans-serif;
  color: #ffffff;
`;

const EpisodeRowContainer = styled.div`
  display: flex;
  flex: 20%;
  align-items: center;
  font-family: "Raleway";
  padding: 20px;
  margin: 20px;
  font-size: 1rem;
  border-radius: 20px;
  white-space: normal;
  background-color: #404040;
  color: #b3b3b3;
`;

const EpisodesHeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px 28px;
  margin-bottom: 50px;
  align-items: center;
  color: white !important;
  font-family: "Gothic A1", sans-serif;
  text-transform: uppercase;
  font-size: 3.5rem;
  text-align: center;
`;
const EpisodesHeaderStylings = styled.div`
  text-shadow: 3px 4px 4px black;
  margin-left: 20px;
`;

const HeaderImageContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  height: 40%;
  margin-top: 50px;
  border-radius: 25px;
  box-shadow: 2px 5px 30px black;
`;
const AddPodcastButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  font-size: 1.2rem;
  height: 30%;
  width: 20%;
  background-color: #484848;
`;
const FollowPodcastStylings = styled.input`
  font-size: 1.2rem;
  border: 1px solid white;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 2px 5px 10px black;
`;
const FollowingContainer = styled.div`
  display: flex;
  font-size: 0.75rem;
  margin-top: 10px;
  margin-left: 20px;
`;
const FollowingText = styled.h1``;

export {
  RecentEpisodesStyleContainer,
  EpisodeRowContainer,
  EpisodesHeaderContainer,
  EpisodesHeaderStylings,
  HeaderImageContainer,
  AddPodcastButtonContainer,
  FollowPodcastStylings,
  FollowingContainer,
  FollowingText,
};
