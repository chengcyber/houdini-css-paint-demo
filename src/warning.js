import React from 'react'

const Warning = (props) => props.show ? (
  <p className="warning">
    This Houdini demo requires the CSS Paint API and Typed OM.
    Use Chrome and go to <span className="red">chrome://flags and enable Experimental Web Platform features.</span>
    Also make sure you're serving over https or localhost.
  </p>
) : null

export default Warning
