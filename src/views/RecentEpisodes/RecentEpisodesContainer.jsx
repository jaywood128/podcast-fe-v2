/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";
import staticImage from "./the-one-you-feed.jpg";
// FaCheckCircle

// import UserService from "../../services/user.service";
import ViewContainerStylings from "../application/ApplicationContainerStyling";
import {
  RecentEpisodesStyleContainer,
  EpisodeRowContainer,
  EpisodesHeaderContainer,
  EpisodesHeaderStylings,
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
  // eslint-disable-next-line no-unused-vars
  const { podcastTitle } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const BACKEND_PODCASTS = "http://127.0.0.1:8080/api";
  // eslint-disable-next-line no-unused-vars
  const [isFollowingPodcast, setIsFollowingPodcast] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isClicked, setIsClicked] = useState([]);

  // eslint-disable-next-line no-unused-vars
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
      <EpisodesHeaderContainer>
        <HeaderImageContainer>
          <StyledImage src={staticImage} alt="podcast" />{" "}
        </HeaderImageContainer>

        <EpisodesHeaderStylings>
          {podcastTitle}

          {isFollowingPodcast ? (
            <FollowingContainer>
              <FollowingText>Following</FollowingText>
              <FaCheckCircle
                color="green"
                size={25}
                style={{ marginTop: "30px", marginLeft: "10px" }}
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
      <RecentEpisodesStyleContainer>
        {
          // eslint-disable-next-line arrow-body-style
          episodes.map((episode, index) => {
            return (
              <div key={episode.id}>
                {index === 0 ? (
                  <div style={{ padding: "0px" }}>
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
                              }}
                            >
                              {episode.description.length > 100
                                ? `${episode.description
                                    .substring(0, 100)
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
                ) : (
                  <div style={{ padding: "0px" }}>
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
                              }}
                            >
                              {episode.description.length > 100
                                ? `${episode.description
                                    .substring(0, 100)
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
