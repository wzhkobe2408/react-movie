import React, { Component } from 'react'
import MovieDetail from '../components/MovieDetail'
import ActorList from '../components/ActorList'

class Detail extends Component {
  render() {
    return (
      <div>
        <MovieDetail />
        <ActorList />
      </div>
    )
  }
}

export default Detail
