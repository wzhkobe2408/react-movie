import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'


class MovieDetail extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col m={4} s={12}>
          <img className="responsive" src="https://images.unsplash.com/photo-1508256912445-74f4409bbfde?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f302e7dd05f624e96197416fb36ad246&auto=format&fit=crop&w=751&q=80g" alt="actor"/>
          </Col>
          <Col m={8} s={12}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, eaque quas magnam nobis natus maxime odit quibusdam culpa earum consequatur nihil et omnis deleniti laboriosam praesentium assumenda, laudantium recusandae sequi.</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MovieDetail
