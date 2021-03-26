import React, {Component} from 'react'
import {} from 'react-bootstrap'

export default class SearchingTheMovie extends Component{
  state = {query : ""}
  filtering = (e) =>{this.setState({query: e.target.value})}
  render(){
   const {Category} = this.props

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
        Category.every((uniqueBook) => !uniqueBook.title.toLowerCase().includes(this.state.query.toLowerCase()))
         ? "None" 
         : 
        Category
        .filter((uniqueBook) => uniqueBook.title.toLowerCase().includes(this.state.query.toLowerCase()))
        .map((item) => ( 
          <Col xs={10} md={4} lg={3} key={item.asin} className=''>
            <DisplayBook books={item} />
          </Col>
        ))
      }  
    
    </Row>
    </Container>
    )}
}