import './App.css';
import VerticalNavBar from "./components/vertical-nav-bar/VerticalNavBar";
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import Home from "./views/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
import TopBar from "./components/header/TopBar";

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
      <TopBar />
    </AppContainer>
    <Switch>
      <Route path="/">
    <Home/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
