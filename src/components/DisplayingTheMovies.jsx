import React, {Component} from 'react'
import {} from 'react-bootstrap'

export default class DisplayingTheMovies extends Component{

   render(){
     const { movies: {poster, title}} = this.props;

      return (
              <div class="col-2">
                <img class="img-fluid" src={poster} alt=""></img>
              </div>
      )
  }
  }
