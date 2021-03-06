/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlayCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import ApplicationContainerStylings from "../application/ApplicationContainerStyling";
import {
  SearchResultsContainerStyles,
  EpisodeSearchResultsContainer,
} from "./SearchResultsContainerStyles";

import {
  EpisodeTitleContainer,
  EpisodeImage,
  EpisodeTitle,
  EpisodeDescriptionContainer,
  EpisodeAudioLinkContainer,
  EpisodeStyledPlayLink,
} from "../../components/episode/EpisodeStylings";
import { EpisodeRowContainer } from "../RecentEpisodes/RecentEpisodesStyleContainer";
import {
  SearchStyles,
  SearchInputContainer,
  SearchInput,
  SearchIconContainer,
} from "./SearchStyles";
// eslint-disable-next-line no-unused-vars
import typeAheadData from "../../data/type-ahead";
import {
  TypeAheadContainerStyles,
  HorizontalLine,
} from "../../components/search/type-ahead/TypeAheadContainerStyles";
import {
  SuggestedTermsConatinerStylings,
  SuggestedTermStylings,
  // SuggestedTermLink,
} from "../../components/search/type-ahead/suggested-terms/SuggestedTermsContainerStyles";
import {
  BrowseByGenre,
  SuggestedPodcastsTitle,
  // SuggestedGenreStylings,
  // SuggestedGenreLink,
} from "../../components/search/type-ahead/suggested-genres/SuggestedGenresContainerStyles";
import SuggestedGenres from "../../components/search/type-ahead/suggested-genres/SuggestedGenresContainer";
import SuggestedPodcastsContainer from "../../components/search/type-ahead/suggested-podcasts/SuggestedPostcastsContainer";
import TopBarContainer from "../../components/top-bar/TopBarContainer";
// eslint-disable-next-line arrow-body-style
const SearchResultsContainer = () => {
  // const { data } = TypeAheadData;
  const [searchField, setSearchField] = useState({
    textInput: "",
  });
  const [typeAheadSearchField, setTypeAheadSearchField] = useState({
    textInput: "",
  });

  const [searchResults, setSearchResults] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [typeAheadResults, setTypeAheadResults] = useState([]);
  const BACKEND_PODCASTS = "http://127.0.0.1:8080/api";
  const isEmpty = (obj) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  };

  const setInitalResultsState = () => {
    setSearchResults([]);
  };

  const setInitialTextInputState = () => {
    setSearchField({
      textInput: "",
    });
  };

  const setInitalTypeAheadResultsState = () => {
    setTypeAheadResults([]);
  };

  async function postSearch() {
    // eslint-disable-next-line no-console
    console.log(
      `Text input getting submitted to back end ${searchField.textInput}`
    );
    axios
      .post(`${BACKEND_PODCASTS}/full-text-search`, {
        textInput: searchField.textInput,
      })
      // eslint-disable-next-line no-console
      .then((response) => {
        setSearchResults(response.data.searchResults);
        // eslint-disable-next-line no-console
        console.log(
          `Search Results in Search.jsx: ${JSON.stringify(
            response.data.searchResults
          )}`
        );
        setInitialTextInputState();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  async function postTypeAheadSearch() {
    // eslint-disable-next-line no-console
    console.log(
      `Text input from typeahead search field submitted to back end ${JSON.stringify(
        typeAheadSearchField.textInput
      )}`
    );
    axios
      .post(`${BACKEND_PODCASTS}/type-ahead-search`, {
        textInput: window.localStorage.getItem("typeAheadSearchField"),
      })
      // eslint-disable-next-line no-console
      .then((response) => {
        setTypeAheadResults(response.data);

        // eslint-disable-next-line no-console
        console.log(
          `Type ahead post results Search.jsx: COUNT ${
            response.data.count
          }  RESP ${JSON.stringify(response)}`
        );

        // setTypeAheadResults()
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setTypeAheadSearchField((userInput) => ({
      ...userInput,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearchInputSubmit = (e) => {
    // eslint-disable-next-line no-console
    console.log(`Handle Search input submit ${e.target.value}`);
    e.persist();
    setSearchField((userInputSearch) => ({
      ...userInputSearch,
      [e.target.name]: e.target.value,
    }));
    if (searchField.textInput !== "") {
      postSearch();
    }
  };

  const handleSuggestedTermClick = (e) => {
    // eslint-disable-next-line no-alert
    alert(`Suggested term clicked!${e.target}`);
    // eslint-disable-next-line no-console
    console.log(`Suggested term clicked name!${JSON.stringify(e.target.name)}`);
    const { value, name } = e.target;
    setSearchField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // eslint-disable-next-line no-console
    console.log(
      `Updated search field state for suggested term ${JSON.stringify(
        searchField
      )}`
    );
  };

  const renderTypeAheadComponent = () => {
    if (!isEmpty(typeAheadResults)) {
      // eslint-disable-next-line no-console
      console.log(`Type ahead results ${JSON.stringify(typeAheadResults)}`);
      return (
        <TypeAheadContainerStyles>
          <SuggestedTermsConatinerStylings>
            {typeAheadResults.terms.length === 0 ? (
              <div> No terms returned </div>
            ) : (
              typeAheadResults.terms.map((term) => (
                <SuggestedTermStylings key={term}>
                  <button
                    type="button"
                    value={term}
                    name="textInput"
                    // eslint-disable-next-line no-alert
                    onClick={handleSuggestedTermClick}
                  >
                    {term}
                  </button>
                </SuggestedTermStylings>
              ))
            )}
          </SuggestedTermsConatinerStylings>

          <HorizontalLine />
          <BrowseByGenre>BROWSE BY CATEGORY</BrowseByGenre>
          {typeAheadResults.genres.length > 0 ? (
            <SuggestedGenres genres={typeAheadResults.genres} />
          ) : (
            <div> No categories found </div>
          )}

          <HorizontalLine />
          <SuggestedPodcastsTitle>PODCASTS</SuggestedPodcastsTitle>

          {typeAheadResults.podcasts.length > 0 ? (
            <SuggestedPodcastsContainer podcasts={typeAheadResults.podcasts} />
          ) : (
            <div> No podcasts returned </div>
          )}
        </TypeAheadContainerStyles>
        // <div>Type ahead results</div>
      );
    }
    return "";
  };

  useEffect(() => {
    window.localStorage.setItem(
      "typeAheadSearchField",
      typeAheadSearchField.textInput
    );
    if (window.localStorage.getItem("typeAheadSearchField") !== "") {
      postTypeAheadSearch();
    } else {
      setInitalTypeAheadResultsState();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeAheadSearchField]);

  useEffect(() => {
    setTypeAheadSearchField((userInput) => ({
      ...userInput,
      textInput: window.localStorage.getItem("typeAheadSearchField"),
    }));
    console.log(
      `useEffect type ahead search field ${JSON.stringify(
        typeAheadSearchField.textInput
      )}`
    );
  }, []);

  return (
    <ApplicationContainerStylings>
      <TopBarContainer />
      <SearchStyles>
        <SearchInputContainer>
          <SearchIconContainer>
            <BsSearch size={30} className="fas fa-search" />
          </SearchIconContainer>
          <form onSubmit={handleSearchInputSubmit}>
            <SearchInput
              name="textInput"
              type="search"
              value={window.localStorage.getItem("typeAheadSearchField")}
              placeholder="Search for content"
              onChange={handleSearchInputChange}
              on
            />
            {renderTypeAheadComponent()}
          </form>
        </SearchInputContainer>
      </SearchStyles>

      <SearchResultsContainerStyles>
        {searchResults.length === 0 ? (
          <h1 style={{ fontFamily: "Gothic A1, sans-serif" }}>
            Search searchResults go here
          </h1>
        ) : (
          searchResults.map((episode) => (
            <EpisodeSearchResultsContainer key={episode.id}>
              <EpisodeRowContainer>
                <EpisodeImage alt="not availible" src={episode.image} />
                <EpisodeTitleContainer>
                  <EpisodeTitle> Episode Title</EpisodeTitle>
                  <EpisodeDescriptionContainer>
                    <p
                      style={{
                        lineHeight: "30px",
                        font: "#404040",
                      }}
                    >
                      {episode.description_highlighted.length > 100
                        ? `${episode.description_original
                            .substring(0, 100)
                            .replace(/<[^>]*>?/gm, "")}...`
                        : episode.description_highlighted}
                    </p>
                    <p>Description</p>
                    <EpisodeAudioLinkContainer>
                      <EpisodeStyledPlayLink
                        href={episode.audio}
                        target="_blank"
                      >
                        <FaPlayCircle size={30} />
                      </EpisodeStyledPlayLink>{" "}
                    </EpisodeAudioLinkContainer>
                  </EpisodeDescriptionContainer>
                </EpisodeTitleContainer>
              </EpisodeRowContainer>
            </EpisodeSearchResultsContainer>
          ))
        )}
      </SearchResultsContainerStyles>
    </ApplicationContainerStylings>
  );
};

export default SearchResultsContainer;
