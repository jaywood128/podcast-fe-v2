import styled from "styled-components";

const RecentEpisodesStyleContainer = styled.div`
  background-color: red;
  font-family: "Popins";
  background-color: #181818;
  color: #ffffff;
`;

const EpisodeTitle = styled.h1`
  padding: 1rem;
  height: 16px;
  text-align: start;
  font-size: 16px;
  background-color: #181818;
`;

const EpisodeImage = styled.img`
  max-width: 100%;
  width: 175px;
  height: 175px;
  border-radius: 20px;
`;

const EpisodeDescriptionContainer = styled.div`
  display: flex;
  align-content: space-between;
  border-radius: 20px;
  background-color: #181818;
  color: #b3b3b3;
`;

const HorizontalLineStylings = styled.hr`
  display: "block";
  height: "1px";
  border: "0";
  border-top: "1px solid #FFFFF";
  margin: "1em 0";
  padding: "0";
`;

export {
  RecentEpisodesStyleContainer,
  EpisodeTitle,
  EpisodeImage,
  EpisodeDescriptionContainer,
  HorizontalLineStylings,
};
