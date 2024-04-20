import React from 'react'

import PropTypes from 'prop-types'

import './itinerary-item-card-full.css'

const ItineraryItemCardFull = (props) => {
  return (
    <div className="itinerary-item-card-full-itinerary-item-card">
      <div className="itinerary-item-card-full-title">
        <span className="itinerary-item-card-full-text">{props.text}</span>
        <img
          alt={props.line4Alt}
          src={props.line4Src}
          className="itinerary-item-card-full-line4"
        />
      </div>
      <div className="itinerary-item-card-full-order-list">
        <div className="itinerary-item-card-full-suggestion2">
          <div className="itinerary-item-card-full-logo-frame">
            <img
              alt={props.rectangle6Alt}
              src={props.rectangle6Src}
              className="itinerary-item-card-full-rectangle6"
            />
          </div>
          <div className="itinerary-item-card-full-suggestion-desctiption">
            <div className="itinerary-item-card-full-name-frame">
              <span className="itinerary-item-card-full-text01">
                <span>Company Name</span>
              </span>
            </div>
            <span className="itinerary-item-card-full-text03">
              <span>View Details</span>
            </span>
          </div>
        </div>
        <img
          alt={props.line5Alt}
          src={props.line5Src}
          loading="lazy"
          className="itinerary-item-card-full-line5"
        />
        <div className="itinerary-item-card-full-property1-default">
          <div className="itinerary-item-card-full-itemimage">
            <img
              alt={props.rectangle5Alt}
              src={props.rectangle5Src}
              className="itinerary-item-card-full-rectangle5"
            />
          </div>
          <div className="itinerary-item-card-full-item-details">
            <span className="itinerary-item-card-full-text05">
              <span>Item Name</span>
            </span>
            <span className="itinerary-item-card-full-text07">
              <span>R0.00</span>
            </span>
            <span className="itinerary-item-card-full-text09">
              <span>Quantity: 0</span>
            </span>
          </div>
        </div>
        <div className="itinerary-item-card-full-add-item">
          <img
            alt={props.addLocationAlt}
            src={props.addLocationSrc}
            className="itinerary-item-card-full-add-location"
          />
          <span className="itinerary-item-card-full-text11">
            <span>Add Item to Order</span>
          </span>
        </div>
      </div>
    </div>
  )
}

ItineraryItemCardFull.defaultProps = {
  addLocationAlt: 'AddLocationI188',
  rectangle5Alt: 'Rectangle51156',
  rectangle6Alt: 'Rectangle6I188',
  line4Alt: 'Line41886',
  line5Src: '/external/line5i188-so4f.svg',
  line4Src: '/external/line41886-n2y.svg',
  rectangle6Src: '/external/rectangle6i188-zgc9-200h.png',
  text: 'Johannesburg',
  addLocationSrc: '/external/addlocationi188-cp7x.svg',
  line5Alt: 'Line5I188',
  rectangle5Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

ItineraryItemCardFull.propTypes = {
  addLocationAlt: PropTypes.string,
  rectangle5Alt: PropTypes.string,
  rectangle6Alt: PropTypes.string,
  line4Alt: PropTypes.string,
  line5Src: PropTypes.string,
  line4Src: PropTypes.string,
  rectangle6Src: PropTypes.string,
  text: PropTypes.string,
  addLocationSrc: PropTypes.string,
  line5Alt: PropTypes.string,
  rectangle5Src: PropTypes.string,
}

export default ItineraryItemCardFull
