import React from 'react'

import { Helmet } from 'react-helmet'

import './navigationbuttons.css'

const Navigationbuttons = (props) => {
  return (
    <div className="navigationbuttons-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="navigationbuttons-dummy-container">
        <button className="navigationbuttons-navigationbuttons">
          <button className="navigationbuttons-textbutton">
            <span className="navigationbuttons-text">
              <span>Back</span>
            </span>
          </button>
          <button className="navigationbuttons-textbutton1">
            <span className="navigationbuttons-text2">
              <span>NExt</span>
            </span>
          </button>
          <img
            alt="Rectangle101889"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="navigationbuttons-rectangle10"
          />
        </button>
      </div>
    </div>
  )
}

export default Navigationbuttons
