import React from 'react'

import PropTypes from 'prop-types'

import OrderList from './order-list'
import './itinerary-item-card.css'

const ItineraryItemCard = (props) => {
  return (
    <div
      className={`itinerary-item-card-itinerary-item-card ${props.rootClassName} `}
    >
      <div className="itinerary-item-card-title">
        <span className="itinerary-item-card-text">{props.text}</span>
        <img
          alt={props.line4Alt}
          src={props.line4Src}
          className="itinerary-item-card-line4"
        />
      </div>
      <OrderList className=""></OrderList>
    </div>
  )
}

ItineraryItemCard.defaultProps = {
  text: 'Johannesburg',
  rectangle6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/730bb839-fe54-4f5a-b104-93eebb84ec8d/17a500b5-51a8-4e46-bfb2-92d3fab26343?org_if_sml=1351&force_format=original',
  rootClassName: '',
  addLocationSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/730bb839-fe54-4f5a-b104-93eebb84ec8d/e4a206ab-fb7f-4a09-b76f-c71bce63e418?org_if_sml=1441&force_format=original',
  line5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/730bb839-fe54-4f5a-b104-93eebb84ec8d/dfccdb7d-7e49-40a1-9916-7f00ffcf2097?org_if_sml=1149&force_format=original',
  line4Alt: 'Line41886',
  rectangle6Alt: 'Rectangle6I188',
  addLocationAlt: 'AddLocationI188',
  line5Alt: 'Line5I188',
  line4Src: '/external/line41886-n2y.svg',
}

ItineraryItemCard.propTypes = {
  text: PropTypes.string,
  rectangle6Src: PropTypes.string,
  rootClassName: PropTypes.string,
  addLocationSrc: PropTypes.string,
  line5Src: PropTypes.string,
  line4Alt: PropTypes.string,
  rectangle6Alt: PropTypes.string,
  addLocationAlt: PropTypes.string,
  line5Alt: PropTypes.string,
  line4Src: PropTypes.string,
}

export default ItineraryItemCard
