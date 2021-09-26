/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
// import UserService from "../../services/user.service";
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
  background-color: #404040;
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
  background-color: #484848;
`;
const FollowingText = styled.h1``;

const RecentEpisodesContainer = () => {
  const { id } = useParams();
  const { podcastTitle } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const BACKEND_PODCASTS = "http://127.0.0.1:8080/api";
  // eslint-disable-next-line no-unused-vars
  const [isFollowingPodcast, setIsFollowingPodcast] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isClicked, setIsClicked] = useState([]);

  const handleFollowClick = () => {
    const bearer = `Bearer${localStorage.getItem("token")}`;
    const settings = {
      method: "GET",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    };
    axios
      .post(
        `${BACKEND_PODCASTS}/${localStorage.getItem("id")}/podcasts/${id}`,
        settings
      )
      // eslint-disable-next-line no-console
      .then((response) => setIsClicked(response.data))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };
  const getIsFollowingPodcast = () => {
    const bearer = `Bearer${localStorage.getItem("token")}`;
    const settings = {
      method: "GET",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    };
    axios
      .get(
        `${BACKEND_PODCASTS}/${localStorage.getItem(
          "id"
        )}/podcasts/${id}/isFollowing`,
        settings
      )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(`Are we following? ${response.data}`);
        setIsFollowingPodcast(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

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
      .get(`${BACKEND_PODCASTS}/podcasts/${id}`, settings)
      .then((response) => {
        const episodesResponse = response.data[0].episodes;
        setEpisodes(episodesResponse);
        // eslint-disable-next-line no-console
        console.log(`Podcast id ${id}`);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  useEffect(() => {
    getEpisodes();
    getIsFollowingPodcast();
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

                        {isFollowingPodcast ? (
                          <FollowingContainer>
                            <FollowingText>Following</FollowingText>
                            <FaCheckCircle
                              color="green"
                              size={25}
                              style={{ marginTop: "20px", marginLeft: "10px" }}
                            />
                          </FollowingContainer>
                        ) : (
                          <AddPodcastButtonContainer>
                            <FollowPodcastStylings
                              type="button"
                              value="Follow"
                              onClick={handleFollowClick}
                            />
                          </AddPodcastButtonContainer>
                        )}
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
