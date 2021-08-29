import React, { useState, useEffect } from "react";
import axios from "axios";
import PodcastContainer from "../components/podcast/PodcastContainer";
import ViewContainerStylings from "./Body/ViewContainerStyling";
import PodcastRowStylingsContainer from "../components/podcast/PodcastRowStylingsContainer";
import CategoryTitleStylingsContainer from "../components/component-stylings/CategoryTitleStylingsContainer";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [featured, setFeatured] = useState([]);

  const getFeatured = () => {
    axios
      .get(`http://localhost:8080/api/curated_podcasts`)
      .then((response) => {
        const featuredRes = response.data[0].curated_lists;
        // eslint-disable-next-line no-console
        console.log(`Response data ${response.data[0]}`);
        setFeatured(featuredRes);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getFeatured();
  }, []);

  return (
    <ViewContainerStylings>
      View Container
      <div>
        Featured
        {/* // eslint-disable-next-line camelcase */}
        {featured.map((category) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <CategoryTitleStylingsContainer key={category.id}>
              {" "}
              {category.title}{" "}
            </CategoryTitleStylingsContainer>
            <PodcastRowStylingsContainer>
              {category.podcasts.map((podcast) => (
                <PodcastContainer podcast={podcast} key={podcast.id} />
              ))}
            </PodcastRowStylingsContainer>
          </div>
        ))}
      </div>
    </ViewContainerStylings>
  );
};

export default Home;
