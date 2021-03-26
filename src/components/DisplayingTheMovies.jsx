import React, {Component} from 'react'

export default class DisplayingTheMovies extends Component{

   render(){
     const { comment: Poster} = this.props;

      return (
              <div class="col-2">
                <img class="img-fluid" src={Poster} alt=""></img>
              </div>
      )
  }
  }
