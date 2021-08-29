/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import ViewContainerStylings from "../../views/Body/ViewContainerStyling";
import {
  RecentEpisodesStyleContainer,
  EpisodeTitle,
  EpisodeImage,
  EpisodeDescriptionContainer,
  HorizontalLineStylings,
} from "./RecentEpisodesStyleContainer";
import EpisodeContainer from "./EpisodeContainer";

const RecentEpisodesContainer = () => {
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
      .get(
        `${BACKEND_PODCASTS}${localStorage.getItem(
          "id"
        )}/podcasts/${localStorage.getItem("podcast-id")}`,
        settings
      )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(
          `RESPONSE ${JSON.stringify(typeof response.data[0].episodes)}`
        );
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
            // eslint-disable-next-line no-console
            console.log(episode);
            return (
              <div key={episode.id}>
                {index === 0 ? (
                  <EpisodeContainer key={episode.id}>
                    <HorizontalLineStylings />
                    <EpisodeTitle>{episode.title} </EpisodeTitle>
                    <EpisodeDescriptionContainer>
                      <EpisodeImage alt="Not Availiable" src={episode.image} />
                      <p style={{ lineHeight: "5px", font: "#404040" }}>
                        {episode.description.replace(/<[^>]*>?/gm, "")}
                      </p>
                      <a href={episode.audio}>Audio</a>)
                    </EpisodeDescriptionContainer>

                    <HorizontalLineStylings />
                  </EpisodeContainer>
                ) : (
                  <EpisodeContainer key={episode.id}>
                    <EpisodeTitle>{episode.title} </EpisodeTitle>
                    <EpisodeDescriptionContainer>
                      <EpisodeImage alt="Not Availiable" src={episode.image} />
                      <p style={{ lineHeight: "5px", font: "#404040" }}>
                        {episode.description.replace(/<[^>]*>?/gm, "")}
                      </p>
                      <a href={episode.audio}>Audio</a>)
                    </EpisodeDescriptionContainer>

                    <HorizontalLineStylings />
                  </EpisodeContainer>
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
