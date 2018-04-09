import React from 'react'
import './demo4.css'

class Demo4 extends React.Component {

  componentDidMount() {
    try {
      CSS.registerProperty({
        name: '--dot-spacing',
        syntax: '<length>',
        initialValue: '20px'
      });
      CSS.registerProperty({
        name: '--dot-fade-offset',
        syntax: '<percentage>',
        initialValue: '0%'
      });
      CSS.registerProperty({
        name: '--dot-color',
        syntax: '<color>',
        initialValue: '#fff'
      });
    } catch(e) {
    }
  }

  render() {
    return (
      <div className="demo-wrap">
        <div className="demo-content">
          <p className="demo-title">
            Demo4: paint fadding dots and animation!
          </p>
          <div className="container4">
            <div className="polka-dot"></div>
            <div className="hint">HOVER/TAP ME</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo4
