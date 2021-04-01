<<<<<<< Updated upstream
import './App.css';
import SearchingTheMovie from './components/SearchingTheMovie';

function App() {
  return (
   <div>
     <SearchingTheMovie category={fiction}/>
     {/*nav and footer*/}
   </div>
=======
import React from "react";
import "./App.css";
import Navnet from "./components/Navnet";
import Home from './components/Home';
import Footernet from "./components/Footernet";
import './index.css';
import { Container} from "react-bootstrap";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ShowDetail from "./components/ShowDetail ";
import Signup from "./components/Signup"

function App() {
  return (
    <div className="App">
      <Router>
      <Navnet />
      <Container fluid>
      <Route path="/" exact render={(routerProps) => <Home {...routerProps} queries={['Taken','Pirates', 'Harry', 'Avenger', 'Iron Man', 'Pantera', 'Batman']} />} />
      <Route exact path="/details/:movieID" render={(routerProps) => <ShowDetail {...routerProps} />}/>      
      <Route exact path="/signup" render={(routerProps) => <Signup {...routerProps} />} />
      <Footernet link={'singup'}/>
      </Container>
      </Router>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
