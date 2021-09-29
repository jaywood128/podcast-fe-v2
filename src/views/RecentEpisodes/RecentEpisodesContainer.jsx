/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
// import UserService from "../../services/user.service";
import ViewContainerStylings from "../application/ApplicationContainerStyling";
import {
  RecentEpisodesStyleContainer,
  EpisodeRowContainer,
  EpisodesHeaderContainer,
  EpisodesHeaderStylings,
  // TopEpisodeRowContainer,
  HeaderImageContainer,
  FollowingContainer,
  FollowingText,
  AddPodcastButtonContainer,
  FollowPodcastStylings,
} from "./RecentEpisodesStyleContainer";
import {
  EpisodeContainer,
  EpisodeAudioLinkContainer,
  EpisodeDescriptionContainer,
  EpisodeImage,
  EpisodeTitle,
  EpisodeStyledPlayLink,
  EpisodeTitleContainer,
} from "../../components/episode/EpisodeStylings";
import { StyledImage } from "../../components/podcast/PodcastStyles";

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
                      <EpisodeRowContainer>
                        {/* <TopEpisodeRowContainer> */}
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
                            <EpisodeAudioLinkContainer>
                              <EpisodeStyledPlayLink
                                href={episode.audio}
                                target="_blank"
                              >
                                <FaPlayCircle size={30} />
                              </EpisodeStyledPlayLink>{" "}
                            </EpisodeAudioLinkContainer>
                          </EpisodeDescriptionContainer>
                        </EpisodeTitleContainer>
                        {/* </TopEpisodeRowContainer> */}
                      </EpisodeRowContainer>
                    </EpisodeContainer>

                    {/* <EpisodeContainer id={episode.id}>
                      <TitleContainer>{episode.title} </TitleContainer>
                      <ImageContainer> {episode.image} </ImageContainer>
                      <p>{episode.description}</p>
                      <a href={episode.audio}>Audio</a>
                    </EpisodeContainer> */}
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
                            <EpisodeAudioLinkContainer>
                              <EpisodeStyledPlayLink
                                href={episode.audio}
                                target="_blank"
                              >
                                <FaPlayCircle size={30} />
                              </EpisodeStyledPlayLink>{" "}
                            </EpisodeAudioLinkContainer>
                          </EpisodeDescriptionContainer>
                        </EpisodeTitleContainer>
                      </EpisodeRowContainer>
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
