import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'

class MovieDetail extends Component {
  render() {
    const data = this.props.data
    const imageUrl =  `https://image.tmdb.org/t/p/w300/${data.poster_path}` || 'http://www.lyricsbogie.com/wp-content/uploads/2014/11/chhoti-bahen-1959-200x275.jpg'
    return (
      <div className="container">
        <Row>
          <Col m={4} s={12}>
          <img className="responsive" src={imageUrl} alt="actor"/>
          </Col>
          <Col m={8} s={12}>
            <h3>{data.original_title}</h3>
            <p><span>Release Date: </span>{data.release_date}</p>
            <p>{data.overview}</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MovieDetail
