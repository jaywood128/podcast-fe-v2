import styled from "styled-components";

const RecentEpisodesStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #484848;
  font-family: "Gothic A1", sans-serif;
  color: #ffffff;
`;

const EpisodeTitle = styled.h1`
  padding: 1rem;
  height: 16px;
  text-align: start;
  font-size: 20px;
  font-family: "Gothic A1", sans-serif;
  background-color: #404040;
`;
const EpisodeTitleContainer = styled.div`
  margin-left: 10px;
  color: white;
`;

const EpisodeImage = styled.img`
  max-width: 100%;
  width: 175px;
  height: 175px;
  border-radius: 20px;
`;

const EpisodeRowContainer = styled.div`
  display: flex;
  align-content: space-between;
  font-family: "Raleway";
  margin: 20px;
  font-size: 1rem;
  border-radius: 20px;
  white-space: normal;
  background-color: #404040;
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

const EpisodesHeaderContainer = styled.div`
  display: flex;
  padding: 5px 28px;
  color: white !important;
  font-family: "Gothic A1", sans-serif;
  text-transform: uppercase;
  font-size: 4rem;
  text-align: center;
`;
const EpisodesHeaderStylings = styled.header`
  margin-left: 20px;
`;
const AudioLinkContainer = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 80px;
  background-color: #404040;
`;
const EpisodeDescriptionContainer = styled.div`
  display: flex;
  background-color: #404040;
  flex-wrap: wrap;
`;
const StyledPlayLink = styled.a`
  color: white;
  text-align: left;
  text-decoration: none;
  padding: 20px 20px;
  border: 1.5px;
  border-radius: 50%;

  :hover {
    background-color: rgba(64, 64, 64, 0.45);
    -webkit-box-shadow: 3px 5px 24px grey; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 5px 24px grey; /* Firefox 3.5 - 3.6 */
    box-shadow: 3px 5px 24px grey;
  }
`;

export {
  RecentEpisodesStyleContainer,
  EpisodeTitle,
  EpisodeImage,
  EpisodeRowContainer,
  EpisodeDescriptionContainer,
  HorizontalLineStylings,
  EpisodesHeaderContainer,
  EpisodesHeaderStylings,
  AudioLinkContainer,
  StyledPlayLink,
  EpisodeTitleContainer,
};
