import React from "react" 
import "../SearchingTheMovie.css"
import {Col, Container} from "react-bootstrap"


export default function ImgRender ({movie}){
  return(

  <Col lg={2}>
    <img 
    className="row_poster img-fluid"
    key={movie.imdbID}
    src={movie.Poster}
    alt={movie.Title}
    />
  </Col>
  ) 
}

