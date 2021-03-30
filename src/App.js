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
        <Row>
          <Col>
      <SearchingTheMovie
      title="Harry Potter"
      baseUrl={"http://www.omdbapi.com/?apikey=c94830bb&s=harry+potter"}
      />
      <SearchingTheMovie queries={['Spiderman','Taken','Pirates']}  title="Pirates of the Caribbean" baseUrl={"http://www.omdbapi.com/?apikey=c94830bb&s=pirates+of+the+caribbean"} />
   
          
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
      
      <Footernet />
    </div>
  );
}

export default App;
