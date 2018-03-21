import React, { Component } from 'react'
import {Tabs, Tab} from 'react-materialize'
import './SelectTab.css'

class SelectTab extends Component {
  render() {
    return (
      <div className="container">
        <Tabs className='z-depth-1'>
            <Tab title="Test 1"  active></Tab>
            <Tab title="Test 2"></Tab>
            <Tab title="Test 3"></Tab>
            <Tab title="Test 4"></Tab>
        </Tabs>
      </div>
    )
  }
}


export default SelectTab
