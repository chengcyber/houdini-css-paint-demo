import React from 'react'
import './demo1.css'

class Demo1 extends React.Component {

  render() {
    return (
      <div className="demo-wrap">
        <div className="demo-content">
          <p className="demo-title">
            Demo1: simple usage, paint a wireframe
          </p>
          <div className="placeholder"></div>
        </div>
      </div>
    )
  }
}

export default Demo1
