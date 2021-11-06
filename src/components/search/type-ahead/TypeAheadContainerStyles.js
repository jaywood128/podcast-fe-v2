import styled from "styled-components";

const TypeAheadContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 800px;
  width: 935px;
  padding: 0 8px;
  margin-left: 0px;
  background-color: white;
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
