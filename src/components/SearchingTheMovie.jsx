import React, {Component} from 'react'
import {Container, Form, FormControl,Row,Col} from 'react-bootstrap'
import DisplayingTheMovies from "./DisplayingTheMovies"

export default class SearchingTheMovie extends Component{
  state = {
    array: [],
  }
  componentDidMount = async () =>{   
  try{
  const response = fetch("http://www.omdbapi.com/?apikey=c94830bb&s=harry%20potter")

   if (response.ok) {
        console.log('response ok');
        const data = await response.json();
        console.log(data);
        this.setState({
           array: data 
          });
        console.log(this.state.array);
      } else {
        console.log('response not ok');
      }
}catch(error){
 console.log('error', error)
}
}

  filtering = (e) =>{this.setState({query: e.target.value})}
  render(){
    return (
      <Container>
      <Form inline>
      <FormControl
      type="text"
      placeholder="Search"
      className="mr-sm-2"
      onChange={this.filtering}
      value={this.state.query}
      />
    </Form>
    <Row>
      
      {
        this.state.array.every((uniqueMovie) => !uniqueMovie.Title.toLowerCase().includes(this.state.query.toLowerCase()))
         ? "None" 
         : 
         this.state.array
        .filter((uniqueMovie) => uniqueMovie.Title.toLowerCase().includes(this.state.query.toLowerCase()))
        .map((item) => ( 
          <Col xs={10} md={4} lg={3} key={item.imdbID} className=''>
            <DisplayingTheMovies movies={item} />
          </Col>
        ))
      }  
    </Row>
    </Container>
    )}
}