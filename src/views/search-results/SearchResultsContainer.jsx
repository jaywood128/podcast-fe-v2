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
// eslint-disable-next-line arrow-body-style
const SearchResultsContainer = () => {
  // const { data } = TypeAheadData;
  const [searchField, setSearchField] = useState({
    textInput: "",
  });

  const [results, setResults] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [typeAheadResults, setTypeAheadResults] = useState([]);
  const BACKEND_PODCASTS = "http://127.0.0.1:8080/api";

  // async function typeAheadCall() {
  //   // eslint-disable-next-line no-console
  //   console.log(`Searching for character: ${searchField.textInput}`);
  //   axios
  //     .post(`${BACKEND_PODCASTS}/type-ahead-search`, {
  //       textInput: searchField.textInput,
  //     })
  //     // eslint-disable-next-line no-console
  //     .then((response) => {
  //       setTypeAheadResults(response.data.results);
  //       // eslint-disable-next-line no-console
  //       console.log(`Type ahead results: ${JSON.stringify(response)}`);
  //     })
  //     .catch((error) => {
  //       // eslint-disable-next-line no-console
  //       console.log(error);
  //     });
  // }

  const setInitalResultsState = () => {
    setResults([]);
  };

  const setInitialTextInputState = () => {
    setSearchField({
      textInput: "",
    });
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
        setResults(response.data.results);
        // eslint-disable-next-line no-console
        console.log(
          `Search Results in Search.jsx: ${JSON.stringify(
            response.data.results
          )}`
        );
        setInitialTextInputState();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      setInitalResultsState();
    }
    alert(searchField.textInput);
    postSearch();
    // e.target.reset();
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
      // typeAheadCall();
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

  useEffect(() => {
    postSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results, searchField]);

  return (
    <ApplicationContainerStylings>
      <SearchStyles>
        <SearchInputContainer>
          <SearchIconContainer>
            <BsSearch size={30} className="fas fa-search" />
          </SearchIconContainer>
          <form onSubmit={handleSearchInputSubmit}>
            <SearchInput
              name="textInput"
              type="search"
              value={searchField.textInput}
              placeholder="Search for content"
              onChange={handleSearchInputChange}
              on
            />
          </form>
          <TypeAheadContainerStyles>
            <SuggestedTermsConatinerStylings>
              {typeAheadData[0].terms.map((term) => (
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
              ))}
            </SuggestedTermsConatinerStylings>
            <HorizontalLine />
            <BrowseByGenre>BROWSE BY CATEGORY</BrowseByGenre>
            <SuggestedGenres genres={typeAheadData[0].genres} />
            <HorizontalLine />
            <SuggestedPodcastsTitle>PODCASTS</SuggestedPodcastsTitle>
            <SuggestedPodcastsContainer podcasts={typeAheadData[0].podcasts} />
          </TypeAheadContainerStyles>
        </SearchInputContainer>
      </SearchStyles>

      <SearchResultsContainerStyles>
        {results.length === 0 ? (
          <h1 style={{ fontFamily: "Gothic A1, sans-serif" }}>
            Search results go here
          </h1>
        ) : (
          results.map((episode) => (
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
