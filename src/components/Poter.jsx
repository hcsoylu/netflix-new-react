import { Component } from "react";

export default class Poter extends Component{
  componentDidMount = async () =>{
    fetch("http://www.omdbapi.com/?apikey=c94830bb&s=harry%20potter")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }
}