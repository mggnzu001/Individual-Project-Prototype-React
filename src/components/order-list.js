import React from 'react'

import PropTypes from 'prop-types'

import './order-list.css'

const OrderList = (props) => {
  return (
    <div className={`order-list-order-list ${props.rootClassName} `}>
      <div className="order-list-suggestion2">
        <div className="order-list-logo-frame">
          <img
            alt={props.rectangle6Alt}
            src={props.rectangle6Src}
            className="order-list-rectangle6"
          />
        </div>
        <div className="order-list-suggestion-desctiption">
          <div className="order-list-name-frame">
            <span className="order-list-text">
              <span className="">Company Name</span>
            </span>
          </div>
          <span className="order-list-text2">
            <span className="">View Details</span>
          </span>
        </div>
      </div>
      <img
        alt={props.line5Alt}
        src={props.line5Src}
        loading="lazy"
        className="order-list-line5"
      />
      <div className="order-list-add-item">
        <img
          alt={props.addLocationAlt}
          src={props.addLocationSrc}
          className="order-list-add-location"
        />
        <span className="order-list-text4">
          <span className="">Add Item to Order</span>
        </span>
      </div>
    </div>
  )
}

OrderList.defaultProps = {
  rectangle6Src: '/external/rectangle6i188-zgc9-200h.png',
  addLocationSrc: '/external/addlocationi188-cp7x.svg',
  rootClassName: '',
  line5Src: '/external/line5i188-so4f.svg',
  rectangle6Alt: 'Rectangle6I188',
  addLocationAlt: 'AddLocationI188',
  line5Alt: 'Line5I188',
}

OrderList.propTypes = {
  rectangle6Src: PropTypes.string,
  addLocationSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  line5Src: PropTypes.string,
  rectangle6Alt: PropTypes.string,
  addLocationAlt: PropTypes.string,
  line5Alt: PropTypes.string,
}

export default OrderList
