import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PodcastContainer from "../components/podcast/PodcastContainer";

const ViewContainer = styled.div`
  overflow: auto;
  background-color: #121212;
  height: 82vh;
  width: 83vw;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryTitle = styled.h2`
  color: white !important;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
  text-shadow: 2px 2px 10px white;
`;

const PodcastRow = styled.div`
  display: flex;
  align-content: space-between;
  overflow: auto;
  margin-left: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

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
    <ViewContainer>
      View Container
      <div>
        Featured
        {/* // eslint-disable-next-line camelcase */}
        {featured.map((category) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <CategoryTitle key={category.id}> {category.title} </CategoryTitle>
            <PodcastRow>
              {category.podcasts.map((podcast) => (
                <PodcastContainer podcast={podcast} key={podcast.id} />
              ))}
            </PodcastRow>
          </div>
        ))}
      </div>
    </ViewContainer>
  );
};

export default Home;
