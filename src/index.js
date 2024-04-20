import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ViewTreasures from './views/view-treasures'
import ViewOrders from './views/view-orders'
import LandingPageUnsigned from './views/landing-page-unsigned'
import TreasureView from './views/treasure-view'
import Navigationbuttons from './views/navigationbuttons'
import OrderConfirmation from './views/order-confirmation'
import ProductPage from './views/product-page'
import BrowseOrders from './views/browse-orders'
import PlanyourtripSelectStops from './views/planyourtrip-select-stops'
import AddOrderstoItinerary from './views/add-ordersto-itinerary'
import ViewCart from './views/view-cart'
import AddOrderstoItinerary1 from './views/add-ordersto-itinerary1'
import ViewTreasures1 from './views/view-treasures1'
import LandingPageSigned from './views/landing-page-signed'
import PlanYourTripChooseDestination from './views/plan-your-trip-choose-destination'
import ConfirmPayment from './views/confirm-payment'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ViewTreasures} exact path="/view-treasures" />
        <Route component={ViewOrders} exact path="/view-orders" />
        <Route
          component={LandingPageUnsigned}
          exact
          path="/landing-page-unsigned"
        />
        <Route component={TreasureView} exact path="/treasure-view" />
        <Route component={Navigationbuttons} exact path="/navigationbuttons" />
        <Route component={OrderConfirmation} exact path="/order-confirmation" />
        <Route component={ProductPage} exact path="/product-page" />
        <Route component={BrowseOrders} exact path="/browse-orders" />
        <Route
          component={PlanyourtripSelectStops}
          exact
          path="/planyourtrip-select-stops"
        />
        <Route
          component={AddOrderstoItinerary}
          exact
          path="/add-ordersto-itinerary"
        />
        <Route component={ViewCart} exact path="/view-cart" />
        <Route
          component={AddOrderstoItinerary1}
          exact
          path="/add-ordersto-itinerary1"
        />
        <Route component={ViewTreasures1} exact path="/view-treasures1" />
        <Route component={LandingPageSigned} exact path="/" />
        <Route
          component={PlanYourTripChooseDestination}
          exact
          path="/plan-your-trip-choose-destination"
        />
        <Route component={ConfirmPayment} exact path="/confirm-payment" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
