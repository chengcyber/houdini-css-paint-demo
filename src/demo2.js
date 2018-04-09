import React from 'react'
import './demo2.css'

class Demo2 extends React.Component {

  render() {
    return (
      <div className="demo-wrap">
        <div className="demo-content">
          <p className="demo-title">
            Demo2: paint with Typed Object Model
          </p>
          <div className="flex-row">
            <div className="placeholder-box-props"></div>
            <div className="placeholder-box-props"></div>
            <div className="placeholder-box-props"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo2
