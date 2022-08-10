import React, { useState, useEffect } from "react";
import { useStateValue } from "../ContextApi/StateProvider";
import './HotelConfirm.css'

const HotelConfirm = () => {
  const [{ hotelBookingDetails }, dispatch] = useStateValue();
  const [blockRoomData, setBlockRoomData] = useState([]);

  const blockRoomConfirmation = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(hotelBookingDetails),
    };
    fetch(
      "/BookingEngineService_Hotel/hotelservice.svc/rest/BlockRoom/",
      requestOptions
    )
      .then((resp) => resp.json())
      .then((data) => {
        // handle data here
        console.log(data);
        const addressString =
          data.BlockRoomResult?.AddressLine1 +
          data.BlockRoomResult?.AddressLine2;

        console.log(addressString);
        setBlockRoomData([data.BlockRoomResult]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(hotelBookingDetails);
    if (hotelBookingDetails !== null) {
      blockRoomConfirmation();
    }
  }, []);

  useEffect(() => {
    console.log(blockRoomData);
  }, [blockRoomData]);

  return (
    <>
      <div id="main-wrapper">
        <header id="header">
          <div class="container">
            <div class="header-row">
              <div class="header-column justify-content-start">
                <div class="logo me-2 me-lg-3">
                  {" "}
                  <a
                    href="index.html"
                    class="d-flex"
                    title="Quickai - HTML Template"
                  >
                    <img src="images/logo.png" alt="Quickai" />
                  </a>{" "}
                </div>
              </div>
              <div class="header-column justify-content-end">
                <nav class="primary-menu navbar navbar-expand-lg">
                  <div id="header-nav" class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                      <li class="dropdown">
                        {" "}
                        <a class="dropdown-toggle" href="#">
                          Home
                        </a>
                        <ul class="dropdown-menu">
                          <li class="dropdown">
                            <a class="dropdown-item dropdown-toggle" href="#">
                              Index 1
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a class="dropdown-item" href="index.html">
                                  Recharge or Bill Payment
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="booking-hotels.html"
                                >
                                  Booking
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a class="dropdown-item dropdown-toggle" href="#">
                              Index 2
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a class="dropdown-item" href="index-2.html">
                                  Recharge or Bill Payment
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="booking-hotels-2.html"
                                >
                                  Booking
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a class="dropdown-item" href="index-3.html">
                              Index 3 - (Recharge & Bill)
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="index-4.html">
                              Index 4 - (Booking)
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="index-5.html">
                              Index 5 - (Recharge & Bill)
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="index-6.html">
                              Index 6 - (Booking)
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="index-7.html">
                              Index 7 - (Recharge & Bill)
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="index-8.html">
                              Index 8 - (Booking)
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="index-9.html">
                              Index 9 - (Booking)
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="index-10.html">
                              Index 10 - (Recharge & Bill)
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="index-11.html">
                              Index 11 - (Mobile Top-Up)
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        {" "}
                        <a class="dropdown-toggle" href="#">
                          Recharge & Bill Payment
                        </a>
                        <ul class="dropdown-menu dropdown-menu-sm">
                          <li>
                            <div class="row">
                              <div class="col-lg-6">
                                <ul class="dropdown-mega-submenu">
                                  <li class="dropdown">
                                    <a
                                      class="dropdown-item dropdown-toggle"
                                      href="#"
                                    >
                                      Mobile
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="index.html"
                                        >
                                          Layout 1
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="index-2.html"
                                        >
                                          Layout 2
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="dropdown">
                                    <a
                                      class="dropdown-item dropdown-toggle"
                                      href="#"
                                    >
                                      DTH
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-dth.html"
                                        >
                                          Layout 1
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-dth-2.html"
                                        >
                                          Layout 2
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="dropdown">
                                    <a
                                      class="dropdown-item dropdown-toggle"
                                      href="#"
                                    >
                                      Data Card
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-datacard.html"
                                        >
                                          Layout 1
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-datacard-2.html"
                                        >
                                          Layout 2
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="dropdown">
                                    <a
                                      class="dropdown-item dropdown-toggle"
                                      href="#"
                                    >
                                      Broadband
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-broadband.html"
                                        >
                                          Layout 1
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-broadband-2.html"
                                        >
                                          Layout 2
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="dropdown">
                                    <a
                                      class="dropdown-item dropdown-toggle"
                                      href="#"
                                    >
                                      Landline
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-landline.html"
                                        >
                                          Layout 1
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-landline-2.html"
                                        >
                                          Layout 2
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="dropdown">
                                    <a
                                      class="dropdown-item dropdown-toggle"
                                      href="#"
                                    >
                                      Cable TV
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-cabletv.html"
                                        >
                                          Layout 1
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-cabletv-2.html"
                                        >
                                          Layout 2
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="dropdown">
                                    <a
                                      class="dropdown-item dropdown-toggle"
                                      href="#"
                                    >
                                      Electricity
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-electricity.html"
                                        >
                                          Layout 1
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-electricity-2.html"
                                        >
                                          Layout 2
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="dropdown">
                                    <a
                                      class="dropdown-item dropdown-toggle"
                                      href="#"
                                    >
                                      Metro
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-metro.html"
                                        >
                                          Layout 1
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-metro-2.html"
                                        >
                                          Layout 2
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="dropdown">
                                    <a
                                      class="dropdown-item dropdown-toggle"
                                      href="#"
                                    >
                                      Gas
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-gas.html"
                                        >
                                          Layout 1
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-gas-2.html"
                                        >
                                          Layout 2
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="dropdown">
                                    <a
                                      class="dropdown-item dropdown-toggle"
                                      href="#"
                                    >
                                      Water
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-water.html"
                                        >
                                          Layout 1
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="recharge-bill-water-2.html"
                                        >
                                          Layout 2
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                              <div class="col-lg-6">
                                <ul class="dropdown-mega-submenu">
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="recharge-order.html"
                                    >
                                      Order
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="recharge-order-summary.html"
                                    >
                                      Order Summary
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="recharge-payment.html"
                                    >
                                      Payment
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="recharge-payment-success.html"
                                    >
                                      Payment Success
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="recharge-plans.html"
                                    >
                                      Recharge - Plans
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="recharge-plans-2.html"
                                    >
                                      Recharge - Plans 2
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="recharge-plans-3.html"
                                    >
                                      Recharge - Plans 3
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="recharge-invoice.html"
                                      target="_blank"
                                    >
                                      Invoice
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="email-template/recharge-email-template/index.html"
                                      target="_blank"
                                    >
                                      Email Template
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown dropdown-mega active">
                        {" "}
                        <a class="dropdown-toggle" href="#">
                          Booking
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <div class="row">
                              <div class="col-lg">
                                {" "}
                                <span class="sub-title">Hotels</span>
                                <ul class="dropdown-mega-submenu">
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-hotels.html"
                                    >
                                      Home Layout 1
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-hotels-2.html"
                                    >
                                      Home Layout 2
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-hotels-list.html"
                                    >
                                      Hotel List
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-hotels-grid.html"
                                    >
                                      Hotel Grid
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-hotels-details.html"
                                    >
                                      Hotel Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-hotels-confirm-details.html"
                                    >
                                      Hotel Confirm Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      target="_blank"
                                      href="booking-hotels-invoice.html"
                                    >
                                      Invoice
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      target="_blank"
                                      href="email-template/hotel-email-template/index.html"
                                    >
                                      Email Template
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="col-lg">
                                {" "}
                                <span class="sub-title">Flights</span>
                                <ul class="dropdown-mega-submenu">
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-flights.html"
                                    >
                                      Home Layout 1
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-flights-2.html"
                                    >
                                      Home Layout 2
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-flights-one-way.html"
                                    >
                                      One Way Trip List
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-flights-round-trip.html"
                                    >
                                      Round Trip List
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-flights-confirm-details.html"
                                    >
                                      Confirm Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      target="_blank"
                                      href="booking-flights-itinerary.html"
                                    >
                                      Itinerary
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      target="_blank"
                                      href="booking-flights-invoice.html"
                                    >
                                      Invoice
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      target="_blank"
                                      href="email-template/flight-email-template/index.html"
                                    >
                                      Email Template
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="col-lg">
                                {" "}
                                <span class="sub-title">Trains</span>
                                <ul class="dropdown-mega-submenu">
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-trains.html"
                                    >
                                      Home Layout 1
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-trains-2.html"
                                    >
                                      Home Layout 2
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-trains-list.html"
                                    >
                                      Trains List
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-trains-confirm-details.html"
                                    >
                                      Confirm Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      target="_blank"
                                      href="booking-trains-invoice.html"
                                    >
                                      Invoice
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      target="_blank"
                                      href="email-template/train-email-template/index.html"
                                    >
                                      Email Template
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="col-lg">
                                {" "}
                                <span class="sub-title">Bus</span>
                                <ul class="dropdown-mega-submenu">
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-bus.html"
                                    >
                                      Home Layout 1
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-bus-2.html"
                                    >
                                      Home Layout 2
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-bus-list.html"
                                    >
                                      Bus List
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-bus-confirm-details.html"
                                    >
                                      Confirm Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      target="_blank"
                                      href="booking-bus-invoice.html"
                                    >
                                      Invoice
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      target="_blank"
                                      href="email-template/bus-email-template/index.html"
                                    >
                                      Email Template
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="col-lg">
                                {" "}
                                <span class="sub-title">Cars</span>
                                <ul class="dropdown-mega-submenu">
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-cars.html"
                                    >
                                      Home Layout 1
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-cars-2.html"
                                    >
                                      Home Layout 2
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-cars-list.html"
                                    >
                                      Cars List
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-cars-grid.html"
                                    >
                                      Cars Grid
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-cars-grid-2.html"
                                    >
                                      Cars Grid 2
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="booking-cars-details.html"
                                    >
                                      Car Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      target="_blank"
                                      href="booking-cars-invoice.html"
                                    >
                                      Invoice
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      target="_blank"
                                      href="email-template/car-email-template/index.html"
                                    >
                                      Email Template
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        {" "}
                        <a class="dropdown-toggle" href="#">
                          Features
                        </a>
                        <ul class="dropdown-menu">
                          <li class="dropdown">
                            <a class="dropdown-item dropdown-toggle" href="#">
                              Headers
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a class="dropdown-item" href="index.html">
                                  Light Version (Default)
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="index-7.html">
                                  Left Navigation (Alternate)
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="index-4.html">
                                  Dark Version
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="index-5.html">
                                  Primary Version
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="index-8.html">
                                  Transparent
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="feature-page-header-custom-background-with-transparent-header.html"
                                >
                                  Transparent with border
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a class="dropdown-item dropdown-toggle" href="#">
                              Navigation DropDown
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a class="dropdown-item" href="index.html">
                                  Light Version (Default)
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="index-3.html">
                                  Dark Version
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="index-6.html">
                                  Primary Version
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a class="dropdown-item dropdown-toggle" href="#">
                              Page Headers
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="feature-page-header-left-alignment.html"
                                >
                                  Left Alignment
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="feature-page-header-center-alignment.html"
                                >
                                  Center Alignment
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="feature-page-header-light.html"
                                >
                                  Light Version
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="feature-page-header-dark.html"
                                >
                                  Dark Version
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="feature-page-header-primary.html"
                                >
                                  Primary Version
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="feature-page-header-custom-background.html"
                                >
                                  Custom Background
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="feature-page-header-custom-background-with-transparent-header.html"
                                >
                                  Custom Background 2
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a class="dropdown-item dropdown-toggle" href="#">
                              Footer
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a class="dropdown-item" href="index.html">
                                  Light Version Default
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="index-7.html">
                                  Alternate Version
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="feature-footer-dark.html"
                                >
                                  Dark Version
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="feature-footer-primary.html"
                                >
                                  Primary Version
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="feature-layout-boxed.html"
                            >
                              Layout Boxed
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        {" "}
                        <a class="dropdown-toggle" href="#">
                          Blog
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="blog.html">
                              Blog Standard
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="blog-grid.html">
                              Blog Grid
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="blog-list.html">
                              Blog List
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="blog-single.html">
                              Blog Single Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="blog-single-left-sidebar.html"
                            >
                              Blog Single Left Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        {" "}
                        <a class="dropdown-toggle" href="#">
                          Pages
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="about-us.html">
                              About Us
                            </a>
                          </li>
                          <li class="dropdown">
                            <a class="dropdown-item dropdown-toggle" href="#">
                              Login/Signup
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a class="dropdown-item" href="login.html">
                                  Login
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="signup.html">
                                  Sign Up
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="forgot-password.html"
                                >
                                  Forgot Password
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="otp.html">
                                  OTP - One Time Password
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a class="dropdown-item dropdown-toggle" href="#">
                              My Profile
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a class="dropdown-item" href="profile.html">
                                  Personal Information
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="profile-favourites.html"
                                >
                                  Favourites
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="profile-cards.html"
                                >
                                  Credit or Debit Cards
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="profile-notifications.html"
                                >
                                  Notifications
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="profile-orders-history.html"
                                >
                                  Orders History
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="profile-password.html"
                                >
                                  Change Password
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a class="dropdown-item" href="payment.html">
                              Payment
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="payment-2.html">
                              Payment 2
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="help.html">
                              Help
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="faq.html">
                              Faq
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="support.html">
                              Support
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="contact-us.html">
                              Contact Us
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="404.html">
                              404
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="coming-soon.html"
                              target="_blank"
                            >
                              Coming Soon
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="elements.html">
                              Elements
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="elements-2.html">
                              Elements 2
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>

                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#header-nav"
                >
                  {" "}
                  <span></span> <span></span> <span></span>{" "}
                </button>
                <div class="vr mx-2 h-25 my-auto"></div>

                <nav class="login-signup navbar navbar-expand">
                  <ul class="navbar-nav">
                    <li class="profile">
                      <a
                        class="pe-0"
                        data-bs-toggle="modal"
                        data-bs-target="#login-modal"
                        href="#"
                        title="Login / Sign up"
                      >
                        <span class="d-none d-sm-inline-block">
                          Login / Sign up
                        </span>{" "}
                        <span class="user-icon ms-sm-2">
                          <i class="fas fa-user"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <section class="page-header page-header-dark bg-secondary">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-8">
                <h1>Hotels - Confirm Details</h1>
              </div>
              <div class="col-md-4">
                <ul class="breadcrumb justify-content-start justify-content-md-end mb-0">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="booking-hotels.html">Hotels</a>
                  </li>
                  <li>
                    <a href="booking-hotels-details.html">Hotels Details</a>
                  </li>
                  <li class="active">Confirm Details</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div id="content">
          <section class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="bg-white shadow-md rounded p-3 p-sm-4 confirm-details">
                  <h2 class="text-6 mb-3 mb-sm-4">Confirm Hotels Details</h2>
                  <hr class="mx-n3 mx-sm-n4 mb-4" />
                  <div class="row">
                    <div class="col-12 col-md-3 mb-3 mb-md-0">
                      {" "}
                      <img
                        class="img-fluid rounded align-top"
                        src="images/brands/hotels/hotel-1.jpg"
                        title="Standard Room"
                        alt="Standard Room"
                      />{" "}
                    </div>
                    <div class="col-12 col-md-7">
                      <h4 class="text-5">{blockRoomData[0]?.HotelName}</h4>
                      <p className="text-muted mb-1" id="hotel-address">
                        <i class="fas fa-map-marker-alt"></i>
                        {blockRoomData[0]?.AddressLine1 +
                          blockRoomData[0]?.AddressLine2}
                      </p>
                      <ul class="list-inline text-muted mb-2">
                        <li class="list-inline-item">
                          <span class="me-1 text-black-50">
                            <i class="fas fa-home"></i>
                          </span>{" "}
                          {blockRoomData[0]?.HotelRoomsDetails[0]?.RoomTypeName}
                        </li>
                        <li class="list-inline-item">
                          <span class="me-1 text-black-50">
                            <i class="fas fa-user"></i>
                          </span>{" "}
                          3 Guests
                        </li>
                      </ul>
                    </div>
                    <div class="col-12 col-md-2 d-flex">
                      <div class="reviews ms-md-auto">
                        {" "}
                        <span class="reviews-score px-2 py-1 rounded fw-600 d-inline-block text-light">
                          4.7
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                  <hr class="my-4" />
                  <div class="row">
                    <div class="col mb-2">
                      <form id="bookingHotels" method="post">
                        <div class="row g-3 mb-2">
                          <div class="col-md-6 col-lg">
                            <label class="form-label" for="hotelsCheckIn">
                              Check In
                            </label>
                            <div class="position-relative">
                              <input
                                id="hotelsCheckIn"
                                value="10-19-2022"
                                type="text"
                                class="form-control"
                                required=""
                                placeholder="Check In"
                              />
                              <span class="icon-inside">
                                <i class="far fa-calendar-alt"></i>
                              </span>{" "}
                            </div>
                          </div>
                          <div class="col-md-6 col-lg">
                            <label class="form-label" for="hotelsCheckOut">
                              Check Out
                            </label>
                            <div class="position-relative">
                              <input
                                id="hotelsCheckOut"
                                value="10-21-2022"
                                type="text"
                                class="form-control"
                                required=""
                                placeholder="Check Out"
                              />
                              <span class="icon-inside">
                                <i class="far fa-calendar-alt"></i>
                              </span>{" "}
                            </div>
                          </div>
                          <div class="col-md-6 col-lg">
                            <div class="travellers-class">
                              <label
                                class="form-label"
                                for="hotelsTravellersClass"
                              >
                                Rooms & Guests
                              </label>
                              <div class="position-relative">
                                <input
                                  type="text"
                                  id="hotelsTravellersClass"
                                  value="1 Room / 3 People"
                                  class="travellers-class-input pe-3 form-control"
                                  name="hotels-travellers-class"
                                  placeholder="Rooms / People"
                                  required=""
                                  onkeypress="return false;"
                                />
                                <span class="icon-inside">
                                  <i class="fas fa-caret-down"></i>
                                </span>
                                <div class="travellers-dropdown">
                                  <div class="row align-items-center">
                                    <div class="col-sm-7">
                                      <p class="mb-sm-0">Rooms</p>
                                    </div>
                                    <div class="col-sm-5">
                                      <div class="qty input-group">
                                        <div class="input-group-prepend">
                                          <button
                                            type="button"
                                            class="btn bg-light-4"
                                            data-value="decrease"
                                            data-target="#hotels-rooms"
                                            data-toggle="spinner"
                                          >
                                            -
                                          </button>
                                        </div>
                                        <input
                                          type="text"
                                          data-ride="spinner"
                                          id="hotels-rooms"
                                          class="qty-spinner form-control"
                                          value="1"
                                          readonly=""
                                        />
                                        <div class="input-group-append">
                                          <button
                                            type="button"
                                            class="btn bg-light-4"
                                            data-value="increase"
                                            data-target="#hotels-rooms"
                                            data-toggle="spinner"
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <hr class="mt-2 mb-4" />
                                  <div class="row align-items-center">
                                    <div class="col-sm-7">
                                      <p class="mb-sm-0">
                                        Adults{" "}
                                        <small class="text-muted">
                                          (12+ yrs)
                                        </small>
                                      </p>
                                    </div>
                                    <div class="col-sm-5">
                                      <div class="qty input-group">
                                        <div class="input-group-prepend">
                                          <button
                                            type="button"
                                            class="btn bg-light-4"
                                            data-value="decrease"
                                            data-target="#adult-travellers"
                                            data-toggle="spinner"
                                          >
                                            -
                                          </button>
                                        </div>
                                        <input
                                          type="text"
                                          data-ride="spinner"
                                          id="adult-travellers"
                                          class="qty-spinner form-control"
                                          value="1"
                                          readonly=""
                                        />
                                        <div class="input-group-append">
                                          <button
                                            type="button"
                                            class="btn bg-light-4"
                                            data-value="increase"
                                            data-target="#adult-travellers"
                                            data-toggle="spinner"
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <hr class="my-2" />
                                  <div class="row align-items-center">
                                    <div class="col-sm-7">
                                      <p class="mb-sm-0">
                                        Children{" "}
                                        <small class="text-muted">
                                          (1-12 yrs)
                                        </small>
                                      </p>
                                    </div>
                                    <div class="col-sm-5">
                                      <div class="qty input-group">
                                        <div class="input-group-prepend">
                                          <button
                                            type="button"
                                            class="btn bg-light-4"
                                            data-value="decrease"
                                            data-target="#children-travellers"
                                            data-toggle="spinner"
                                          >
                                            -
                                          </button>
                                        </div>
                                        <input
                                          type="text"
                                          data-ride="spinner"
                                          id="children-travellers"
                                          class="qty-spinner form-control"
                                          value="0"
                                          readonly=""
                                        />
                                        <div class="input-group-append">
                                          <button
                                            type="button"
                                            class="btn bg-light-4"
                                            data-value="increase"
                                            data-target="#children-travellers"
                                            data-toggle="spinner"
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="d-grid">
                                    <button
                                      class="btn btn-primary submit-done mt-3"
                                      type="button"
                                    >
                                      Done
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-lg d-grid align-items-end">
                            <button
                              class="btn btn-outline-primary shadow-none"
                              type="submit"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <hr />
                  <h3 class="text-5 mb-4 mt-4">Hotels Rules</h3>
                  <div class="row mb-3">
                    <div class="col-6 col-xl-4">
                      <span class="text-muted text-3 me-2">
                        <i class="fas fa-paw"></i>
                      </span>
                      Pets are not allowed
                    </div>
                    <div class="col-6 col-xl-4">
                      <span class="text-muted text-3 me-2">
                        <i class="fas fa-sign-in-alt"></i>
                      </span>
                      Checkin Time 12:00 PM
                    </div>
                    <div class="col-6 col-xl-4">
                      <span class="text-muted text-3 me-2">
                        <i class="fas fa-sign-out-alt"></i>
                      </span>
                      CheckOut Time 12:00 AM
                    </div>
                  </div>
                  <div class="alert alert-info mt-4 mb-0">
                    <div class="row g-0">
                      <div class="col-auto">
                        <span class="text-5 me-2">
                          <i class="fas fa-info-circle"></i>
                        </span>
                      </div>
                      <div class="col">
                        <h5 class="alert-heading">
                          Check In Instructions Lisque persius interesset his
                          et, in quot quidam persequeris vim, ad mea essent
                          possim iriure. Mutat tacimates id sit. Ridens
                          mediocritatem ius an, eu nec magna imperdiet.
                          Mediocrem qualisque in has.{" "}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <aside class="col-lg-4 mt-4 mt-lg-0 asidetag">
                <div class="bg-white shadow-md rounded p-3">
                  <h3 class="text-5 mb-3">Invoice Details</h3>
                  <hr class="mx-n3" />
                  <ul class="list-unstyled">
                    <li class="mb-2 fw-500">
                      Base price{" "}
                      <span class="float-end text-4 fw-500 text-dark">
                        {
                          blockRoomData[0]?.HotelRoomsDetails[0]?.Price
                            ?.RoomPrice
                        }
                      </span>
                      <br />
                      <span class="text-muted text-1 fw-400">
                        For 1 Night, 1 Room, 3 Guests
                      </span>
                    </li>
                    <li class="mb-2 fw-500">
                      Extra Guests Cost{" "}
                      <span class="float-end text-4 fw-500 text-dark">
                        {
                          blockRoomData[0]?.HotelRoomsDetails[0]?.Price
                            ?.ExtraGuestCharge
                        }
                      </span>
                      <br />
                      <span class="text-muted text-1 fw-400">
                        For 1 Night, 1 Guest
                      </span>
                    </li>
                    <li class="mb-2 fw-500">
                      Taxes & Fees{" "}
                      <span class="float-end text-4 fw-500 text-dark">{blockRoomData[0]?.HotelRoomsDetails[0]?.Price.OtherCharges +blockRoomData[0]?.HotelRoomsDetails[0]?.Price.Tax}</span>
                    </li>
                  </ul>
                  <div class="text-dark bg-light-4 text-4 fw-600 p-3">
                    {" "}
                    Total Amount <span class="float-end text-6">₹{blockRoomData[0]?.HotelRoomsDetails[0]?.Price.PublishedPriceRoundedOff}</span>{" "}
                  </div>
                  <h3 class="text-4 mb-3 mt-4">Promo Code</h3>
                  <div class="input-group mb-3">
                    <input
                      class="form-control"
                      placeholder="Promo Code"
                      aria-label="Promo Code"
                      type="text"
                    />
                    <button
                      class="btn btn-secondary shadow-none px-3"
                      type="submit"
                    >
                      APPLY
                    </button>
                  </div>
                  <ul class="promo-code">
                    <li>
                      <span class="d-block text-3 fw-600">FLTOFFER</span>Up to
                      $500 Off on your booking. Hurry! Limited period offer.{" "}
                      <a class="text-1" href="">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <span class="d-block text-3 fw-600">HOTOFFER</span>Up to
                      $500 Off on your booking. Hurry! Limited period offer.{" "}
                      <a class="text-1" href="">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <span class="d-block text-3 fw-600">SUMMEROFFER</span>Up
                      to $500 Off on your booking. Hurry! Limited period offer.{" "}
                      <a class="text-1" href="">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <span class="d-block text-3 fw-600">BIGOFFER</span>Up to
                      $500 Off on your booking. Hurry! Limited period offer.{" "}
                      <a class="text-1" href="">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <span class="d-block text-3 fw-600">FLTOFFER</span>Up to
                      $500 Off on your booking. Hurry! Limited period offer.{" "}
                      <a class="text-1" href="">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <span class="d-block text-3 fw-600">FLTOFFER</span>Up to
                      $500 Off on your booking. Hurry! Limited period offer.{" "}
                      <a class="text-1" href="">
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                  <div class="d-grid">
                    <button
                      class="btn btn-primary"
                      onclick="location.href='payment.html';"
                      type="submit"
                    >
                      Proceed To Payment
                    </button>
                  </div>
                  <p class="text-muted d-flex align-items-center justify-content-center mt-3 mb-1">
                    <span class="text-4 me-2">
                      <i class="fas fa-ban"></i>
                    </span>{" "}
                    Full refund, 3-day cancellation{" "}
                    <a
                      href=""
                      class="text-3 ms-2"
                      data-bs-toggle="tooltip"
                      title="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit."
                    >
                      <i class="far fa-question-circle"></i>
                    </a>{" "}
                  </p>
                </div>
              </aside>
            </div>
          </section>
        </div>
        <footer id="footer">
          <section class="section bg-white shadow-md pt-4 pb-3">
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-md-3">
                  <div class="featured-box text-center">
                    <div class="featured-box-icon">
                      {" "}
                      <i class="fas fa-lock"></i>{" "}
                    </div>
                    <h4>100% Secure Payments</h4>
                    <p>
                      Moving your card details to a much more secured place.
                    </p>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="featured-box text-center">
                    <div class="featured-box-icon">
                      {" "}
                      <i class="fas fa-thumbs-up"></i>{" "}
                    </div>
                    <h4>Trust pay</h4>
                    <p>100% Payment Protection. Easy Return Policy.</p>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="featured-box text-center">
                    <div class="featured-box-icon">
                      {" "}
                      <i class="fas fa-bullhorn"></i>{" "}
                    </div>
                    <h4>Refer & Earn</h4>
                    <p>Invite a friend to sign up and earn up to $100.</p>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="featured-box text-center">
                    <div class="featured-box-icon">
                      {" "}
                      <i class="far fa-life-ring"></i>{" "}
                    </div>
                    <h4>24X7 Support</h4>
                    <p>
                      We're here to help. Have a query and need help ?{" "}
                      <a href="#">Click here</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="container mt-4">
            <div class="row g-4">
              <div class="col-md-4">
                <p>Payment</p>
                <ul class="payments-types">
                  <li>
                    <a href="#" target="_blank">
                      {" "}
                      <img
                        data-bs-toggle="tooltip"
                        src="images/payment/visa.png"
                        alt="visa"
                        title="Visa"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      {" "}
                      <img
                        data-bs-toggle="tooltip"
                        src="images/payment/discover.png"
                        alt="discover"
                        title="Discover"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      {" "}
                      <img
                        data-bs-toggle="tooltip"
                        src="images/payment/paypal.png"
                        alt="paypal"
                        title="PayPal"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      {" "}
                      <img
                        data-bs-toggle="tooltip"
                        src="images/payment/american.png"
                        alt="american express"
                        title="American Express"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      {" "}
                      <img
                        data-bs-toggle="tooltip"
                        src="images/payment/mastercard.png"
                        alt="discover"
                        title="Discover"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <p>Subscribe</p>
                <div class="input-group newsletter">
                  <input
                    class="form-control"
                    placeholder="Your Email Address"
                    name="newsletterEmail"
                    id="newsletterEmail"
                    type="text"
                  />
                  <button
                    class="btn btn-secondary shadow-none px-3"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div class="col-md-4 d-flex align-items-md-end flex-column">
                <p>Keep in touch</p>
                <ul class="social-icons">
                  <li class="social-icons-facebook">
                    <a
                      data-bs-toggle="tooltip"
                      href="http://www.facebook.com/"
                      target="_blank"
                      title="Facebook"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="social-icons-twitter">
                    <a
                      data-bs-toggle="tooltip"
                      href="http://www.twitter.com/"
                      target="_blank"
                      title="Twitter"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="social-icons-google">
                    <a
                      data-bs-toggle="tooltip"
                      href="http://www.google.com/"
                      target="_blank"
                      title="Google"
                    >
                      <i class="fab fa-google"></i>
                    </a>
                  </li>
                  <li class="social-icons-linkedin">
                    <a
                      data-bs-toggle="tooltip"
                      href="http://www.linkedin.com/"
                      target="_blank"
                      title="Linkedin"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li class="social-icons-youtube">
                    <a
                      data-bs-toggle="tooltip"
                      href="http://www.youtube.com/"
                      target="_blank"
                      title="Youtube"
                    >
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li class="social-icons-instagram">
                    <a
                      data-bs-toggle="tooltip"
                      href="http://www.instagram.com/"
                      target="_blank"
                      title="Instagram"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="footer-copyright">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  {" "}
                  <a class="nav-link active" href="#">
                    About Us
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    Faq
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    Contact
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    Support
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    Terms of Use
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    Privacy Policy
                  </a>{" "}
                </li>
              </ul>
              <p class="copyright-text">
                Copyright © 2022 <a href="#">Quickai</a>. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <a
        id="back-to-top"
        data-bs-toggle="tooltip"
        title="Back to Top"
        href="javascript:void(0)"
      >
        <i class="fa fa-chevron-up"></i>
      </a>
    </>
  );
};

export default HotelConfirm;
