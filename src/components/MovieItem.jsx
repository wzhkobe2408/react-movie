import React, { Component } from 'react'
import {Col, Card } from 'react-materialize'
import { Link } from "react-router-dom";
import './MovieItem.css'
class MovieItem extends Component {
  render() {
    return (
      <Col m={3} s={12}>
        <Link to="/detail">
          <Card horizontal="true" 
            actions={[<a   href='/detail'>{this.props.data.title.substring(0,14)}</a>]}>
            <img src={`https://image.tmdb.org/t/p/w300/${this.props.data.poster_path}`} alt=""/>
          </Card>
        </Link>
      </Col>
    )
  }
}

export default MovieItem