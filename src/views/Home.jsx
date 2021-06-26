import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

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

const PodcastContainer = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: #404040;
  border-radius: 10px;
  margin: 10px 15px;
  /* height: 300px;
  width: 300px; */
  -webkit-box-shadow: 1px 3px 5px 6px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 3px 5px 6px #ccc; /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 3px 5px 6px #ccc;
`;

const TitleContainer = styled.h1`
  padding: 1rem;
  height: 50px;
  text-align: center;
`;

const ImageContainer = styled.div``;

const StyledImage = styled.img``;

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
                <PodcastContainer key={podcast.id}>
                  <TitleContainer>{podcast.title}</TitleContainer>
                  <ImageContainer>
                    <StyledImage src={podcast.image} />
                  </ImageContainer>
                </PodcastContainer>
              ))}
            </PodcastRow>
          </div>
        ))}
      </div>
    </ViewContainer>
  );
};

export default Home;
