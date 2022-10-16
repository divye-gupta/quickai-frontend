import React, { useEffect, useState } from "react";
import { createMuiTheme, TextField, withStyles } from "@material-ui/core";
import $ from "jquery";
import { useStateValue } from "../ContextApi/StateProvider";
import { useHistory } from "react-router-dom";

const CssTextField = withStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: "#CCCCCC",
      fontWeight: 300,
    },
    "& label.Mui-focused": {
      color: "#889099",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#889099",
      },
      "&:hover fieldset": {
        borderColor: "#889099",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#889099",
      },
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#889099",
    },
    "& .MuiInput-underline:before": {
      borderWidth: 2,
      borderBottomColor: "#889099",
      padding: 50,
      fontSize: 30,
    },

    "& .MuiInput-underline:hover": {
      borderBottomColor: "#889099",
    },
    "& .MuiInput-focused": {
      color: "#889099",
    },
  },
})(TextField);

const muitheme = createMuiTheme({
  overrides: {
    MuiInput: {
      root: {
        fontSize: 16,
        padding: "10px 12px",
        color: "white",
      },
    },
  },
});

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    dispatch({
      type: "LOGOUT",
    });
  };

  const handleLogin = () => {
    history.push("/login");
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = window.location.origin + "/js/theme.js";
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    $(function () {
      $(".dropdown li").on("mouseenter mouseleave", function (e) {
        if ($(window).width() > 991) {
          var elm = $(".dropdown-menu", this);
          if (elm.length > 0) {
            var off = elm.offset();
            var l = off.left;
            var w = elm.width();
            var docW = $(window).width();
            var isEntirelyVisible = l + w <= docW;
            if (!isEntirelyVisible) {
              $(elm).addClass("dropdown-menu-right");
            } else {
              $(elm).removeClass("dropdown-menu-right");
            }
          } else {
          }
        }
      });
    });
  }, []);

  return (
    <header id="header">
      <div class="container">
        <div class="header-row" style={{ padding: "1rem 2rem" }}>
          <div class="header-column justify-content-start">
            <div class="logo me-2 me-lg-3">
              <a
                href="index.html"
                class="d-flex"
                title="Quickai - HTML Template"
              >
                <img src="images/logo.png" alt="Quickai" />
              </a>
            </div>
          </div>
          <div class="header-column justify-content-end">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#header-nav"
            >
              <span></span> <span></span> <span></span>
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
                    {user ? (
                      <>
                        <span
                          class="d-none d-sm-inline-block"
                          onClick={handleLogout}
                        >
                          Logout
                        </span>
                      </>
                    ) : (
                      <>
                        <span
                          class="d-none d-sm-inline-block"
                          onClick={() => handleLogin()}
                        >
                          Login / Sign up
                        </span>
                      </>
                    )}

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
        <div class="nav-bg">
        <nav style={{paddingBottom:"0rem"}} class="primary-menu navbar navbar-expand-lg">
          <div class="container">
          <div id="header-nav" class="collapse navbar-collapse">
            <ul
              class="navbar-nav"
              style={{ width: "100%", justifyContent: "space-between" }}
            >
              <li class="dropdown active"> <a class="dropdown-toggle" href="#">
              UTTARAKHAND</a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="index-3.html">Haridwar</a></li>
                    <li><a class="dropdown-item" href="index-4.html">Rishikesh</a></li>
                    <li><a class="dropdown-item" href="index-4.html">Dehradun</a></li>
                    <li><a class="dropdown-item" href="index-5.html">Mussoorie</a></li>
                    <li><a class="dropdown-item" href="index-6.html">Nainital</a></li>
                    <li><a class="dropdown-item" href="index-7.html">Ranikhet</a></li>
                    <li><a class="dropdown-item" href="index-8.html">Almora</a></li>
                    <li><a class="dropdown-item" href="index-9.html">Rudraprayag</a></li>
                    <li><a class="dropdown-item" href="index-10.html">Uttarkashi</a></li>
                    <li><a class="dropdown-item" href="index-11.html">Kathgodam</a></li>
                  </ul>
              </li>
              <li class="dropdown active"> <a class="dropdown-toggle" href="#">
              DELHI</a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="index-3.html">Paharganj</a></li>
                    <li><a class="dropdown-item" href="index-4.html">Karol Bagh</a></li>
                    <li><a class="dropdown-item" href="index-4.html">Janakpuri</a></li>
                    <li><a class="dropdown-item" href="index-5.html">Dwarka</a></li>
                    <li><a class="dropdown-item" href="index-6.html">Mahipalpur</a></li>
                    <li><a class="dropdown-item" href="index-7.html">IGI Airport</a></li>
                    <li><a class="dropdown-item" href="index-8.html">Saket</a></li>
                    <li><a class="dropdown-item" href="index-9.html">Lajpat Nagar</a></li>
                    <li><a class="dropdown-item" href="index-10.html">New Delhi Railway Station
</a></li>
                    <li><a class="dropdown-item" href="index-11.html">Rohini</a></li>
                  </ul>
              </li>
              <li class="dropdown active"> <a class="dropdown-toggle" href="#">
              HIMACHAL</a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="index-3.html">Manali</a></li>
                    <li><a class="dropdown-item" href="index-4.html">Shimla</a></li>
                    <li><a class="dropdown-item" href="index-4.html">Dharamsala</a></li>
                    <li><a class="dropdown-item" href="index-5.html">Chamba</a></li>
                    <li><a class="dropdown-item" href="index-6.html">Kalka</a></li>
                    <li><a class="dropdown-item" href="index-7.html">Palampur</a></li>
                    <li><a class="dropdown-item" href="index-8.html">Paonta Sahib</a></li>
                    <li><a class="dropdown-item" href="index-9.html">Kullu</a></li>
                    <li><a class="dropdown-item" href="index-10.html">Dalhousie</a></li>
                    <li><a class="dropdown-item" href="index-11.html">Kasauli</a></li>
                  </ul>
              </li>
              <li class="dropdown active"> <a class="dropdown-toggle" href="#">
                    UTTTAR PRADESH</a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="index-11.html">Noida</a></li>
                    <li><a class="dropdown-item" href="index-10.html">Ghaziabad</a></li>
                    <li><a class="dropdown-item" href="index-3.html">Varanasi</a></li>
                    <li><a class="dropdown-item" href="index-4.html">Lucknow</a></li>
                    <li><a class="dropdown-item" href="index-5.html">Agra</a></li>
                    <li><a class="dropdown-item" href="index-6.html">Prayagraj</a></li>
                    <li><a class="dropdown-item" href="index-7.html">Ayodhya</a></li>
                    <li><a class="dropdown-item" href="index-8.html">Kanpur</a></li>
                    <li><a class="dropdown-item" href="index-9.html">Mathura-Vrindavan</a></li>
                    
                    
                  </ul>
              </li>
              <li class="dropdown active"> <a class="dropdown-toggle" href="#">
              MAHARASHTRA</a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="index-11.html">Mumbai</a></li>
                    <li><a class="dropdown-item" href="index-10.html">Pune</a></li>
                    <li><a class="dropdown-item" href="index-3.html">Nagpur</a></li>
                    <li><a class="dropdown-item" href="index-4.html">Shirdi</a></li>
                    <li><a class="dropdown-item" href="index-5.html">Lonavla</a></li>
                    <li><a class="dropdown-item" href="index-6.html">Thane</a></li>
                    <li><a class="dropdown-item" href="index-7.html">Ratnagiri</a></li>
                    <li><a class="dropdown-item" href="index-8.html">Panchgani</a></li>
                    <li><a class="dropdown-item" href="index-9.html">Mahabaleshwar</a></li>
                    
                    
                  </ul>
              </li>
              <li class="dropdown active"> <a class="dropdown-toggle" href="#">
                    SOUTH INDIA</a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="index-3.html">Bangalore</a></li>
                    <li><a class="dropdown-item" href="index-3.html">Hyderabad</a></li>
                    <li><a class="dropdown-item" href="index-4.html">Chennai</a></li>
                    <li><a class="dropdown-item" href="index-5.html">Visakhapatnam</a></li>
                    <li><a class="dropdown-item" href="index-6.html">Coimbatore</a></li>
                    <li><a class="dropdown-item" href="index-7.html">Vijayawada</a></li>
                    <li><a class="dropdown-item" href="index-8.html">Madurai</a></li>
                    <li><a class="dropdown-item" href="index-9.html">Thiruvananthapuram</a></li>
                    <li><a class="dropdown-item" href="index-10.html">Kochi</a></li>
                    <li><a class="dropdown-item" href="index-11.html">Guntur</a></li>
                  </ul>
              </li>
              <li class="dropdown active"> <a class="dropdown-toggle" href="#">
                    RELIGIOUS CITY</a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="index-3.html">Puri</a></li>
                    <li><a class="dropdown-item" href="index-4.html">Tirupati</a></li>
                    <li><a class="dropdown-item" href="index-5.html">Rameshwaram</a></li>
                    <li><a class="dropdown-item" href="index-6.html">Madurai</a></li>
                    <li><a class="dropdown-item" href="index-7.html">Bodhgaya</a></li>
                    <li><a class="dropdown-item" href="index-8.html">Ladakh</a></li>
                    <li><a class="dropdown-item" href="index-9.html">Amritsar</a></li>
                    <li><a class="dropdown-item" href="index-10.html">Pushkar</a></li>
                    <li><a class="dropdown-item" href="index-11.html">Ajmer</a></li>
                  </ul>
              </li>
              <li class="dropdown active"> <a class="dropdown-toggle" href="#">
                    HOT LOCATION</a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="index-3.html">Goa</a></li>
                    <li><a class="dropdown-item" href="index-4.html">Andaman</a></li>
                    <li><a class="dropdown-item" href="index-5.html">Daman</a></li>
                    <li><a class="dropdown-item" href="index-6.html">Kerala</a></li>
                    <li><a class="dropdown-item" href="index-7.html">Cochin</a></li>
                    <li><a class="dropdown-item" href="index-8.html">Sikkim</a></li>
                    <li><a class="dropdown-item" href="index-9.html">Guwahati</a></li>
                    <li><a class="dropdown-item" href="index-10.html">Kochi</a></li>
                    <li><a class="dropdown-item" href="index-11.html">Guntur</a></li>
                  </ul>
              </li>

              {/* <li class="dropdown active">
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
                        <a class="dropdown-item" href="booking-hotels.html">
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
                        <a class="dropdown-item" href="booking-hotels-2.html">
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
                <a class="dropdown-toggle" href="#">
                  Recharge & Bill Payment
                </a>
                <ul class="dropdown-menu dropdown-menu-sm">
                  <li>
                    <div class="row">
                      <div class="col-lg-6">
                        <ul class="dropdown-mega-submenu">
                          <li class="dropdown">
                            <a class="dropdown-item dropdown-toggle" href="#">
                              Mobile
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a class="dropdown-item" href="index.html">
                                  Layout 1
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="index-2.html">
                                  Layout 2
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a class="dropdown-item dropdown-toggle" href="#">
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
                            <a class="dropdown-item dropdown-toggle" href="#">
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
                            <a class="dropdown-item dropdown-toggle" href="#">
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
                            <a class="dropdown-item dropdown-toggle" href="#">
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
                            <a class="dropdown-item dropdown-toggle" href="#">
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
                            <a class="dropdown-item dropdown-toggle" href="#">
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
                            <a class="dropdown-item dropdown-toggle" href="#">
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
                            <a class="dropdown-item dropdown-toggle" href="#">
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
                            <a class="dropdown-item dropdown-toggle" href="#">
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
                            <a class="dropdown-item" href="recharge-order.html">
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
                            <a class="dropdown-item" href="recharge-plans.html">
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
              <li class="dropdown dropdown-mega">
                <a class="dropdown-toggle" href="#">
                  Booking
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <div class="row">
                      <div class="col-lg">
                        <span class="sub-title">Hotels</span>
                        <ul class="dropdown-mega-submenu">
                          <li>
                            <a class="dropdown-item" href="booking-hotels.html">
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
                        <span class="sub-title">Trains</span>
                        <ul class="dropdown-mega-submenu">
                          <li>
                            <a class="dropdown-item" href="booking-trains.html">
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
                        <span class="sub-title">Bus</span>
                        <ul class="dropdown-mega-submenu">
                          <li>
                            <a class="dropdown-item" href="booking-bus.html">
                              Home Layout 1
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="booking-bus-2.html">
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
                        <span class="sub-title">Cars</span>
                        <ul class="dropdown-mega-submenu">
                          <li>
                            <a class="dropdown-item" href="booking-cars.html">
                              Home Layout 1
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="booking-cars-2.html">
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
                    <a class="dropdown-item" href="feature-layout-boxed.html">
                      Layout Boxed
                    </a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
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
                        <a class="dropdown-item" href="forgot-password.html">
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
                        <a class="dropdown-item" href="profile-favourites.html">
                          Favourites
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="profile-cards.html">
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
                        <a class="dropdown-item" href="profile-password.html">
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
              </li> */}
            </ul>
          </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
