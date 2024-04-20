import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderSigned from '../components/header-signed'
import ItineraryItemCard from '../components/itinerary-item-card'
import Navigationbuttons1 from '../components/navigationbuttons1'
import Footer from '../components/footer'
import './add-ordersto-itinerary.css'

const AddOrderstoItinerary = (props) => {
  return (
    <div className="add-ordersto-itinerary-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <HeaderSigned></HeaderSigned>
      <div className="add-ordersto-itinerary-add-ordersto-itinerary">
        <div className="add-ordersto-itinerary-title">
          <span className="add-ordersto-itinerary-text">
            Add Orders to itinerary
          </span>
        </div>
        <div className="add-ordersto-itinerary-itinerary-cards">
          <ItineraryItemCard rootClassName="itinerary-item-card-root-class-name"></ItineraryItemCard>
          <ItineraryItemCard rootClassName="itinerary-item-card-root-class-name1"></ItineraryItemCard>
          <ItineraryItemCard rootClassName="itinerary-item-card-root-class-name2"></ItineraryItemCard>
          <ItineraryItemCard rootClassName="itinerary-item-card-root-class-name3"></ItineraryItemCard>
        </div>
        <Navigationbuttons1></Navigationbuttons1>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default AddOrderstoItinerary
