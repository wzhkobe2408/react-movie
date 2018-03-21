import React, { Component } from 'react'
import MovieList from '../components/MovieList'
import SelectTab from '../components/SelectTab'

class Home extends Component {
  render() {
    return (
      <div>
        <SelectTab />
        <MovieList />
      </div>
    )
  }
}

export default  Home