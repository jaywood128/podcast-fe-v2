import styled from "styled-components";

const TypeAheadContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto Mono";
  border-radius: 5px;
  height: 750px;
  width: 650px;
  padding: 0 8px;
  margin-left: 0px;
  background-color: purple;
`;

const HorizontalLine = styled.div`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 0.5em 0;
  padding: 0;
`;

export { TypeAheadContainerStyles, HorizontalLine };
