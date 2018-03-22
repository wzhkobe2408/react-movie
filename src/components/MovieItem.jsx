import React, { Component } from 'react'
import {Col, Card } from 'react-materialize'
import { Link } from "react-router-dom";
import './MovieItem.css'
class MovieItem extends Component {
  render() {
    const { data } = this.props
    const linkUrl = `/detail/${data.id}`
    const imageUrl =  `https://image.tmdb.org/t/p/w300/${this.props.data.poster_path}` || 'http://www.lyricsbogie.com/wp-content/uploads/2014/11/chhoti-bahen-1959-200x275.jpg'
    return (
      <Col m={3} s={12}>
        <Link to={linkUrl}>
          <Card horizontal="true" 
            actions={[<a   href={linkUrl}>{this.props.data.title.substring(0,14)}</a>]}>
            <img src={imageUrl} alt=""/>
          </Card>
        </Link>
      </Col>
    )
  }
}

export default MovieItem