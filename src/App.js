import React from "react";
import "./App.css";
import Navnet from "./components/Navnet";
import Home from './components/Home';
import Footernet from "./components/Footernet";
import './index.css';
import { Container} from "react-bootstrap";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ShowDetail from "./components/ShowDetail ";


function App() {
  return (
    <div className="App">
      <Router>
      <Navnet />
      <Container fluid>
      <Route path="/" exact render={(routerProps) => <Home {...routerProps} queries={['Taken','Pirates', 'Harry', 'Avenger', 'Iron Man', 'Pantera', 'Batman']} />} />
      <Route path="/details/:movieId" component={ShowDetail}/>      
      </Container>
      <Footernet />
      </Router>
    </div>
  );
}

export default App;
