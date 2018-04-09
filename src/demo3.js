import React from 'react'
import './demo3.css'

class Demo3 extends React.Component {

  componentDidMount() {
    try {
      CSS.registerProperty({
        name: '--tooth-width',
        syntax: '<length>',
        initialValue: '40px'
      });
      CSS.registerProperty({
        name: '--tooth-height',
        syntax: '<length>',
        initialValue: '20px'
      });
    } catch(e) {
    }
  }

  render() {
    return (
      <div className="demo-wrap">
        <div className="demo-content">
          <p className="demo-title">
            Demo3: paint jagged edge
          </p>
          <div className="flex-row bg-demo3">
            <div className="placeholder-jagged-props"></div>
            <div className="placeholder-jagged-props"></div>
            <div className="placeholder-jagged-props"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo3
