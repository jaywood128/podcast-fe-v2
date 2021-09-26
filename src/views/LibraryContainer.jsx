import React, { useState, useEffect } from "react";
import axios from "axios";
import PodcastContainer from "../components/podcast/PodcastContainer";
import ViewContainerStylings from "./Body/ViewContainerStyling";
import PodcastRowStylingsContainer from "../components/podcast/PodcastRowStylingsContainer";

const LibraryContainer = () => {
  const [podcasts, setPodcasts] = useState([]);
  const BACKEND_PODCASTS = "http://127.0.0.1:8080/api";

  const getUsersPodcasts = () => {
    axios
      .get(`${BACKEND_PODCASTS}/${localStorage.getItem("id")}/podcasts`)
      .then((response) => {
        const podcastResponse = response.data;
        // eslint-disable-next-line no-console
        console.log(`Response podcast data ${JSON.stringify(podcastResponse)}`);
        setPodcasts(podcastResponse);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getUsersPodcasts();
  }, []);

  return (
    <ViewContainerStylings>
      <div>
        <PodcastRowStylingsContainer>
          {podcasts.map((podcast) => (
            <div key={podcast.id}>
              <PodcastContainer podcast={podcast} key={podcast.id} />
            </div>
          ))}
        </PodcastRowStylingsContainer>
      </div>
    </ViewContainerStylings>
  );
};

export default LibraryContainer;
