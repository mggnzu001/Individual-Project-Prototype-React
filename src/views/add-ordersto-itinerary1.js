import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderSigned from '../components/header-signed'
import ItineraryItemCard from '../components/itinerary-item-card'
import ItineraryItemCardFull from '../components/itinerary-item-card-full'
import Navigationbuttons1 from '../components/navigationbuttons1'
import Footer from '../components/footer'
import './add-ordersto-itinerary1.css'

const AddOrderstoItinerary1 = (props) => {
  return (
    <div className="add-ordersto-itinerary1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <HeaderSigned rootClassName="header-signed-root-class-name"></HeaderSigned>
      <div className="add-ordersto-itinerary1-add-ordersto-itinerary">
        <div className="add-ordersto-itinerary1-title">
          <span className="add-ordersto-itinerary1-text">
            Add Orders to itinerary
          </span>
        </div>
        <div className="add-ordersto-itinerary1-itinerary-cards">
          <ItineraryItemCard rootClassName="itinerary-item-card-root-class-name4"></ItineraryItemCard>
          <ItineraryItemCardFull></ItineraryItemCardFull>
          <ItineraryItemCard rootClassName="itinerary-item-card-root-class-name6"></ItineraryItemCard>
          <ItineraryItemCard rootClassName="itinerary-item-card-root-class-name5"></ItineraryItemCard>
        </div>
        <div className="add-ordersto-itinerary1-total">
          <span className="add-ordersto-itinerary1-text1">
            <span>Total: R970</span>
          </span>
        </div>
        <Navigationbuttons1 rootClassName="navigationbuttons1-root-class-name"></Navigationbuttons1>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default AddOrderstoItinerary1
