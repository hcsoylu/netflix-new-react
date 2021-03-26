import SearchingTheMovie from './components/SearchingTheMovie';
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navnet from "./components/Navnet";
import Footernet from "./components/Footernet";
import SavingTheMovies from "./components/SavingTheMovies"
import Fantasy from "./components/assets/fantasy.json"
import Poter from "./components/Poter"
import { Container } from 'react-bootstrap';
import './index.css'

function App() {
  return (
    <div className="App">
      <Navnet />
      <Container>
        <div id="theDive">

        </div>
      </Container>
      {/*<SearchingTheMovie />*/}
      <Footernet />
    </div>
  );
}

export default App;
