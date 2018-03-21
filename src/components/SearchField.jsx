import React, { Component } from 'react'
import {Row, Input} from 'react-materialize'

class SearchField extends Component {
  render() {
    return (
      <div className="container">
        <Row>
            <Input type="text" label="Search Movie" s={12} />
        </Row>
      </div>
    )
  }
}

export default SearchField
