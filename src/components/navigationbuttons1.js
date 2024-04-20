import React from 'react'

import PropTypes from 'prop-types'

import './navigationbuttons1.css'

const Navigationbuttons1 = (props) => {
  return (
    <div className={`navigationbuttons1-container ${props.rootClassName} `}>
      <button className="navigationbuttons1-navigationbuttons">
        <button className="navigationbuttons1-textbutton">
          <span className="navigationbuttons1-text">
            <span className="">Back</span>
          </span>
        </button>
        <button className="navigationbuttons1-textbutton1">
          <span className="navigationbuttons1-text2">
            <span className="">NExt</span>
          </span>
        </button>
      </button>
    </div>
  )
}

Navigationbuttons1.defaultProps = {
  rootClassName: '',
}

Navigationbuttons1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Navigationbuttons1
