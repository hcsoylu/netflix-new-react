import {Component} from 'react'
import {Container, Row, ListGroup,SingleComment} from 'react-bootstrap'
import DisplayingTheMovies from "./DisplayingTheMovies"
export default class SavingTheMovies extends Component{
  state = {
    array: [],
  }
componentDidMount = async () =>{

}
render() {
  return (
    <Container fluid>
      <h5>Comment Area</h5>
      <Row className='justify-content-center'>
        <ListGroup>
          {this.state.array.map((mov) => (
            <DisplayingTheMovies comment={mov} key={mov.imdbID} />
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
}
}