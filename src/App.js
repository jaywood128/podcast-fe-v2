import './App.css';
import VerticalNavBar from "./components/vertical-nav-bar/VerticalNavBar";
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
    <Router history={history}>
      <AppContainer>
      <VerticalNavBar /> 
    </AppContainer>
    </Router>
  );
}

export default App;
