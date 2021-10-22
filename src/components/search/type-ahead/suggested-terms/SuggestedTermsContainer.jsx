/* eslint-disable react/destructuring-assignment */
import React from "react";
import SuggestedTermsContainerStyles from "./SuggestedTermsContainerStyles";

const SuggestedTermsContainer = (props) => (
  <SuggestedTermsContainerStyles>
    {" "}
    Suggested Terms {props.terms[0]}
  </SuggestedTermsContainerStyles>
);

export default SuggestedTermsContainer;
