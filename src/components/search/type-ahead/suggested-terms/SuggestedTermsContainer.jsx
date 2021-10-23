/* eslint-disable react/destructuring-assignment */
import React from "react";
import {
  SuggestedTermsConatinerStylings,
  SuggestedTermStylings,
  SuggestedTermLink,
} from "./SuggestedTermsContainerStyles";

const SuggestedTermsContainer = (props) => (
  <SuggestedTermsConatinerStylings>
    {props.terms.map((term) => (
      <SuggestedTermStylings key={term}>
        {" "}
        <SuggestedTermLink key={term}> {term}</SuggestedTermLink>{" "}
      </SuggestedTermStylings>
    ))}
  </SuggestedTermsConatinerStylings>
);

export default SuggestedTermsContainer;
