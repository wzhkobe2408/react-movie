import React, { Component } from 'react'
import MovieDetail from '../components/MovieDetail'
import ActorList from '../components/ActorList'
import './Detail.css'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baseUrl: 'https://api.themoviedb.org/3/movie/',
      apiKey: '4baa68c6ddf34bf2ee878bd92b146add',
      data: {}
    }
  }
  componentWillMount() {
    const fetchUrl = `${this.state.baseUrl}${this.props.match.params.id}?api_key=${this.state.apiKey}&language=en-US&append_to_response=credits`
    fetch(fetchUrl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          data: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="detail-wrapper">
        <MovieDetail data={this.state.data} />
        <ActorList data={this.state.data} />
      </div>
    )
  }
}

export default Detail
