import React from "react";
import "./App.css";
import Navnet from "./components/Navnet";
import SearchingTheMovie from './components/SearchingTheMovie';
import Footernet from "./components/Footernet";
import './index.css'
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navnet />
      <Container fluid>
      <SearchingTheMovie queries={['Taken','Pirates', 'Harry', 'Avenger', 'Iron Man', 'Pantera']}/>       
      </Container>
      <Footernet />
    </div>
  );
}

export default App;
