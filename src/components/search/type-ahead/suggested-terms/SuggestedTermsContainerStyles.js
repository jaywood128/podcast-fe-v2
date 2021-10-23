import styled from "styled-components";
import { Link } from "react-router-dom";

const SuggestedTermsConatinerStylings = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: flex-start; */
  margin-top: 10px;
  font-family: "Gothic A1, sans-serif";
  border-radius: 5px;
  background-color: aquamarine;
`;

const SuggestedTermStylings = styled.div`
  font-size: 1rem;
  height: 30px;
  width: 100%;
  border-radius: 5px;
  background-color: white;
`;

const SuggestedTermLink = styled(Link)`
  color: black;
  /* display: block; */
  /* background-color: green; */
  font-size: 0.85rem;
  font-weight: bold;
  padding: 30px 20px;
  text-decoration: none;
  text-shadow: 2px 2px 10px white;
`;

export {
  SuggestedTermsConatinerStylings,
  SuggestedTermStylings,
  SuggestedTermLink,
};
