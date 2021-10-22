/* eslint-disable react/prefer-stateless-function */
/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import TypeAheadContainerStyles from "./TypeAheadContainerStyles";
import SuggestedTermsContainer from "./suggested-terms/SuggestedTermsContainer";
import SuggestedGeneresContainer from "./suggested-genres/SuggestedGenresContainer";
import SuggestedPodcastsContainer from "./suggested-podcasts/SuggestedPostcastsContainer";

const TypeAheadContainer = (props) => (
  <TypeAheadContainerStyles>
    <SuggestedTermsContainer terms={props.typeAheadData[0].terms} />
    <SuggestedGeneresContainer genres={props.typeAheadData[0].genres} />
    <SuggestedPodcastsContainer podcasts={props.typeAheadData[0].podcasts} />
  </TypeAheadContainerStyles>
);

export default TypeAheadContainer;
