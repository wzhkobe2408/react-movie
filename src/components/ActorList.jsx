import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import './ActionList.css'

class ActionList extends Component {
  render() {
    console.log(this.props.data)
    return (
      <div className="container">
        <Row>
          {/* {this.props.data.credits.cast.map((item, index) => (
            <Col key={index} m={2} s={3}>
              <img className="responsive" src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt="actor"/>
            </Col>  
          ))} */}
        </Row>
      </div>
    )
  }
}

export default ActionList
