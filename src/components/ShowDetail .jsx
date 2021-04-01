import React from 'react'
import { Card, Col, Container, Row, Media, Button, Modal, Form  } from 'react-bootstrap'
import "../SearchingTheMovie.css"
// this component will list all the details about a dish

class ShowDetail extends React.Component {
  
  state = {
    movie:[],
    comments:[],
  }
  
  componentDidMount = async () =>{
    let urlMovie = `http://www.omdbapi.com/?apikey=c94830bb&i=${this.props.match.params.movieID}`
    let urlComments = `https://striveschool-api.herokuapp.com/api/comments/${this.props.match.params.movieID}`
    const _TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZmZiZDg5YzI2ZjAwMTU3ZjljMzciLCJpYXQiOjE2MTcyMjIxNDYsImV4cCI6MTYxODQzMTc0Nn0.aTa0sJRSS3CVEPUvL4k8BH7OMKCAx8bDNj0dl0FOHRs";
    
    try{
      const responseComments = await fetch(urlComments, {headers:{Authorization:_TOKEN}} )
      const dataComments = await responseComments.json()
      this.setState({comments: dataComments}) 
      const responseMovie = await fetch(urlMovie)
      const dataMovie = await responseMovie.json()
      this.setState({movie: dataMovie}) 
      }catch(error){
        console.log(error);
      }
      };
    render() {
        return (
          <Container>
            <Row>
              <Col lg={6}>
              <Card border="dark" style={{ width: '30rem' }}>
                <Card.Img fluid variant="top" src={this.state.movie.Poster}/>
                <Card.Body>
                  <Card.Title>{this.state.movie.Title}</Card.Title>
                  <Card.Text>{this.state.movie.Plot}</Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col lg={6}>
                <Row>
                <h1> {this.state.movie.Title} </h1>
                  <ul className="list_1">
                    <li>{this.state.movie.Actors}</li>
                    <li>{this.state.movie.Language}</li>
                    <li>Writer: {this.state.movie.Writer}</li>
                    <li>Rating: {this.state.movie.imdbRating}</li>
                    <li>Year {this.state.movie.Year}</li>
                    <li>Votes {this.state.movie.imdbVotes}</li>
                    <li>Awards {this.state.movie.Awards}</li>
                    <li>Awards {this.state.movie.Production}</li>
                  </ul>
                </Row>
                  <h3> Comment Area</h3>
                  {
                    this.state.comments.map((comment) => {
                      return <Row> 
                    <Media>
                        <img
                          width={64}
                          height={64}
                          className="align-self-start mr-3"
                          src="https://picsum.photos/200"
                          alt="Generic placeholder"
                        />

                        <Media.Body>
                          <h5>{comment.author}</h5>
                          <p> {comment.comment}</p>
                          <br />
                        </Media.Body>
                      </Media>
                      </Row>
                 }     )}
                 <Form>
                 <Row>
                    <Modal.Body>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <h4>Email</h4>
                        <Form.Control as="textarea" rows={1} />
                        <br />
                        <h4>Comment</h4>
                        <Form.Control as="textarea" rows={4} />
                      </Form.Group>
                       </Modal.Body>
                       </Row>
                       <Row>
                       <Modal.Footer>
                        <Button variant="danger">Add Comment</Button>
                      </Modal.Footer>
                      </Row>
                    </Form>
              </Col>
            </Row>
          </Container>
          
        )
    }
}

export default ShowDetail