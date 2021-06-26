import styled from "styled-components";
import { Link } from "react-router-dom";

const TopBarStylesContainer = styled.header`
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20vh;
  margin-bottom: 0;
`;

const TitleLink = styled(Link)`
  color: white;
  font-size: 3rem;
  padding: 0 20px;
  text-decoration: none;
  text-shadow: 2px 2px 10px white;
  font-family: "Poppins";
`;

export { TopBarStylesContainer, TitleLink };
