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
      .get("http://127.0.0.1:8080/api/curated_podcasts")
      .then((response) => {
        const featuredRes = response.data[0].curated_lists;
        // eslint-disable-next-line no-console
        // console.log(`Response data ${response}`);
        setFeatured(featuredRes);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getFeatured();
  }, []);
  // eslint-disable-next-line no-console
  console.log(featured);

  return (
    <ViewContainerStylings>
      <div>
        {featured.map((category) => (
          <div key={category.id} style={{ marginTop: "40px" }}>
            <CategoryTitleStylingsContainer>
              {category.title}
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
