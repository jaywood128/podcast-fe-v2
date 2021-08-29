import styled from "styled-components";
import { Link } from "react-router-dom";
import NoImageAvailible from "./icons8-image-not-available-96 copy.png";

const PodcastStylesContainer = styled(Link)`
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

const ImageContainer = styled.img`
  width: 100%;
`;
ImageContainer.defaultProps = {
  src: NoImageAvailible,
};

const StyledImage = styled.img``;

export { PodcastStylesContainer, TitleContainer, ImageContainer, StyledImage };
