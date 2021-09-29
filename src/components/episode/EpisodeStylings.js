import styled from "styled-components";

const EpisodeContainer = styled.div`
  display: flex;
  flex: 1;
  font-family: "Gothic A1, sans-serif";
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
  box-shadow: 2px 5px 10px black;
`;

const EpisodeAudioLinkContainer = styled.div`
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
const EpisodeStyledPlayLink = styled.a`
  color: white;
  text-align: left;
  text-decoration: none;
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
  EpisodeContainer,
  EpisodeTitle,
  EpisodeTitleContainer,
  EpisodeImage,
  EpisodeAudioLinkContainer,
  EpisodeDescriptionContainer,
  EpisodeStyledPlayLink,
};
