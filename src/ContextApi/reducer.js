export const initialState = {
  flight: null,
  hotel: null,
  hotelList: null,
  hotelDataSelected: null,
  hotelBookingDetails: null,
  user: false,
  userData: null,
};

const reducer = (state, action) => {
  console.log("type", action.item);
  switch (action.type) {
    case "ADD_TO_FLIGHT":
      console.log("Add");
      return {
        ...state,
        flight: action.item,
      };

    case "ADD_TO_HOTEL": {
      console.log("Add to hotel");
      return {
        ...state,
        hotel: action.item,
      };
    }

    case "ADD_TO_HOTEL_LIST": {
      console.log("add_to_hotel_list");
      return {
        ...state,
        hotelList: action.item,
      };
    }

    case "ADD_TO_HOTEL_DATA": {
      console.log("Add_to_hotel_data");
      return {
        ...state,
        hotelDataSelected: action.item,
      };
    }

    case "ADD_HOTEL_BOOKING_DETAILS": {
      console.log("Add_to_hotel_data", action.item);
      return {
        ...state,
        hotelBookingDetails: action.item,
      };
    }

    case "CLEAR_HOTEL_LIST": {
      console.log("clear from hotel list");
      return {
        ...state,
        hotelList: null,
      };
    }

    case "LOGIN": {
      console.log("Inside Login");
      return {
        ...state,
        user: true,
        userData: action.item,
      };
    }

    case "LOGOUT": {
      console.log("inside logout");
      return {
        ...state,
        user: false,
        userData: null,
      };
    }

    default:
      return {
        ...state,
        flight: null,
        hotel: null,
        hotelList: null,
        hotelDataSelected: null,
        hotelBookingDetails: null,
        user: false,
        userData: null,
      };
  }
};

export default reducer;
