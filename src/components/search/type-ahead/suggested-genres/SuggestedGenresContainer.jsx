/* eslint-disable react/destructuring-assignment */
import React from "react";
import SuggestedGenresContainerStyles from "./SuggestedGenresContainerStyles";

const SuggestedGenres = (props) => (
  <SuggestedGenresContainerStyles>
    {props.genres[0].name}
  </SuggestedGenresContainerStyles>
);

export default SuggestedGenres;
