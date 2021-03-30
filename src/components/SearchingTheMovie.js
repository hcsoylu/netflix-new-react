import axios from 'axios'
import React, {Component} from 'react'
import "../SearchingTheMovie.css"
import {Row,Col} from "react-bootstrap"
class SearchingTheMovie extends Component{


  constructor(props){
    super(props)
    this.state ={
      movies: []
    }
    
  }
  

  
 
componentDidMount=async()=>{
 const allMovies =await  this.fetchMovies()
 console.log(allMovies)
 
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
  render(){
    return(
      <div className="container-fluid">
       {
          this.state.movies.map(movie => {
            return  <>
             <h1 className="mt-5 mb-5">{movie.title}</h1>
            
            <Row>
             
              {
                movie.data.map((singleMovie)=>{
                    return <Col>
                     <img
                    className="row_poster"
                    onError={(e)=>{
                      e.currentTarget.parentElement.remove()
                    }}
                    style={{height:200,objectFit:"cover"}}
                    key={singleMovie.imdbID}
                    src={singleMovie.Poster}
                    alt={singleMovie.Title}
                    />
                    </Col>
                })
              }
            </Row></>
          })
        }
       
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
