import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
// this component will list all the details about a dish


class ShowDetail extends React.Component {


  componentDidMount = () =>{
    let movieId = this.props.match.params.movieId
   
  }

    render() {
        return (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        )
    }
}

export default ShowDetail