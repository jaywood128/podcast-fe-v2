/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaPlayCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import ViewContainerStylings from "../../views/Body/ViewContainerStyling";
import {
  RecentEpisodesStyleContainer,
  EpisodeTitle,
  EpisodeImage,
  EpisodeRowContainer,
  HorizontalLineStylings,
  EpisodesHeaderContainer,
  AudioLinkContainer,
  EpisodesHeaderStylings,
  EpisodeDescriptionContainer,
  StyledPlayLink,
  EpisodeTitleContainer,
  TopEpisodeRowContainer,
} from "./RecentEpisodesStyleContainer";
import EpisodeContainer from "./EpisodeContainer";
import { StyledImage } from "../podcast/PodcastStylesContainer";

const HeaderImageContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 20%;
  margin-top: 50px;
  border-radius: 25px;
  box-shadow: 2px 5px 30px black;
`;

const RecentEpisodesContainer = () => {
  const { id } = useParams();
  const { podcastTitle } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const BACKEND_PODCASTS = "http://127.0.0.1:8080/api/";

  const getEpisodes = () => {
    const bearer = `Bearer${localStorage.getItem("token")}`;
    const settings = {
      method: "GET",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    };

    axios
      .get(`${BACKEND_PODCASTS}podcasts/${id}`, settings)
      .then((response) => {
        const episodesResponse = response.data[0].episodes;
        setEpisodes(episodesResponse);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  useEffect(() => {
    getEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ViewContainerStylings>
      <RecentEpisodesStyleContainer>
        {
          // eslint-disable-next-line arrow-body-style
          episodes.map((episode, index) => {
            return (
              <div key={episode.id}>
                {index === 0 ? (
                  <div style={{ padding: "0px 20px" }}>
                    <EpisodesHeaderContainer>
                      <HeaderImageContainer>
                        <StyledImage src={episode.image} alt="podcast" />{" "}
                      </HeaderImageContainer>
                      <EpisodesHeaderStylings>
                        {podcastTitle}
                      </EpisodesHeaderStylings>
                    </EpisodesHeaderContainer>
                    <EpisodeContainer key={episode.id}>
                      <HorizontalLineStylings />
                      <TopEpisodeRowContainer>
                        <EpisodeImage
                          alt="Not Availiable"
                          src={episode.image}
                        />

                        <EpisodeTitleContainer>
                          <EpisodeTitle>{episode.title} </EpisodeTitle>
                          <EpisodeDescriptionContainer>
                            <p
                              style={{
                                lineHeight: "30px",
                                font: "#404040",
                                margin: "20px",
                              }}
                            >
                              {episode.description.length > 370
                                ? `${episode.description
                                    .substring(0, 370)
                                    .replace(/<[^>]*>?/gm, "")}...`
                                : episode.description}
                            </p>
                            <AudioLinkContainer>
                              <StyledPlayLink
                                href={episode.audio}
                                target="_blank"
                              >
                                <FaPlayCircle size={30} />
                              </StyledPlayLink>{" "}
                            </AudioLinkContainer>
                          </EpisodeDescriptionContainer>
                        </EpisodeTitleContainer>
                      </TopEpisodeRowContainer>
                      <HorizontalLineStylings />
                    </EpisodeContainer>
                  </div>
                ) : (
                  <div style={{ padding: "0px 20px" }}>
                    <EpisodeContainer key={episode.id}>
                      <EpisodeRowContainer>
                        <EpisodeImage
                          alt="Not Availiable"
                          src={episode.image}
                        />
                        <EpisodeTitleContainer>
                          <EpisodeTitle>{episode.title} </EpisodeTitle>
                          <EpisodeDescriptionContainer>
                            <p
                              style={{
                                lineHeight: "30px",
                                font: "#404040",
                                margin: "20px",
                              }}
                            >
                              {episode.description.length > 370
                                ? `${episode.description
                                    .substring(0, 370)
                                    .replace(/<[^>]*>?/gm, "")}...`
                                : episode.description}
                            </p>
                            <AudioLinkContainer>
                              <StyledPlayLink
                                href={episode.audio}
                                target="_blank"
                              >
                                <FaPlayCircle size={30} />
                              </StyledPlayLink>{" "}
                            </AudioLinkContainer>
                          </EpisodeDescriptionContainer>
                        </EpisodeTitleContainer>
                      </EpisodeRowContainer>
                      <HorizontalLineStylings />
                    </EpisodeContainer>
                  </div>
                )}
              </div>
            );
          })
        }
      </RecentEpisodesStyleContainer>
    </ViewContainerStylings>
  );
};

export default RecentEpisodesContainer;
