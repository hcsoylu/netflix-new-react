import SearchingTheMovie from './components/SearchingTheMovie';
import React from "react";
import "./App.css";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navnet from "./components/Navnet";
import Footernet from "./components/Footernet";

function App() {
  return (
    <div className="App">
      <SearchingTheMovie category={fiction}/>
      <Navnet />
      <Footernet />
    </div>
  );
}

export default App;
