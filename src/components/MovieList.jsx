import React, { Component } from 'react'
import { Row, Pagination } from 'react-materialize'
import MovieItem from './MovieItem'
import './MovieList.css'

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiKey: '4baa68c6ddf34bf2ee878bd92b146add',
      movieList: [],
      totalPage: 0
    }
  }
  formatDate() {
    let Year = new Date().getFullYear()
    let Month = new Date().getMonth()
    let Day = new Date().getDate()
    let result = `${Year}-${Month}-${Day}`
    return result
  }
  componentWillMount() {
    let formatNowDate = this.formatDate(new Date())
    let priorDate = new Date().setDate(new Date().getDate()-30)
    let formatPastDate = this.formatDate(priorDate)
    let baseUrl = 'https://api.themoviedb.org/3/discover/movie'
    fetch(`${baseUrl}?api_key=${this.state.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${formatPastDate}&primary_release_date.lte=${formatNowDate}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          movieList: data.results,
          totalPage: data.total_pages
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="container">
        <h3>New Release</h3>
        <Row>
          {
            this.state.movieList.map((movieItem,index) => (
              <MovieItem key={index} data={movieItem} />
            ))
          }
        </Row>
        <Row>
          <Pagination items={10} activePage={2} maxButtons={8} />
        </Row>
      </div>
    )
  }
}

export default MovieList