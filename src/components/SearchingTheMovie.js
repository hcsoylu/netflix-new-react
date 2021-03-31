
import React, {Component} from 'react'
import "../SearchingTheMovie.css"
import {Row,Col,Form,FormControl, Container, Carousel} from "react-bootstrap"
import ImgRender from './ImgRender'

class SearchingTheMovie extends Component{

  constructor(props){
    super(props)
    this.state ={
      movies: [],
      query: "",
    }
    
  }
componentDidMount=async()=>{
 await this.fetchMovies()
 console.log(this.state.movies);
 
}
   fetchMovies = async ()=>{
     
    if(this.props.queries){
      const promises = this.props.queries.map(async (query)=>{
        const response = await this.fetchMovie(query);
        return {title:query,data:response};
      })

      const allData = await Promise.all(promises);
     this.setState({movies:allData})
    }
  }


   fetchMovie = async (query)=>{
    let url =  `http://www.omdbapi.com/?apikey=c94830bb&s=${query}`
    try{
      const response = await fetch(url)
      const data = await response.json()
      return data.Search
    }catch(error){
      console.log(error)
    }
    
  }

  filtering = (e) => this.setState({query: e.target.value})
   
  

  render(){
    console.log(this.state.query);
    return(
      <div>
          <Form inline>
          <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={this.filtering}
          value={this.state.query}
          />
        </Form>
      
      <div className="container-fluid">

          {this.state.movies.map((movie) =>
          <>
          <Row>
            <Col lg={12}>
           <h1 className="mt-5 mb-5">{movie.title}</h1>
            </Col>
          </Row>
        <Row>
               {            
              
                movie.data.every((singleMovie)=>!singleMovie.Title.toLowerCase().includes(this.state.query.toLowerCase()))
                ? "None"
                :
                movie.data
                .filter((singleMovie)=>singleMovie.Title.toLowerCase().includes(this.state.query.toLowerCase()))
                .map((singleMovie) => (
                  <ImgRender  key={singleMovie.imdbID} className='row_posters' movie={singleMovie} />
                ) )
              }
            </Row>
            </>
            )
            }
        </div>
      </div>
    )
  }
}
  export default SearchingTheMovie
  
  
    /*
    import {Container, Form, FormControl,Row,Col} from 'react-bootstrap'
    filtering = (e) =>{this.setState({query: e.target.value})}
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
    )
}
*/
  /*useEffect(() => {
function SearchingTheMovie({ title, baseUrl})
const [ movies, setMovie ] = useState([])
     async function fetchData(){
      const request = await axios.get(baseUrl)
      setMovie(request.data.Search)
      return request
    }
    fetchData()
  },[baseUrl])*/
