import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../ContextApi/StateProvider";

const HotelSearchDetails = () => {
  const [hotelData, setHotelData] = useState([]);
  const [APIdata, setAPIdata] = useState("");
  const [cityName, setCityName] = useState("");
  const [{ hotel, hotelList }, dispatch] = useStateValue();
  const history = useHistory();

  const viewHotel = (ResultIndex, HotelId, Hotel) => {
    console.log(Hotel);
    dispatch({
      type: "ADD_TO_HOTEL_DATA",
      hotelDataSelected: Hotel,
    });
    history.push(
      `/hoteldetails/${hotelData[0]?.TraceId}/${ResultIndex}/${HotelId}`
    );
    console.log(ResultIndex, HotelId);
  };
  const bookHotel = () => {
    console.log("Book Hotel");
    history.push("/hotelconfirm");
  };

  const getHotelList = (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        CheckInDate: data?.CheckInDate,
        CityId: data?.CityId,
        CountryCode: data?.CountryCode,
        EndUserIp: data?.EndUserIp,
        GuestNationality: data?.GuestNationality,
        IsNearBySearchAllowed: data?.IsNearBySearchAllowed,
        NoOfNights: data?.NoOfNights,
        NoOfRooms: data?.NoOfRooms,
        MaxRating: data?.MaxRating,
        MinRating: data?.MinRating,
        PreferredCurrency: data?.PreferredCurrency,
        ResultCount: data?.ResultCount,
        ReviewScore: data?.ReviewScore,
        RoomGuests: data?.RoomGuests,
        TokenId: data?.TokenId,
      }),
    };
    fetch(
      "/BookingEngineService_Hotel/hotelservice.svc/rest/GetHotelResult/",
      requestOptions
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        dispatch({
          type: "ADD_TO_HOTEL_LIST",
          item: data.HotelSearchResult,
        });

        setHotelData([data.HotelSearchResult]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // console.log(hotel.CityName);
    const data = JSON.parse(localStorage.getItem("hotel-search-options"));

    if (data !== undefined) {
      console.log(data);
      // delete data.CheckOutDate;

      const stringData = JSON.stringify(data);
      setAPIdata(stringData);
      setCityName(data?.CityName);
      if (hotelList === null) {
        getHotelList(data);
      } else {
        setHotelData([hotelList]);
      }
    }
  }, []);

  useEffect(() => {
    console.log(hotelList, hotel);
  }, [hotelData]);

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
                <h1>Hotels - List Page</h1>
              </div>
              <div class="col-md-4">
                <ul class="breadcrumb justify-content-start justify-content-md-end mb-0">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="booking-hotels.html">Hotels</a>
                  </li>
                  <li class="active">Hotels List Page</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div id="content">
          <section class="container">
            <form id="bookingHotels" method="post">
              <div class="row g-3 mb-4">
                <div class="col-md-12 col-lg">
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      id="hotelsFrom"
                      required=""
                      placeholder="Enter City/Hotel"
                    />
                    <span class="icon-inside">
                      <i class="fas fa-map-marker-alt"></i>
                    </span>{" "}
                  </div>
                </div>
                <div class="col-md-6 col-lg">
                  <div class="position-relative">
                    <input
                      id="hotelsCheckIn"
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
                  <div class="position-relative">
                    <input
                      id="hotelsCheckOut"
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
                    <input
                      type="text"
                      id="hotelsTravellersClass"
                      class="travellers-class-input form-control"
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
                            Adults <small class="text-muted">(12+ yrs)</small>
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
                            <small class="text-muted">(1-12 yrs)</small>
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
                <div class="col-md-6 col-lg-2 d-grid">
                  <button class="btn btn-primary" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
            <div class="row">
              <aside class="col-lg-3">
                <div class="bg-white shadow-md rounded p-3">
                  <h3 class="text-5">Filter</h3>
                  <hr className="mx-n3 margin-bottom" />
                  <div
                    class="accordion accordion-flush style-2 mt-n3"
                    id="toggleAlternate"
                  >
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="hotelName">
                        {/* <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#togglehotelName"
                          aria-expanded="true"
                          aria-controls="togglehotelName"
                        > */}
                        Hotel Name
                        {/* </button> */}
                      </h4>
                      <div
                        id="togglehotelName"
                        class="accordion-collapse collapse show filter-list"
                        aria-labelledby="hotelName"
                      >
                        <div class="accordion-body">
                          <div class="position-relative">
                            <input
                              type="text"
                              class="form-control form-control-sm"
                              id="SearchHotel"
                              placeholder="Search by Hotel Name"
                            />
                            <span class="icon-inside">
                              <i class="fas fa-search"></i>
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="price">
                        {/* <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#togglePrice"
                          aria-expanded="true"
                          aria-controls="togglePrice"
                        > */}
                        Price
                        {/* </button> */}
                      </h4>
                      <div
                        id="togglePrice"
                        class="accordion-collapse collapse show filter-list"
                        aria-labelledby="price"
                      >
                        <div class="accordion-body">
                          <p>
                            <input
                              id="amount"
                              type="text"
                              readonly=""
                              class="form-control border-0 bg-transparent p-0"
                            />
                          </p>
                          <div id="slider-range"></div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="propertyTypes">
                        {/* <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#togglepropertyTypes"
                          aria-expanded="true"
                          aria-controls="togglepropertyTypes"
                        > */}
                        Property Types
                        {/* </button> */}
                      </h4>
                      <div
                        id="togglepropertyTypes"
                        class="accordion-collapse collapse show filter-list"
                        aria-labelledby="propertyTypes"
                      >
                        <div class="accordion-body">
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="hotel"
                              name="propertyTypes"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="hotel">
                              Hotel{" "}
                              <small class="text-muted float-end">250</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="resort"
                              name="propertyTypes"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label d-block"
                              for="resort"
                            >
                              Resort{" "}
                              <small class="text-muted float-end">76</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="villa"
                              name="propertyTypes"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="villa">
                              Villa{" "}
                              <small class="text-muted float-end">31</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="heritage"
                              name="propertyTypes"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label d-block"
                              for="heritage"
                            >
                              Heritage{" "}
                              <small class="text-muted float-end">12</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="motel"
                              name="propertyTypes"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="motel">
                              Motel{" "}
                              <small class="text-muted float-end">5</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="guestHouse"
                              name="propertyTypes"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label d-block"
                              for="guestHouse"
                            >
                              Guest House{" "}
                              <small class="text-muted float-end">107</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="farmHouse"
                              name="propertyTypes"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label d-block"
                              for="farmHouse"
                            >
                              Farm House{" "}
                              <small class="text-muted float-end">66</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="palace"
                              name="propertyTypes"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label d-block"
                              for="palace"
                            >
                              Palace{" "}
                              <small class="text-muted float-end">18</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="sercicedApartments"
                              name="propertyTypes"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label d-block"
                              for="sercicedApartments"
                            >
                              Serviced Apartments{" "}
                              <small class="text-muted float-end">41</small>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="starCategory">
                        {/* <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#togglestarCategory"
                          aria-expanded="true"
                          aria-controls="togglestarCategory"
                        > */}
                        Star Category
                        {/* </button> */}
                      </h4>
                      <div
                        id="togglestarCategory"
                        class="accordion-collapse collapse show filter-list"
                        aria-labelledby="starCategory"
                      >
                        <div class="accordion-body">
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="5Star"
                              name="starCategory"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="5Star">
                              5 Star <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>{" "}
                              <small class="text-muted float-end">512</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="4Star"
                              name="starCategory"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="4Star">
                              4 Star <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <small class="text-muted float-end">476</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="3Star"
                              name="starCategory"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="3Star">
                              3 Star <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>{" "}
                              <small class="text-muted float-end">176</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="2Star"
                              name="starCategory"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="2Star">
                              2 Star <i class="fas fa-star text-warning"></i>
                              <i class="fas fa-star text-warning"></i>{" "}
                              <small class="text-muted float-end">231</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="1Star"
                              name="starCategory"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="1Star">
                              1 Star <i class="fas fa-star text-warning"></i>{" "}
                              <small class="text-muted float-end">5</small>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="userReview">
                        {/* <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#toggleuserReview"
                          aria-expanded="true"
                          aria-controls="toggleuserReview"
                        > */}
                        User Review
                        {/* </button> */}
                      </h4>
                      <div
                        id="toggleuserReview"
                        class="accordion-collapse collapse show filter-list"
                        aria-labelledby="userReview"
                      >
                        <div class="accordion-body">
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="excellent"
                              name="userReview"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label d-block"
                              for="excellent"
                            >
                              Excellent{" "}
                              <small class="text-muted float-end">499</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="good"
                              name="userReview"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="good">
                              Good{" "}
                              <small class="text-muted float-end">310</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="fair"
                              name="userReview"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="fair">
                              Fair{" "}
                              <small class="text-muted float-end">225</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="poor"
                              name="userReview"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="poor">
                              Poor{" "}
                              <small class="text-muted float-end">110</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="bad"
                              name="userReview"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="bad">
                              Bad <small class="text-muted float-end">44</small>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="amenities">
                        {/* <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#toggleamenities"
                          aria-expanded="true"
                          aria-controls="toggleamenities"
                        > */}
                        Amenities
                        {/* </button> */}
                      </h4>
                      <div
                        id="toggleamenities"
                        class="accordion-collapse collapse show filter-list "
                        aria-labelledby="amenities"
                      >
                        <div class="accordion-body pb-0">
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="internetWiFi"
                              name="amenities"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label d-block"
                              for="internetWiFi"
                            >
                              <i class="fas fa-wifi"></i> Internet/Wi-Fi{" "}
                              <small class="text-muted float-end">512</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="restaurant"
                              name="amenities"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label d-block"
                              for="restaurant"
                            >
                              <i class="fas fa-utensils"></i> Restaurant{" "}
                              <small class="text-muted float-end">476</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="bar"
                              name="amenities"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="bar">
                              <i class="fas fa-glass-martini"></i> Bar{" "}
                              <small class="text-muted float-end">176</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="swimmingPool"
                              name="amenities"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label d-block"
                              for="swimmingPool"
                            >
                              <i class="fas fa-swimmer"></i> Swimming Pool{" "}
                              <small class="text-muted float-end">231</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="businessFacilities"
                              name="amenities"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label d-block"
                              for="businessFacilities"
                            >
                              <i class="fas fa-chalkboard-teacher"></i> Business
                              Facilities{" "}
                              <small class="text-muted float-end">5</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="spaWellness"
                              name="amenities"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label d-block"
                              for="spaWellness"
                            >
                              <i class="fas fa-spa"></i> Spa/Wellness{" "}
                              <small class="text-muted float-end">107</small>
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              type="checkbox"
                              id="gym"
                              name="amenities"
                              class="form-check-input"
                            />
                            <label class="form-check-label d-block" for="gym">
                              <i class="fas fa-dumbbell"></i> Gym{" "}
                              <small class="text-muted float-end">66</small>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="border-bottom mb-3 pb-3">
                  <div class="row align-items-center">
                    <div class="col-6 col-md-8">
                      {" "}
                      <span class="me-3">
                        <span class="text-4">
                          {cityName === "" ? "City" : cityName}:
                        </span>{" "}
                        <span class="fw-600">
                          {hotelData[0]?.HotelResults?.length || 0} Hotels
                        </span>{" "}
                        found
                      </span>{" "}
                      <span class="text-warning text-nowrap">
                        Prices inclusive of taxes
                      </span>
                    </div>
                    <div class="col-6 col-md-4">
                      <div class="row g-0 ms-auto">
                        <label
                          class="col col-form-label-sm text-end me-2 mb-0"
                          for="input-sort"
                        >
                          Sort By:
                        </label>
                        <select
                          id="input-sort"
                          class="form-select form-select-sm col"
                        >
                          <option value="" selected="selected">
                            Popularity
                          </option>
                          <option value="">Price - Low to High</option>
                          <option value="">Price - High to Low</option>
                          <option value="">User Rating - High to Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="hotels-list">
                  {hotelData[0]?.HotelResults?.length > 0 &&
                    hotelData[0]?.HotelResults?.map((hotel, idx) => {
                      return (
                        <>
                          <div
                            class="hotels-item bg-white shadow-md rounded p-3"
                            key={hotel.HotelCode}
                          >
                            <div class="row">
                              <div class="col-md-4">
                                {" "}
                                <a href="#">
                                  <img
                                    class="img-fluid rounded align-top hotel-list-img"
                                    src={hotel.HotelPicture}
                                    alt="Hotel Image not available"
                                  />
                                </a>{" "}
                              </div>
                              <div class="col-md-8 ps-3 ps-md-0 mt-3 mt-md-0">
                                <div class="row g-0">
                                  <div class="col-sm-9">
                                    <h4>
                                      <a href="#" class="text-dark text-5">
                                        {hotel.HotelName}
                                      </a>
                                    </h4>
                                    <p class="mb-2">
                                      {" "}
                                      <span class="me-2">
                                        {[...Array(hotel.StarRating)].map(
                                          (e, i) => (
                                            <>
                                              {" "}
                                              <i
                                                class="fas fa-star text-warning"
                                                key={i}
                                              ></i>
                                            </>
                                          )
                                        )}
                                        {/* <i class="fas fa-star text-warning"></i>{" "}
                                        <i class="fas fa-star text-warning"></i>{" "}
                                        <i class="fas fa-star text-warning"></i>{" "}
                                        <i class="fas fa-star text-warning"></i>{" "} */}
                                      </span>{" "}
                                      <span class="text-black-50">
                                        <i class="fas fa-map-marker-alt"></i>{" "}
                                        {hotel.HotelAddress}
                                      </span>{" "}
                                    </p>
                                    <p class="hotels-amenities d-flex align-items-center mb-2 text-4">
                                      {" "}
                                      <span
                                        data-bs-toggle="tooltip"
                                        title="Internet/Wi-Fi"
                                      >
                                        <i class="fas fa-wifi"></i>
                                      </span>{" "}
                                      <span
                                        data-bs-toggle="tooltip"
                                        title="Restaurant"
                                      >
                                        <i class="fas fa-utensils"></i>
                                      </span>{" "}
                                      <span
                                        data-bs-toggle="tooltip"
                                        title="Bar"
                                      >
                                        <i class="fas fa-glass-martini"></i>
                                      </span>{" "}
                                      <span
                                        data-bs-toggle="tooltip"
                                        title="Swimming Pool"
                                      >
                                        <i class="fas fa-swimmer"></i>
                                      </span>{" "}
                                      <span
                                        data-bs-toggle="tooltip"
                                        title="Business Facilities"
                                      >
                                        <i class="fas fa-chalkboard-teacher"></i>
                                      </span>{" "}
                                      <span
                                        data-bs-toggle="tooltip"
                                        title="Spa"
                                      >
                                        <i class="fas fa-spa"></i>
                                      </span>{" "}
                                      <span
                                        data-bs-toggle="tooltip"
                                        title="Gym"
                                      >
                                        <i class="fas fa-dumbbell"></i>
                                      </span>{" "}
                                      <span class="cf border rounded-pill text-1 text-nowrap px-2">
                                        Couple Friendly
                                      </span>{" "}
                                    </p>
                                    <p class="reviews mb-2">
                                      {" "}
                                      <span class="reviews-score px-2 py-1 rounded fw-600 text-light">
                                        8.2
                                      </span>{" "}
                                      <span class="fw-600">
                                        {hotel.HotelPromotion}
                                      </span>{" "}
                                      <a class="text-black-50" href="#">
                                        (245 reviews)
                                      </a>{" "}
                                    </p>
                                    <p class="text-danger mb-0">
                                      Last Booked - 18 hours ago
                                    </p>
                                  </div>
                                  <div class="col-sm-3 text-end d-flex d-sm-block align-items-center hotel-details-right">
                                    {hotel.Price.Discount > 0 && (
                                      <>
                                        <div class="text-success text-3 mb-0 mb-sm-1 order-2 ">
                                          16% Off!
                                        </div>
                                        <div class="d-block text-3 text-black-50 mb-0 mb-sm-2 me-2 me-sm-0 order-1">
                                          <del class="d-block">$250</del>
                                        </div>
                                      </>
                                    )}
                                    <div class="text-dark text-6 fw-500 mb-0 mb-sm-2 me-2 me-sm-0 order-0">
                                      ₹{hotel.Price.PublishedPriceRoundedOff}
                                    </div>
                                    <div class="text-black-50 mb-0 mb-sm-2 order-3 d-none d-sm-block">
                                      1 Room/Night
                                    </div>
                                    <div className="hotel-btns">
                                      <Button
                                        variant="outlined"
                                        color="primary"
                                        className="show-details-outline"
                                        onClick={() =>
                                          viewHotel(
                                            hotel.ResultIndex,
                                            hotel.HotelCode,
                                            hotel
                                          )
                                        }
                                      >
                                        Show Details
                                      </Button>
                                      <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => {
                                          bookHotel();
                                        }}
                                      >
                                        Book Now
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  {/* <div class="hotels-item bg-white shadow-md rounded p-3">
                    <div class="row">
                      <div class="col-md-4">
                        {" "}
                        <a href="#">
                          <img
                            class="img-fluid rounded align-top"
                            src="images/brands/hotels/hotel-1.jpg"
                            alt="hotels"
                          />
                        </a>{" "}
                      </div>
                      <div class="col-md-8 ps-3 ps-md-0 mt-3 mt-md-0">
                        <div class="row g-0">
                          <div class="col-sm-9">
                            <h4>
                              <a href="#" class="text-dark text-5">
                                The Orchid Hotel
                              </a>
                            </h4>
                            <p class="mb-2">
                              {" "}
                              <span class="me-2">
                                {" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                              </span>{" "}
                              <span class="text-black-50">
                                <i class="fas fa-map-marker-alt"></i> Ashram
                                Road, Ahmedabad
                              </span>{" "}
                            </p>
                            <p class="hotels-amenities d-flex align-items-center mb-2 text-4">
                              {" "}
                              <span
                                data-bs-toggle="tooltip"
                                title="Internet/Wi-Fi"
                              >
                                <i class="fas fa-wifi"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Restaurant">
                                <i class="fas fa-utensils"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Bar">
                                <i class="fas fa-glass-martini"></i>
                              </span>{" "}
                              <span
                                data-bs-toggle="tooltip"
                                title="Swimming Pool"
                              >
                                <i class="fas fa-swimmer"></i>
                              </span>{" "}
                              <span
                                data-bs-toggle="tooltip"
                                title="Business Facilities"
                              >
                                <i class="fas fa-chalkboard-teacher"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Spa">
                                <i class="fas fa-spa"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Gym">
                                <i class="fas fa-dumbbell"></i>
                              </span>{" "}
                              <span class="cf border rounded-pill text-1 text-nowrap px-2">
                                Couple Friendly
                              </span>{" "}
                            </p>
                            <p class="reviews mb-2">
                              {" "}
                              <span class="reviews-score px-2 py-1 rounded fw-600 text-light">
                                8.2
                              </span>{" "}
                              <span class="fw-600">Excellent</span>{" "}
                              <a class="text-black-50" href="#">
                                (245 reviews)
                              </a>{" "}
                            </p>
                            <p class="text-danger mb-0">
                              Last Booked - 18 hours ago
                            </p>
                          </div>
                          <div class="col-sm-3 text-end d-flex d-sm-block align-items-center">
                            <div class="text-success text-3 mb-0 mb-sm-1 order-2 ">
                              16% Off!
                            </div>
                            <div class="d-block text-3 text-black-50 mb-0 mb-sm-2 me-2 me-sm-0 order-1">
                              <del class="d-block">$250</del>
                            </div>
                            <div class="text-dark text-7 fw-500 mb-0 mb-sm-2 me-2 me-sm-0 order-0">
                              $210
                            </div>
                            <div class="text-black-50 mb-0 mb-sm-2 order-3 d-none d-sm-block">
                              1 Room/Night
                            </div>
                            <a
                              href="#"
                              class="btn btn-sm btn-primary order-4 ms-auto"
                            >
                              Book Now
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="hotels-item bg-white shadow-md rounded p-3">
                    <div class="row">
                      <div class="col-md-4">
                        {" "}
                        <a href="#">
                          <img
                            class="img-fluid rounded align-top"
                            src="images/brands/hotels/hotel-2.jpg"
                            alt="hotels"
                          />
                        </a>{" "}
                      </div>
                      <div class="col-md-8 ps-3 ps-md-0 mt-3 mt-md-0">
                        <div class="row g-0">
                          <div class="col-sm-9">
                            <h4>
                              <a href="#" class="text-dark text-5">
                                Whistling Meadows Resort
                              </a>
                            </h4>
                            <p class="mb-2">
                              {" "}
                              <span class="me-2">
                                {" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                              </span>{" "}
                              <span class="text-black-50">
                                <i class="fas fa-map-marker-alt"></i> SG
                                Highway, Ahmedabad
                              </span>{" "}
                            </p>
                            <p class="hotels-amenities d-flex align-items-center mb-2 text-4">
                              {" "}
                              <span
                                data-bs-toggle="tooltip"
                                title="Internet/Wi-Fi"
                              >
                                <i class="fas fa-wifi"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Restaurant">
                                <i class="fas fa-utensils"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Bar">
                                <i class="fas fa-glass-martini"></i>
                              </span>{" "}
                              <span
                                data-bs-toggle="tooltip"
                                title="Swimming Pool"
                              >
                                <i class="fas fa-swimmer"></i>
                              </span>{" "}
                              <span
                                class="disabled"
                                data-bs-toggle="tooltip"
                                title="Business Facilities"
                              >
                                <i class="fas fa-chalkboard-teacher"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Spa">
                                <i class="fas fa-spa"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Gym">
                                <i class="fas fa-dumbbell"></i>
                              </span>{" "}
                              <span class="cf border rounded-pill text-1 text-nowrap px-2">
                                Couple Friendly
                              </span>{" "}
                            </p>
                            <p class="reviews mb-2">
                              {" "}
                              <span class="reviews-score px-2 py-1 rounded fw-600 text-light">
                                9.6
                              </span>{" "}
                              <span class="fw-600">Excellent</span>{" "}
                              <a class="text-black-50" href="#">
                                (1206 reviews)
                              </a>{" "}
                            </p>
                            <p class="text-danger mb-0">
                              Last Booked - 9 hours ago
                            </p>
                          </div>
                          <div class="col-sm-3 text-end d-flex d-sm-block align-items-center">
                            <div class="text-success text-3 mb-0 mb-sm-1 order-2 ">
                              25% Off!
                            </div>
                            <div class="d-block text-3 text-black-50 mb-0 mb-sm-2 me-2 me-sm-0 order-1">
                              <del class="d-block">$900</del>
                            </div>
                            <div class="text-dark text-7 fw-500 mb-0 mb-sm-2 me-2 me-sm-0 order-0">
                              $675
                            </div>
                            <div class="text-black-50 mb-0 mb-sm-2 order-3 d-none d-sm-block">
                              1 Room/Night
                            </div>
                            <a
                              href="#"
                              class="btn btn-sm btn-primary order-4 ms-auto"
                            >
                              Book Now
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="hotels-item bg-white shadow-md rounded p-3">
                    <div class="row">
                      <div class="col-md-4">
                        {" "}
                        <a href="#">
                          <img
                            class="img-fluid rounded align-top"
                            src="images/brands/hotels/hotel-3.jpg"
                            alt="hotels"
                          />
                        </a>{" "}
                      </div>
                      <div class="col-md-8 ps-3 ps-md-0 mt-3 mt-md-0">
                        <div class="row g-0">
                          <div class="col-sm-9">
                            <h4>
                              <a href="#" class="text-dark text-5">
                                Radisson Blu Hotel
                              </a>
                            </h4>
                            <p class="mb-2">
                              {" "}
                              <span class="me-2">
                                {" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                              </span>{" "}
                              <span class="text-black-50">
                                <i class="fas fa-map-marker-alt"></i> Electronic
                                City, Ahmedabad
                              </span>{" "}
                            </p>
                            <p class="hotels-amenities d-flex align-items-center mb-2 text-4">
                              {" "}
                              <span
                                data-bs-toggle="tooltip"
                                title="Internet/Wi-Fi"
                              >
                                <i class="fas fa-wifi"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Restaurant">
                                <i class="fas fa-utensils"></i>
                              </span>{" "}
                              <span
                                class="disabled"
                                data-bs-toggle="tooltip"
                                title="Bar"
                              >
                                <i class="fas fa-glass-martini"></i>
                              </span>{" "}
                              <span
                                data-bs-toggle="tooltip"
                                title="Swimming Pool"
                              >
                                <i class="fas fa-swimmer"></i>
                              </span>{" "}
                              <span
                                data-bs-toggle="tooltip"
                                title="Business Facilities"
                              >
                                <i class="fas fa-chalkboard-teacher"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Spa">
                                <i class="fas fa-spa"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Gym">
                                <i class="fas fa-dumbbell"></i>
                              </span>{" "}
                              <span class="cf border rounded-pill text-1 text-nowrap px-2">
                                Couple Friendly
                              </span>{" "}
                            </p>
                            <p class="reviews mb-2">
                              {" "}
                              <span class="reviews-score px-2 py-1 rounded fw-600 text-light">
                                7.0
                              </span>{" "}
                              <span class="fw-600">Good</span>{" "}
                              <a class="text-black-50" href="#">
                                (420 reviews)
                              </a>{" "}
                            </p>
                            <p class="text-danger mb-0">
                              Last Booked - 2 days ago
                            </p>
                          </div>
                          <div class="col-sm-3 text-end d-flex d-sm-block align-items-center">
                            <div class="text-success text-3 mb-0 mb-sm-1 order-2 ">
                              20% Off!
                            </div>
                            <div class="d-block text-3 text-black-50 mb-0 mb-sm-2 me-2 me-sm-0 order-1">
                              <del class="d-block">$350</del>
                            </div>
                            <div class="text-dark text-7 fw-500 mb-0 mb-sm-2 me-2 me-sm-0 order-0">
                              $280
                            </div>
                            <div class="text-black-50 mb-0 mb-sm-2 order-3 d-none d-sm-block">
                              1 Room/Night
                            </div>
                            <a
                              href="#"
                              class="btn btn-sm btn-primary order-4 ms-auto"
                            >
                              Book Now
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="hotels-item bg-white shadow-md rounded p-3">
                    <div class="row">
                      <div class="col-md-4">
                        {" "}
                        <a href="#">
                          <img
                            class="img-fluid rounded align-top"
                            src="images/brands/hotels/hotel-4.jpg"
                            alt="hotels"
                          />
                        </a>{" "}
                      </div>
                      <div class="col-md-8 ps-3 ps-md-0 mt-3 mt-md-0">
                        <div class="row g-0">
                          <div class="col-sm-9">
                            <h4>
                              <a href="#" class="text-dark text-5">
                                The Lotus Hotel
                              </a>
                            </h4>
                            <p class="mb-2">
                              {" "}
                              <span class="me-2">
                                {" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                              </span>{" "}
                              <span class="text-black-50">
                                <i class="fas fa-map-marker-alt"></i> Airport
                                Zone, Ahmedabad
                              </span>{" "}
                            </p>
                            <p class="hotels-amenities d-flex align-items-center mb-2 text-4">
                              {" "}
                              <span
                                data-bs-toggle="tooltip"
                                title="Internet/Wi-Fi"
                              >
                                <i class="fas fa-wifi"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Restaurant">
                                <i class="fas fa-utensils"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Bar">
                                <i class="fas fa-glass-martini"></i>
                              </span>{" "}
                              <span
                                class="disabled"
                                data-bs-toggle="tooltip"
                                title="Swimming Pool"
                              >
                                <i class="fas fa-swimmer"></i>
                              </span>{" "}
                              <span
                                class="disabled"
                                data-bs-toggle="tooltip"
                                title="Business Facilities"
                              >
                                <i class="fas fa-chalkboard-teacher"></i>
                              </span>{" "}
                              <span
                                class="disabled"
                                data-bs-toggle="tooltip"
                                title="Spa"
                              >
                                <i class="fas fa-spa"></i>
                              </span>{" "}
                              <span
                                class="disabled"
                                data-bs-toggle="tooltip"
                                title="Gym"
                              >
                                <i class="fas fa-dumbbell"></i>
                              </span>{" "}
                            </p>
                            <p class="reviews mb-2">
                              {" "}
                              <span class="reviews-score px-2 py-1 rounded fw-600 text-light">
                                8.7
                              </span>{" "}
                              <span class="fw-600">Excellent</span>{" "}
                              <a class="text-black-50" href="#">
                                (328 reviews)
                              </a>{" "}
                            </p>
                            <p class="text-danger mb-0">
                              Last Booked - 1 week ago
                            </p>
                          </div>
                          <div class="col-sm-3 text-end d-flex d-sm-block align-items-center">
                            <div class="text-success text-3 mb-0 mb-sm-1 order-2 ">
                              10% Off!
                            </div>
                            <div class="d-block text-3 text-black-50 mb-0 mb-sm-2 me-2 me-sm-0 order-1">
                              <del class="d-block">$457</del>
                            </div>
                            <div class="text-dark text-7 fw-500 mb-0 mb-sm-2 me-2 me-sm-0 order-0">
                              $412
                            </div>
                            <div class="text-black-50 mb-0 mb-sm-2 order-3 d-none d-sm-block">
                              1 Room/Night
                            </div>
                            <a
                              href="#"
                              class="btn btn-sm btn-primary order-4 ms-auto"
                            >
                              Book Now
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="hotels-item bg-white shadow-md rounded p-3">
                    <div class="row">
                      <div class="col-md-4">
                        {" "}
                        <a href="#">
                          <img
                            class="img-fluid rounded align-top"
                            src="images/brands/hotels/hotel-5.jpg"
                            alt="hotels"
                          />
                        </a>{" "}
                      </div>
                      <div class="col-md-8 ps-3 ps-md-0 mt-3 mt-md-0">
                        <div class="row g-0">
                          <div class="col-sm-9">
                            <h4>
                              <a href="#" class="text-dark text-5">
                                Eulogia Central Resort
                              </a>
                            </h4>
                            <p class="mb-2">
                              {" "}
                              <span class="me-2">
                                {" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                                <i class="fas fa-star text-warning"></i>{" "}
                              </span>{" "}
                              <span class="text-black-50">
                                <i class="fas fa-map-marker-alt"></i> Sanad
                                Highway, Ahmedabad
                              </span>{" "}
                            </p>
                            <p class="hotels-amenities d-flex align-items-center mb-2 text-4">
                              {" "}
                              <span
                                data-bs-toggle="tooltip"
                                title="Internet/Wi-Fi"
                              >
                                <i class="fas fa-wifi"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Restaurant">
                                <i class="fas fa-utensils"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Bar">
                                <i class="fas fa-glass-martini"></i>
                              </span>{" "}
                              <span
                                data-bs-toggle="tooltip"
                                title="Swimming Pool"
                              >
                                <i class="fas fa-swimmer"></i>
                              </span>{" "}
                              <span
                                class="disabled"
                                data-bs-toggle="tooltip"
                                title="Business Facilities"
                              >
                                <i class="fas fa-chalkboard-teacher"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Spa">
                                <i class="fas fa-spa"></i>
                              </span>{" "}
                              <span data-bs-toggle="tooltip" title="Gym">
                                <i class="fas fa-dumbbell"></i>
                              </span>{" "}
                              <span class="cf border rounded-pill text-1 text-nowrap px-2">
                                Couple Friendly
                              </span>{" "}
                            </p>
                            <p class="reviews mb-2">
                              {" "}
                              <span class="reviews-score px-2 py-1 rounded fw-600 text-light">
                                9.5
                              </span>{" "}
                              <span class="fw-600">Excellent</span>{" "}
                              <a class="text-black-50" href="#">
                                (444 reviews)
                              </a>{" "}
                            </p>
                            <p class="text-danger mb-0">
                              Last Booked - 5 hours ago
                            </p>
                          </div>
                          <div class="col-sm-3 text-end d-flex d-sm-block align-items-center">
                            <div class="text-success text-3 mb-0 mb-sm-1 order-2 ">
                              12% Off!
                            </div>
                            <div class="d-block text-3 text-black-50 mb-0 mb-sm-2 me-2 me-sm-0 order-1">
                              <del class="d-block">$820</del>
                            </div>
                            <div class="text-dark text-7 fw-500 mb-0 mb-sm-2 me-2 me-sm-0 order-0">
                              $721
                            </div>
                            <div class="text-black-50 mb-0 mb-sm-2 order-3 d-none d-sm-block">
                              1 Room/Night
                            </div>
                            <a
                              href="#"
                              class="btn btn-sm btn-primary order-4 ms-auto"
                            >
                              Book Now
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <ul class="pagination justify-content-center mt-4 mb-0">
                  <li class="page-item disabled">
                    {" "}
                    <a class="page-link" href="#" tabindex="-1">
                      <i class="fas fa-angle-left"></i>
                    </a>{" "}
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item active">
                    {" "}
                    <a class="page-link" href="#">
                      2
                    </a>{" "}
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    {" "}
                    <a class="page-link" href="#">
                      <i class="fas fa-angle-right"></i>
                    </a>{" "}
                  </li>
                </ul>
              </div>
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

export default HotelSearchDetails;
