import styled from 'styled-components';
// import {Link} from "react-router-dom";
const VerticalNavBarContainer = styled('div')`
  background-color: #181818;
  color: #B3B3B3;
  height: 100vh;
  width: 17vw;
  display: flex;
  flex-direction: column;
`
const IconContainer = styled.div`
 display: flex;
 justify-content: center;
 margin: 20px 0;
`
const LinkContainer = styled.div`
margin: 20px;
height: 50%;
`
const LinkTitle = styled.h2`
  text-align: center;
`
const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const LinkItem = styled.span`
  display: flex;
  padding: 10px;
`

const StyledLink = styled.a`
  padding: 10px;
`;

const LinkIcon = styled.i`
  padding: 10px;
  ${StyledLink}:hover & { 
    color: white;
  }
`;

// const LinkWrapper = styled.div`
// background-color: beige;
// display: flex;
//   align-items: center;
//   padding: 5px 10px;

// `;

// const StyledLink = styled(Link)`
//   padding: 10px;
//   ${Link} a:hover {
//     color: white
//   }
// `;
export {VerticalNavBarContainer,IconContainer, LinkContainer, LinkTitle, LinkItem, LinkList, LinkIcon, StyledLink}