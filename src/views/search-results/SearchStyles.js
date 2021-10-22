import styled from "styled-components";

const SearchStyles = styled.div`
  display: flex;
  background-color: #404040;
  margin-top: 100px;
  width: auto;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 350px;
  height: 30px;
  /* border-radius: 20px; */
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  border: none;
  background-color: white;
  :focus {
    outline: none;
  }
`;
const SearchInputContainer = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  font-family: "Raleway";
  width: 500px;
  padding: 0 8px;
  height: 50px;
  border-radius: 5px;
  background-color: white;
`;
const SearchIconContainer = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 50px;
`;

export { SearchStyles, SearchInput, SearchInputContainer, SearchIconContainer };
